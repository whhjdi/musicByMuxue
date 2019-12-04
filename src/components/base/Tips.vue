<!--
 * @Author: your name
 * @Date: 2019-09-25 15:30:21
 * @LastEditTime: 2019-12-04 13:08:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /musicByMuxue/src/components/base/Tips.vue
 -->
<template>
  <transition name="drop">
    <div v-show="showTips" class="tips">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tips"></use></svg
      ><slot></slot>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: '',
  computed: {
    ...mapGetters(['showTips'])
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.tips {
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  z-index: 999;
  background: #ff5482;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    width: 30px;
    height: 30px;
  }
  &.drop-enter-active,
  &.drop-leave-active {
    transition: all 0.3s;
  }
  &.drop-enter,
  &.drop-leave-to {
    transform: translateY(-100%);
  }
}
</style>
