<template>
  <transition name="slide">
    <div class="rank">
      <rank-list :topList="topList" @selectTopList="chooseItem"></rank-list>
      <router-view
        :title="title"
        :songs="songs"
        :picUrl="picUrl"
        :id="id"
        @select="selectItem"
        @play="playAll"
        ref="musicList"
      ></router-view>
    </div>
  </transition>
</template>

<script>
import { createSong } from "@/utils";
import Rank from "@/api/rank.js";
import RankList from "@/components/Rank/RankList.vue";
import { mapActions } from "vuex";
export default {
  name: "rank",
  components: { RankList },
  props: {},
  data() {
    return {
      topList: [],
      songs: [],
      topDetailList: []
    };
  },
  watch: {},
  computed: {
    title() {
      return this.topDetailList.name;
    },
    picUrl() {
      return this.topDetailList.coverImgUrl;
    },
    id() {
      return this.topDetailList.id;
    }
  },
  methods: {
    ...mapActions(["selectPlay", "randomPlay"]),
    getTopList() {
      Rank.getTopList().then(res => {
        this.setTopList(res);
      });
    },
    setTopList(res) {
      this.topList = res.list;
    },
    chooseItem(item, index) {
      this.$router.push({
        path: `/rank/${item.id}`
      });
      this.getTopListDetail(index);
    },
    getTopListDetail(idx) {
      Rank.getTopListDetail(idx).then(res => {
        this.topDetailList = res.playlist;
        let songs = this.topDetailList.tracks;
        this.songs = this.normalizeSongs(songs);
      });
    },
    normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        ret.push(createSong(item));
      });
      return ret;
    },
    selectItem(song, index) {
      this.selectPlay({ list: this.songs, index });
    },
    playAll() {
      this.randomPlay({ list: this.songs });
    }
  },
  created() {
    this.getTopList();
    this.topDetailList = [];
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.rank {
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 52px;
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
