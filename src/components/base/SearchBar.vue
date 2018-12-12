<template>
  <div class="search">
    <svg
      class="icon back"
      aria-hidden="true"
      @click="hideSearch"
      v-show="showSearch"
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
    return {
      query: ""
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["showSearch"])
  },
  methods: {
    ...mapMutations({
      setShowSearch: "SET_SHOW_SEARCH"
    }),
    hideSearch() {
      this.setShowSearch(false);
    },
    changeInput() {
      this.setShowSearch(true);
    },
    deleteQuery() {
      this.query = "";
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
.search {
  background: #fff;
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
