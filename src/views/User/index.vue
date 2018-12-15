<template>
  <div class="user">
    最近播放{{ playHistory.length }}<router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "user",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["playHistory"])
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
