<template>
  <div id="app">
    <transition :name="transitionName" @after-leave="afterLeave">
      <keep-alive> <router-view></router-view> </keep-alive>
    </transition>
    <Player></Player>
    <the-footer></the-footer>
    <Tips ref="tips">
      <span class="text">{{ tipText }}</span>
    </Tips>
  </div>
</template>
<script>
import Player from "./components/Player";
import TheFooter from "./components/base/TheFooter";
import { mapGetters, mapMutations } from "vuex";
import Tips from "./components/base/Tips";
export default {
  components: {
    Player,
    TheFooter,
    Tips
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["transitionName", "tipText"])
  },
  watch: {
    $route(to, from) {
      // 页面刷新时不需要过渡
      if (!from.name || !to.meta.index || !from.meta.index) {
        this.setTransitionName("");
        return;
      }
      if (to.meta.index && from.meta.index) {
        let transitionName =
          to.meta.index < from.meta.index ? "page-right" : "page-left";
        this.setTransitionName(transitionName);
      }
    }
  },
  methods: {
    ...mapMutations({
      setTransitionName: "SET_TRANSITION_NAME"
    }),
    afterLeave() {
      this.setTransitionName("page-left");
    }
  }
};
</script>

<style lang="scss">
#nprogress {
  .bar {
    background: #fff !important;
  }
}
/* 动画 */
.page-left-enter-active,
.page-left-leave-active {
  transition: all 0.5s;
}
.page-left-enter {
  transform: translateX(100%);
}
.page-left-enter-to,
.page-left-leave {
  transform: translateX(0);
}
.page-left-leave-to {
  transform: translateX(-100%);
}
.page-right-enter-active,
.page-right-leave-active {
  transition: all 0.5s;
}
.page-right-enter {
  transform: translateX(-100%);
}
.page-right-enter-to,
.page-right-leave {
  transform: translateX(0);
}
.page-right-leave-to {
  transform: translateX(100%);
}
</style>
