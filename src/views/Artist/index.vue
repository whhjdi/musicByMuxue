<template>
  <div class="artist">
    <ul class="singer-list">
      <li v-for="singer in singers" :key="singer.id" class="singer-item">
        <img v-lazy="singer.picUrl" alt="" class="pic" />
        <div class="left  border-bottom">
          <h2 class="name">{{ singer.name }}</h2>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Artist from "../../api/artist.js";
export default {
  name: "artist",
  components: {},
  props: {},
  data() {
    return {
      singers: {}
    };
  },
  watch: {},
  computed: {},
  methods: {
    setArtists(res) {
      this.singers = res.list.artists;
      this.$NProgress.done();
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      Artist.singer().then(res => {
        vm.setArtists(res);
        vm.$NProgress.done();
      });
    });
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.artist {
  .singer-list {
    .singer-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 10px;
      .pic {
        width: 50px;
        height: 50px;
        border-radius: 4px;
        margin-right: 20px;
      }
      .left {
        flex: 1;
        height: 70px;
        line-height: 70px;
        .name {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
