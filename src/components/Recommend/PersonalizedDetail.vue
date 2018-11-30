<template>
  <transition name="slide">
    <div class="personalized-detail">
      <music-list :title="title" :songs="songs" :picUrl="picUrl"></music-list>
    </div>
  </transition>
</template>

<script>
import MusicList from "../base/MusicList";
import { createSong } from "@/utils/index.js";
import Recommend from "@/api/recommend.js";
export default {
  name: "personalized-detail",
  components: { MusicList },
  props: {},
  data() {
    return {
      songs: []
    };
  },
  watch: {
    topDetailList(newVal) {
      let songs = newVal.tracks;
      this.songs = this.normalizeSongs(songs);
    }
  },
  computed: {
    title() {
      return this.topDetailList.name;
    },
    picUrl() {
      return this.topDetailList.coverImgUrl;
    }
  },
  methods: {
    normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        console.log(item);
      });
      return ret;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.personalized-detail {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 999;
  background: #000;
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
