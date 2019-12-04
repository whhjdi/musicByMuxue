import { mapGetters, mapActions } from 'vuex';
import { createSong } from '@/utils';
// 底部bottom
export const playListMixin = {
  computed: {
    ...mapGetters(['playList'])
  },
  mounted() {
    this.handlePlayList(this.playList);
  },
  activated() {
    this.handlePlayList(this.playList);
  },
  watch: {
    playList(newVal) {
      this.handlePlayList(newVal);
    }
  },
  methods: {
    handlePlayList(playList) {
      const bottom = playList.length > 0 ? '52px' : '';
      this.$refs.list.$el.style.bottom = bottom;
      this.$refs.list.refresh();
    }
  }
};
// 添加到下一曲播放部分逻辑
export const popMenuPlay = {
  computed: {
    ...mapGetters(['currentIndex'])
  },
  methods: {
    ...mapActions(['insertSongNext', 'insertSong', 'setTips']),
    nextPlay(song) {
      if (this.currentIndex == -1) {
        this.insertSong(song);
        return;
      }
      this.insertSongNext(song);
      this.setTips('已经将一首歌曲添加到播放队列');
    },
    nowPlay(song) {
      this.insertSong(song);
    },
    showPopOver(song) {
      this.$refs.popMenu.show(song);
    }
  }
};

// 添加到收藏夹部分逻辑
export const favoriteSong = {
  computed: {
    ...mapGetters(['favoriteList'])
  },
  methods: {
    ...mapActions(['cancelFavorite', 'saveToFavoriteList', 'setTips']),
    isFavorite(song) {
      const index = this.favoriteList.findIndex((item) => {
        return item.id === song.id;
      });
      return index > -1;
    },
    getFavoriteIcon(song) {
      if (this.isFavorite(song)) {
        return '#icon-heart-fill';
      }
      return '#icon-heart';
    },
    toggleFavorite(song) {
      if (this.isFavorite(song)) {
        this.cancelFavorite(song);
        this.setTips('你不喜欢这首歌了吗，已经从收藏夹移出了');
      } else {
        this.saveToFavoriteList(song);
        this.setTips('已经添加歌曲到收藏夹');
      }
    }
  }
};

// userList部分逻辑
export const userListMixin = {
  computed: {},
  methods: {
    ...mapActions(['randomPlay']),
    selectItem(song) {
      this.insertSong(song);
    },
    playAll() {
      this.randomPlay({ list: this.userList });
    },
    refresh() {
      this.$refs.list.refresh();
    }
  },
  created() {
    this.probeType = 3;
    this.listenScroll = true;
  },
  mounted() {
    this.refresh();
  }
};

// 首页歌单和全部歌单共有的逻辑
export const songsListPlayMixin = {
  methods: {
    ...mapActions(['selectPlay', 'randomPlay']),
    setList(res) {
      this.list = res.playlist;
      this.songs = this.normalizeSongs(this.list);
    },
    normalizeSongs() {
      let ret = [];
      let list = this.list;
      list.tracks.forEach((item) => {
        ret.push(createSong(item));
      });
      return ret;
    },
    playAll() {
      this.randomPlay({ list: this.songs });
    },
    selectItem(song, index) {
      this.selectPlay({ list: this.songs, index });
    }
  }
};
