<template>
  <div class="home" ref="home">
    <Scroll :data="somePersonalized" ref="scrolls" @pullingDown="onPullingDown">
      <div class="recommend">
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
          <div class="slide-bg"></div>
        </div>
        <Personalized :list="somePersonalized"></Personalized>
        <new-song :list="someNewSong"></new-song>
        <Dj :list="someDj"></Dj>
      </div>
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
export default {
  name: "home",
  components: {
    Slide,
    Scroll,
    Personalized,
    NewSong,
    Dj
  },
  props: {},
  data() {
    return {
      banners: [],
      personalized: [],
      newSong: [],
      dj: []
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
      this.$NProgress.done();
      this.banners = res.banners.splice(5);
    },
    getPersonalized() {
      Recommend.personalized().then(res => {
        this.setPersonalized(res);
      });
    },
    setPersonalized(res) {
      this.personalized = res.result;
    },
    getNewSong() {
      Recommend.newSong().then(res => {
        this.setNewSong(res);
      });
    },
    setNewSong(res) {
      this.newSong = res.result;
    },
    getDj() {
      Recommend.dj().then(res => {
        this.setDj(res);
      });
    },
    setDj(res) {
      this.dj = res.result;
    },
    setAllRecommend(res) {
      let [banner, personalized, newSong, dj] = res;
      this.setBanner(banner);
      this.setPersonalized(personalized);
      this.setNewSong(newSong);
      this.setDj(dj);
    }
  },
  beforeRouteEnter(to, from, next) {
    if (from.name) {
      getAllRecommend().then(res => {
        next(vm => {
          vm.setAllRecommend(res);
        });
      });
    } else {
      next(vm => {
        getAllRecommend().then(res => {
          vm.setAllRecommend(res);
        });
      });
    }
  }
  // created() {
  //   this.getPersonalized();
  //   this.getBanner();
  //   this.getNewSong();
  // }
};
</script>
<style lang="scss" scoped>
.home {
  position: fixed;
  top: 98px;
  width: 100%;
  bottom: 0;
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

  .dj-list {
    padding: 20px 5px;
    .title {
      display: inline-block;
      margin-bottom: 5px;
      font-size: 16px;
      color: #000;
      padding: 10px 5px;
      .icon {
        display: inline-block;
        color: #666666;
        margin-left: 0.2em;
      }
    }
    .list-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .list {
        width: 32%;
        margin-bottom: 20px;
        .pic {
          border-radius: 4px;
          width: 100%;
          margin-bottom: 5px;
        }
        .name {
          font-size: 12px;
        }
      }
    }
  }
  .pullDown {
    position: absolute;
    width: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all;
    z-index: 99;
  }
}
</style>
