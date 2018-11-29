<template>
  <div class="artist">
    <singer-list :singers="singers" @selectSinger="chooseSinger"></singer-list>
    <router-view></router-view>
  </div>
</template>

<script>
import Artist from "../../api/artist.js";
import { Singer } from "../../utils";
import pinyin from "pinyin";
import SingerList from "../../components/Artist/SingerList.vue";
import { mapMutations } from "vuex";
const HOT_NAME = "热门";
const HOT_SINGER_LENGTH = 10;
export default {
  name: "artist",
  components: { SingerList },
  props: {},
  data() {
    return {
      singers: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    ...mapMutations({
      setSinger: "setSinger"
    }),
    setArtists(res) {
      let singer = res.list.artists;
      this.setPinyin(singer);
      this.singers = this.normalizeSinger(singer);
      this.$NProgress.done();
    },
    setPinyin(singer) {
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
        if (key != "蔡") {
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
        }
      });
      let ret = [];
      let hot = [];
      for (let key in map) {
        let val = map[key];
        if (val.title === key) {
          ret.push(val);
        } else if (val.title === HOT_NAME) {
          hot.push(val);
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
      return hot.concat(ret);
    },
    chooseSinger(singer) {
      this.$NProgress.start();
      this.$router.push({
        path: `/artist/${singer.id}`
      });
      this.setSinger(singer);
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
  position: fixed;
  top: 98px;
  width: 100%;
  bottom: 0;
}
</style>
