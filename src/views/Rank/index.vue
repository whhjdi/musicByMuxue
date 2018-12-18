<template>
  <transition name="slide">
    <div class="rank">
      <search-bar></search-bar>
      <div class="rank-list-wrapper">
        <rank-list
          :topList="topList"
          @selectTopList="chooseItem"
          ref="rankList"
        ></rank-list>
      </div>
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
const RANK_LIST = [
  "云音乐新歌榜",
  "云音乐热歌榜",
  "网易原创歌曲榜",
  "云音乐飙升榜",
  "云音乐电音榜",
  "UK排行榜周榜",
  "美国Billboard周榜",
  "KTV嗨榜",
  "iTunes榜",
  "Hit FM Top榜",
  "日本Oricon周榜",
  "韩国Melon排行榜周榜",
  "韩国Mnet排行榜周榜",
  "韩国Melon原声周榜",
  "中国TOP排行榜(港台榜)",
  "中国TOP排行榜(内地榜)",
  "香港电台中文歌曲龙虎榜",
  "华语金曲榜",
  "中国嘻哈榜",
  "法国 NRJ EuroHot 30周榜",
  "台湾Hito排行榜",
  "Beatport全球电子舞曲榜",
  "云音乐ACG音乐榜",
  "云音乐嘻哈榜"
];
import { createSong } from "@/utils";
import Rank from "@/api/rank.js";
import RankList from "@/components/Rank/RankList.vue";
import { mapActions } from "vuex";
import SearchBar from "@/components/base/SearchNav.vue";
export default {
  name: "rank",
  components: { RankList, SearchBar },
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
      let topList = res.list;
      let newList = [];
      topList.forEach(item1 => {
        RANK_LIST.forEach(item2 => {
          if (item1.name === item2) {
            newList.push(item1);
          }
        });
      });
      this.topList = newList;
    },
    chooseItem(item) {
      let curIndex = 0;
      for (let i = 0; i < RANK_LIST.length; i++) {
        if (item.name === RANK_LIST[i]) {
          curIndex = i;
        }
      }
      this.getTopListDetail(curIndex);
      this.$router.push({
        path: `/rank/${item.id}`
      });
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
  activated() {
    this.$refs.rankList.$children[0].refresh();
  },
  created() {
    this.getTopList();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.rank {
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 0;
  z-index: 99;
  overflow: hidden;
  background: #fff;
  .rank-list-wrapper {
    position: absolute;
    top: 40px;
    bottom: 52px;
  }
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
