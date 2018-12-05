<template>
  <div class="recommend">
    <h2 class="title" @click="handleClick">
      <span>{{ title }}</span>
    </h2>
    <ul class="list-wrapper">
      <li v-for="item in list" :key="item.id" class="list">
        <img v-lazy="item.picUrl" alt="" class="pic" />
        <p class="name">{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
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
  watch: {},
  computed: {},
  methods: {
    handleClick() {
      console.log("全部歌单");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.recommend {
  padding: 20px 5px 0 5px;
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
      width: 32%;
      margin-bottom: 20px;
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
</style>
