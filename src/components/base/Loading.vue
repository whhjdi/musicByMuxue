<template>
  <div class="loading" v-show="loading">
    <div class="mask">
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
      </div>
    </div>
    <p class="desc">{{ text }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["loading"])
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.loading {
  text-align: center;
  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.2);
    z-index: 99;
  }

  .spinner {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 200px auto;
    width: 50px;
    height: 60px;
    text-align: center;
    font-size: 10px;

    div {
      background-color: #ff5481;
      height: 100%;
      width: 6px;
      display: inline-block;
      -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
      animation: stretchdelay 1.2s infinite ease-in-out;
    }

    .rect2 {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }

    .rect3 {
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
    }

    .rect4 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }

    .rect5 {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }
  }
}
@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
