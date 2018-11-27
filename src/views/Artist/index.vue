<template>
  <div class="artist">
    <ul class="singer-list">
      <!--
        <li v-for="singer in singers" :key="singer.id" class="singer-item">
          <img v-lazy="singer.picUrl" alt="" class="pic" />
          <div class="left  border-bottom">
            <h2 class="name">{{ singer.name }}</h2>
          </div>
        </li>
      -->
    </ul>
  </div>
</template>

<script>
import Artist from "../../api/artist.js";
import Singer from "../../utils";
import pinyin from "pinyin";
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
      this.$NProgress.done();
      let singer = res.list.artists;
      this.setPinyin(singer);
      this.singers = this.normalizeSinger(singer);
      console.log(this.singers);
    },
    setPinyin(singer) {
      console.log(
        pinyin("蔡", {
          style: pinyin.STYLE_FIRST_LETTER,
          heteronym: true
        })
      );

      singer.forEach(item => {
        let lowerPy = pinyin(item.name[0], {
          style: pinyin.STYLE_FIRST_LETTER
        });
        item.py = lowerPy[0][0].toUpperCase();
      });
    },
    normalizeSinger(list) {
      // map={hot:{title:'hot',items:{..}},A:{title:'A',items:{..}}...z:{}}
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      };
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LENGTH) {
          map.hot.items.push(
            new Singer({
              id: item.id,
              name: item.name,
              avatar: item.picUrl
            })
          );
        }
        const key = item.py;
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          };
        }
        map[key].items.push(
          new Singer({
            id: item.id,
            name: item.name,
            avatar: item.picUrl
          })
        );
      });
      return map;
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
  mounted() {},
  destroyed() {
    this.$NProgress.remove();
  }
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
