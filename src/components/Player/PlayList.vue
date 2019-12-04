<template>
  <transition name="fade">
    <div v-show="isShow" @click="hide" class="playList">
      <div @click.stop class="list-wrapper">
        <div class="header border-bottom">
          <h2 class="title">
            <span @click="changeMode" class="text">
              <svg class="icon i-mode" aria-hidden="true">
                <use :xlink:href="iconMode" />
              </svg>
              {{ modeText }}
            </span>
            <span @click="showConfirm" class="clear">清空列表</span>
          </h2>
        </div>
        <Scroll ref="listContent" :data="sequenceList" class="list-content">
          <transition-group tag="ul" name="list">
            <li
              ref="item"
              v-for="(item, index) in sequenceList"
              :key="item.id"
              :class="isPlaying(item)"
              @click="selectItem(item, index)"
              class="list-item"
            >
              <div class="text">
                <span class="name">{{ item.name }}</span>
                <span class="singer">- {{ item.singer }}</span>
              </div>
              <svg @click.stop="deleteItem(item)" class="icon" aria-hidden="true">
                <use xlink:href="#icon-close" />
              </svg>
            </li>
          </transition-group>
        </Scroll>
      </div>
      <Confirm ref="confirm" @deleteAll="confirmClear" text="是否清空播放列表"></Confirm>
    </div>
  </transition>
</template>

<script>
import Scroll from '../base/Scroll';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { playMode } from '@/utils';
import Confirm from '../base/Confirm';
export default {
  name: '',
  components: { Scroll, Confirm },
  props: {},
  data() {
    return {
      isShow: false
    };
  },

  computed: {
    ...mapGetters(['sequenceList', 'mode', 'currentSong', 'playList']),
    iconMode() {
      return this.mode === playMode.sequence
        ? '#icon-retweet'
        : this.mode === playMode.loop
        ? '#icon-danquxunhuan'
        : '#icon-suijibofang';
    },
    modeText() {
      return this.mode === playMode.sequence
        ? '顺序播放'
        : this.mode === playMode.loop
        ? '单曲循环'
        : '随机播放';
    }
  },
  watch: {
    currentSong(newSong, oldSong) {
      if (!this.isShow || newSong.id === oldSong.id) {
        return;
      }
      this.scrollToCurSong(newSong);
    }
  },
  methods: {
    ...mapActions(['deleteSong', 'clearSong', 'setTips']),
    ...mapMutations({
      setCurrentIndex: 'SET_CURRENT_INDEX',
      setShowFooter: 'SET_SHOW_FOOTER',
      setFullScreen: 'SET_FULL_SCREEN'
    }),
    show() {
      this.isShow = true;
      setTimeout(() => {
        this.$refs.listContent.refresh();
        this.scrollToCurSong(this.currentSong);
      });
    },
    hide() {
      this.isShow = false;
    },
    changeMode() {
      this.$emit('modeChange');
    },
    isPlaying(item) {
      return this.currentSong.id === item.id ? 'on' : '';
    },
    selectItem(item, pIndex) {
      let index = pIndex;
      if (this.mode === playMode.random) {
        index = this.playList.findIndex((song) => {
          return song.id === item.id;
        });
      }
      this.setCurrentIndex(index);
    },
    scrollToCurSong(current) {
      const index = this.sequenceList.findIndex((song) => {
        return current.id === song.id;
      });
      this.$refs.listContent.scrollToElement(this.$refs.item[index], 300);
    },
    deleteItem(item) {
      this.deleteSong(item);
      if (!this.playList.length) {
        this.hide();
      }
    },
    showConfirm() {
      this.$refs.confirm.show();
    },
    confirmClear() {
      this.clearSong();
      this.hide();
      this.setTips('已经清空播放列表啦');
      this.setFullScreen(false);
      if (this.$route.name && this.$route.name !== 'search') {
        this.setShowFooter(true);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.playList {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  box-sizing: border-box;
  &.fade-enter-active,
  &.fade-leave-active {
    transition: all 0.3s;
    .list-wrapper {
      transition: all 0.3s;
    }
  }
  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
    .list-wrapper {
      transform: translateY(100%);
    }
  }
  .list-wrapper {
    position: absolute;
    bottom: 0;
    top: 40%;
    left: 0;
    right: 0;
    background: #fff;
    padding: 10px 20px;
    .header {
      height: 50px;
      line-height: 40px;
      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        .text {
          .i-mode {
            margin-right: 2px;
          }
        }
        .clear {
          font-size: 12px;
          color: #aaa9a9;
        }
      }
    }
    .list-content {
      width: 100%;
      height: calc(100% - 40px);
      overflow: hidden;
      .list-item {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &.list-enter-active,
        &.list-leave-active {
          transition: all 0.3s linear;
        }
        &.list-enter,
        &.list-leave-to {
          transform: translateX(100%);
        }
        &.on {
          color: #ff3f72;
          .text {
            .singer {
              color: #ff3f72;
            }
          }
        }
        .text {
          .singer {
            color: #aaa9a9;
            font-size: 10px;
          }
        }
        .icon {
          padding: 5px;
        }
      }
    }
  }
}
</style>
