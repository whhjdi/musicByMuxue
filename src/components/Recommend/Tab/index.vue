<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" :to="{ name: 'home' }"
      ><span
        @click="itemClicked"
        ref="recommend"
        :class="{ active: activeItem }"
        >推荐</span
      ></router-link
    >
    <router-link tag="div" class="tab-item" :to="{ name: 'rank' }"
      ><span @click="itemClicked">排行榜</span></router-link
    >
    <router-link tag="div" class="tab-item" :to="{ name: 'singer' }"
      ><span @click="itemClicked">歌手</span></router-link
    >
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
export default {
  name: "tab",
  components: {},
  props: {},
  data() {
    return {
      activeItem: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    itemClicked(e) {
      let el = e.target;
      let { width, left } = el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left}px`;
      this.activeItem = true;
    }
  },
  created() {},
  mounted() {
    this.$refs.line.style.borderBottomColor = "#fff";
    let { width, left } = this.$refs.recommend.getBoundingClientRect();
    this.$refs.line.style.width = `${width}px`;
    this.$refs.line.style.left = `${left}px`;
  }
};
</script>
<style lang="scss" scoped>
.tab {
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 16px;
  line-height: 40px;
  position: relative;
  .tab-item {
    flex: 1;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 200;
    span {
      padding: 5px;
    }
    &.router-link-active {
      color: #fff;
      font-weight: 500;
    }
  }
  .line {
    position: absolute;
    bottom: 2px;
    height: 2px;
    background: #fff;
    border-radius: 2px;
    transition: all 300ms;
  }
}
</style>
