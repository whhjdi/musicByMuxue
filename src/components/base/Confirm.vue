<template>
  <transition name="show">
    <div v-show="showConfirm" @click.stop class="confirm">
      <div class="confirm-wrapper">
        <div class="confirm-content">
          <p class="text">{{ text }}</p>
          <div class="operate">
            <div @click="cancel" class="operate-btn left">
              {{ cancelBtnText }}
            </div>
            <div @click="confirm" class="operate-btn">{{ confirmBtnText }}</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    text: {
      type: String,
      default: ""
    },
    confirmBtnText: {
      type: String,
      default: "确定"
    },
    cancelBtnText: {
      type: String,
      default: "取消"
    }
  },
  data() {
    return {
      showConfirm: false
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    show() {
      this.showConfirm = true;
    },
    hide() {
      this.showConfirm = false;
    },
    cancel() {
      this.hide();
    },
    confirm() {
      this.$emit("deleteAll");
      this.hide();
    }
  }
};
</script>
<style lang="scss" scoped>
.confirm {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  &.show-enter-active {
    animation: confirm-fadein 0.3s;
    .confirm-content {
      animation: confirm-zoom 0.3s;
    }
  }
  .confirm-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    .confirm-content {
      width: 270px;
      border-radius: 5px;
      background: #fff;
      .text {
        padding: 12px 15px;
        line-height: 22px;
        text-align: center;
        font-size: 12px;
        color: #191516;
      }
      .operate {
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 12px;
        .operate-btn {
          flex: 1;
          line-height: 22px;
          padding: 12px 0;
          border-top: 1px solid #ddd;
          color: #2d323b;
          &.left {
            border-right: 1px solid #ddd;
          }
        }
      }
    }
  }
}
@keyframes confirm-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes confirm-zoom {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
