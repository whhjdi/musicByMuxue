<template>
  <div class="home" ref="home">
    <div class="wrapper">
      <div class="slides">
        <slide :autoPlay="true" :interval="3000" :loop="false">
          <div
            v-for="banner in banners"
            :key="banner.targetId"
            class="slide-item"
          >
            <img :src="banner.imageUrl" alt="" class="slide-img" />
          </div>
        </slide>
      </div>
    </div>
  </div>
</template>

<script>
import Slide from "../../components/Slide";
import fetch from "../../api/fetch.js";
export default {
  name: "home",
  components: {
    Slide
  },
  props: {},
  data() {
    return {
      banners: null
    };
  },
  watch: {},
  computed: {},
  methods: {
    getBanner() {
      fetch("banner", {
        params: {
          xhrFields: { withCredentials: true }
        }
      }).then(res => {
        this.setBanner(res);
      });
    },
    setBanner(res) {
      this.$NProgress.done();
      this.banners = res.banners.splice(4);
    }
  },
  beforeRouteEnter(to, from, next) {
    if (from.name) {
      fetch("banner", {
        params: {
          xhrFields: { withCredentials: true }
        }
      }).then(res => {
        next(vm => vm.setBanner(res));
      });
    } else {
      next(vm => vm.getBanner());
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
}
</style>
