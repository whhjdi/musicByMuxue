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
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        },
        snapSpeed: 400,
        bounce: false,
        stopPropagation: true,
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
      padding: 0 5px;
      .slide-img {
        display: block;
        width: 100%;
        border-radius: 5px;
      }
    }
  }
}
</style>
