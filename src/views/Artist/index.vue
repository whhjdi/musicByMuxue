<template>
  <div class="artist">
    <div class="header border-bottom">
      <h2 class="artist-title">歌手</h2>
      <SearchNav></SearchNav>
    </div>
    <div class="singer-list-wrapper">
      <singer-list :singers="singers" @selectSinger="chooseSinger" ref="singerList"></singer-list>
    </div>
    <router-view
      :title="title"
      :songs="songs"
      :picUrl="picUrl"
      :id="id"
      @select="selectItem"
      @play="playAll"
      ref="musicList"
    ></router-view>
  </div>
</template>

<script>
import Artist from "../../api/artist.js";
import { Singer } from "../../utils";
import pinyin from "pinyin";
import SearchNav from "@/components/base/SearchNav";
import SingerList from "../../components/Artist/SingerList.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { createSong } from "@/utils/index.js";
const HOT_NAME = "热门";
const HOT_SINGER_LENGTH = 10;
export default {
  name: "artist",
  components: { SingerList, SearchNav },
  props: {},
  data() {
    return {
      singers: [],
      singer: {},
      songs: []
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["showFooter"]),
    title() {
      return this.singer.name;
    },
    picUrl() {
      return this.singer.avatar;
    },
    id() {
      return this.singer.id;
    }
  },
  methods: {
    ...mapActions(["selectPlay", "randomPlay"]),
    ...mapMutations({
      setLoading: "SET_LOADING"
    }),
    selectItem(song, index) {
      this.selectPlay({ list: this.songs, index });
    },
    playAll() {
      this.randomPlay({ list: this.songs });
    },
    getDeatil(id) {
      this.setLoading(true);
      Artist.getSingerDetail(id).then(res => {
        this.setLoading(false);
        this.setSingerDetail(res);
      });
    },
    setSingerDetail(res) {
      let songs = res.hotSongs;
      this.songs = this.normalizeSongs(songs);
    },
    normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        ret.push(createSong(item));
      });
      return ret;
    },
    setArtists(res) {
      let singer = res.list.artists;
      this.setPinyin(singer);
      this.singers = this.normalizeSinger(singer);
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
      this.singer = singer;
      this.$NProgress.start();
      this.getDeatil(this.singer.id);
      singer.id &&
        this.$router.push({
          path: `/artist/${singer.id}`
        });
    }
  },
  activated() {
    this.$refs.singerList.$children[0].refresh();
  },
  created() {
    this.setLoading(true);
    Artist.singer().then(res => {
      this.setLoading(false);
      this.setArtists(res);
    });
  },
  mounted() {},
  destroyed() {
    this.$NProgress.remove();
  }
};
</script>
<style lang="scss" scoped>
.artist {
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 0;
  width: 100%;
  background: #fff;
  z-index: 99;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-title {
    margin: 0 auto;
  }
  .singer-list-wrapper {
    position: absolute;
    top: 60px;
    bottom: 52px;
    width: 100%;
    background: #fff;
  }
}
</style>
