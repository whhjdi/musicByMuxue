<template>
  <div class="slide" ref="slide">
    <div class="slide-group" ref="slideGroup"><slot></slot></div>
    <div class="dot"></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "",
  components: {},
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    setSlideWidth() {
      let children = this.$refs.slideGroup.children;
      let width = 0;
      let slideWidth = this.$refs.slide.clientWidth;
      for (let i = 0; i < children.length; i++) {
        let child = children[i];
        child.style.width = slideWidth + "px";
        width += slideWidth;
      }
      if (this.loop) {
        width += 2 * slideWidth;
      }
      this.$refs.slideGroup.style.width = width + "px";
    },
    initSlide() {
      this.slideScroll = new BScroll(this.$refs.slide, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400,
        click: true
      });
    }
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.setSlideWidth();
      this.initSlide();
    }, 20);
  }
};
</script>
<style lang="scss" scoped>
.slide {
  min-height: 1px;
  overflow: hidden;
  .slide-group {
    display: flex;
    flex-wrap: nowrap;
    .slide-item {
      .slide-img {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>
