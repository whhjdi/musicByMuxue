<template>
  <div class="search">
    <search-bar ref="searchbar"></search-bar>
    <Scroll :data="shortCut" class="shortcut" ref="list">
      <div>
        <h3 class="title">热门搜索</h3>
        <div class="hots border-bottom" v-show="!query">
          <div
            class="hot"
            v-for="hot in hots"
            :key="hot.first"
            @click="setQuery(hot.first)"
          >
            {{ hot.first }}
          </div>
        </div>
        <History
          @selectItem="setQuery"
          @deleteOne="deleteSearchHistory"
          @deleteAll="showConfirm"
          v-show="!query && searchHistory && searchHistory.length > 0"
        ></History>
      </div>
    </Scroll>
    <Suggest
      v-show="query"
      @handleAlbum="getAlbum"
      @handleSinger="getSinger"
      @handleSong="setSong"
    ></Suggest>
    <transition name="slide-left">
      <router-view
        :title="title"
        :songs="songsList"
        :picUrl="picUrl"
        :id="id"
        ref="musicList"
        @select="selectItem"
      ></router-view>
    </transition>
    <Confirm
      ref="confirm"
      @deleteAll="deleteAllSearchHistory"
      :text="'确定要清空所有搜索历史吗'"
    ></Confirm>
  </div>
</template>

<script>
import SearchBar from "@/components/Search/SearchBar.vue";
import Search from "@/api/search.js";
import Suggest from "@/components/Search/Suggest.vue";
import History from "@/components/Search/History.vue";
import Artist from "@/api/artist.js";
import { createSong } from "@/utils";
import { mapGetters, mapMutations, mapActions } from "vuex";
import Confirm from "@/components/base/Confirm.vue";
import Scroll from "@/components/base/Scroll.vue";
import { playListMixin } from "@/mixin.js";
export default {
  name: "Search",
  components: { SearchBar, Suggest, History, Confirm, Scroll },
  mixins: [playListMixin],
  props: {},
  data() {
    return {
      hots: [],
      songsList: [],
      list: {}
    };
  },
  watch: {
    query(newVal) {
      if (!newVal) {
        setTimeout(() => {
          this.$refs.list.refresh();
        }, 20);
      }
    }
  },
  computed: {
    ...mapGetters(["query", "searchHistory"]),
    title() {
      return this.list.name;
    },
    picUrl() {
      return this.list.picUrl;
    },
    id() {
      return this.list.id;
    },
    shortCut() {
      return this.hots.concat(this.searchHistory);
    }
  },
  methods: {
    ...mapMutations({
      setQuery: "SET_QUERY"
    }),
    ...mapActions([
      "randomPlay",
      "insertSong",
      "insertSongNext",
      "saveSearchHistory",
      "deleteSearchHistory",
      "deleteAllSearchHistory"
    ]),
    showConfirm() {
      this.$refs.confirm.show();
    },
    getAlbumDetail(id) {
      Search.getAlbumDetail(id).then(res => {
        let songs = res.songs;
        this.setDetail(songs, id);
      });
    },
    getDeatil(id) {
      Artist.getSingerDetail(id).then(res => {
        let songs = res.hotSongs;
        this.setDetail(songs, id);
      });
    },
    setDetail(songs, id) {
      this.songsList = this.normalizeSongs(songs);
      id &&
        this.$router.push({
          path: `/search/${id}`
        });
    },
    normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        ret.push(createSong(item));
      });
      return ret;
    },
    getAlbum(album) {
      this.saveSearchHistory(this.query);
      this.list = album;
      let id = album.id;
      this.getAlbumDetail(id);
    },
    getSinger(singer) {
      this.saveSearchHistory(this.query);
      this.list = singer;
      let id = singer.id;
      this.getDeatil(id);
    },
    setSong(song) {
      this.saveSearchHistory(this.query);
      this.insertSong(song);
    },
    selectItem(song) {
      this.insertSong(song);
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
  .shortcut {
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    .title {
      font-size: 16px;
      margin: 15px 0 5px 10px;
    }
    .hots {
      display: flex;
      flex-wrap: wrap;
      padding-left: 5px;
      padding-bottom: 10px;
      .hot {
        padding: 5px;
        margin: 5px;
        border-radius: 4px;
        background: #e4e4e4;
      }
    }
  }
}
</style>
