<template>
  <Scroll :data="topList" class="rank-list">
    <div>
      <ul class="list-wrapper">
        <li
          v-for="item in topList"
          :key="`top_list_${item.id}`"
          class="list border-bottom"
          @click="selectTopList(item);"
        >
          <img v-lazy="item.coverImgUrl" alt class="pic" />
          <div class="updateFrequency">{{ item.updateFrequency }}</div>
          <ul class="song-list">
            <li
              v-for="(song, index) in item.tracks"
              :key="song.first"
              class="song"
            >{{ index + 1 }}.{{ song.first }}-{{ song.second }}</li>
          </ul>
        </li>
      </ul>
      <h2 class="other-title">其他榜单</h2>
      <ul class="other-wrapper">
        <li
          v-for="item in otherList"
          :key="`other_list_${item.id}`"
          class="other-list border-bottom"
          @click="selectTopList(item);"
        >
          <img v-lazy="item.coverImgUrl" alt class="other-pic" />
          <div class="title">{{item.name}}</div>
        </li>
      </ul>
    </div>
  </Scroll>
</template>

<script>
import Scroll from "@/components/base/Scroll.vue";
export default {
  name: "",
  components: { Scroll },
  props: {
    topList: {
      type: Array,
      default: () => []
    },
    otherList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    selectTopList(index) {
      this.$emit("selectTopList", index);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.rank-list {
  overflow: hidden;
  width: 100%;
  height: 100%;
  .list-wrapper {
    .list {
      display: flex;
      padding: 10px 20px;
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
        left: 30px;
        bottom: 30px;
        color: rgba(255, 255, 255, 0.8);
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
  .other-title {
    margin: 10px 0 10px 20px;
  }
  .other-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    .other-list {
      margin-bottom: 10px;
      width: 30%;
      overflow: hidden;
      .other-pic {
        width: 100px;
        height: 100px;
        flex: 0 0 100px;
        border-radius: 5px;
        margin-bottom: 5px;
      }
      .title {
        font-size: 12px;
        height: 30px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}
</style>
