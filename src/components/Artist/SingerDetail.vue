<template>
  <transition name="slide"> <div class="singer-detail">1</div> </transition>
</template>

<script>
import { mapGetters } from "vuex";
import Artist from "@/api/artist.js";
import { createSong } from "@/utils/index.js";
export default {
  name: "SingerDetail",
  components: {},
  props: {},
  data() {
    return {
      songs: []
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["singer"])
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
      console.log(ret);

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
.singer-detail {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
