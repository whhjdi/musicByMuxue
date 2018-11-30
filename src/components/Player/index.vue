<template>
  <div class="player" v-show="playList.length > 0">
    <transition name="normal">
      <div class="normal-player" v-show="fullScreen">
        <div class="background">
          <img
            :src="currentSong.picUrl"
            alt=""
            width="100%"
            height="100%"
            class="img"
          />
          <div class="filter"></div>
          <div class="filterR"></div>
        </div>
        <div class="top">
          <svg class="icon" aria-hidden="true" @click="goBack">
            <use xlink:href="#icon-arrowleft"></use>
          </svg>
          <div class="name">
            <h1 class="title">{{ currentSong.name }}</h1>
            <h2 class="subtitle">{{ currentSong.singer }}</h2>
          </div>
        </div>
        <div class="middle">
          <div class="middle-l">
            <div class="cd-wrapper" ref="cdWrapper">
              <div class="cd" :class="playing ? 'play' : 'pause'">
                <img :src="currentSong.picUrl" alt="" class="image" />
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="progress-wrapper">
            <span class="time time-l">{{ format(currentTime) }}</span>
            <div class="progress-bar-wrapper">
              <progress-bar
                :percent="percent"
                @percentChange="onProgressChange"
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
            <svg class="icon  i-right" aria-hidden="true">
              <use xlink:href="#icon-heart"></use>
            </svg>
          </div>
        </div>
      </div>
    </transition>
    <div class="mini-player border-top" v-show="!fullScreen" @click="open">
      <div class="left">
        <img :src="currentSong.picUrl" alt="" class="pic" />
      </div>
      <div class="right">
        <svg
          class="icon i-mini"
          aria-hidden="true"
          @click.stop.prevent="togglePlaying"
        >
          <use :xlink:href="miniIcon"></use>
        </svg>

        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-menu"></use>
        </svg>
      </div>
    </div>
    <audio
      ref="audio"
      @canplay="ready"
      @error="error"
      @timeupdate="updateTime"
      @ended="ended"
    ></audio>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Song from "@/api/song.js";
import ProgressBar from "../base/ProgressBar";
import { playMode, shuffle } from "@/utils/index.js";
export default {
  name: "",
  components: { ProgressBar },
  props: {},
  data() {
    return {
      url: "",
      songReady: false,
      currentTime: 0,
      duration: 0
    };
  },
  watch: {
    currentSong(newVal, oldVal) {
      if (!newVal.id) {
        return;
      }
      if (newVal.id === oldVal.id) {
        return;
      }
      if (this.playing) {
        this.$refs.audio.pause();
      }
      this.getSong(newVal.id);
    },
    url(newVal) {
      this.$refs.audio.src = newVal;
      let stop = setInterval(() => {
        this.duration = this.$refs.audio.duration;
        console.log(1, this.duration);

        if (this.duration) {
          clearInterval(stop);
        }
      }, 150);
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
      "sequenceList"
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
    }
  },
  methods: {
    ...mapMutations({
      setFullScreen: "SET_FULL_SCREEN",
      setPlayingState: "SET_PLAYING_STATE",
      setCurrentIndex: "SET_CURRENT_INDEX",
      setPlayMode: "SET_PLAYING_MODE",
      setPlayList: "SET_PLAY_LIST"
    }),
    goBack() {
      this.setFullScreen(false);
    },
    open() {
      this.setFullScreen(true);
    },
    togglePlaying() {
      if (!this.songReady) {
        return;
      }
      this.setPlayingState(!this.playing);
      const audio = this.$refs.audio;
      this.$nextTick(() => {
        this.playing ? audio.play() : audio.pause();
      });
      this.songReadyfalse;
    },
    getSong(id) {
      Song.song(id).then(res => {
        this.url = res.data[0].url;
        this.$nextTick(() => {
          this.$refs.audio.play();
        });
      });
    },
    prev() {
      if (!this.songReady) {
        return;
      }
      let index = this.currentIndex - 1;
      if (index === -1) {
        index = this.playList.length - 1;
      }
      this.setCurrentIndex(index);
      if (!this.playing) {
        this.togglePlaying();
      }
      this.songReadyfalse;
    },
    next() {
      if (!this.songReady) {
        return;
      }
      let index = this.currentIndex + 1;
      if (index === this.playList.length) {
        index = 0;
      }
      this.setCurrentIndex(index);
      if (!this.playing) {
        this.togglePlaying();
      }
      this.songReadyfalse;
    },
    ready() {
      this.songReady = true;
    },
    error() {
      this.songReady = true;
    },
    updateTime(e) {
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
      this.$refs.audio.currentTime = this.duration * percent;
      if (!this.playing) {
        this.togglePlaying();
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
    ended(e) {
      if (this.mode === playMode.loop) {
        this.loop();
      } else {
        this.next();
      }
    },
    loop() {
      this.$refs.audio.currentTime = 0;
      this.$refs.audio.play();
    }
  },
  created() {},
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
    background: #000;
    z-index: 999;
    overflow: hidden;
    .background {
      position: absolute;
      left: -50%;
      top: -50%;
      width: 100%;
      height: 100%;
      opacity: 0.6;
      filter: blur(30px);
      .img {
        width: 200%;
        height: 200%;
      }
      .filter {
        position: absolute;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.6;
      }
    }
    .top {
      background: rgba(0, 0, 0, 0);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 10px;
      .icon {
        width: 24px;
        height: 24px;
        color: #fff;
        margin-right: 20px;
      }
      .name {
        .title {
          color: #fff;
          font-size: 14px;
          top: 20px;
          margin-bottom: 5px;
        }
        .subtitle {
          color: #ccc;
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
            box-sizing: border-box;
            border: 15px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            &.play {
              animation: rotate 20s linear infinite;
            }
            &.pause {
              animation-play-state: paused;
            }
            .image {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
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
        color: #fff;
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
          color: #fff;
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
    height: 60px;
    display: flex;
    background: #fff;
    align-items: center;
    justify-content: space-between;
    .left {
      width: 50px;
      height: 50px;
      padding: 5px;
      .pic {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }
    .right {
      display: flex;
      flex-direction: row;
      .icon {
        width: 40px;
        height: 40px;
        color: #ccc;
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

.normal-enter-active,
.normal-leave-active {
  transition: all 0.4s;
}
.normal-enter,
.normal-leave-to {
  transform: translateY(100%);
}
</style>
