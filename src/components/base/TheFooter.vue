<template>
  <transition name="normal">
    <div v-show="showFooter && !fullScreen" class="footer">
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
            <use :xlink:href="nav.link === $route.name ? nav.iconon : nav.icon" />
          </svg>
          <span>{{ nav.name }}</span>
        </router-link>
      </div>
      <div @click="showPlayer" class="circle">
        <img
          :src="currentSong.picUrl ? currentSong.picUrl : require('@/assets/default.png')"
          :class="setClass"
          alt
          class="circle-bg"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

const navigation = [
  {
    name: '我的',
    icon: '#icon-wode',
    iconon: '#icon-wodefill',
    link: 'user'
  },
  {
    name: '推荐',
    icon: '#icon-home',
    iconon: '#icon-homefill',
    link: 'home'
  },
  {
    name: '',
    icon: '',
    iconon: '',
    link: ''
  },
  {
    name: '排行',
    icon: '#icon-fanli',
    iconon: '#icon-fanlifill',
    link: 'rank'
  },
  {
    name: '歌手',
    icon: '#icon-artist',
    iconon: '#icon-artistfill',
    link: 'artist'
  }
];
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      navigation
    };
  },

  computed: {
    ...mapGetters(['currentSong', 'showFooter', 'fullScreen', 'playing']),
    setClass() {
      return this.playing ? 'play' : '';
    }
  },
  methods: {
    ...mapMutations({
      setFullScreen: 'SET_FULL_SCREEN',
      setShowFooter: 'SET_SHOW_FOOTER'
    }),
    showPlayer() {
      if (!this.currentSong.id) {
        return;
      }
      this.setFullScreen(true);
      this.setShowFooter(false);
    }
  }
};
</script>
<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 52px;
  z-index: 9;
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
        color: #ff3f72;
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
    box-sizing: border-box;
    padding: 4px;
    background: #fff;
    box-shadow: 0 -2px 2px 0 rgba(128, 128, 128, 0.1);
    .circle-bg {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      &.play {
        animation: rotate 20s linear infinite;
      }
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
.normal-enter-active {
  transition: all 0.3s;
}
.normal-enter {
  transform: translateY(100%);
}
</style>
