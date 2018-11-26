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
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    disable() {
      this.scroll && this.scroll.disable();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
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
<style lang="scss" scoped>
.scroll {
  overflow: hidden;
  height: 100%;
  width: 100%;
}
</style>
