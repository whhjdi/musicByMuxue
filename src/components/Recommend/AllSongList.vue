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
      :data="playLists"
      @scrollToEnd="loadMore"
      :pullup="pullup"
      ref="list"
    >
      <div>
        <div class="nav">
          <span class="catText border" @click="getCatList"
            >{{ catText }}
            <svg class="icon i-back" aria-hidden="true" @click="goBack">
              <use xlink:href="#icon-right"></use>
            </svg>
          </span>
          <div class="sort">
            <span
              class="new"
              :class="{ active: order === 'new' }"
              @click="orderNew"
              >最新</span
            >|
            <span
              class="hot"
              :class="{ active: order === 'hot' }"
              @click="orderHot"
              >最热</span
            >
          </div>
        </div>
        <ul class="list-wrapper">
          <li
            v-for="(item, index) in playLists"
            :key="index"
            class="list"
            @click="handleSongList(item);"
          >
            <img :src="item.coverImgUrl" alt="" class="pic" />
            <div class="name">{{ item.name }}</div>
          </li>
        </ul>
      </div>
    </Scroll>
    <cat-list
      :catList="catList"
      ref="catList"
      @selectItem="selectCat"
      @selectAll="selectAll"
    ></cat-list>
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
import Recommend from "@/api/recommend.js";
import CatList from "./CatList";
import Scroll from "../base/Scroll";
import { mapMutations } from "vuex";
import { songsListPlayMixin, playListMixin } from "@/mixin.js";
export default {
  name: "allSongList",
  components: { Scroll, CatList },
  mixins: [songsListPlayMixin, playListMixin],
  props: {},
  data() {
    return {
      pullup: true,
      playLists: [],
      before: 0,
      hasMore: true,
      catText: "全部",
      catList: [],
      offset: 0,
      order: "hot",
      list: [],
      songs: []
    };
  },
  watch: {
    order(newVal) {
      this.getSongList(this.catText, this.offset, newVal);
    }
  },
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
      setShowFooter: "SET_SHOW_FOOTER"
    }),
    loadMore() {
      if (!this.hasMore) {
        return;
      }
      Recommend.getAllSongList(this.catText, this.offset, this.order).then(
        res => {
          let playLists = res.playlists;
          this.offset = this.offset + 10;
          this.hasMore = res.more;
          this.playLists = this.playLists.concat(playLists);
        }
      );
    },
    goBack() {
      this.$router.go(-1);
    },
    getCatList() {
      Recommend.getCatList().then(res => {
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
    getSongList(tag, offset, order) {
      Recommend.getAllSongList(tag, offset, order).then(res => {
        let playLists = res.playlists;
        this.offset = this.offset + 10;
        this.playLists = playLists;
        this.hasMore = res.more;
      });
    },
    orderNew() {
      this.order = "new";
    },
    orderHot() {
      this.order = "hot";
    },
    handleSongList(item) {
      this.$router.push({
        path: `/songslist/${item.id}`
      });
      Recommend.getDisc(item.id).then(res => {
        this.setList(res);
      });
    },
    selectCat(item) {
      this.catText = item.name;
      this.offset = 0;
      this.getSongList(item.name, this.offset, this.order);
    },
    selectAll() {
      this.catText = "全部";
      this.offset = 0;
      this.getSongList(this.catText, this.offset, this.order);
    }
  },
  created() {
    this.setShowFooter(false);
    this.getSongList(this.catText, this.offset, this.order);
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
      position: relative;
      .catText {
        height: 20px;
        line-height: 20px;
        padding: 5px 8px;
      }
      .sort {
        position: absolute;
        right: 5px;
        top: 10px;
        height: 20px;
        line-height: 20px;
        padding: 5px 8px;
        color: #9e9e9e;
        .new {
          margin-right: 5px;
          &.active {
            color: #ff5482;
          }
        }
        .hot {
          &.active {
            color: #ff5482;
          }
        }
      }
    }
    .list-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 5px;
      .list {
        width: 48%;
        margin-bottom: 15px;
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
