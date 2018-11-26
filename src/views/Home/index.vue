<template>
  <div class="home" ref="home">
    <div class="wrapper">
      <div class="slides" v-if="this.banners && this.banners.length">
        <slide :autoPlay="true" :interval="3000" :loop="true">
          <div
            v-for="banner in banners"
            :key="banner.targetId"
            class="slide-item"
          >
            <img :src="banner.imageUrl" alt="" class="slide-img" />
          </div>
        </slide>
      </div>
      <div class="slide-bg"></div>
      <div class="recommend-list">
        <h1 class="title">推荐歌单</h1>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Slide from "../../components/Slide";
import Recommend from "../../api/recommend.js";
export default {
  name: "home",
  components: {
    Slide
  },
  props: {},
  data() {
    return {
      banners: null
    };
  },
  watch: {},
  computed: {},
  methods: {
    getBanner() {
      Recommend.banner().then(res => {
        this.setBanner(res);
      });
    },
    setBanner(res) {
      this.$NProgress.done();
      this.banners = res.banners.splice(5);
    }
  },
  beforeRouteEnter(to, from, next) {
    if (from.name) {
      fetch("banner", {
        params: {
          xhrFields: { withCredentials: true }
        }
      }).then(res => {
        next(vm => vm.setBanner(res));
      });
    } else {
      next(vm => vm.getBanner());
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  .wrapper {
    .slide-bg {
      width: 100%;
      height: 200px;
      background: linear-gradient(
        to right,
        #dd4137 0%,
        #e4463a 50%,
        #e8483c 100%
      );
      position: fixed;
      top: 0;
      z-index: -1;
    }
  }
}
</style>
