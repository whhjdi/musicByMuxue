<!--
 * @Author: your name
 * @Date: 2019-09-25 15:30:21
 * @LastEditTime: 2019-12-04 12:14:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /musicByMuxue/src/components/Rank/TopListDetail.vue
 -->
<template>
  <transition name="slide">
    <div class="top-list">
      <music-list :title="title" :songs="songs" :picUrl="picUrl"></music-list>
    </div>
  </transition>
</template>

<script>
import MusicList from "../base/MusicList";
import { createSong } from "@/utils/index.js";
export default {
  name: "TopList",
  components: { MusicList },
  props: {
    list: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      songs: []
    };
  },
  computed: {
    title() {
      return this.list.name;
    },
    picUrl() {
      return this.list.coverImgUrl;
    }
  },
  watch: {
    list(newVal) {
      let songs = newVal.tracks;
      this.songs = this.normalizeSongs(songs);
    }
  },
  created() {},
  mounted() {},
  methods: {
    normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        ret.push(createSong(item));
      });
      return ret;
    }
  }
};
</script>
<style lang="scss" scoped>
.top-list {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 999;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: scale(0);
}
</style>
