<template>
  <div class="home" ref="home">
    <Scroll :data="recommendSongs" ref="scrolls" class="scroll-wrapper">
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
        </div>
        <div class="recommendSongs">
          <recommend-list :list="recommendSongs"></recommend-list>
        </div>
        <div class="newSongs">
          <recommend-list :list="newSongs" title="新歌速递"></recommend-list>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Slide from "@/components/Recommend/Slide.vue";
import Recommend from "@/api/recommend.js";
import Scroll from "@/components/base/Scroll.vue";
import RecommendList from "@/components/Recommend/RecommendList.vue";
export default {
  name: "home",
  components: {
    Slide,
    Scroll,
    RecommendList
  },
  props: {},
  data() {
    return {
      banners: [],
      recommendSongs: [],
      newSongs: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    getAllRecommend() {
      let p1 = Recommend.getBanner();
      let p2 = Recommend.getRecommendSongs();
      let p3 = Recommend.getNewSong();
      return Promise.all([p1, p2, p3]);
    },
    setAllRecommend(res) {
      let [banners, recommendSongs, newSongs] = res;
      this.setBanner(banners);
      this.setRecommendSongs(recommendSongs);
      this.setNewSongs(newSongs);
    },
    setBanner(res) {
      this.banners = res.banners;
    },
    setRecommendSongs(res) {
      this.recommendSongs = res.result;
    },
    setNewSongs(res) {
      let songs = res.result;
      let newSongs = [];
      songs.forEach(item => {
        let { id, name, picUrl } = item.song.album;
        newSongs.push({ id, name, picUrl });
      });
      this.newSongs = newSongs;
    }
  },
  created() {
    this.getAllRecommend().then(res => {
      this.setAllRecommend(res);
    });
  }
};
</script>
<style lang="scss" scoped>
.home {
  position: fixed;
  width: 100%;
  bottom: 52px;
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  .scroll-wrapper {
    .recommend {
      .slides {
        margin-bottom: 20px;
        position: relative;
      }
    }
  }
}
</style>
