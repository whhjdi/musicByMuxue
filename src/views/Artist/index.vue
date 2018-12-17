<template>
  <div class="artist">
    <search-bar></search-bar>
    <div class="singer-list-wrapper">
      <singer-list
        :singers="singers"
        @selectSinger="chooseSinger"
      ></singer-list>
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
import SingerList from "../../components/Artist/SingerList.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import { createSong } from "@/utils/index.js";
import SearchBar from "@/components/base/SearchNav.vue";
const HOT_NAME = "热门";
const HOT_SINGER_LENGTH = 10;
export default {
  name: "artist",
  components: { SingerList, SearchBar },
  props: {},
  data() {
    return {
      singers: [],
      singer: [],
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
    selectItem(song, index) {
      this.selectPlay({ list: this.songs, index });
    },
    playAll() {
      this.randomPlay({ list: this.songs });
    },
    getDeatil(id) {
      Artist.getSingerDetail(id).then(res => {
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
      this.singer = singer;
      this.$NProgress.start();
      this.getDeatil(this.singer.id);
      this.$router.push({
        path: `/artist/${singer.id}`
      });
    }
  },
  created() {
    Artist.singer().then(res => {
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
  .singer-list-wrapper {
    position: absolute;
    top: 40px;
    bottom: 52px;
    width: 100%;
  }
}
</style>
