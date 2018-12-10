<template>
  <transition name="slide">
    <div class="singer-detail" ref="singerDetail">
      <music-list
        :title="title"
        :songs="songs"
        :picUrl="picUrl"
        @select="selectItem"
        @play="playAll"
        ref="musicList"
      ></music-list>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Artist from "@/api/artist.js";
import { createSong } from "@/utils/index.js";
import MusicList from "../base/MusicList";
import { playListMixin } from "@/mixin.js";
export default {
  name: "SingerDetail",
  components: { MusicList },
  mixins: [playListMixin],
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
    ...mapActions(["selectPlay", "randomPlay"]),
    selectItem(song, index) {
      this.selectPlay({ list: this.songs, index });
    },
    playAll() {
      this.randomPlay({ list: this.songs });
    },
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
    },
    handlePlayList(playList) {
      console.log(1);
      const bottom = playList.length > 0 ? "60px" : "";
      console.log(this.$refs.singerDetail.style.bottom);
      this.$refs.singerDetail.style.bottom = bottom;
      this.$refs.musicList.refresh();
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
  bottom: 0;
  width: 100%;
  z-index: 99;
  overflow: hidden;
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
