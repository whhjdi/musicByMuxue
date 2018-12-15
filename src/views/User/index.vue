<template>
  <div class="user">
    <div class="header">
      <h2 class="title">个人中心</h2>
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
        <history-list></history-list>
      </div>
      <div class="like-wrapper" v-else-if="currentIndex == 1">2</div>
      <div class="random-wrapepr" v-else-if="currentIndex == 2">3</div>
      <div class="about-wrapper" v-else>4</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SearchNav from "@/components/base/SearchNav";
import UserTab from "@/components/User/UserTab.vue";
import HistoryList from "@/components/User/HistoryList";
export default {
  name: "user",
  components: { SearchNav, UserTab, HistoryList },
  props: {},
  data() {
    return {
      list: [
        { text: "最近播放", icon: "#icon-history" },
        { text: "收藏夹", icon: "#icon-like" },
        { text: "随便听听", icon: "#icon-listen" },
        { text: "关于 ", icon: "#icon-playlist" }
      ],
      currentIndex: 0
    };
  },
  computed: {
    ...mapGetters(["playHistory"])
  },
  methods: {
    selectItem(index) {
      this.currentIndex = index;
    }
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
