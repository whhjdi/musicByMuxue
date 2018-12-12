<template>
  <div class="search">
    <svg class="icon back" aria-hidden="true" @click="hideSearch">
      <use xlink:href="#icon-left"></use></svg
    ><input type="text" class="input" @focus="changeInput" />
    <svg class="icon souso" aria-hidden="true">
      <use xlink:href="#icon-sousuo"></use>
    </svg>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    ...mapMutations({
      setShowSearch: "SET_SHOW_SEARCH"
    }),
    hideSearch() {
      this.setShowSearch(false);
    },
    changeInput() {
      this.setShowSearch(true);
    }
  },

  created() {},
  mounted() {}
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
