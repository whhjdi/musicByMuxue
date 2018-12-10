<template>
  <transition name="slide">
    <div class="rank">
      <rank-list :topList="topList"></rank-list>
      <router-view :list="topDetailList"></router-view>
    </div>
  </transition>
</template>

<script>
import Rank from "@/api/rank.js";
import RankList from "@/components/Rank/RankList.vue";
export default {
  name: "rank",
  components: { RankList },
  props: {},
  data() {
    return {
      topList: [],
      topDetailList: {}
    };
  },
  watch: {},
  computed: {},
  methods: {
    getTopList() {
      Rank.topList().then(res => {
        this.setTopList(res);
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
        this.topDetailList = res.playlist;
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
  top: 0;
  width: 100%;
  bottom: 52px;
  z-index: 99;
  overflow: hidden;
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
