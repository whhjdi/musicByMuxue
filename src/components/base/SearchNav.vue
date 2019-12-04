<template>
  <div class="search-bar">
    <input
      @click="clickInput"
      :placeholder="placeholder"
      type="text"
      class="input"
      readonly
    />
    <svg class="icon souso" aria-hidden="true">
      <use xlink:href="#icon-sousuo" />
    </svg>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    clickInput() {
      this.$router.push({
        path: "/search"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.search-bar {
  display: flex;
  padding: 5px;
  color: #191516;
  margin: 10px;
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
    right: 30px;
    top: 15px;
  }
}
</style>
