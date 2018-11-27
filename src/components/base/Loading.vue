<template>
  <div class="loading">
    <div class="mask">
      <div class="icon-wrapper">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-reload"></use>
        </svg>
      </div>
    </div>
    <p class="desc">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    text: {
      type: String,
      default: "正在加载"
    }
  },
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
.loading {
  text-align: center;
  transition: all 300ms ease;
  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.2);
    .icon-wrapper {
      position: absolute;
      top: 40%;
      left: 50%;
      margin-left: -17px;
      width: 34px;
      animation: circle 1s infinite;
      .icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        padding: 5px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        color: #e8483c;
      }
    }
  }
}
@keyframes circle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
