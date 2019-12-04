<template>
  <transition name="slide-left">
    <div ref="musicList" class="music-list">
      <header ref="header">
        <svg @click="goBack" class="icon i-back" aria-hidden="true">
          <use xlink:href="#icon-arrowleft" />
        </svg>
        <h1 class="title">{{ headerTitle }}</h1>
      </header>
      <Scroll
        ref="list"
        :data="songs"
        @scroll="scroll"
        :probe-type="probeType"
        :listenscroll="listenScroll"
        class="wrapper"
      >
        <div class="list-wrapper">
          <div ref="bg" :style="bgStyle" class="bg">
            <div class="filter"></div>
            <h1 class="title">{{ title }}</h1>
          </div>
          <div v-show="!showComment" class="song-list-wrapper">
            <svg @click.stop="toggleComment" class="icon i-comment" aria-hidden="true">
              <use xlink:href="#icon-comment" />
            </svg>
            <div class="control-wrapper border-bottom">
              <svg class="icon i-play" aria-hidden="true">
                <use xlink:href="#icon-play-circle" />
              </svg>
              <span @click="playAll" class="desc">播放全部（共{{ songs.length }}首）</span>
            </div>
            <ul ref="wrapper" class="song-list">
              <li
                v-for="(song, index) in songs"
                :key="song.id"
                @click="selectItem(song, index)"
                class="song border-bottom"
              >
                <div class="number">{{ index + 1 }}</div>
                <div class="right">
                  <div class="name">{{ song.name }}</div>
                  <div class="singer">
                    {{ song.singer }}
                    <span class="album">-{{ song.album }}</span>
                  </div>
                </div>
                <svg @click.stop="showPopOver(song)" class="icon i-switch" aria-hidden="true">
                  <use xlink:href="#icon-switch" />
                </svg>
              </li>
            </ul>
          </div>
          <transition name="comment-show">
            <div v-show="showComment" class="comment">
              <svg @click.stop="toggleComment" class="icon i-song" aria-hidden="true">
                <use xlink:href="#icon-close" />
              </svg>
              <h3
                v-show="hotComments && hotComments.length > 0"
                class="hot-title"
              >热门评论({{ hotComments.length }})</h3>
              <ul v-show="hotComments && hotComments.length > 0" class="hot-list">
                <li v-for="(comment, index) in hotComments" :key="index" class="hot">
                  <img v-lazy="comment.user.avatarUrl" alt class="pic" />
                  <div class="right border-bottom">
                    <div class="nickname">{{ comment.user.nickname }}</div>
                    <p class="content">{{ comment.content }}</p>
                  </div>
                  <div class="likedCount">
                    <span class="like">{{ comment.likedCount }}</span>
                    <svg class="icon i-like" aria-hidden="true">
                      <use xlink:href="#icon-like1" />
                    </svg>
                  </div>
                </li>
              </ul>
              <h3
                v-show="comments && comments.length > 0"
                class="new-title"
              >最新评论({{ comments.length }})</h3>
              <ul v-show="comments && comments.length > 0" class="hot-list">
                <li v-for="(comment, index) in comments" :key="index" class="hot">
                  <img v-lazy="comment.user.avatarUrl" alt class="pic" />
                  <div class="right border-bottom">
                    <div class="nickname">{{ comment.user.nickname }}</div>
                    <p class="content">{{ comment.content }}</p>
                  </div>
                  <div class="likedCount">
                    <span class="like">{{ comment.likedCount }}</span>
                    <svg class="icon i-like" aria-hidden="true">
                      <use xlink:href="#icon-like1" />
                    </svg>
                  </div>
                </li>
              </ul>
              <div v-show="comments.length === 0 && hotComments.length === 0" class="void">暂时还没有评论</div>
            </div>
          </transition>
        </div>
      </Scroll>
      <pop-menu ref="popMenu" @nextPlay="nextPlay"></pop-menu>
    </div>
  </transition>
</template>

<script>
import Scroll from '../base/Scroll';
import { playListMixin } from '@/mixin.js';
import PopMenu from './PopMenu';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Recommend from '@/api/recommend.js';
export default {
  name: 'MusicList',
  components: { Scroll, PopMenu },
  mixins: [playListMixin],
  props: {
    songs: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: '歌单'
    },
    picUrl: {
      type: String
    },
    id: {
      type: Number
    }
  },
  data() {
    return {
      scrollY: 0,
      headerTitle: '',
      showComment: false,
      comments: [],
      hotComments: []
    };
  },
  computed: {
    ...mapGetters(['currentIndex']),
    bgStyle() {
      return `background-image:url(${this.picUrl})`;
    }
  },

  watch: {
    scrollY(newY) {
      const percent = Math.abs(newY / this.imageHeight);
      if (newY < this.minTranslateHeight) {
        this.headerTitle = this.title;
      } else {
        this.headerTitle = '歌单';
      }
      if (newY < 0) {
        this.$refs.header.style.background = `rgba(0,0,0, ${percent})`;
      } else {
        this.$refs.header.style.background = `rgba(0,0,0,0)`;
      }
    }
  },
  created() {
    this.probeType = 3;
    this.listenScroll = true;
  },
  mounted() {
    this.$nextTick(() => {
      this.imageHeight = this.$refs.bg.clientHeight;
      this.minTranslateHeight = -this.imageHeight + 44;
    });
  },
  methods: {
    ...mapMutations({
      setLoading: 'SET_LOADING'
    }),
    ...mapActions(['insertSongNext', 'insertSong', 'randomPlay', 'selectPlay']),
    goBack() {
      this.$router.go(-1);
    },
    scroll(pos) {
      this.scrollY = pos.y;
    },
    selectItem(song, index) {
      this.$emit('select', song, index);
    },
    playAll() {
      this.randomPlay({ list: this.songs });
    },
    refresh() {
      this.$refs.list.refresh();
    },
    showPopOver(song) {
      this.$refs.popMenu.show(song);
    },
    nextPlay(song) {
      if (this.currentIndex === -1) {
        this.insertSong(song);
        return;
      }
      this.insertSongNext(song);
    },
    toggleComment() {
      if (!this.showComment) {
        Recommend.getComment(this.id).then((res) => {
          this.comments = res.comments;
          this.hotComments = res.hotComments;
        });
      }
      this.showComment = !this.showComment;
    }
  },

  beforeRouteEnter(to, from, next) {
    if (!from.name) {
      next((vm) => {
        if (!vm.id) {
          vm.$router.go(-1);
        }
      });
    } else {
      next();
    }
  }
};
</script>
<style lang="scss" scoped>
.music-list {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow: hidden;
  background: #fff;
  &.slide-left-enter-active,
  &.slide-left-leave-active {
    transition: all 0.5s;
  }
  &.slide-left-enter,
  &.slide-left-leave-to {
    transform: translateX(100%);
  }
  header {
    background: rgba(0, 0, 0, 0);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    z-index: 999;
    .i-back {
      width: 24px;
      height: 24px;
      color: #fff;
      margin-right: 20px;
    }
    .title {
      color: #fff;
      font-size: 16px;
    }
  }
  .wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    .list-wrapper {
      .bg {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 75%;
        background-size: cover;
        .filter {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
          opacity: 0.2;
        }
        .title {
          position: absolute;
          left: 20px;
          bottom: 20px;
          color: #fff;
        }
      }
      .song-list-wrapper {
        position: relative;
        .i-comment {
          position: absolute;
          right: 10px;
          top: 0;
          width: 20px;
          height: 20px;
          padding: 10px;
          z-index: 999;
        }
        .control-wrapper {
          padding: 10px 0;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .i-play {
            width: 20px;
            height: 20px;
            padding: 0 16px;
          }
        }
        .song-list {
          .song {
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .number {
              width: 46px;
              padding: 10px 5px;
              text-align: center;
            }
            .right {
              flex: 1 0 70%;
              width: 70%;
              padding-right: 20px;
              .name {
                margin-bottom: 6px;
                font-size: 12px;
              }
              .singer {
                color: darkgray;
                font-size: 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
            .i-switch {
              width: 24px;
              height: 24px;
              padding: 5px;
              margin-right: 5px;
            }
          }
        }
      }
      .comment {
        &.comment-show-enter-active,
        &.comment-show-leave-active {
          transition: all 0.3s;
        }
        &.comment-show-enter,
        &.comment-show-leave-to {
          transform: translateX(100%);
        }
        position: relative;
        .i-song {
          position: absolute;
          right: 10px;
          top: 0;
          width: 20px;
          height: 20px;
          padding: 10px;
          z-index: 999;
        }
        .hot-title {
          padding: 10px 20px;
        }
        .hot-list {
          .hot {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 10px;
            .pic {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              padding: 10px 5px;
              margin-right: 5px;
            }
            .right {
              flex: 1;
              padding: 10px 5px;
              .nickname {
                margin-bottom: 10px;
                color: rgb(107, 107, 107);
                font-size: 10px;
              }
              .content {
                color: #5a5a5a;
                font-size: 12px;
              }
            }
            .likedCount {
              .like {
                display: inline-block;
                vertical-align: top;
                margin-right: 2px;
              }
              .i-like {
                display: inline-block;
                vertical-align: top;
              }
            }
          }
        }
        .new-title {
          padding: 10px 20px;
        }
        .new-list {
          .hot {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 10px;
            .pic {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              padding: 10px 5px;
              margin-right: 5px;
            }
            .right {
              flex: 1;
              padding: 10px 5px;
              .nickname {
                margin-bottom: 10px;
                color: rgb(107, 107, 107);
                font-size: 10px;
              }
              .content {
                color: #5a5a5a;
                font-size: 12px;
              }
            }
            .likedCount {
              .like {
                display: inline-block;
                vertical-align: top;
                margin-right: 2px;
              }
              .i-like {
                display: inline-block;
                vertical-align: top;
              }
            }
          }
        }
        .void {
          font-size: 18px;
          position: absolute;
          top: 100px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
}
</style>
