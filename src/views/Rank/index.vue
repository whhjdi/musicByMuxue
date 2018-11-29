<template>
  <transition name="slide">
    <div class="rank">
      <Scroll :data="topList">
        <ul class="list-wrapper">
          <li
            v-for="(item, index) in topList"
            :key="item.id"
            class="list border-bottom"
            @click="selectTopList(index);"
          >
            <img :src="item.coverImgUrl" alt="" class="pic" />
            <div class="updateFrequency">{{ item.updateFrequency }}</div>
            <ul v-show="item.tracks.length" class="song-list">
              <li
                v-for="(song, index) in item.tracks"
                :key="song.first"
                class="song"
              >
                {{ index }}.{{ song.first }}-{{ song.second }}
              </li>
            </ul>
          </li>
        </ul>
      </Scroll>
      <router-view :list="topDetailList"></router-view>
    </div>
  </transition>
</template>

<script>
import Rank from "@/api/rank.js";
import Scroll from "@/components/base/Scroll.vue";
export default {
  name: "rank",
  components: { Scroll },
  props: {},
  data() {
    return {
      topList: [],
      topDetailList: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    getTopList() {
      Rank.topList().then(res => {
        this.setTopList(res);
        this.$NProgress.done();
      });
    },
    setTopList(res) {
      this.topList = res.list;
    },
    selectTopList(index) {
      this.$router.push({
        path: `/rank/${index}`
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
