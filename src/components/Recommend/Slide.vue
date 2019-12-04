<template>
  <div ref="slide" class="slide">
    <div ref="slideGroup" class="slide-group">
      <slot></slot>
    </div>
    <div class="dots">
      <span
        v-for="(dot, index) in dots"
        :key="index"
        :class="{ active: currentIndex === index }"
        class="dot"
      ></span>
    </div>
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
    return {
      dots: [],
      currentIndex: 0
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    setTimeout(() => {
      this.setSlideWidth();
      this.initDots();
      this.initSlide();
      if (this.autoPlay) {
        this.play();
      }
    }, 20);
    window.addEventListener("resize", () => {
      if (!this.slideScroll) {
        return;
      }
      this.setSlideWidth(true);
      this.slideScroll.refresh();
    });
  },
  methods: {
    initDots() {
      this.dots = new Array(this.children.length);
    },
    setSlideWidth(isResize) {
      this.children = this.$refs.slideGroup.children;
      let width = 0;
      let slideWidth = this.$refs.slide.clientWidth;
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        child.style.width = slideWidth + "px";
        width += slideWidth;
      }
      if (this.loop && !isResize) {
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
        bounce: true // 当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画。
      });
      this.onScrollEnd();
      this.onTouchEnd();
      this.onBeforeScrollStart();
    },
    onScrollEnd() {
      this.slideScroll.on("scrollEnd", () => {
        let pageIndex = this.slideScroll.getCurrentPage().pageX;
        this.currentIndex = pageIndex;
        if (this.autoPlay) {
          this.play();
        }
      });
    },
    onTouchEnd() {
      this.slideScroll.on("touchEnd", () => {
        if (this.autoPlay) {
          this.play();
        }
      });
    },
    onBeforeScrollStart() {
      this.slideScroll.on("beforeScrollStart", () => {
        if (this.autoPlay) {
          clearTimeout(this.timer);
        }
      });
    },
    play() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.slideScroll.next();
      }, this.interval);
    }
  }
};
</script>
<style lang="scss" scoped>
.slide {
  min-height: 1px;
  overflow: hidden;
  position: relative;
  .slide-group {
    display: flex;
    flex-wrap: nowrap;
    .slide-item {
      .slide-img {
        display: block;
        width: 90%;
        margin: 0 auto;
        border-radius: 5px;
      }
    }
  }
  .dots {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 12px;
    z-index: 9;
    text-align: center;
    font-size: 0;
    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #ddd;
      transition: all 0.3s;
      &.active {
        width: 20px;
        border-radius: 5px;
        background: #fff;
      }
    }
  }
}
</style>
