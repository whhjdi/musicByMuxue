<template>
<transition name="normal">
  <div class="footer" v-show="showFooter">
    <div class="footer-wrapper">
      <router-link
        :to="nav.link"
        v-for="nav in navigation"
        :key="nav.icon"
        active-class="on"
        tag="div"
        class="nav"
      >
        <svg class="icon" aria-hidden="true">
          <use
            :xlink:href="nav.link == $route.name ? nav.iconon : nav.icon"
          ></use></svg
        ><span>{{ nav.name }}</span></router-link
      >
    </div>
    <div class="circle" @click="showPlayer" :class="setClass">
      <img :src="picBg" alt="" class="circle-bg" />
    </div>
  </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
const navigation = [
  {
    name: "我的",
    icon: "#icon-wode",
    iconon: "#icon-wodefill",
    link: "user"
  },
  {
    name: "推荐",
    icon: "#icon-home",
    iconon: "#icon-homefill",
    link: "home"
  },
  {
    name: "",
    icon: "",
    iconon: "",
    link: ""
  },
  {
    name: "排行",
    icon: "#icon-fanli",
    iconon: "#icon-fanlifill",
    link: "rank"
  },
  {
    name: "歌手",
    icon: "#icon-artist",
    iconon: "#icon-artistfill",
    link: "artist"
  }
];
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      navigation
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["currentSong", "showFooter", "fullScreen", "playing"]),
    picBg() {
      return this.currentSong.picUrl
        ? this.currentSong.picUrl
        : "https://ws1.sinaimg.cn/large/006tNbRwly1fy1lzl0xf9j31040pjb2a.jpg";
    },
    setClass() {
      return this.playing ? "play" : "";
    }
  },
  methods: {
    ...mapMutations({
      setFullScreen: "SET_FULL_SCREEN",
      setShowFooter: "SET_SHOW_FOOTER"
    }),
    showPlayer() {
      if (!this.currentSong.picUrl) {
        return 
      }
      this.setFullScreen(true);
      this.setShowFooter(false);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 52px;
  z-index: 1;
  background: #fff;
  opacity: 0.9;
  box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  .footer-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    color: #000;
    .nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1 1 auto;
      &.on {
        color: #FF3F72;
      }
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
  .circle {
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -30px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    &.play {
      animation: rotate 20s linear infinite;
    }
    .circle-bg {
      width: 100%;
      height: 100%;
      opacity: 1;
      border-radius: 50%;
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.normal-enter-active,
.normal-leave-active {
  transition: all 0.3s;
}
.normal-enter,
.normal-leave-to {
  transform: translateY(100%);
}
</style>
