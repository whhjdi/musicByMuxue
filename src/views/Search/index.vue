<template>
  <div class="search">
    <search-bar ref="searchbar"></search-bar>
    <h2 class="title">热门搜索</h2>
    <div class="hots" v-show="!query">
      <div
        class="hot"
        v-for="hot in hots"
        :key="hot.first"
        @click="addQuery(hot.first);"
      >
        {{ hot.first }}
      </div>
    </div>
    <Suggest
      v-show="query"
      @handleSinger="getSinger"
      @handleSong="setSong"
    ></Suggest>
    <router-view
      :title="title"
      :songs="songsList"
      :picUrl="picUrl"
      :id="id"
      @select="selectItem"
      @play="playAll"
      ref="musicList"
    ></router-view>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import Search from "@/api/search.js";
import Suggest from "./Suggest";
import Artist from "@/api/artist.js";
import { createSong } from "@/utils";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Search",
  components: { SearchBar, Suggest },
  props: {},
  data() {
    return {
      hots: [],
      songsList: [],
      singer: {}
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["query"]),
    title() {
      return this.singer.singer;
    },
    picUrl() {
      return this.singer.picUrl;
    },
    id() {
      return this.singer.id;
    }
  },
  methods: {
    ...mapMutations({
      setQuery: "SET_QUERY",
      setSinger: "SET_SINGER"
    }),
    ...mapActions(["selectPlay", "randomPlay", "insertSong"]),
    selectItem(song, index) {
      this.selectPlay({ list: this.songsList, index });
    },
    playAll() {
      this.randomPlay({ list: this.songs });
    },
    getDeatil(id) {
      Artist.getSingerDetail(id).then(res => {
        this.setSingerDetail(res);
      });
    },
    setSingerDetail(res) {
      let songs = res.hotSongs;
      this.songsList = this.normalizeSongs(songs);
    },
    normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        ret.push(createSong(item));
      });
      return ret;
    },
    getSinger(singer) {
      this.singer = singer;
      let id = singer.id;
      this.getDeatil(id);
      this.$router.push({
        path: `/search/${id}`
      });
    },
    setSong(song) {
      // let songs = [song];
      // this.selectPlay({ list: songs, index: 0 });
      this.insertSong(song);
    },
    addQuery(key) {
      this.setQuery(key);
    }
  },
  created() {
    Search.getHotSearch().then(res => {
      this.hots = res.result.hots;
    });
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.search {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #fff;
  .title {
    font-size: 16px;
    margin: 5px 0 5px 10px;
  }
  .hots {
    display: flex;
    flex-wrap: wrap;
    padding-left: 5px;
    .hot {
      padding: 5px;
      margin: 5px;
      border-radius: 4px;
      background: #e4e4e4;
    }
  }
}
</style>
