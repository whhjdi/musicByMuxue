<template>
  <div class="history">
    <h3 class="title">搜索历史</h3>
    <p class="delete" @click.stop="deleteAll">清空历史</p>
    <ul class="list">
      <li
        class="item border-bottom"
        v-for="item in searchHistory"
        :key="item"
        @click="selectItem(item);"
      >
        <span class="text">{{ item }}</span>
        <svg
          class="icon"
          aria-hidden="true"
          @click.stop="deleteHistoryItem(item);"
        >
          <use xlink:href="#icon-close"></use>
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapGetters(["searchHistory"])
  },
  methods: {
    deleteHistoryItem(item) {
      this.$emit("deleteOne", item);
    },
    selectItem(item) {
      this.$emit("selectItem", item);
    },
    deleteAll() {
      this.$emit("deleteAll");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.history {
  padding: 10px 0;
  position: relative;
  .title {
    font-size: 16px;
    margin: 5px 0 5px 10px;
  }
  .delete {
    position: absolute;
    top: 12px;
    right: 10px;
    padding: 5px;
    font-size: 10px;
  }
  .list {
    padding-left: 5px;
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 5px;
      padding: 5px;
      .icon {
        padding: 10px 5px;
      }
    }
  }
}
</style>
