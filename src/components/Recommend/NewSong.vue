<template>
  <div class="new-song-list">
    <h2 class="title">
      <span>最新音乐</span>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-right"></use>
      </svg>
    </h2>
    <ul class="list-wrapper">
      <li v-for="item in list" :key="item.id" class="list">
        <img v-lazy="item.song.album.picUrl" alt="" class="pic" />
        <p class="name">{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NewSong",
  components: {},
  props: {
    list: {
      type: Array
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.new-song-list {
  padding: 20px 5px;
  .title {
    display: inline-block;
    margin-bottom: 5px;
    font-size: 16px;
    color: #000;
    padding: 10px 5px;
    .icon {
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
