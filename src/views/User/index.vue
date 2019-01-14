<template>
  <div class="user">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
      <search-nav></search-nav>
    </div>
    <div class="tab-wrapper">
      <user-tab
        :list="list"
        :currentIndex="currentIndex"
        @select="selectItem"
      ></user-tab>
    </div>
    <div class="content">
      <div class="play-history-wrapper" v-if="currentIndex == 0">
        <user-list
          :userList="playHistory"
          @clear="clearHistory"
          @deleteOne="deleteOneHistory"
          :showDelete="true"
          deleteText="清空历史"
        ></user-list>
      </div>
      <div class="like-wrapper" v-else-if="currentIndex == 1">
        <user-list
          :userList="favoriteList"
          @clear="clearFavorite"
          @deleteOne="deleteOneFavorite"
        ></user-list>
      </div>
      <div class="random-wrapepr" v-else-if="currentIndex == 2">
        <UserRecommend :userList="recommends"></UserRecommend>
      </div>
      <div class="about-wrapper" v-else><About></About></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import SearchNav from "@/components/base/SearchNav";
import UserTab from "@/components/User/UserTab.vue";
import UserList from "@/components/User/UserList";
import UserRecommend from "@/components/User/UserRecommend";
import About from "@/components/User/About";
import Recommend from "@/api/recommend.js";
import Login from "@/api/login.js";
export default {
  name: "user",
  components: { SearchNav, UserTab, UserList, UserRecommend, About },
  props: {},
  data() {
    return {
      list: [
        { text: "最近播放", icon: "#icon-history" },
        { text: "收藏夹", icon: "#icon-like" },
        { text: "个性推荐", icon: "#icon-listen" },
        { text: "关于 ", icon: "#icon-playlist" }
      ],
      currentIndex: 0,
      recommends: []
    };
  },
  watch: {
    currentIndex(newVal) {
      if (newVal === 2 && this.recommends.length === 0) {
        Recommend.getRecommend()
          .then(res => {
            this.setRecommends(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  computed: {
    ...mapGetters(["playHistory", "favoriteList", "isLogin", "userInfo"]),
    title() {
      return !this.isLogin ? "你好呀" : `${this.userInfo.name}`;
    }
  },
  methods: {
    ...mapMutations({
      setUserInfo: "SET_USER_INFO",
      setLoading: "SET_LOADING"
    }),
    ...mapActions([
      "clearPlayHistory",
      "deleteOnePlayHistory",
      "cancelFavorite",
      "clearAllFavorite"
    ]),
    selectItem(index) {
      this.currentIndex = index;
    },
    clearHistory() {
      this.clearPlayHistory();
    },
    clearFavorite() {
      this.clearAllFavorite();
    },
    deleteOneHistory(song) {
      this.deleteOnePlayHistory(song);
    },
    deleteOneFavorite(song) {
      this.cancelFavorite(song);
    },
    setRecommends(res) {
      let list = res.recommend;
      list.forEach(item => {
        let id = item.id;
        let name = item.name;
        let picUrl = item.album.picUrl;
        let album = item.album.name;
        let albumId = item.album.id;
        let singer = item.artists ? item.artists[0].name : "";
        this.recommends.push({ id, name, picUrl, album, albumId, singer });
      });
    }
  },

  created() {
    Login.getLoginStatus()
      .then(res => {
        if (res.code === 200) {
          let profile = res.profile;
          let info = {
            name: profile.nickname,
            id: profile.userId,
            picUrl: profile.avatarUrl
          };
          this.setUserInfo(info);
        }
      })
      .catch(err => {
        console.log(err + "还没有登录");
      });
  }
};
</script>
<style lang="scss" scoped>
.user {
  position: fixed;
  top: 0px;
  width: 100%;
  bottom: 52px;
  z-index: 99;
  background: #fff;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      flex: 1;
      text-align: center;
    }
  }
  .tab-wrapper {
    margin-top: 10px;
  }
  .content {
    .play-history-wrapper {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
