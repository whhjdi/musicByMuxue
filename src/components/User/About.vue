<template>
  <div class=""><button @click="toLogin">登录</button></div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    toLogin() {
      this.$router.push({ path: "/login" });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped></style>
