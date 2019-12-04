<template>
  <div class="user-list">
    <Scroll
      ref="list"
      :data="userList"
      :probe-type="probeType"
      :listenscroll="listenScroll"
      class="wrapper"
    >
      <div v-show="userList && userList.length > 0" class="list-wrapper">
        <div class="control-wrapper border-bottom">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-play-circle" />
          </svg>
          <span @click="playAll" class="desc">播放全部（共{{ userList.length }}首）</span>
          <div @click.stop="confirm" class="clear">{{ deleteText }}</div>
        </div>
        <ul ref="wrapper" class="song-list">
          <li
            v-for="(song, index) in userList"
            :key="song.id"
            @click="selectItem(song)"
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
      <h2 v-show="userList.length === 0" class="void">{{ tips }}</h2>
    </Scroll>
    <pop-menu
      ref="popMenu"
      @nextPlay="nextPlay"
      @playNow="nowPlay"
      @deleteOne="deleteOne"
      :showDelete="showDelete"
    ></pop-menu>
    <Confirm ref="confirm" @deleteAll="clear" text="确定要清空所有播放记录吗"></Confirm>
  </div>
</template>

<script>
import Scroll from '../base/Scroll';
import PopMenu from '../base/PopMenu';
import { mapGetters, mapActions } from 'vuex';
import Confirm from '../base/Confirm';
import { popMenuPlay, userListMixin } from '@/mixin.js';
export default {
  name: 'userList',
  components: { Scroll, PopMenu, Confirm },
  mixins: [popMenuPlay, userListMixin],
  props: {
    userList: {
      type: Array,
      default: () => []
    },
    showDelete: {
      type: Boolean,
      default: false
    },
    deleteText: {
      type: String,
      default: '清空收藏'
    },
    tips: {
      type: String,
      default: '哈哈哈，这里是空的呢'
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['playList'])
  },
  methods: {
    ...mapActions(['setTips']),
    confirm() {
      this.$refs.confirm.show();
    },
    clear() {
      this.$emit('clear');
      this.$refs.confirm.hide();
      this.setTips('已清空');
    },
    deleteOne(song) {
      this.$emit('deleteOne', song);
    }
  }
};
</script>
<style lang="scss" scoped>
.user-list {
  position: fixed;
  width: 100%;
  bottom: 52px;
  top: 140px;
  .void {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
  .wrapper {
    background: #fff;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 99;
    .list-wrapper {
      .control-wrapper {
        padding: 10px 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        .icon {
          width: 20px;
          height: 20px;
          padding: 0 16px;
        }
        .clear {
          position: absolute;
          right: 10px;
          color: #acacac;
          padding: 5px;
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
</style>
