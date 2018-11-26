<template>
  <div class="header-bar">
    <div class="top">
      <div class="menu">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-menu"></use>
        </svg>
      </div>
      <h1 class="title">沐雪MUSIC</h1>
      <div class="search">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </div>
    </div>
    <tab></tab>
  </div>
</template>

<script>
import Tab from "../Tab";
export default {
  name: "HeaderBar",
  components: { Tab },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.header-bar {
  width: 100%;
  color: #fff;
  font-size: 22px;
  padding: 5px 0 10px 0;
  background: linear-gradient(135deg, #d93e35 0%, #e3453a 50%, #e94a3e 100%);
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .menu {
      padding: 10px;
      width: 24px;
      height: 24px;
      .icon {
        width: 22px;
        height: 22px;
        font-size: 22px;
      }
    }
    .title {
      text-align: center;
      font-size: 18px;
      flex: 1;
    }
    .search {
      width: 24px;
      height: 24px;
      padding: 10px;
      text-align: right;
      .icon {
        font-size: 22px;
      }
    }
  }
}
</style>
