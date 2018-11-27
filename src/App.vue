<template>
  <div id="app">
    <div id="nav"><header-bar></header-bar></div>
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderBar from "./components/base/HeaderBar.vue";
export default {
  components: {
    HeaderBar
  }
};
</script>

<style lang="scss">
#nprogress {
  .bar {
    background: #fff !important;
  }
}
</style>
