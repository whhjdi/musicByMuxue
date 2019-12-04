<template>
  <div class="recommend">
    <h2 @click="handleClick" class="title">
      <span>{{ title }}</span>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-right" />
      </svg>
    </h2>
    <ul class="list-wrapper">
      <li
        v-for="item in list"
        :key="item.id"
        @click="selectItem(item)"
        class="list"
      >
        <img
          v-lazy="item.picUrl ? item.picUrl : item.coverImgUrl"
          alt
          class="pic"
        />
        <p class="name">{{ item.name }}</p>
        <div class="number">
          <svg class="icon i-count" aria-hidden="true">
            <use xlink:href="#icon-music" />
          </svg>
          <div class="count">{{ item.playCount | setCount }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  filters: {
    setCount(val) {
      if (val < 10000) {
        return "<1万";
      }
      return `${Math.ceil(val / 10000)}万`;
    }
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: "推荐歌单"
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleClick() {
      this.$router.push({
        path: "/songslist"
      });
    },
    selectItem(item) {
      this.$emit("setDiscList", item);
    }
  }
};
</script>
<style lang="scss" scoped>
.recommend {
  padding: 10px 10px 0 10px;
  .title {
    display: inline-block;
    margin-bottom: 5px;
    font-size: 16px;
    color: #000;
    padding: 10px 5px;
    .icon {
      vertical-align: top;
      display: inline-block;
      color: #666666;
      margin-left: 0.2em;
    }
  }
  .list-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .list {
      width: 30%;
      margin-bottom: 20px;
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
        top: 2px;
        right: 2px;
        color: #fff;
        font-weight: 200;
        background: rgba(0, 0, 0, 0.15);
        border-radius: 2px;
        padding: 2px;
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
    }
  }
}
</style>
