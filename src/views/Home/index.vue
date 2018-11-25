<template>
  <div class="home" ref="home">123</div>
</template>

<script>
import fetch from "../../api/fetch.js";
export default {
  name: "home",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    getBanner() {
      fetch("banner").then(res => {
        this.setBanner(res);
      });
    },
    setBanner(res) {
      console.log(res);
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log(1);
  //   if (from.name) {
  //     fetch("banner").then(res => {
  //       next(vm => vm.setBanner(res));
  //     });
  //   } else {
  //     next(vm => vm.getBanner());
  //   }
  // },
  created() {
    console.log(this.$NProgress);
    this.$NProgress.done();
    console.log(213);
  }
};
</script>
<style lang="scss" scoped>
.home {
}
</style>
