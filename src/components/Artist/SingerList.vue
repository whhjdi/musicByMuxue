// 列表联动
<template>
  <Scroll
    ref="singerList"
    :data="singers"
    @scroll="scroll"
    :listenscroll="listenScroll"
    :probeType="probeType"
    class="singer-list"
  >
    <ul class="list-wrapper">
      <li
        ref="singerGroup"
        v-for="(singerGroup, index) in singers"
        :key="index"
        class="singerGroup-item border-bottom"
      >
        <h2 class="title">{{ singerGroup.title }}</h2>
        <ul>
          <li
            v-for="singer in singerGroup.items"
            :key="singer.id"
            @click="selectSinger(singer)"
            class="singer-item"
          >
            <img v-lazy="singer.avatar" alt class="pic" />
            <div class="left">
              <p class="name">{{ singer.name }}</p>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <div
      @touchstart.stop.prevent="onTouchStart"
      @touchmove.stop.prevent="onTouchMove"
      @touchend.stop.prevent="onTouchEnd"
      class="cart-list"
    >
      <ul class="cart-wrapper">
        <li
          v-for="(item, index) in cartList"
          :key="item"
          :data-index="index"
          :class="{ current: currentIndex === index }"
          class="item"
        >{{ item }}</li>
      </ul>
      <div v-show="showText" class="mask">{{ text }}</div>
    </div>
    <div ref="fixed" v-show="fixedTitle" class="list-fixed">
      <h2 class="fixed-title">{{ fixedTitle }}</h2>
    </div>
  </Scroll>
</template>

<script>
import Scroll from '../base/Scroll.vue';
import { getData } from '@/utils';
const ANCHOR_HEIGHT = 18;
const TITLE_HEIGHT = 20;
export default {
  name: 'SingerList',
  components: { Scroll },
  props: {
    singers: {
      type: Array,
      dafault: []
    }
  },
  data() {
    return {
      scrollY: -1,
      currentIndex: 0,
      showText: false,
      text: '',
      diff: -1
    };
  },
  computed: {
    cartList() {
      return this.singers.map((group) => {
        return group.title.substr(0, 1);
      });
    },
    fixedTitle() {
      if (this.scrollY > 0) {
        return '';
      }
      return this.singers[this.currentIndex] ? this.singers[this.currentIndex].title : '';
    }
  },
  watch: {
    singers() {
      setTimeout(() => {
        this.calcHeight();
      }, 20);
    },
    // watch scrollY的变化，计算每个group的高度和newY(pos)做对比
    // 1. 如果newY>0肯定是第一个group
    // 2. 其他位置
    // 3. 最后一个
    scrollY(newY) {
      const listHeight = this.listHeight;
      if (newY > 0) {
        this.currentIndex = 0;
      }
      for (let i = 0; i < listHeight.length - 1; i++) {
        let height1 = listHeight[i];
        let height2 = listHeight[i + 1];
        if (-newY >= height1 && -newY < height2) {
          this.currentIndex = i;
          this.diff = height2 + newY;
          return;
        }
        if (-newY >= height2) {
          this.currentIndex = listHeight.length - 2;
        }
      }
    },
    diff(newVal) {
      let fixedTop = newVal > 0 && newVal < TITLE_HEIGHT ? newVal - TITLE_HEIGHT : 0;
      if (this.fixedTop === fixedTop) {
        return;
      }
      this.fixedTop = fixedTop;
      this.$refs.fixed.style.transform = `translateY(${this.fixedTop})`;
    }
  },
  created() {
    this.touch = {};
    this.listenScroll = true;
    this.listHeight = [];
    this.probeType = 3;
  },
  mounted() {},
  methods: {
    onTouchStart(e) {
      let index = getData(e.target, 'index');
      let firstTouch = e.touches[0];
      this.touch.y1 = firstTouch.pageY;
      this.touch.anthorIndex = index;
      this.scrollTo(index, 500);
      this.showText = true;
    },
    onTouchMove(e) {
      let firstTouch = e.touches[0];
      this.touch.y2 = firstTouch.pageY;
      let delta = ((this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT) | 0;
      let anthorindex = window.parseInt(this.touch.anthorIndex) + delta;
      this.scrollTo(anthorindex, 0);
    },
    onTouchEnd() {
      this.showText = false;
    },
    scrollTo(pIndex, time) {
      let index = pIndex;
      if (!index && index !== 0) {
        return;
      }
      if (index < 0) {
        index = 0;
      } else if (index > this.listHeight.length - 2) {
        index = this.listHeight.length;
        this.showText = false;
      }
      this.text = this.cartList[index];
      this.scrollY = -this.listHeight[index];
      this.$refs.singerList.scrollToElement(this.$refs.singerGroup[index], time);
    },
    // better-scroll返回一个pos，并赋值给scrollY
    scroll(pos) {
      this.scrollY = pos.y;
    },
    // 获取列表每个group的高度，依次相加push到数组中
    calcHeight() {
      this.listHeight = [];
      const list = this.$refs.singerGroup;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    selectSinger(data) {
      this.$emit('selectSinger', data);
    }
  }
};
</script>
<style lang="scss" scoped>
.singer-list {
  overflow: hidden;
  height: 100%;
  width: 100%;
  background: #fff;
  .list-wrapper {
    padding: 10px;
    .singerGroup-item {
      .title {
        display: inline-block;
        padding: 0 15px;
        width: 100%;
        font-size: 16px;
        background: #ffffff;
        font-weight: 400;
      }
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
  .cart-list {
    position: absolute;
    right: 2px;
    top: 50%;
    margin-top: -50%;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 8px 0;
    z-index: 1;
    .cart-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .item {
        padding: 2px 5px;
        font-weight: 400;
        font-size: 13px;
        &.current {
          color: #ff3f72;
        }
      }
    }
    .mask {
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      text-align: center;
      color: #fff;
      position: fixed;
      background: #191516;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all 300ms;
    }
  }
  .list-fixed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background: #ffffff;
    .fixed-title {
      display: inline-block;
      padding: 0 15px;
      width: 100%;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
