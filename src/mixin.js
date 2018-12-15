import { mapGetters, mapActions } from "vuex";

export const playListMixin = {
  computed: {
    ...mapGetters(["playList"])
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
      const bottom = playList.length > 0 ? "52px" : "";
      this.$refs.list.$el.style.bottom = bottom;
      this.$refs.list.refresh();
    }
  }
};

export const popMenuPlay = {
  computed: {
    ...mapGetters(["currentIndex"])
  },
  methods: {
    ...mapActions(["insertSongNext", "insertSong"]),
    nextPlay(song) {
      if (this.currentIndex == -1) {
        this.insertSong(song);
        return;
      }
      this.insertSongNext(song);
    },
    nowPlay(song) {
      this.insertSong(song);
    },
    showPopOver(song) {
      this.$refs.popMenu.show(song);
    }
  }
};
