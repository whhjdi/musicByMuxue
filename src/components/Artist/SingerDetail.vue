<template>
  <transition name="slide"> <div class="singer-detail">1</div> </transition>
</template>

<script>
import { mapGetters } from "vuex";
import Artist from "@/api/artist.js";
export default {
  name: "SingerDetail",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapGetters(["singer"])
  },
  methods: {
    getDeatil(id) {
      Artist.singerDetail(id).then(res => {
        console.log(res);
      });
    }
  },
  created() {},
  mounted() {
    this.getDeatil(this.singer.id);
  }
};
</script>
<style lang="scss" scoped>
.singer-detail {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
