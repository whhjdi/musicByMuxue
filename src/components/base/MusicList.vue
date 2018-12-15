<template>
  <transition name="fade">
    <div class="music-list" ref="musicList">
      <header ref="header">
        <svg class="icon" aria-hidden="true" @click="goBack">
          <use xlink:href="#icon-arrowleft"></use>
        </svg>
        <h1 class="title">{{ headerTitle }}</h1>
      </header>
      <Scroll
        :data="songs"
        @scroll="scroll"
        :probe-type="probeType"
        :listenscroll="listenScroll"
        class="wrapper"
        ref="list"
      >
        <div class="list-wrapper">
          <div class="bg" :style="bgStyle" ref="bg">
            <div class="filter"></div>
            <h1 class="title">{{ title }}</h1>
          </div>
          <div class="song-list-wrapper">
            <div class="control-wrapper border-bottom">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-play-circle"></use>
              </svg>
              <span class="desc" @click="playAll"
                >播放全部（共{{ this.songs.length }}首）</span
              >
            </div>
            <ul class="song-list" ref="wrapper">
              <li
                v-for="(song, index) in songs"
                :key="song.id"
                class="song border-bottom"
                @click="selectItem(song, index);"
              >
                <div class="number">{{ index + 1 }}</div>
                <div class="right">
                  <div class="name">{{ song.name }}</div>
                  <div class="singer">
                    {{ song.singer }}
                    <span class="album">-{{ song.album }}</span>
                  </div>
                </div>
                <svg
                  class="icon i-switch"
                  aria-hidden="true"
                  @click.stop="showPopOver(song);"
                >
                  <use xlink:href="#icon-switch"></use>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </Scroll>
      <pop-menu ref="popMenu"></pop-menu>
    </div>
  </transition>
</template>

<script>
import Scroll from "../base/Scroll";
import { playListMixin } from "@/mixin.js";
import PopMenu from "./PopMenu";
export default {
  name: "MusicList",
  components: { Scroll, PopMenu },
  mixins: [playListMixin],
  props: {
    songs: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: "歌单"
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
      headerTitle: ""
    };
  },
  watch: {
    scrollY(newY) {
      const percent = Math.abs(newY / this.imageHeight);
      if (newY < this.minTranslateHeight) {
        this.headerTitle = this.title;
      } else {
        this.headerTitle = "歌单";
      }
      if (newY < 0) {
        this.$refs.header.style.background = `rgba(0,0,0, ${percent})`;
      } else {
        this.$refs.header.style.background = `rgba(0,0,0,0)`;
      }
    }
  },
  computed: {
    bgStyle() {
      return `background-image:url(${this.picUrl})`;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    scroll(pos) {
      this.scrollY = pos.y;
    },
    selectItem(song, index) {
      this.$emit("select", song, index);
    },
    playAll() {
      this.$emit("play");
    },
    handlePlayList(playList) {
      const bottom = playList.length > 0 ? "54px" : "";
      this.$refs.list.$el.style.bottom = bottom;
      this.$refs.list.refresh();
    },
    refresh() {
      this.$refs.list.refresh();
    },
    showPopOver(song) {
      this.$refs.popMenu.show(song);
    }
  },
  created() {
    this.probeType = 3;
    this.listenScroll = true;
  },
  mounted() {
    if (!this.id) {
      this.$router.go(-1);
      return;
    }
    this.$refs.list.$el.style.top;
    this.imageHeight = this.$refs.bg.clientHeight;
    this.minTranslateHeight = -this.imageHeight + 44;
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
    .icon {
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
        .control-wrapper {
          padding: 10px 0;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .icon {
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
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  transform: translateX(100%);
}
</style>
