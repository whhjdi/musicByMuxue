<template>
  <div class="home" ref="home">
    <nav>
      <h1 class="title">沐雪music</h1>
      <search-bar></search-bar>
    </nav>
    <div class="scroll-wrapper">
      <Scroll :data="recommendSongs" ref="scrolls" class="scroll">
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
            <recommend-list
              :list="recommendSongs"
              @setDiscList="handleDisc"
            ></recommend-list>
          </div>
          <div class="newSongs">
            <recommend-list
              :list="newDiscs"
              title="最新歌单"
              @setDiscList="handleDisc"
            ></recommend-list>
          </div>
        </div>
      </Scroll>
    </div>
    <router-view
      :title="title"
      :picUrl="picUrl"
      :songs="songs"
      :id="discId"
      @select="selectItem"
      @play="playAll"
      ref="musicList"
    ></router-view>
  </div>
</template>

<script>
import Slide from "@/components/Recommend/Slide.vue";
import Recommend from "@/api/recommend.js";
import Scroll from "@/components/base/Scroll.vue";
import RecommendList from "@/components/Recommend/RecommendList.vue";
import { mapMutations, mapActions } from "vuex";
import { createSong } from "@/utils";
import SearchBar from "@/components/base/SearchNav.vue";
export default {
  name: "home",
  components: {
    Slide,
    Scroll,
    RecommendList,
    SearchBar
  },
  props: {},
  data() {
    return {
      banners: [],
      recommendSongs: [],
      newDiscs: [],
      songs: [],
      list: []
    };
  },
  watch: {},
  computed: {
    title() {
      return this.list.name;
    },
    picUrl() {
      return this.list.coverImgUrl;
    },
    discId() {
      return this.list.id;
    }
  },
  methods: {
    ...mapMutations({
      setDisc: "SET_DISC"
    }),
    ...mapActions(["selectPlay", "randomPlay"]),
    handleDisc(item) {
      Recommend.getDisc(item.id).then(res => {
        this.setList(res);
      });
    },
    setList(res) {
      this.list = res.playlist;
      this.songs = this.normalizeSongs(this.list);
    },
    normalizeSongs() {
      let ret = [];
      let list = this.list;
      list.tracks.forEach(item => {
        ret.push(createSong(item));
      });
      return ret;
    },
    selectItem(song, index) {
      this.selectPlay({ list: this.songs, index });
    },
    playAll() {
      this.randomPlay({ list: this.songs });
    },

    getAllRecommend() {
      let p1 = Recommend.getBanner();
      let p2 = Recommend.getRecommendSongs();
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
      this.recommendSongs = res.result;
    },
    setNewDisc(res) {
      this.newDiscs = res.playlists;
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
    margin-bottom: 10px;
    .title {
      margin-left: 10px;
    }
  }
  .scroll-wrapper {
    position: absolute;
    top: 40px;
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
