<template>
  <div v-show="playList.length > 0" class="player">
    <transition name="normal">
      <div v-show="fullScreen" class="normal-player">
        <div class="background">
          <img :src="currentSong.picUrl" alt width="100%" height="100%" class="img" />

          <div class="filter"></div>
          <div class="filterR"></div>
        </div>
        <div class="top">
          <svg @click="goBack" class="icon i-left" aria-hidden="true">
            <use xlink:href="#icon-down" />
          </svg>

          <svg @click="toggleFavorite(currentSong)" class="icon i-right" aria-hidden="true">
            <use :xlink:href="getFavoriteIcon(currentSong)" />
          </svg>
        </div>
        <div @click="changeMiddle" class="middle">
          <div v-show="currentShow === 'cd'" class="middle-l">
            <div ref="cdWrapper" class="cd-wrapper">
              <div :class="playing ? 'play' : 'pause'" class="cd">
                <img :src="currentSong.picUrl" alt class="image" />
              </div>
            </div>
            <div class="other">
              <h1 class="title">{{ currentSong.name }}</h1>
              <h2 class="subtitle">{{ currentSong.singer }}</h2>
              <div v-if="currentLyric && currentLyric.lines" class="line-lyric">
                {{ currentLyric.lines[currentLineNum].txt }}
              </div>
            </div>
          </div>
          <transition name="middleR">
            <div  v-show="currentShow === 'lyric'" class="t-wrapper">
              <div class="title-wrapper">
                <h1 class="title">{{ currentSong.name }}</h1>
                <h2 class="subtitle">{{ currentSong.singer }}</h2>
              </div>

              <Scroll ref="lyricList" :data="currentLyric && currentLyric.lines" class="middle-r">
                <div class="lyric-wrapper">
                  <div v-if="currentLyric">
                    <p
                      ref="lyricLine"
                      v-for="(line, index) in currentLyric.lines"
                      :key="index"
                      :class="{ current: currentLineNum === index }"
                      class="text"
                    >
                      {{ line.txt }}
                    </p>
                  </div>
                  <p v-else class="no-lyric">{{ updatecurrentLyric }}</p>
                </div>
              </Scroll>
            </div>
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
            <svg @click="changeMode" class="icon i-left" aria-hidden="true">
              <use :xlink:href="iconMode" />
            </svg>
            <svg @click="prev" class="icon i-left" aria-hidden="true">
              <use xlink:href="#icon-step-backward" />
            </svg>
            <svg @click="togglePlaying" class="icon i-center" aria-hidden="true">
              <use :xlink:href="playIcon" />
            </svg>
            <svg @click="next" class="icon i-right" aria-hidden="true">
              <use xlink:href="#icon-step-forward" />
            </svg>
            <svg @click="showPlayList" class="icon i-right" aria-hidden="true">
              <use xlink:href="#icon-menu" />
            </svg>
          </div>
        </div>
      </div>
    </transition>
    <transition name="normal">
      <div v-show="!fullScreen && !showFooter" @click="open" class="mini-player">
        <div class="left">
          <img v-lazy="currentSong.picUrl" alt class="pic" />
          <div class="name">{{ currentSong.name }}</div>
          <div class="singer">{{ currentSong.singer }}</div>
        </div>
        <div class="right">
          <svg @click.stop.prevent="togglePlaying" class="icon i-mini" aria-hidden="true">
            <use :xlink:href="miniIcon" />
          </svg>

          <svg @click.stop="showPlayList" class="icon" aria-hidden="true">
            <use xlink:href="#icon-menu" />
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
import { mapGetters, mapMutations, mapActions } from 'vuex';
import Song from '@/api/song.js';
import ProgressBar from '../base/ProgressBar';
import { playMode, shuffle } from '@/utils/index.js';
import Lyric from 'lyric-parser';
import Scroll from '../base/Scroll';
import PlayList from './PlayList';
import { favoriteSong } from '@/mixin.js';
export default {
  name: '',
  components: { ProgressBar, Scroll, PlayList },
  mixins: [favoriteSong],
  props: {},
  data() {
    return {
      url: '',
      songReady: false,
      currentTime: 0,
      duration: 0,
      currentLyric: null,
      currentLineNum: 0,
      currentShow: 'cd'
    };
  },

  computed: {
    ...mapGetters([
      'fullScreen',
      'playList',
      'currentSong',
      'playing',
      'currentIndex',
      'mode',
      'sequenceList',
      'showFooter'
    ]),
    playIcon() {
      return this.playing ? '#icon-timeout' : '#icon-play-circle';
    },
    miniIcon() {
      return this.playing ? '#icon-timeout' : '#icon-play-circle';
    },
    percent() {
      return this.currentTime / this.duration;
    },
    iconMode() {
      return this.mode === playMode.sequence
        ? '#icon-retweet'
        : this.mode === playMode.loop
        ? '#icon-danquxunhuan'
        : '#icon-suijibofang';
    },
    updatecurrentLyric() {
      if (this.noLyric) {
        return '暂无歌词';
      }
      return '歌词加载中';
    }
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
  created() {
    this.move = false;
    this.noLyric = '歌词加载中';
  },
  methods: {
    ...mapActions(['savePlayHistory']),
    ...mapMutations({
      setFullScreen: 'SET_FULL_SCREEN',
      setPlayingState: 'SET_PLAYING_STATE',
      setCurrentIndex: 'SET_CURRENT_INDEX',
      setPlayMode: 'SET_PLAYING_MODE',
      setPlayList: 'SET_PLAY_LIST',
      setShowFooter: 'SET_SHOW_FOOTER'
    }),
    showPlayList() {
      this.$refs.playList.show();
    },
    goBack() {
      this.setFullScreen(false);
      if (this.$route.name && this.$route.name !== 'search') {
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
      Song.getSong(id).then((res) => {
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
        .then((res) => {
          this.currentLyric = new Lyric(res.lrc.lyric, this.handleLyric);
          this.noLyric = false;
          if (this.playing) {
            this.currentLyric.play();
            this.currentLineNum = 0;
            this.$refs.lyricList.scrollTo(0, 0, 1000);
          }
        })
        .catch((err) => {
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
    format(pInterval) {
      let interval = pInterval | 0;
      const minute = (interval / 60) | 0;
      const second = this.pad(interval % 60);
      return `${minute}:${second}`;
    },
    pad(pNum, n = 2) {
      let num = pNum;
      let len = num.toString().length;
      if (len < n) {
        num = '0' + num;
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
      let index = list.findIndex((item) => {
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
      if (this.currentShow === 'cd') {
        this.currentShow = 'lyric';
      } else {
        this.currentShow = 'cd';
      }
    }
  }
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
    background: #f5f5f5;
    overflow: hidden;
    color: #191516;
    font-weight: 200;
    .background {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.2;
      filter: blur(50px);
      .img {
        width: 100%;
        height: 100%;
        transform: scale(2);
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
          color: rgba(148, 147, 147, 0.5);
          font-size: 12px;
        }
      }
    }
    .middle {
      display: flex;
      align-items: center;
      position: fixed;
      width: 100%;
      top: 40px;
      bottom: 170px;
      white-space: nowrap;
      font-size: 0;
      .middle-l {
        display: inline-block;
        position: relative;
        top: -60px;
        width: 100%;
        height: 0;
        padding-top: 80%;
        .other {
          width: 300px;
          margin-left: 40px;
          font-size: 14px;
          margin-top: 20px;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .title {
            font-weight: bold;
          }
          .subtitle {
            margin-top: 10px;
          }
          .line-lyric {
            width: 100%;
            margin-top: 20px;
            text-align: left;
            font-weight: bold;
          }
        }
        .cd-wrapper {
          position: absolute;
          left: 10%;
          top: 0;
          width: 80%;
          height: 100%;
          .cd {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            /*&.play {*/
            /*  animation: rotate 20s linear infinite;*/
            /*}*/
            /*&.pause {*/
            /*  animation-play-state: paused;*/
            /*}*/
            .image {
              // border: 15px solid rgba(255, 255, 255, 0.2);
              position: absolute;
              left: 0;
              top: 0;
              box-sizing: border-box;
              width: 100%;
              height: 100%;
              border-radius: 20px;
            }
          }
        }
      }
      .t-wrapper {
        display: inline-block;
        position: absolute;
        top: 0px;
        // vertical-align: top;
        width: 100%;
        height: 100%;
        .title-wrapper {
          position: relative;
          top: 20px;
          font-size: 16px;
          color: #0e0f0f;
          margin-left: 20px;
          width: 80%;
          margin: 0 auto;
          overflow: hidden;
          text-align: left;
          .subtitle {
            font-size: 14px;
            margin-top: 10px;
          }
        }
        .middle-r {
          display: inline-block;
          position: absolute;
          top: 90px;
          // vertical-align: top;
          width: 100%;
          height: calc(100%-100px);
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
            text-align: left;
            .text {
              line-height: 40px;
              color: #0e0f0f;
              font-size: 14px;
              transition: all 0.3s ease;
              &.current {
                color: #fc386f;
                font-size: 20px;
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
