(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"18b6":function(e,t,r){},"7ded":function(e,t,r){"use strict";var n=r("d225"),o=r("b0b4"),s=r("e1d2"),a=function(){function e(){Object(n["a"])(this,e)}return Object(o["a"])(e,null,[{key:"login",value:function(e,t){return Object(s["a"])("login",{params:{phone:e,password:t}})}},{key:"getLoginStatus",value:function(){return Object(s["a"])("loginStatus")}},{key:"refreshLogin",value:function(){return Object(s["a"])("loginRefresh")}},{key:"logout",value:function(){return Object(s["a"])("logout")}},{key:"signin",value:function(){return Object(s["a"])("signin")}}]),e}();t["a"]=a},add6:function(e,t,r){"use strict";var n=r("18b6"),o=r.n(n);o.a},d9c9:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[e._m(0),r("div",{staticClass:"form"},[r("svg",{staticClass:"icon i-back",attrs:{"aria-hidden":"true"},on:{click:e.goBack}},[r("use",{attrs:{"xlink:href":"#icon-arrowleft"}})]),r("h2",{staticClass:"text"},[e._v("登录")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"input border-bottom",attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userPassword,expression:"userPassword"}],staticClass:"input border-bottom",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.userPassword},on:{input:function(t){t.target.composing||(e.userPassword=t.target.value)}}}),r("div",{staticClass:"button",on:{click:e.handleLogin}},[e._v("登录")])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("h1",{staticClass:"title"},[e._v("欢迎使用沐雪MUSIC")])])}],s=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),a=r("5880"),i=r("7ded");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={name:"",components:{},props:{},data:function(){return{userName:"",userPassword:""}},computed:u({},Object(a["mapGetters"])(["isLogin"])),methods:u({},Object(a["mapMutations"])({setUserInfo:"SET_USER_INFO",setShowFooter:"SET_SHOW_FOOTER"}),{},Object(a["mapActions"])(["setTips"]),{handleLogin:function(){var e=this;i["a"].login(this.userName,this.userPassword).then((function(t){var r={name:t.profile.nickname,id:t.profile.userId,picUrl:t.profile.avatarUrl};e.setUserInfo(r),e.setTips("登录成功,正在为您跳转"),i["a"].refreshLogin(),setTimeout((function(){e.$router.go(-1)}),1e3)}))},goBack:function(){this.setShowFooter(!0),this.$router.go(-1)}})},p=l,d=(r("add6"),r("2877")),f=Object(d["a"])(p,n,o,!1,null,"1174821c",null);t["default"]=f.exports}}]);
//# sourceMappingURL=login.c0f73ab2.js.map