(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{2941:function(t,e,s){},"31a6":function(t,e,s){},3622:function(t,e,s){},"3a1d":function(t,e,s){"use strict";var n=s("cb65"),r=s.n(n);r.a},"42ba":function(t,e,s){"use strict";var n=s("d225"),r=s("b0b4"),i=s("e1d2"),a=function(){function t(){Object(n["a"])(this,t)}return Object(r["a"])(t,null,[{key:"getBanner",value:function(){return Object(i["a"])("banner")}},{key:"getRecommend",value:function(){return Object(i["a"])("recommend")}},{key:"getRecommendSongs",value:function(){return Object(i["a"])("personalized",{params:{limit:6}})}},{key:"getNewSong",value:function(){return Object(i["a"])("newSong",{})}},{key:"getDisc",value:function(t){return Object(i["a"])("disc",{params:{id:t}})}},{key:"getNewDisc",value:function(){return Object(i["a"])("newDisc",{params:{order:"new",limit:6}})}},{key:"getResource",value:function(){return Object(i["a"])("resource",{params:{limit:6}})}},{key:"getAllSongList",value:function(t,e,s){return Object(i["a"])("newDisc",{params:{limit:10,cat:t,offset:e,order:s}})}},{key:"getCatList",value:function(){return Object(i["a"])("catList")}},{key:"getComment",value:function(t,e){return Object(i["a"])("comment",{params:{id:t,offset:e}})}}]),t}();e["a"]=a},6240:function(t,e,s){"use strict";var n=s("ed50"),r=s.n(n);r.a},7368:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user"},[s("div",{staticClass:"header"},[s("h2",{staticClass:"title"},[t._v(t._s(t.title))]),s("search-nav")],1),s("div",{staticClass:"tab-wrapper"},[s("user-tab",{attrs:{list:t.list,currentIndex:t.currentIndex},on:{select:t.selectItem}})],1),s("div",{staticClass:"content"},[0===t.currentIndex?s("div",{staticClass:"play-history-wrapper"},[s("user-list",{attrs:{userList:t.playHistory,showDelete:!0,deleteText:"清空历史"},on:{clear:t.clearHistory,deleteOne:t.deleteOneHistory}})],1):1===t.currentIndex?s("div",{staticClass:"like-wrapper"},[s("user-list",{attrs:{userList:t.favoriteList},on:{clear:t.clearFavorite,deleteOne:t.deleteOneFavorite}})],1):2===t.currentIndex?s("div",{staticClass:"random-wrapper"},[s("UserRecommend",{attrs:{userList:t.recommends}})],1):s("div",{staticClass:"about-wrapper"},[s("About")],1)])])},r=[],i=(s("8e6e"),s("456d"),s("ac6a"),s("7f7f"),s("bd86")),a=s("5880"),o=s("76f3"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"tab"},t._l(t.list,(function(e,n){return s("li",{key:e.text,staticClass:"item",class:{active:t.currentIndex===n},on:{click:function(e){return t.selectItem(n)}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":e.icon}})]),s("div",{staticClass:"text"},[t._v(t._s(e.text))])])})),0)},l=[],u=(s("c5f6"),{name:"",components:{},props:{list:{type:Array,default:function(){return[]}},currentIndex:{type:Number,default:0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{selectItem:function(t){this.$emit("select",t)}}}),p=u,f=(s("8d21"),s("2877")),d=Object(f["a"])(p,c,l,!1,null,"cf77458e",null),v=d.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-list"},[s("Scroll",{ref:"list",staticClass:"wrapper",attrs:{data:t.userList,"probe-type":t.probeType,listenscroll:t.listenScroll}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.userList&&t.userList.length>0,expression:"userList && userList.length > 0"}],staticClass:"list-wrapper"},[s("div",{staticClass:"control-wrapper border-bottom"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-play-circle"}})]),s("span",{staticClass:"desc",on:{click:t.playAll}},[t._v("播放全部（共"+t._s(t.userList.length)+"首）")]),s("div",{staticClass:"clear",on:{click:function(e){return e.stopPropagation(),t.confirm(e)}}},[t._v(t._s(t.deleteText))])]),s("ul",{ref:"wrapper",staticClass:"song-list"},t._l(t.userList,(function(e,n){return s("li",{key:e.id,staticClass:"song border-bottom",on:{click:function(s){return t.selectItem(e)}}},[s("div",{staticClass:"number"},[t._v(t._s(n+1))]),s("div",{staticClass:"right"},[s("div",{staticClass:"name"},[t._v(t._s(e.name))]),s("div",{staticClass:"singer"},[t._v("\n              "+t._s(e.singer)+"\n              "),s("span",{staticClass:"album"},[t._v("-"+t._s(e.album))])])]),s("svg",{staticClass:"icon i-switch",attrs:{"aria-hidden":"true"},on:{click:function(s){return s.stopPropagation(),t.showPopOver(e)}}},[s("use",{attrs:{"xlink:href":"#icon-switch"}})])])})),0)]),s("h2",{directives:[{name:"show",rawName:"v-show",value:0===t.userList.length,expression:"userList.length === 0"}],staticClass:"void"},[t._v(t._s(t.tips))])]),s("pop-menu",{ref:"popMenu",attrs:{showDelete:t.showDelete},on:{nextPlay:t.nextPlay,playNow:t.nowPlay,deleteOne:t.deleteOne}}),s("Confirm",{ref:"confirm",attrs:{text:"确定要清空所有播放记录吗"},on:{deleteAll:t.clear}})],1)},h=[],b=s("3ce5"),g=s("7978"),O=s("a32c"),y=s("0712");function w(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function j(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?w(s,!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):w(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var C={name:"userList",components:{Scroll:b["a"],PopMenu:g["a"],Confirm:O["a"]},mixins:[y["c"],y["e"]],props:{userList:{type:Array,default:function(){return[]}},showDelete:{type:Boolean,default:!1},deleteText:{type:String,default:"清空收藏"},tips:{type:String,default:"哈哈哈，这里是空的呢"}},data:function(){return{}},computed:j({},Object(a["mapGetters"])(["playList"])),methods:j({},Object(a["mapActions"])(["setTips"]),{confirm:function(){this.$refs.confirm.show()},clear:function(){this.$emit("clear"),this.$refs.confirm.hide(),this.setTips("已清空")},deleteOne:function(t){this.$emit("deleteOne",t)}})},_=C,P=(s("6240"),Object(f["a"])(_,m,h,!1,null,"d2360096",null)),k=P.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-list"},[s("Scroll",{directives:[{name:"show",rawName:"v-show",value:t.userList,expression:"userList"}],ref:"list",staticClass:"wrapper",attrs:{data:t.userList,"probe-type":t.probeType,listenscroll:t.listenScroll}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"list-wrapper"},[s("div",{staticClass:"control-wrapper border-bottom"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-play-circle"}})]),s("span",{staticClass:"desc",on:{click:t.playAll}},[t._v("播放全部（共"+t._s(t.userList.length)+"首）")])]),s("ul",{ref:"wrapper",staticClass:"song-list"},t._l(t.userList,(function(e,n){return s("li",{key:n,staticClass:"song border-bottom",on:{click:function(s){return t.selectItem(e)}}},[s("div",{staticClass:"number"},[t._v(t._s(n+1))]),s("div",{staticClass:"right"},[s("div",{staticClass:"name"},[t._v(t._s(e.name))]),s("div",{staticClass:"singer"},[t._v("\n              "+t._s(e.singer)+"\n              "),s("span",{staticClass:"album"},[t._v("-"+t._s(e.album))])])]),s("svg",{staticClass:"icon i-switch",attrs:{"aria-hidden":"true"},on:{click:function(s){return s.stopPropagation(),t.showPopOver(e)}}},[s("use",{attrs:{"xlink:href":"#icon-switch"}})])])})),0)]),s("h2",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"void"},[s("span",{staticClass:"toLogin",on:{click:t.toLogin}},[t._v("登录")]),t._v("才能找到你喜欢的歌曲呢\n    ")])]),s("pop-menu",{ref:"popMenu",attrs:{showDelete:!1},on:{nextPlay:t.nextPlay,playNow:t.nowPlay}})],1)},L=[];function S(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function D(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?S(s,!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):S(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var I={name:"userList",components:{Scroll:b["a"],PopMenu:g["a"]},mixins:[y["c"],y["e"]],props:{userList:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:D({},Object(a["mapGetters"])(["isLogin"])),methods:{toLogin:function(){this.$router.push({path:"/login"})}}},E=I,N=(s("ec80"),Object(f["a"])(E,x,L,!1,null,"3401a9e8",null)),T=N.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[t.isLogin?s("div",{staticClass:"header"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.userInfo.picUrl,expression:"userInfo.picUrl"}],staticClass:"pic",attrs:{alt:""}}),s("h1",{staticClass:"name"},[t._v(t._s(t.userInfo.name))]),s("p",{staticClass:"id"},[t._v(t._s(t.userInfo.id))]),s("div",{staticClass:"signin",on:{click:t.signin}},[t._v("签到")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"toLogout",on:{click:t.toLogout}},[t._v("退出登录")])]):s("div",{staticClass:"content"},[s("h2",{staticClass:"text"},[t._v("您还没有登录，赶快去登录吧")]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"toLogin",on:{click:t.toLogin}},[t._v("登录")])])])},A=[],U=s("7ded");function F(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function R(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?F(s,!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):F(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var H={name:"About",computed:R({},Object(a["mapGetters"])(["userInfo","isLogin"])),methods:R({},Object(a["mapMutations"])({setUserInfo:"SET_USER_INFO"}),{},Object(a["mapActions"])(["setTips"]),{toLogin:function(){this.$router.push({path:"/login"})},toLogout:function(){U["a"].logout(),this.setUserInfo(null),this.setTips("已为您退出登录")},signin:function(){var t=this;U["a"].signin().then((function(e){200===e.code?t.setTips(String("签到成功！经验+"+e.point)):t.setTips("不要重复签到哦")})).catch((function(){t.setTips("签到失败，可能已经签到过了")}))}})},M=H,G=(s("e659"),Object(f["a"])(M,$,A,!1,null,"60c054f8",null)),z=G.exports,B=s("42ba");function J(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function q(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?J(s,!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):J(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var K={name:"user",components:{SearchNav:o["a"],UserTab:v,UserList:k,UserRecommend:T,About:z},props:{},data:function(){return{list:[{text:"最近播放",icon:"#icon-history"},{text:"收藏夹",icon:"#icon-like"},{text:"个性推荐",icon:"#icon-listen"},{text:"关于 ",icon:"#icon-playlist"}],currentIndex:0,recommends:[]}},computed:q({},Object(a["mapGetters"])(["playHistory","favoriteList","isLogin","userInfo"]),{title:function(){return this.isLogin?"".concat(this.userInfo.name):"你好呀"}}),watch:{currentIndex:function(t){var e=this;2===t&&0===this.recommends.length&&B["a"].getRecommend().then((function(t){e.setRecommends(t)})).catch((function(t){console.log(t)}))}},created:function(){var t=this;U["a"].getLoginStatus().then((function(e){if(200===e.code){var s=e.profile,n={name:s.nickname,id:s.userId,picUrl:s.avatarUrl};t.setUserInfo(n)}})).catch((function(t){console.log(t+"还没有登录")}))},methods:q({},Object(a["mapMutations"])({setUserInfo:"SET_USER_INFO",setLoading:"SET_LOADING"}),{},Object(a["mapActions"])(["clearPlayHistory","deleteOnePlayHistory","cancelFavorite","clearAllFavorite"]),{selectItem:function(t){this.currentIndex=t},clearHistory:function(){this.clearPlayHistory()},clearFavorite:function(){this.clearAllFavorite()},deleteOneHistory:function(t){this.deleteOnePlayHistory(t)},deleteOneFavorite:function(t){this.cancelFavorite(t)},setRecommends:function(t){var e=this,s=t.recommend;s.forEach((function(t){var s=t.id,n=t.name,r=t.album.picUrl,i=t.album.name,a=t.album.id,o=t.artists?t.artists[0].name:"";e.recommends.push({id:s,name:n,picUrl:r,album:i,albumId:a,singer:o})}))}})},Q=K,V=(s("3a1d"),Object(f["a"])(Q,n,r,!1,null,"b411db6e",null));e["default"]=V.exports},"76f3":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search-bar"},[s("input",{staticClass:"input",attrs:{placeholder:t.placeholder,type:"text",readonly:""},on:{click:t.clickInput}}),s("svg",{staticClass:"icon souso",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-sousuo"}})])])},r=[],i=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),a=s("5880");function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(s,!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var l={name:"",components:{},props:{placeholder:{type:String,default:"搜歌手，搜歌曲"}},computed:c({},Object(a["mapGetters"])(["showFooter","query"])),methods:{clickInput:function(){this.$router.push({path:"/search"})}}},u=l,p=(s("db76"),s("2877")),f=Object(p["a"])(u,n,r,!1,null,"7d31cde4",null);e["a"]=f.exports},7978:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"pop-menu",on:{click:[t.hide,function(t){t.stopPropagation()}]}},[s("div",{staticClass:"list-wrapper",on:{click:function(t){t.stopPropagation()}}},[s("Scroll",{ref:"listContent",staticClass:"list-content",attrs:{data:t.scrollData}},[s("div",{staticClass:"item-wrapper"},[s("div",{staticClass:"header  item border-bottom",on:{click:t.play}},[t._v("歌曲："+t._s(t.song.name))]),s("div",{staticClass:"next-play item border-bottom",on:{click:t.playNext}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-play-circle"}})]),t._v("下一首播放\n          ")]),s("div",{staticClass:"like item border-bottom",on:{click:function(e){return t.toggleFavorite(t.song)}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":t.getFavoriteIcon(t.song)}})]),t._v("喜欢\n          ")]),s("div",{staticClass:"singer item border-bottom",on:{click:function(e){return t.toSinger(t.song)}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-user"}})]),t._v("歌手："+t._s(t.song.singer)+"\n          ")]),s("div",{staticClass:"singer item border-bottom"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-album"}})]),t._v("专辑："+t._s(t.song.album)+"\n          ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showDelete,expression:"showDelete"}],staticClass:"delete item border-bottom",on:{click:function(e){return t.deleteOne(t.song)}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-close"}})]),t._v("删除\n          ")])])])],1)])])},r=[],i=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),a=s("3ce5"),o=s("0712"),c=s("5880");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(s,!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var p={name:"popMenu",components:{Scroll:a["a"]},mixins:[o["a"]],props:{showDelete:{type:Boolean,default:!1}},data:function(){return{isShow:!1,song:[]}},computed:{scrollData:function(){var t=[this.song];return t}},watch:{},methods:u({},Object(c["mapActions"])(["setTips"]),{show:function(t){this.isShow=!0,this.song=t},hide:function(){this.isShow=!1},playNext:function(){this.$emit("nextPlay",this.song),this.setTips("已经将一首歌曲添加到播放队列")},play:function(){this.$emit("playNow",this.song)},deleteOne:function(t){this.hide(),this.$emit("deleteOne",t),this.setTips("已经删除一首歌曲啦")}})},f=p,d=(s("aaee"),s("2877")),v=Object(d["a"])(f,n,r,!1,null,"1010f241",null);e["a"]=v.exports},"7ded":function(t,e,s){"use strict";var n=s("d225"),r=s("b0b4"),i=s("e1d2"),a=function(){function t(){Object(n["a"])(this,t)}return Object(r["a"])(t,null,[{key:"login",value:function(t,e){return Object(i["a"])("login",{params:{phone:t,password:e}})}},{key:"getLoginStatus",value:function(){return Object(i["a"])("loginStatus")}},{key:"refreshLogin",value:function(){return Object(i["a"])("loginRefresh")}},{key:"logout",value:function(){return Object(i["a"])("logout")}},{key:"signin",value:function(){return Object(i["a"])("signin")}}]),t}();e["a"]=a},"8d21":function(t,e,s){"use strict";var n=s("31a6"),r=s.n(n);r.a},aaee:function(t,e,s){"use strict";var n=s("2941"),r=s.n(n);r.a},cb22:function(t,e,s){},cb65:function(t,e,s){},d550:function(t,e,s){},db76:function(t,e,s){"use strict";var n=s("cb22"),r=s.n(n);r.a},e659:function(t,e,s){"use strict";var n=s("d550"),r=s.n(n);r.a},ec80:function(t,e,s){"use strict";var n=s("3622"),r=s.n(n);r.a},ed50:function(t,e,s){}}]);
//# sourceMappingURL=user.68d9237d.js.map