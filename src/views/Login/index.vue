<template>
  <div class="login">
    <header><h1 class="title">欢迎使用沐雪MUSIC</h1></header>
    <div class="form">
      <svg @click="goBack" class="icon i-back" aria-hidden="true">
        <use xlink:href="#icon-arrowleft"></use>
      </svg>
      <h2 class="text">登录</h2>
      <input
        v-model="userName"
        class="input border-bottom"
        type="text"
        placeholder="请输入手机号"
      />
      <input
        v-model="userPassword"
        class="input border-bottom"
        type="password"
        placeholder="请输入密码"
      />
      <div @click="handleLogin" class="button">登录</div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import Login from "@/api/login.js";
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      userName: "",
      userPassword: ""
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["isLogin"])
  },
  methods: {
    ...mapMutations({
      setUserInfo: "SET_USER_INFO",
      setShowFooter: "SET_SHOW_FOOTER"
    }),
    ...mapActions(["setTips"]),
    handleLogin() {
      Login.login(this.userName, this.userPassword).then(res => {
        let info = {
          name: res.profile.nickname,
          id: res.profile.userId,
          picUrl: res.profile.avatarUrl
        };
        this.setUserInfo(info);
        this.setTips("登录成功,正在为您跳转");
        Login.refreshLogin();
        setTimeout(() => {
          this.$router.go(-1);
        }, 1000);
      });
    },
    goBack() {
      this.setShowFooter(true);
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  .i-back {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 5px;
    color: #ff5582;
  }
  header {
    height: 50%;
    width: 100%;
    background-image: url("https://ws1.sinaimg.cn/large/006tNbRwly1fy8nbg7vmbj31400u0e0l.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    .title {
      color: #fff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 20%;
    }
  }
  .form {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 40%;
    margin: 0 auto;
    background: #fff;
    padding: 50px 20px;
    box-shadow: 0 2px 14px 2px rgba(0, 0, 0, 0.15);
    color: #191516;
    .text {
      margin-bottom: 20px;
    }
    .input {
      /* background: #eee; */
      box-sizing: border-box;
      display: inline-block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      outline: none;
      margin-bottom: 10px;
      padding: 0 20px;
      border-top: none;
      border-left: none;
      border-right: none;
    }
    .button {
      margin-top: 20px;
      color: #fff;
      width: 100%;
      background: #ff5582;
      height: 40px;
      line-height: 40px;
      border-radius: 40px;
    }
  }
}
</style>
