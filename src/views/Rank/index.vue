<template>
  <transition name="slide">
    <div class="rank">
      <rank-list :topList="topList" @selectTopList="selectTopList"></rank-list>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
import Rank from "@/api/rank.js";
import RankList from "@/components/Rank/RankList.vue";
import { mapMutations } from "vuex";
export default {
  name: "rank",
  components: { RankList },
  props: {},
  data() {
    return {
      topList: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    ...mapMutations({
      setTopDetailList: "setTopDetailList"
    }),
    getTopList() {
      Rank.topList().then(res => {
        this.setTopList(res);
        // this.$NProgress.done();
      });
    },
    setTopList(res) {
      this.topList = res.list;
    },
    selectTopList(item, index) {
      this.$router.push({
        path: `/rank/${item.id}`
      });
      this.getTopListDetail(index);
    },
    getTopListDetail(idx) {
      Rank.topListDetail(idx).then(res => {
        // this.topDetailList = res.playlist;
        this.setTopDetailList(res.playlist);
        // this.$NProgress.done();
      });
    }
  },
  created() {
    this.getTopList();
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.rank {
  position: fixed;
  top: 98px;
  width: 100%;
  bottom: 0;
  overflow: hidden;
  .list-wrapper {
    .list {
      display: flex;
      padding: 10px;
      position: relative;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;
      .pic {
        width: 100px;
        height: 100px;
        flex: 0 0 100px;
        border-radius: 5px;
      }
      .updateFrequency {
        position: absolute;
        left: 15px;
        bottom: 20px;
        color: #fff;
        font-size: 12px;
      }
      .song-list {
        flex: 1;
        padding: 0 10px;
        height: 100px;
        overflow: hidden;
        .song {
          padding: 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &:first-child {
            margin-top: 10px;
          }
        }
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
