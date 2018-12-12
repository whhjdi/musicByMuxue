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
    <Suggest v-show="query"></Suggest>
    <router-view></router-view>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";
import Search from "@/api/search.js";
import Suggest from "./Suggest";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Search",
  components: { SearchBar, Suggest },
  props: {},
  data() {
    return {
      hots: []
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["query"])
  },
  methods: {
    ...mapMutations({
      setQuery: "SET_QUERY"
    }),
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
