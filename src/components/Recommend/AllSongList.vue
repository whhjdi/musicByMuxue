<template>
  <div class="allSongList">
    <header class="header border-bottom">
      <svg @click="goBack" class="icon i-back" aria-hidden="true">
        <use xlink:href="#icon-arrowleft" />
      </svg>
      <h2 class="title">歌单</h2>
    </header>

    <Scroll ref="list" :data="playLists" @scrollToEnd="loadMore" :pullup="pullup" class="scroll">
      <div>
        <div class="nav">
          <span @click="getCatList" class="catText border">
            {{ catText }}
            <svg @click="goBack" class="icon i-back" aria-hidden="true">
              <use xlink:href="#icon-right" />
            </svg>
          </span>
          <div class="sort">
            <span :class="{ active: order === 'new' }" @click="orderNew" class="new">最新</span>|
            <span :class="{ active: order === 'hot' }" @click="orderHot" class="hot">最热</span>
          </div>
        </div>
        <ul class="list-wrapper">
          <li
            v-for="(item, index) in playLists"
            :key="index"
            @click="handleSongList(item)"
            class="list"
          >
            <img :src="item.coverImgUrl" alt class="pic" />
            <div class="name">{{ item.name }}</div>
            <div class="number">
              <svg class="icon i-count" aria-hidden="true">
                <use xlink:href="#icon-music" />
              </svg>
              <div class="count">{{ item.playCount | setNumber }}</div>
            </div>
            <div class="author">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-user" />
              </svg>
              <span class="nickname">{{ item.creator.nickname }}</span>
            </div>
          </li>
        </ul>
      </div>
    </Scroll>
    <cat-list ref="catList" :catList="catList" @selectItem="selectCat" @selectAll="selectAll"></cat-list>
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
import Recommend from '@/api/recommend.js';
import CatList from './CatList';
import Scroll from '../base/Scroll';
import { mapMutations } from 'vuex';
import { songsListPlayMixin, playListMixin } from '@/mixin.js';
export default {
  name: 'allSongList',
  components: { Scroll, CatList },
  filters: {
    setNumber(val) {
      if (val < 10000) {
        return '<1万';
      }
      return `${Math.ceil(val / 10000)}万`;
    }
  },
  mixins: [songsListPlayMixin, playListMixin],
  props: {},
  data() {
    return {
      pullup: true,
      playLists: [],
      before: 0,
      hasMore: true,
      catText: '全部',
      catList: [],
      offset: 0,
      order: 'hot',
      list: [],
      songs: []
    };
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
  watch: {
    order(newVal) {
      this.getSongList(this.catText, this.offset, newVal);
    }
  },
  created() {
    this.setShowFooter(false);
    this.getSongList(this.catText, this.offset, this.order);
  },

  methods: {
    ...mapMutations({
      setShowFooter: 'SET_SHOW_FOOTER'
    }),
    loadMore() {
      if (!this.hasMore) {
        return;
      }
      Recommend.getAllSongList(this.catText, this.offset, this.order).then((res) => {
        let playLists = res.playlists;
        this.offset = this.offset + 10;
        this.hasMore = res.more;
        this.playLists = this.playLists.concat(playLists);
      });
    },
    goBack() {
      this.$router.go(-1);
    },
    getCatList() {
      Recommend.getCatList().then((res) => {
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
          sub.forEach((item) => {
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
      Recommend.getAllSongList(tag, offset, order).then((res) => {
        let playLists = res.playlists;
        this.offset = this.offset + 10;
        this.playLists = playLists;
        this.hasMore = res.more;
      });
    },
    orderNew() {
      this.order = 'new';
    },
    orderHot() {
      this.order = 'hot';
    },
    handleSongList(item) {
      item.id &&
        this.$router.push({
          path: `/songslist/${item.id}`
        });
      Recommend.getDisc(item.id).then((res) => {
        this.setList(res);
      });
    },
    selectCat(item) {
      this.catText = item.name;
      this.offset = 0;
      this.getSongList(item.name, this.offset, this.order);
    },
    selectAll() {
      this.catText = '全部';
      this.offset = 0;
      this.getSongList(this.catText, this.offset, this.order);
    }
  }
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
        position: relative;
        .pic {
          border-radius: 4px;
          width: 100%;
          margin-bottom: 5px;
        }
        .name {
          font-size: 12px;
        }
        .number {
          position: absolute;
          top: 5px;
          right: 5px;
          color: #fff;
          font-weight: 200;
          .i-count {
            display: inline-block;
            vertical-align: top;
            margin-right: 2px;
          }
          .count {
            display: inline-block;
            vertical-align: top;
            font-size: 10px;
          }
        }
        .author {
          position: absolute;
          left: 5px;
          bottom: 40px;
          color: #fff;
        }
      }
    }
  }
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s;
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
