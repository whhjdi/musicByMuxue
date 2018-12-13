<template>
  <div class="suggest">
    <Scroll :data="songs" class="scroll-wrapper" ref="list">
      <div class="list-detail">
        <div class="album" v-show="album && album.length > 0">
          <ul class="list">
            <h3 class="title">专辑</h3>
            <li
              v-for="item in album"
              :key="item.albumId"
              class="item border-bottom"
            >
              <img :src="item.picUrl" alt="" class="img" />
              <div class="right">
                <div class="name">专辑：{{ item.name }}</div>
                <div class="singer">{{ item.singer }}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="artists" v-show="artists && artists.length > 0">
          <ul class="list">
            <h3 class="title">歌手</h3>
            <li
              v-for="item in artists"
              :key="item.id"
              class="item border-bottom"
              @click="selectSinger(item);"
            >
              <img :src="item.picUrl" alt="" class="img" />
              <div class="singer">歌手：{{ item.singer }}</div>
            </li>
          </ul>
        </div>
        <div class="songs" v-show="songs && songs.length > 0">
          <ul class="list">
            <h3 class="title">歌曲</h3>
            <li
              v-for="item in songs"
              :key="item.id"
              class="item border-bottom"
              @click="selectSong(item);"
            >
              <div class="name">{{ item.name }}</div>
              <div class="singer">{{ item.singer }}</div>
            </li>
          </ul>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Search from "@/api/search.js";
import { mapGetters } from "vuex";
import Scroll from "@/components/base/Scroll.vue";
import { playListMixin } from "@/mixin.js";
export default {
  name: "",
  components: { Scroll },
  mixins: [playListMixin],
  props: {},
  data() {
    return {
      page: 1,
      album: [],
      artists: [],
      songs: []
    };
  },
  watch: {
    query(newVal) {
      if (newVal !== "") {
        this.search(newVal);
      }
    }
  },
  computed: {
    ...mapGetters(["query"])
  },
  methods: {
    selectSinger(item) {
      this.$emit("handleSinger", item);
    },
    selectSong(item) {
      this.$emit("handleSong", item);
    },
    search(query) {
      Search.getSuggest(query).then(res => {
        let suggest = res.result;
        let picUrl;
        if (suggest.albums && suggest.albums[0].artist.picUrl) {
          picUrl = suggest.albums[0].artist.picUrl;
        } else {
          picUrl =
            "https://ws2.sinaimg.cn/large/006tNbRwly1fy54tapw58j30yl0u0h16.jpg";
        }
        if (suggest.albums && suggest.albums.length > 0) {
          this.setAlbum(suggest.albums);
        }
        if (suggest.artists && suggest.artists.length > 0) {
          this.setArtist(suggest.artists);
        }
        if (suggest.songs && suggest.songs.length > 0) {
          this.setSongs(suggest.songs, picUrl);
        }
      });
    },
    //可以优化
    setAlbum(album) {
      this.album = [];
      album.forEach(item => {
        let albumId = item.id;
        let name = item.name;
        let singer = item.artist.name;
        let picUrl = item.artist.picUrl;
        this.album.push({ albumId, name, singer, picUrl });
      });
    },
    setArtist(artist) {
      this.artists = [];
      artist.forEach(item => {
        let id = item.id;
        let singer = item.name;
        let picUrl = item.picUrl;
        this.artists.push({ id, singer, picUrl });
      });
    },
    setSongs(songs, picUrl) {
      this.songs = [];
      songs.forEach(item => {
        let id = item.id;
        let name = item.name;
        let singer = item.artists[0].name;
        this.songs.push({ id, name, singer, picUrl });
      });
    },
    handlePlayList(playList) {
      const bottom = playList.length > 0 ? "54px" : "";
      this.$refs.list.$el.style.bottom = bottom;
      this.$refs.list.refresh();
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.suggest {
  position: fixed;
  top: 40px;
  bottom: 0;
  width: 100%;
  background: #fff;
  .scroll-wrapper {
    width: 100%;
    height: calc(100% - 52px);
    overflow: hidden;
    .album {
      .list {
        .title {
          padding: 10px;
        }
        .item {
          display: flex;
          align-items: center;
          padding: 5px 10px;
          margin-bottom: 5px;
          .img {
            width: 50px;
            height: 50px;
            border-radius: 4px;
          }
          .right {
            margin-left: 10px;
            font-size: 12px;
            .name {
              margin-bottom: 5px;
              color: #000;
            }
            .singer {
              font-size: 10px;
            }
          }
        }
      }
    }
    .artists {
      .list {
        .title {
          padding: 10px;
        }
        .item {
          display: flex;
          align-items: center;
          padding: 5px 10px;
          .img {
            width: 50px;
            height: 50px;
            border-radius: 4px;
          }
          .singer {
            color: #000;
            margin-left: 10px;
            font-size: 10px;
          }
        }
      }
    }
    .songs {
      .list {
        .title {
          padding: 10px;
        }
        .item {
          padding: 5px 10px;
          .name {
            font-size: 12px;
            color: #000;
            margin-bottom: 5px;
          }
          .singer {
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>