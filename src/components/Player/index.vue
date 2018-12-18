<template>
  <div class="player" v-show="playList.length > 0">
    <transition name="normal">
      <div class="normal-player" v-show="fullScreen">
        <div class="background">
          <img
            v-lazy="currentSong.picUrl"
            alt=""
            width="100%"
            height="100%"
            class="img"
          />

          <div class="filter"></div>
          <div class="filterR"></div>
        </div>
        <div class="top">
          <svg class="icon i-left" aria-hidden="true" @click="goBack">
            <use xlink:href="#icon-down"></use>
          </svg>
          <div class="name">
            <h1 class="title">{{ currentSong.name }}</h1>
            <h2 class="subtitle">{{ currentSong.singer }}</h2>
          </div>
          <svg
            class="icon  i-right"
            aria-hidden="true"
            @click="toggleFavorite(currentSong);"
          >
            <use :xlink:href="getFavoriteIcon(currentSong)"></use>
          </svg>
        </div>
        <div class="middle" @click="changeMiddle">
          <div class="middle-l" v-show="currentShow === 'cd'">
            <div class="cd-wrapper" ref="cdWrapper">
              <div class="cd" :class="playing ? 'play' : 'pause'">
                <img v-lazy="currentSong.picUrl" alt="" class="image" />
              </div>
            </div>
          </div>
          <transition name="middleR">
            <Scroll
              class="middle-r"
              ref="lyricList"
              :data="currentLyric && currentLyric.lines"
              v-show="currentShow === 'lyric'"
            >
              <div class="lyric-wrapper">
                <div v-if="currentLyric">
                  <p
                    class="text"
                    ref="lyricLine"
                    v-for="(line, index) in currentLyric.lines"
                    :key="index"
                    :class="{ current: currentLineNum === index }"
                  >
                    {{ line.txt }}
                  </p>
                </div>
                <p class="no-lyric" v-else>{{ updatecurrentLyric }}</p>
              </div>
            </Scroll>
          </transition>
        </div>
        <div class="bottom">
          <div class="progress-wrapper">
            <span class="time time-l">{{ format(currentTime) }}</span>
            <div class="progress-bar-wrapper">
              <progress-bar
                :percent="percent"
                @percentChange="onProgressChange"
                @percentChangeEnd="onProgressChangeEnd"
              ></progress-bar>
            </div>
            <span class="time time-r">{{ format(duration) }}</span>
          </div>
          <div class="operators">
            <svg class="icon i-left" aria-hidden="true" @click="changeMode">
              <use :xlink:href="iconMode"></use>
            </svg>
            <svg
              class="icon i-left"
              aria-hidden="true"
              @click="prev"
              :class="disableClass"
            >
              <use xlink:href="#icon-step-backward"></use>
            </svg>
            <svg
              class="icon i-center"
              aria-hidden="true"
              :class="disableClass"
              @click="togglePlaying"
            >
              <use :xlink:href="playIcon"></use>
            </svg>
            <svg
              class="icon i-right"
              aria-hidden="true"
              :class="disableClass"
              @click="next"
            >
              <use xlink:href="#icon-step-forward"></use>
            </svg>
            <svg class="icon i-right" aria-hidden="true" @click="showPlayList">
              <use xlink:href="#icon-menu"></use>
            </svg>
          </div>
        </div>
      </div>
    </transition>
    <transition name="normal">
      <div
        class="mini-player"
        v-show="!fullScreen && !showFooter"
        @click="open"
      >
        <div class="left">
          <img v-lazy="currentSong.picUrl" alt="" class="pic" />
          <div class="name">{{ currentSong.name }}</div>
          <div class="singer">{{ currentSong.singer }}</div>
        </div>
        <div class="right">
          <svg
            class="icon i-mini"
            aria-hidden="true"
            @click.stop.prevent="togglePlaying"
          >
            <use :xlink:href="miniIcon"></use>
          </svg>

          <svg class="icon" aria-hidden="true" @click.stop="showPlayList">
            <use xlink:href="#icon-menu"></use>
          </svg>
        </div>
      </div>
    </transition>
    <audio
      ref="audio"
      @canplay="ready"
      @error="error"
      @timeupdate="updateTime"
      @ended="ended"
    ></audio>
    <play-list ref="playList" @modeChange="changeMode"></play-list>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import Song from "@/api/song.js";
import ProgressBar from "../base/ProgressBar";
import { playMode, shuffle } from "@/utils/index.js";
import Lyric from "lyric-parser";
import Scroll from "../base/Scroll";
import PlayList from "./PlayList";
import { favoriteSong } from "@/mixin.js";
export default {
  name: "",
  components: { ProgressBar, Scroll, PlayList },
  mixins: [favoriteSong],
  props: {},
  data() {
    return {
      url: "",
      songReady: false,
      currentTime: 0,
      duration: 0,
      currentLyric: null,
      currentLineNum: 0,
      currentShow: "cd"
    };
  },
  watch: {
    currentSong(newVal, oldVal) {
      if (newVal.id === oldVal.id) {
        return;
      }
      this.$refs.audio.pause();
      if (!newVal.id) {
        return;
      }
      this.$refs.audio.currentTime = 0;
      this.getSongUrl(newVal.id);
    },
    url(newVal) {
      if (!newVal) {
        return;
      }
      this.$refs.audio.src = newVal;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$refs.audio.play().then(() => {
          this.duration = this.$refs.audio.duration;
        });
      }, 1000);
      this.setPlayingState(true);
    }
  },
  computed: {
    ...mapGetters([
      "fullScreen",
      "playList",
      "currentSong",
      "playing",
      "currentIndex",
      "mode",
      "sequenceList",
      "showFooter"
    ]),
    playIcon() {
      return this.playing ? "#icon-timeout" : "#icon-play-circle";
    },
    miniIcon() {
      return this.playing ? "#icon-timeout" : "#icon-play-circle";
    },
    disableClass() {
      return this.songReady ? "" : "disable";
    },
    percent() {
      return this.currentTime / this.duration;
    },
    iconMode() {
      return this.mode === playMode.sequence
        ? "#icon-retweet"
        : this.mode === playMode.loop
        ? "#icon-danquxunhuan"
        : "#icon-suijibofang";
    },
    updatecurrentLyric() {
      if (this.noLyric) {
        return "暂无歌词";
      }
      if (!this.noLyric) {
        return "歌词加载中";
      }
    }
  },
  methods: {
    ...mapActions(["savePlayHistory"]),
    ...mapMutations({
      setFullScreen: "SET_FULL_SCREEN",
      setPlayingState: "SET_PLAYING_STATE",
      setCurrentIndex: "SET_CURRENT_INDEX",
      setPlayMode: "SET_PLAYING_MODE",
      setPlayList: "SET_PLAY_LIST",
      setShowFooter: "SET_SHOW_FOOTER"
    }),
    showPlayList() {
      this.$refs.playList.show();
    },
    goBack() {
      this.setFullScreen(false);
      if (this.$route.name && this.$route.name !== "search") {
        this.setShowFooter(true);
      }
    },
    open() {
      this.setFullScreen(true);
      this.setShowFooter(false);
    },
    togglePlaying() {
      if (!this.songReady) {
        return;
      }
      if (this.currentLyric) {
        this.currentLyric.togglePlay();
      }
      this.setPlayingState(!this.playing);
      const audio = this.$refs.audio;
      this.playing ? audio.play() : audio.pause();
    },
    getSongUrl(id) {
      Song.getSong(id).then(res => {
        this.url = res.data[0].url;
        this.getLyric(id);
      });
    },
    getLyric(id) {
      if (this.currentLyric) {
        this.currentLyric.stop();
        this.currentLyric = null;
      }
      Song.getLyric(id)
        .then(res => {
          this.currentLyric = new Lyric(res.lrc.lyric, this.handleLyric);
          this.noLyric = false;
          if (this.playing) {
            this.currentLyric.play();
            this.currentLineNum = 1;
            this.$refs.lyricList.scrollTo(0, 0, 1000);
          }
        })
        .catch(err => {
          console.log(err);
          this.noLyric = true;
        });
    },
    handleLyric({ lineNum }) {
      this.currentLineNum = lineNum;
      if (lineNum > 4) {
        let lineEl = this.$refs.lyricLine[lineNum - 4];
        this.$refs.lyricList.scrollToElement(lineEl, 1000);
      } else {
        this.$refs.lyricList.scrollTo(0, 0, 1000);
      }
    },
    prev() {
      if (!this.songReady) {
        return;
      }
      if (this.playList.length === 1) {
        this.loop();
      } else {
        let index = this.currentIndex - 1;
        if (index === -1) {
          index = this.playList.length - 1;
        }
        this.setCurrentIndex(index);
        if (!this.playing) {
          this.togglePlaying();
        }
      }
      this.songReady = false;
    },
    next() {
      if (!this.songReady) {
        return;
      }
      if (this.playList.length === 1) {
        this.loop();
      } else {
        let index = this.currentIndex + 1;
        if (index === this.playList.length) {
          index = 0;
        }
        this.setCurrentIndex(index);
        if (!this.playing) {
          this.togglePlaying();
        }
      }
      this.songReady = false;
    },
    ready() {
      this.songReady = true;
      this.duration = this.$refs.audio.duration;
      this.savePlayHistory(this.currentSong);
    },
    error() {
      this.songReady = true;
    },
    updateTime(e) {
      if (this.move) {
        return;
      }
      this.currentTime = e.target.currentTime;
    },
    format(interval) {
      interval = interval | 0;
      const minute = (interval / 60) | 0;
      const second = this.pad(interval % 60);
      return `${minute}:${second}`;
    },
    pad(num, n = 2) {
      let len = num.toString().length;
      if (len < n) {
        num = "0" + num;
        len++;
      }
      return num;
    },
    onProgressChange(percent) {
      this.move = true;
      const currentTime = this.duration * percent;
      this.currentTime = currentTime;
      if (this.currentLyric) {
        this.currentLyric.seek(currentTime * 1000);
      }
    },
    onProgressChangeEnd(percent) {
      this.move = false;
      const currentTime = this.duration * percent;
      this.$refs.audio.currentTime = currentTime;
      if (!this.playing) {
        this.$refs.audio.play();
        this.setPlayingState(true);
      }
      if (this.currentLyric) {
        this.currentLyric.seek(currentTime * 1000);
      }
    },
    changeMode() {
      const mode = (this.mode + 1) % 3;
      this.setPlayMode(mode);
      let list = null;
      if (mode === playMode.random) {
        list = shuffle(this.sequenceList);
      } else {
        list = this.sequenceList;
      }
      this.resetCurrentIndex(list);
      this.setPlayList(list);
    },
    resetCurrentIndex(list) {
      let index = list.findIndex(item => {
        return item.id === this.currentSong.id;
      });
      this.setCurrentIndex(index);
    },
    ended() {
      if (this.mode === playMode.loop) {
        this.loop();
      } else {
        this.next();
      }
    },
    loop() {
      if (this.currentLyric) {
        this.currentLyric.seek(0);
      }
      this.$refs.audio.currentTime = 0;
      this.$refs.audio.play();
      this.setPlayingState(true);
    },
    changeMiddle() {
      if (this.currentShow === "cd") {
        this.currentShow = "lyric";
      } else {
        this.currentShow = "cd";
      }
    }
  },
  created() {
    this.move = false;
    this.noLyric = "歌词加载中";
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.player {
  .normal-player {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 999;
    background: #eee;
    overflow: hidden;
    color: #191516;
    font-weight: 200;
    .background {
      position: absolute;
      left: -50%;
      top: -50%;
      width: 100%;
      height: 100%;
      opacity: 0.2;
      filter: blur(50px);
      .img {
        width: 300%;
        height: 300%;
      }
    }
    .top {
      background: rgba(0, 0, 0, 0);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-top: 5px;
      .icon {
        /* position: absolute;
        left: 15px;
        top: 10px; */
        width: 24px;
        height: 24px;
        padding: 5px;
        &.i-left {
          margin-left: 5px;
        }
        &.i-right {
          margin-right: 5px;
        }
      }
      .name {
        text-align: center;
        margin-top: 20px;
        .title {
          font-size: 16px;
          margin-bottom: 10px;
        }
        .subtitle {
          color: rgb(148, 147, 147);
          font-size: 12px;
        }
      }
    }
    .middle {
      display: flex;
      align-items: center;
      position: fixed;
      width: 100%;
      top: 80px;
      bottom: 170px;
      white-space: nowrap;
      font-size: 0;
      .middle-l {
        display: inline-block;
        vertical-align: top;
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 80%;
        .cd-wrapper {
          position: absolute;
          left: 10%;
          top: 0;
          width: 80%;
          height: 100%;
          .cd {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            &.play {
              animation: rotate 20s linear infinite;
            }
            &.pause {
              animation-play-state: paused;
            }
            .image {
              border: 15px solid rgba(255, 255, 255, 0.15);
              position: absolute;
              left: 0;
              top: 0;
              box-sizing: border-box;
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
        }
      }
      .middle-r {
        display: inline-block;
        position: absolute;
        top: 0;
        vertical-align: top;
        width: 100%;
        height: 100%;
        overflow: hidden;
        &.middleR-enter-active,
        &.middleR-leave-active {
          transition: all 0.3s;
        }
        &.middleR-enter,
        &.middleR-leave-to {
          opacity: 0;
        }
        .lyric-wrapper {
          width: 80%;
          margin: 0 auto;
          overflow: hidden;
          text-align: center;
          .text {
            line-height: 40px;
            color: #a7a8a8;
            font-size: 14px;
            &.current {
              color: #191516;
            }
          }
          .no-lyric {
            line-height: 40px;
            margin-top: 60%;
            color: #191516;
            font-size: 16px;
          }
        }
      }
    }
    .bottom {
      position: absolute;
      bottom: 50px;
      width: 100%;
      .operators {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 30px;
        .icon {
          width: 24px;
          height: 24px;
          padding: 6px;
          &.i-center {
            width: 36px;
            height: 36px;
          }
        }
      }
      .progress-wrapper {
        display: flex;
        align-items: center;
        width: 80%;
        margin: 0 auto;
        padding: 10px 0;
        .time {
          flex: 0 0 30px;
          width: 30px;
          &.time-l {
            text-align: left;
          }
          &.time-r {
            text-align: right;
          }
        }
        .progress-bar-wrapper {
          flex: 1;
        }
      }
    }
  }
  .mini-player {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 999;
    height: 52px;
    display: flex;
    background: #fff;
    color: #191516;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
    .left {
      width: 48px;
      height: 48px;
      padding: 5px;
      .pic {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
      .name {
        position: absolute;
        left: 70px;
        top: 10px;
        right: 100px;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .singer {
        position: absolute;
        left: 70px;
        top: 30px;
        color: rgb(105, 105, 105);
        right: 100px;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .right {
      display: flex;
      flex-direction: row;
      .icon {
        width: 30px;
        height: 30px;
        margin-right: 15px;
      }
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.normal-enter-active {
  transition: all 0.3s;
}
.normal-enter {
  transform: translateY(100%);
}
</style>
