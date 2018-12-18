<template>
  <div class="allSongList">
    <header class="header border-bottom">
      <svg class="icon i-back" aria-hidden="true" @click="goBack">
        <use xlink:href="#icon-arrowleft"></use>
      </svg>
      <h2 class="title">歌单</h2>
    </header>
    <Scroll
      class="scroll"
      :data="playList"
      @scrollToEnd="loadMore"
      :pullup="pullup"
    >
      <div>
        <div class="nav">
          <span class="catText border" @click="getCatList"
            >{{ catText }}
            <svg class="icon i-back" aria-hidden="true" @click="goBack">
              <use xlink:href="#icon-right"></use>
            </svg>
          </span>
        </div>
        <ul class="list-wrapper">
          <li v-for="(item, index) in playList" :key="index" class="list">
            <img :src="item.coverImgUrl" alt="" class="pic" />
            <div class="name">{{ item.name }}</div>
          </li>
        </ul>
      </div>
    </Scroll>
    <cat-list
      :catList="catList"
      ref="catList"
      @selectItem="selectItem"
    ></cat-list>
  </div>
</template>

<script>
import Recommend from "@/api/recommend.js";
import CatList from "./CatList";
import Scroll from "../base/Scroll";
import { mapMutations } from "vuex";
export default {
  name: "allSongList",
  components: { Scroll, CatList },
  props: {},
  data() {
    return {
      pullup: true,
      playList: [],
      before: 0,
      hasMore: true,
      catText: "全部",
      catList: [],
      offset: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    ...mapMutations({
      setShowFooter: "SET_SHOW_FOOTER"
    }),
    loadMore() {
      if (!this.hasMore) {
        return;
      }
      Recommend.getAllSongList(this.catText, this.offset).then(res => {
        console.log(res);
        let playList = res.playlists;
        this.offset = this.offset + 10;
        this.hasMore = res.more;
        this.playList = this.playList.concat(playList);
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    getCatList() {
      Recommend.getCatList().then(res => {
        console.log(res);
        this.categories = Object.values(res.categories);
        this.sub = res.sub;
        this.$refs.catList.show();

        let arr = [];
        let sub = res.sub;
        let categories = res.categories;
        let key = Object.values(categories);
        key.forEach((ele, idx) => {
          let obj = { name: ele };
          obj[idx] = [];
          sub.forEach(item => {
            if (item.category === idx) {
              obj[idx].push(item);
            }
          });
          arr.push(obj);
        });
        this.catList = arr;
      });
    },
    selectItem(item) {
      this.catText = item.name;
      Recommend.getAllSongList(item.name, 0).then(res => {
        console.log(res);
        let playList = res.playlists;
        this.offset = this.offset + 10;
        this.playList = playList;
        this.hasMore = res.more;
      });
    }
  },
  created() {
    this.setShowFooter(false);
    Recommend.getAllSongList().then(res => {
      console.log(res);
      this.playList = res.playlists;
      this.offset = this.offset + 10;
      this.hasMore = res.more;
    });
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.allSongList {
  position: fixed;
  top: 0;
  bottom: 0px;
  left: 0;
  right: 0;
  overflow: hidden;
  .header {
    padding: 10px;
    text-align: center;
    .title {
      height: 24px;
      line-height: 24px;
    }
    .i-back {
      position: absolute;
      left: 10px;
      top: 10px;
      width: 24px;
      height: 24px;
    }
  }
  .scroll {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .nav {
      padding: 10px;
      .catText {
        height: 20px;
        line-height: 20px;
        padding: 5px 8px;
      }
    }
    .list-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 5px;
      .list {
        width: 48%;
        margin-bottom: 10px;
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
}
</style>
