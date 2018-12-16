<template>
  <div class="about">
    <div class="header" v-if="isLogin">
      <img :src="userInfo.picUrl" alt="" class="pic" />
      <h1 class="name">{{ userInfo.name }}</h1>
      <p class="id">{{ userInfo.id }}</p>
      <div class="toLogout" v-show="isLogin" @click="toLogout">退出登录</div>
    </div>
    <div class="content" v-else>
      <h2 class="text">您还没有登录，赶快去登录吧</h2>
      <div class="toLogin" v-show="!isLogin" @click="toLogin">登录</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Login from "@/api/login.js";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: { ...mapGetters(["userInfo", "isLogin"]) },
  methods: {
    ...mapMutations({
      setUserInfo: "SET_USER_INFO"
    }),
    toLogin() {
      this.$router.push({ path: "/login" });
    },
    toLogout() {
      Login.logout();
      this.setUserInfo(null);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.about {
  position: fixed;
  width: 100%;
  bottom: 52px;
  top: 120px;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    .pic {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    .name {
      margin-bottom: 10px;
    }
    .toLogout {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 5px;
      background: #ff5582;
      border-radius: 4px;
      color: #fff;
    }
  }
  .content {
    .text {
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      text-align: center;
    }
    .toLogin {
      position: absolute;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      padding: 5px;
      background: #ff5582;
      border-radius: 4px;
      color: #fff;
    }
  }
}
</style>
