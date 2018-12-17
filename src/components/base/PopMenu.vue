<template>
  <transition name="slide">
    <div class="pop-menu" v-show="isShow" @click="hide" @click.stop>
      <div class="list-wrapper" @click.stop>
        <Scroll class="list-content" ref="listContent" :data="scrollData">
          <div class="item-wrapper">
            <div class="header  item border-bottom" @click="play">
              歌曲：{{ song.name }}
            </div>
            <div class="next-play item border-bottom" @click="playNext">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-play-circle"></use></svg
              >下一首播放
            </div>
            <div class="like item border-bottom" @click="toggleFavorite(song);">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="getFavoriteIcon(song)"></use></svg
              >喜欢
            </div>
            <div class="singer item border-bottom">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-user"></use></svg
              >歌手：{{ song.singer }}
            </div>
            <div class="singer item border-bottom">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-album"></use></svg
              >专辑：{{ song.album }}
            </div>
            <div
              class="delete item border-bottom"
              @click="deleteOne(song);"
              v-show="showDelete"
            >
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-close"></use></svg
              >删除
            </div>
          </div>
        </Scroll>
      </div>
    </div>
  </transition>
</template>

<script>
import Scroll from "../base/Scroll";
import { favoriteSong } from "@/mixin.js";
export default {
  name: "popMenu",
  components: { Scroll },
  mixins: [favoriteSong],
  props: {
    showDelete: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false,
      song: []
    };
  },
  watch: {},
  computed: {
    scrollData() {
      let arr = [this.song];
      return arr;
    }
  },
  methods: {
    show(song) {
      this.isShow = true;
      this.song = song;
    },
    hide() {
      this.isShow = false;
    },
    playNext() {
      this.$emit("nextPlay", this.song);
    },
    play() {
      this.$emit("playNow", this.song);
    },
    deleteOne(song) {
      this.hide();
      this.$emit("deleteOne", song);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.pop-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99999;
  box-sizing: border-box;
  &.slide-enter-active,
  &.slide-leave-active {
    transition: all 0.3s;
    .list-wrapper {
      transition: all 0.3s;
    }
  }
  &.slide-enter,
  &.slide-leave-to {
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
    .list-content {
      width: 100%;
      height: calc(100% - 40px);
      overflow: hidden;
      .item-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .item {
          height: 52px;
          line-height: 52px;
          font-size: 18px;
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          .icon {
            width: 20px;
            height: 20px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
