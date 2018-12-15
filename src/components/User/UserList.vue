<template>
  <div class="user-list">
    <Scroll
      :data="userList"
      :probe-type="probeType"
      :listenscroll="listenScroll"
      class="wrapper"
      ref="list"
      v-show="userList"
    >
      <div class="list-wrapper">
        <div class="control-wrapper border-bottom">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-play-circle"></use>
          </svg>
          <span class="desc" @click="playAll"
            >播放全部（共{{ userList.length }}首）</span
          >
          <div class="clear" @click.stop="confirm">清空历史</div>
        </div>
        <ul class="song-list" ref="wrapper">
          <li
            v-for="(song, index) in userList"
            :key="song.id"
            class="song border-bottom"
            @click="selectItem(song);"
          >
            <div class="number">{{ index + 1 }}</div>
            <div class="right">
              <div class="name">{{ song.name }}</div>
              <div class="singer">
                {{ song.singer }} <span class="album">-{{ song.album }}</span>
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
    </Scroll>
    <div class="void" v-show="!userList">什么都没有呢</div>
    <pop-menu
      ref="popMenu"
      @nextPlay="nextPlay"
      @playNow="nowPlay"
      @deleteOne="deleteOne"
      :showDelete="true"
    ></pop-menu>
    <Confirm
      text="确定要清空所有播放记录吗"
      @deleteAll="clear"
      ref="confirm"
    ></Confirm>
  </div>
</template>

<script>
import Scroll from "../base/Scroll";
import PopMenu from "../base/PopMenu";
import { mapActions, mapGetters } from "vuex";
import Confirm from "../base/Confirm";
import { popMenuPlay } from "@/mixin.js";
export default {
  name: "userList",
  components: { Scroll, PopMenu, Confirm },
  mixins: [popMenuPlay],
  props: {
    userList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapGetters(["playList"])
  },
  methods: {
    ...mapActions(["randomPlay"]),
    selectItem(song) {
      this.insertSong(song);
    },
    playAll() {
      this.randomPlay({ list: this.userList });
    },
    refresh() {
      this.$refs.list.refresh();
    },
    confirm() {
      this.$refs.confirm.show();
    },
    clear() {
      this.$emit("clear");
      this.$refs.confirm.hide();
    },
    deleteOne(song) {
      this.$emit("deleteOne", song);
    }
  },
  created() {
    this.probeType = 3;
    this.listenScroll = true;
  },
  mounted() {
    this.refresh();
  }
};
</script>
<style lang="scss" scoped>
.user-list {
  position: fixed;
  width: 100%;
  bottom: 52px;
  top: 120px;
  .void {
    font-size: 18px;
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
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    transform: translateX(100%);
  }
}
</style>
