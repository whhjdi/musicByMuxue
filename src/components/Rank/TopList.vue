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
import { mapGetters } from "vuex";
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
  watch: {
    topDetailList(newVal) {
      let songs = newVal.tracks;
      this.songs = this.normalizeSongs(songs);
    }
  },
  computed: {
    ...mapGetters(["topDetailList"]),
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
        ret.push(createSong(item));
      });
      return ret;
    }
  },
  created() {},
  mounted() {}
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
