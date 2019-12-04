<template>
  <div ref="home" class="home">
    <nav>
      <h2 class="title">沐雪music</h2>
      <search-bar></search-bar>
    </nav>
    <home-skeleton v-show="showSkeleton"></home-skeleton>
    <div v-show="!loading" class="scroll-wrapper">
      <Scroll ref="scrolls" :data="recommendSongs" class="scroll">
        <div class="recommend">
          <div v-if="this.banners && this.banners.length" class="slides">
            <slide :autoPlay="true" :interval="3000" :loop="true">
              <div
                v-for="banner in banners"
                :key="banner.imageUrl"
                class="slide-item"
              >
                <img :src="banner.imageUrl" alt class="slide-img" />
              </div>
            </slide>
          </div>
          <div class="recommendSongs">
            <recommend-list
              :list="recommendSongs"
              @setDiscList="handleDisc"
            ></recommend-list>
          </div>
          <div class="newSongs">
            <recommend-list
              :list="newDiscs"
              @setDiscList="handleDisc"
              title="最新歌单"
            ></recommend-list>
          </div>
        </div>
      </Scroll>
    </div>
    <router-view
      ref="musicList"
      :title="title"
      :picUrl="picUrl"
      :songs="songs"
      :id="discId"
      @select="selectItem"
      @play="playAll"
    ></router-view>
  </div>
</template>

<script>
import Slide from "@/components/Recommend/Slide.vue";
import Recommend from "@/api/recommend.js";
import Scroll from "@/components/base/Scroll.vue";
import RecommendList from "@/components/Recommend/RecommendList.vue";
import { mapGetters, mapMutations } from "vuex";
import SearchBar from "@/components/base/SearchNav.vue";
import { songsListPlayMixin } from "@/mixin.js";
import HomeSkeleton from "@/components/Skeletons/HomeSkeleton.vue";

export default {
  name: "home",
  components: {
    Slide,
    Scroll,
    RecommendList,
    SearchBar,
    HomeSkeleton
  },
  mixins: [songsListPlayMixin],
  props: {},
  data() {
    return {
      banners: [],
      recommendSongs: [],
      newDiscs: [],
      songs: [],
      list: [],
      showSkeleton: false
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["isLogin", "loading"]),
    title() {
      return this.list.name;
    },
    picUrl() {
      return this.list.coverImgUrl;
    },
    discId() {
      return this.list.id;
    },
    allData() {
      return this.banners.concat(this.newDiscs, this.recommendSongs);
    }
  },
  methods: {
    ...mapMutations({
      setLoading: "SET_LOADING"
    }),
    handleDisc(item) {
      item.id &&
        this.$router.push({
          path: `/home/${item["id"]}`
        });
      this.setLoading(true);
      Recommend.getDisc(item.id).then(res => {
        this.setLoading(false);
        this.setList(res);
      });
    },
    getAllRecommend() {
      let p1 = Recommend.getBanner();
      let p2;
      if (this.isLogin) {
        p2 = Recommend.getResource();
      } else {
        p2 = Recommend.getRecommendSongs();
      }
      let p3 = Recommend.getNewDisc();
      return Promise.all([p1, p2, p3]);
    },
    setAllRecommend(res) {
      let [banners, recommendSongs, newDisc] = res;
      this.setBanner(banners);
      this.setRecommendSongs(recommendSongs);
      this.setNewDisc(newDisc);
    },
    setBanner(res) {
      this.banners = res.banners;
    },
    setRecommendSongs(res) {
      if (this.isLogin) {
        this.recommendSongs = res.recommend;
      } else {
        this.recommendSongs = res.result;
      }
    },
    setNewDisc(res) {
      this.newDiscs = res.playlists;
    }
  },
  activated() {
    this.$refs.scrolls.refresh();
  },
  created() {
    this.setLoading(true);
    this.showSkeleton = true;
    this.getAllRecommend().then(res => {
      this.setLoading(false);
      this.showSkeleton = false;
      this.setAllRecommend(res);
    });
  }
};
</script>
<style lang="scss" scoped>
.home {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  background: #fff;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    .title {
      flex: 1;
      text-align: center;
    }
  }
  .scroll-wrapper {
    position: absolute;
    top: 60px;
    bottom: 52px;
    width: 100%;
    .scroll {
      width: 100%;
      height: 100%;
      overflow: hidden;
      .recommend {
        .slides {
          margin-bottom: 10px;
          position: relative;
        }
      }
    }
  }
}
</style>
