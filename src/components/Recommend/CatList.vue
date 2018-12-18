<template>
  <transition name="slide-up">
    <div class="allSongList" v-show="showCatList">
      <header class="header border-bottom">
        <svg class="icon i-back" aria-hidden="true" @click="goBack">
          <use xlink:href="#icon-arrowleft"></use>
        </svg>
        <h2 class="title">歌单分类</h2>
      </header>
      <Scroll class="scroll" :data="catList" ref="list">
        <div class="wrapper">
          <div class="all border" @click="selectAll">全部歌单</div>
          <ul class="list-wrapper">
            <li v-for="(item, index) in catList" :key="index" class="list">
              <div class="sub">{{ item.name }}</div>
              <ul class="sub-wrapper border-bottom">
                <li
                  class="sub-item"
                  v-for="ele in item[index]"
                  :key="ele.name"
                  @click="selectItem(ele);"
                >
                  {{ ele.name }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Scroll>
    </div>
  </transition>
</template>

<script>
import Scroll from "../base/Scroll";
import { playListMixin } from "@/mixin.js";
export default {
  name: "",
  components: { Scroll },
  mixins: [playListMixin],
  props: {
    catList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      showCatList: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    show() {
      this.showCatList = true;
    },
    hide() {
      this.showCatList = false;
    },
    goBack() {
      this.hide();
    },
    selectItem(item) {
      this.$emit("selectItem", item);
      this.hide();
    },
    selectAll() {
      this.$emit("selectAll");
      this.hide();
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.allSongList {
  position: fixed;
  top: 0;
  bottom: 0px;
  left: 0;
  right: 0;
  overflow: hidden;
  background: #fff;
  .header {
    padding: 10px;
    text-align: center;
    .title {
      height: 24px;
      line-height: 24px;
    }
    .i-back {
      position: absolute;
      left: 10px;
      top: 10px;
      width: 24px;
      height: 24px;
    }
  }
  .scroll {
    position: fixed;
    top: 40px;
    bottom: 0px;
    left: 0;
    right: 0;
    overflow: hidden;
    background: #fff;
    .wrapper {
      padding: 5px;
      .all {
        padding: 10px;
        text-align: center;
        color: #ff5482;
        width: 90%;
        margin: 0 auto;
        &::before,
        &::after {
          border-color: #ff5482;
        }
      }
      .list-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .list {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-bottom: 10px;
          .sub {
            width: 20%;
            text-align: center;
          }
          .sub-wrapper {
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            padding: 5px;
            .sub-item {
              text-align: center;
              width: 30%;
              padding: 5px 0;
            }
          }
        }
      }
    }
  }
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s;
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
