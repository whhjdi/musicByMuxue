<template>
  <div class="progress-bar" ref="progressBar" @click="progressClick">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div
        class="progress-btn-wrapper"
        ref="btn"
        @touchstart.prevent="progressTouchStart"
        @touchmove.prevent="progressTouchmove"
        @touchend.prevent="progressTouchend"
      >
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  watch: {
    percent(newVal) {
      if (newVal > 0 && !this.touch.inited) {
        const barWidth = this.$refs.progressBar.clientWidth - 16;
        let offsetWidth = newVal * barWidth;
        this.offset(offsetWidth);
      }
    }
  },
  computed: {},
  methods: {
    progressTouchStart(e) {
      this.touch.inited = true;
      this.touch.startX = e.touches[0].pageX;
      this.touch.left = this.$refs.progress.clientWidth;
    },
    progressTouchmove(e) {
      if (!this.touch.inited) {
        return;
      }
      this.triggerPercent();
      const barWidth = this.$refs.progressBar.clientWidth - 16;
      const deltaX = e.touches[0].pageX - this.touch.startX;
      const offsetWidth = Math.min(
        barWidth,
        Math.max(0, this.touch.left + deltaX)
      );
      this.offset(offsetWidth);
    },
    progressTouchend() {
      this.touch.inited = false;
      const barWidth = this.$refs.progressBar.clientWidth - 16;
      const percent = this.$refs.progress.clientWidth / barWidth;
      this.$emit("percentChangeEnd", percent);
    },
    triggerPercent() {
      const barWidth = this.$refs.progressBar.clientWidth - 16;
      const percent = this.$refs.progress.clientWidth / barWidth;
      this.$emit("percentChange", percent);
    },
    offset(offsetWidth) {
      this.$refs.progress.style.width = `${offsetWidth}px`;
      this.$refs.btn.style.transform = `translateX(${offsetWidth}px)`;
    },
    progressClick(e) {
      let { left } = this.$refs.progressBar.getBoundingClientRect();
      let offsetWidth = e.pageX - left;
      this.offset(offsetWidth);
      const barWidth = this.$refs.progressBar.clientWidth - 16;
      const percent = this.$refs.progress.clientWidth / barWidth;
      this.$emit("percentChangeEnd", percent);
    }
  },
  created() {
    this.touch = {};
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.progress-bar {
  height: 30px;
  .bar-inner {
    position: relative;
    top: 13px;
    height: 4px;
    background: rgb(190, 190, 190);
    border-radius: 4px;
    .progress {
      border-radius: 4px;
      position: absolute;
      height: 100%;
      background: #41423c;
    }
    .progress-btn-wrapper {
      position: absolute;
      left: -8px;
      top: -13px;
      width: 30px;
      height: 30px;
      .progress-btn {
        position: relative;
        top: 7px;
        left: 7px;
        box-sizing: border-box;
        border: 6px solid #41423c;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #41423c;
      }
    }
  }
}
</style>
