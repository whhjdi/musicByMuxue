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
const HOT_NAME = "热门";
const HOT_SINGER_LENGTH = 10;
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
      console.log(res);

      this.singers = res.artists;
      this.$NProgress.done();
    },
    normalizeSinger(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          item: []
        }
      };
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LENGTH) {
          map.item.push({
            id: item.id,
            name: item.name,
            avatar: item.picUrl
          });
        }
      });
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
