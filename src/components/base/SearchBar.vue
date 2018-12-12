<template>
  <div class="search-bar">
    <svg
      class="icon back"
      aria-hidden="true"
      @click.stop="hideSearch"
      v-show="!showFooter"
    >
      <use xlink:href="#icon-left"></use>
    </svg>
    <input
      type="text"
      class="input"
      @focus="changeInput"
      v-model="query"
      ref="input"
      :placeholder="placeholder"
    />
    <svg class="icon souso" aria-hidden="true" v-if="!query">
      <use xlink:href="#icon-sousuo"></use>
    </svg>
    <svg class="icon souso" aria-hidden="true" v-else @click="deleteQuery">
      <use xlink:href="#icon-close"></use>
    </svg>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "",
  components: {},
  props: {
    placeholder: {
      type: String,
      default: "搜歌手，搜歌曲"
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapGetters(["showFooter", "query"])
  },
  methods: {
    ...mapMutations({
      setShowSearch: "SET_SHOW_SEARCH",
      setQuery: "SET_QUERY",
      setShowFooter: "SET_SHOW_FOOTER"
    }),
    hideSearch() {
      this.$router.go(-1);
      this.setShowFooter(true);
    },
    changeInput() {
      this.setShowFooter(false);
      this.$router.push({
        path: "/search"
      });
    },
    deleteQuery() {
      this.setQuery("");
    }
  },

  created() {
    this.$watch("query", newQuery => {
      this.$emit("query", newQuery);
    });
  },
  mounted() {
    if (this.showSearch) {
      this.$refs.input.focus();
    }
  }
};
</script>
<style lang="scss" scoped>
.search-bar {
  display: flex;
  padding: 5px;
  color: #191516;
  .back {
    height: 30px;
    width: 20px;
    position: absolute;
    left: 10px;
    top: 5px;
  }
  .input {
    width: 100%;
    height: 30px;
    background: #e7e7e7;
    border: none;
    border-radius: 6px;
    padding-left: 30px;
    padding-right: 30px;
    outline: none;
  }
  .souso {
    height: 30px;
    width: 20px;
    position: absolute;
    right: 10px;
    top: 5px;
  }
}
</style>
