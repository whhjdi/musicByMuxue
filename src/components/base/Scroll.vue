<template>
  <div class="scroll" ref="wrapper"><slot></slot></div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "",
  components: {},
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    },
    listenscroll: {
      type: Boolean,
      default: false
    },
    pullup: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh();
      }, 20);
    }
  },
  computed: {},
  methods: {
    initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: this.click,
        probeType: this.probeType
      });

      if (this.listenscroll) {
        let _this = this;
        this.scroll.on("scroll", pos => {
          _this.$emit("scroll", pos);
        });
      }
      if (this.pullup) {
        let _this = this;
        this.scroll.on("scrollEnd", () => {
          if (_this.scroll.y <= _this.scroll.maxScrollY + 50) {
            this.$emit("scrollToEnd");
          }
        });
      }
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    disable() {
      this.scroll && this.scroll.disable();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.initScroll();
    }, 20);
  }
};
</script>
<style lang="scss" scoped></style>
