<template>
  <div class="about">
    <div v-if="isLogin" class="header">
      <img v-lazy="userInfo.picUrl" alt class="pic" />
      <h1 class="name">{{ userInfo.name }}</h1>
      <p class="id">{{ userInfo.id }}</p>
      <div @click="signin" class="signin">签到</div>
      <div v-show="isLogin" @click="toLogout" class="toLogout">退出登录</div>
    </div>
    <div v-else class="content">
      <h2 class="text">您还没有登录，赶快去登录吧</h2>
      <div v-show="!isLogin" @click="toLogin" class="toLogin">登录</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import Login from '@/api/login.js';
export default {
  name: 'About',
  computed: { ...mapGetters(['userInfo', 'isLogin']) },
  methods: {
    ...mapMutations({
      setUserInfo: 'SET_USER_INFO'
    }),
    ...mapActions(['setTips']),
    toLogin() {
      this.$router.push({ path: '/login' });
    },
    toLogout() {
      Login.logout();
      this.setUserInfo(null);
      this.setTips('已为您退出登录');
    },
    signin() {
      Login.signin()
        .then((res) => {
          if (res.code === 200) {
            this.setTips(String('签到成功！经验+' + res.point));
          } else {
            this.setTips('不要重复签到哦');
          }
        })
        .catch(() => {
          this.setTips('签到失败，可能已经签到过了');
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.about {
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
    .signin {
      background: #ff5482;
      color: #fff;
      padding: 5px;
      border-radius: 4px;
      margin-top: 10px;
    }
  }
  .content {
    .text {
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      text-align: center;
    }
    .toLogin {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translateX(-50%);
      padding: 5px 10px;
      background: #ff5582;
      border-radius: 4px;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>
