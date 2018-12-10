<template>
  <div class="user">暂未开发，敬请期待<router-view></router-view></div>
</template>

<script>
export default {
  name: "user",
  components: {},
  props: {},
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.user {
  position: fixed;
  top: 0px;
  width: 100%;
  bottom: 52px;
  z-index: 99;
  background: #fff;
  text-align: center;
  padding-top: 100px;
  font-size: 28px;
}
</style>
