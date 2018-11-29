<template>
  <div class="singer-detail">
    <music-list :title="title" :songs="songs" :picUrl="picUrl"></music-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Artist from "@/api/artist.js";
import { createSong } from "@/utils/index.js";
import MusicList from "../base/MusicList";
export default {
  name: "SingerDetail",
  components: { MusicList },
  props: {},
  data() {
    return {
      songs: []
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["singer"]),
    title() {
      return this.singer.name;
    },
    picUrl() {
      return this.singer.avatar;
    }
  },
  methods: {
    getDeatil(id) {
      Artist.singerDetail(id).then(res => {
        this.setSingerDetail(res);
      });
    },
    setSingerDetail(res) {
      let songs = res.hotSongs;
      this.songs = this.normalizeSongs(songs);
    },
    normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        ret.push(createSong(item));
      });
      return ret;
    }
  },
  created() {},
  mounted() {
    if (!this.singer.id) {
      this.$router.push("/artist");
      return;
    }
    this.getDeatil(this.singer.id);
  }
};
</script>
<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
