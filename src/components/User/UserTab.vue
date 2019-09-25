<template>
  <ul class="tab">
    <li
      v-for="(item, index) in list"
      :key="item.text"
      class="item"
      :class="{ active: currentIndex === index }"
      @click="selectItem(index);"
    >
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="item.icon" />
      </svg>
      <div class="text">{{ item.text }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    list: {
      type: Array,
      default: () => []
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    selectItem(index) {
      this.$emit("select", index);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.tab {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 5px;
  .item {
    padding: 10px;
    flex: 1;
    text-align: center;
    margin-right: 5px;
    &:last-child {
      margin-right: 0;
    }
    &.active {
      color: #ff5582;
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
    }
    .text {
      font-size: 14px;
    }
    .icon {
      margin-bottom: 5px;
      width: 24px;
      height: 24px;
    }
  }
}
</style>
