<template>
  <div class="home" ref="home">
    <Scroll :data="somePersonalized" ref="scrolls" class="scroll-wrapper">
      <div class="recommend">
        <div class="slides" v-if="this.banners && this.banners.length">
          <slide :autoPlay="true" :interval="3000" :loop="true">
            <div
              v-for="banner in banners"
              :key="banner.imageUrl"
              class="slide-item"
            >
              <img :src="banner.imageUrl" alt="" class="slide-img" />
            </div>
          </slide>
          <div class="slide-bg"></div>
        </div>
        <Personalized :list="somePersonalized"></Personalized>
        <new-song :list="someNewSong"></new-song>
        <Dj :list="someDj"></Dj>
      </div>
      <Loading v-show="loadingShow"></Loading>
    </Scroll>
  </div>
</template>

<script>
import Slide from "../../components/Recommend/Slide";
import { getAllRecommend } from "../../utils";
import Recommend from "../../api/recommend.js";
import Scroll from "../../components/base/Scroll";
import Personalized from "../../components/Recommend/Personalized";
import NewSong from "../../components/Recommend/NewSong";
import Dj from "../../components/Recommend/Dj";
import Loading from "../../components/base/Loading";
export default {
  name: "home",
  components: {
    Slide,
    Scroll,
    Personalized,
    NewSong,
    Dj,
    Loading
  },
  props: {},
  data() {
    return {
      banners: [],
      personalized: [],
      newSong: [],
      dj: [],
      loadingShow: true
    };
  },
  watch: {},
  computed: {
    somePersonalized() {
      return this.personalized.slice(0, 6);
    },
    someNewSong() {
      return this.newSong.slice(0, 6);
    },
    someDj() {
      return this.dj.slice(0, 6);
    }
  },
  methods: {
    getBanner() {
      Recommend.banner().then(res => {
        this.setBanner(res);
      });
    },
    setBanner(res) {
      this.banners = res.banners.splice(5);
    },
    setPersonalized(res) {
      this.personalized = res.result;
    },
    setNewSong(res) {
      this.newSong = res.result;
    },
    setDj(res) {
      this.dj = res.result;
    },
    setAllRecommend(res) {
      let [personalized, newSong, dj] = res;
      this.setPersonalized(personalized);
      this.setNewSong(newSong);
      this.setDj(dj);
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getBanner();
      getAllRecommend().then(res => {
        vm.setAllRecommend(res);
        vm.loadingShow = false;
        vm.$NProgress.done();
      });
    });
  },

  beforeRouteLeave(to, from, next) {
    next(vm => {
      vm.loadingShow = true;
    });
  },
  created() {},
  destroyed() {
    this.$NProgress.remove();
  }
};
</script>
<style lang="scss" scoped>
.home {
  position: fixed;
  top: 98px;
  width: 100%;
  bottom: 0;
  .scroll-wrapper {
    .recommend {
      .slides {
        margin-bottom: 20px;
        position: relative;
        .slide-bg {
          width: 100%;
          height: 300px;
          background: linear-gradient(
            to right,
            #dd4137 0%,
            #e4463a 50%,
            #e8483c 100%
          );
          position: absolute;
          bottom: 40px;
          z-index: -1;
        }
      }
    }
  }
}
</style>
