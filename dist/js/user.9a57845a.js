(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"03c1":function(t,e,n){},"0893":function(t,e,n){"use strict";var s=n("84cc"),r=n.n(s);r.a},"23f1":function(t,e,n){},"42ba":function(t,e,n){"use strict";var s=n("d225"),r=n("b0b4"),i=n("e1d2"),a=function(){function t(){Object(s["a"])(this,t)}return Object(r["a"])(t,null,[{key:"getBanner",value:function(){return Object(i["a"])("banner")}},{key:"getRecommend",value:function(){return Object(i["a"])("recommend")}},{key:"getRecommendSongs",value:function(){return Object(i["a"])("personalized",{params:{limit:6}})}},{key:"getNewSong",value:function(){return Object(i["a"])("newSong",{})}},{key:"getDisc",value:function(t){return Object(i["a"])("disc",{params:{id:t}})}},{key:"getNewDisc",value:function(){return Object(i["a"])("newDisc",{params:{order:"new",limit:6}})}},{key:"getResource",value:function(){return Object(i["a"])("resource",{params:{limit:6}})}},{key:"getAllSongList",value:function(t,e,n){return Object(i["a"])("newDisc",{params:{limit:10,cat:t,offset:e,order:n}})}},{key:"getCatList",value:function(){return Object(i["a"])("catList")}},{key:"getComment",value:function(t,e){return Object(i["a"])("comment",{params:{id:t,offset:e}})}}]),t}();e["a"]=a},"70d6":function(t,e,n){},7368:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user"},[n("div",{staticClass:"header"},[n("h2",{staticClass:"title"},[t._v(t._s(t.title))]),n("search-nav")],1),n("div",{staticClass:"tab-wrapper"},[n("user-tab",{attrs:{list:t.list,currentIndex:t.currentIndex},on:{select:t.selectItem}})],1),n("div",{staticClass:"content"},[0==t.currentIndex?n("div",{staticClass:"play-history-wrapper"},[n("user-list",{attrs:{userList:t.playHistory,showDelete:!0,deleteText:"清空历史"},on:{clear:t.clearHistory,deleteOne:t.deleteOneHistory}})],1):1==t.currentIndex?n("div",{staticClass:"like-wrapper"},[n("user-list",{attrs:{userList:t.favoriteList},on:{clear:t.clearFavorite,deleteOne:t.deleteOneFavorite}})],1):2==t.currentIndex?n("div",{staticClass:"random-wrapepr"},[n("UserRecommend",{attrs:{userList:t.recommends}})],1):n("div",{staticClass:"about-wrapper"},[n("About")],1)])])},r=[],i=(n("8e6e"),n("456d"),n("ac6a"),n("7f7f"),n("bd86")),a=n("2f62"),o=n("76f3"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"tab"},t._l(t.list,(function(e,s){return n("li",{key:e.text,staticClass:"item",class:{active:t.currentIndex===s},on:{click:function(e){return t.selectItem(s)}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.icon}})]),n("div",{staticClass:"text"},[t._v(t._s(e.text))])])})),0)},l=[],u=(n("c5f6"),{name:"",components:{},props:{list:{type:Array,default:function(){return[]}},currentIndex:{type:Number,default:0}},data:function(){return{}},watch:{},computed:{},methods:{selectItem:function(t){this.$emit("select",t)}},created:function(){},mounted:function(){}}),p=u,f=(n("f3e2"),n("2877")),d=Object(f["a"])(p,c,l,!1,null,"2b9064b6",null),v=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-list"},[n("Scroll",{ref:"list",staticClass:"wrapper",attrs:{data:t.userList,"probe-type":t.probeType,listenscroll:t.listenScroll}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.userList&&t.userList.length>0,expression:"userList && userList.length > 0"}],staticClass:"list-wrapper"},[n("div",{staticClass:"control-wrapper border-bottom"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-play-circle"}})]),n("span",{staticClass:"desc",on:{click:t.playAll}},[t._v("播放全部（共"+t._s(t.userList.length)+"首）")]),n("div",{staticClass:"clear",on:{click:function(e){return e.stopPropagation(),t.confirm(e)}}},[t._v(t._s(t.deleteText))])]),n("ul",{ref:"wrapper",staticClass:"song-list"},t._l(t.userList,(function(e,s){return n("li",{key:e.id,staticClass:"song border-bottom",on:{click:function(n){return t.selectItem(e)}}},[n("div",{staticClass:"number"},[t._v(t._s(s+1))]),n("div",{staticClass:"right"},[n("div",{staticClass:"name"},[t._v(t._s(e.name))]),n("div",{staticClass:"singer"},[t._v("\n              "+t._s(e.singer)+" "),n("span",{staticClass:"album"},[t._v("-"+t._s(e.album))])])]),n("svg",{staticClass:"icon i-switch",attrs:{"aria-hidden":"true"},on:{click:function(n){return n.stopPropagation(),t.showPopOver(e)}}},[n("use",{attrs:{"xlink:href":"#icon-switch"}})])])})),0)]),n("h2",{directives:[{name:"show",rawName:"v-show",value:0===t.userList.length,expression:"userList.length === 0"}],staticClass:"void"},[t._v(t._s(t.tips))])]),n("pop-menu",{ref:"popMenu",attrs:{showDelete:t.showDelete},on:{nextPlay:t.nextPlay,playNow:t.nowPlay,deleteOne:t.deleteOne}}),n("Confirm",{ref:"confirm",attrs:{text:"确定要清空所有播放记录吗"},on:{deleteAll:t.clear}})],1)},m=[],b=n("3ce5"),g=n("7978"),O=n("a32c"),y=n("0712");function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var C={name:"userList",components:{Scroll:b["a"],PopMenu:g["a"],Confirm:O["a"]},mixins:[y["c"],y["e"]],props:{userList:{type:Array,default:function(){return[]}},showDelete:{type:Boolean,default:!1},deleteText:{type:String,default:"清空收藏"},tips:{type:String,default:"哈哈哈，这里是空的呢"}},data:function(){return{}},watch:{},computed:j({},Object(a["c"])(["playList"])),methods:j({},Object(a["b"])(["setTips"]),{confirm:function(){this.$refs.confirm.show()},clear:function(){this.$emit("clear"),this.$refs.confirm.hide(),this.setTips("已清空")},deleteOne:function(t){this.$emit("deleteOne",t)}})},_=C,P=(n("d030"),Object(f["a"])(_,h,m,!1,null,"32f27a32",null)),k=P.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-list"},[n("Scroll",{directives:[{name:"show",rawName:"v-show",value:t.userList,expression:"userList"}],ref:"list",staticClass:"wrapper",attrs:{data:t.userList,"probe-type":t.probeType,listenscroll:t.listenScroll}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"list-wrapper"},[n("div",{staticClass:"control-wrapper border-bottom"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-play-circle"}})]),n("span",{staticClass:"desc",on:{click:t.playAll}},[t._v("播放全部（共"+t._s(t.userList.length)+"首）")])]),n("ul",{ref:"wrapper",staticClass:"song-list"},t._l(t.userList,(function(e,s){return n("li",{key:s,staticClass:"song border-bottom",on:{click:function(n){return t.selectItem(e)}}},[n("div",{staticClass:"number"},[t._v(t._s(s+1))]),n("div",{staticClass:"right"},[n("div",{staticClass:"name"},[t._v(t._s(e.name))]),n("div",{staticClass:"singer"},[t._v("\n              "+t._s(e.singer)+" "),n("span",{staticClass:"album"},[t._v("-"+t._s(e.album))])])]),n("svg",{staticClass:"icon i-switch",attrs:{"aria-hidden":"true"},on:{click:function(n){return n.stopPropagation(),t.showPopOver(e)}}},[n("use",{attrs:{"xlink:href":"#icon-switch"}})])])})),0)]),n("h2",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"void"},[n("span",{staticClass:"toLogin",on:{click:t.toLogin}},[t._v("登录")]),t._v("才能找到你喜欢的歌曲呢\n    ")])]),n("pop-menu",{ref:"popMenu",attrs:{showDelete:!1},on:{nextPlay:t.nextPlay,playNow:t.nowPlay}})],1)},L=[];function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var I={name:"userList",components:{Scroll:b["a"],PopMenu:g["a"]},mixins:[y["c"],y["e"]],props:{userList:{type:Array,default:function(){return[]}}},data:function(){return{}},watch:{},computed:D({},Object(a["c"])(["isLogin"])),methods:{toLogin:function(){this.$router.push({path:"/login"})}}},E=I,N=(n("0893"),Object(f["a"])(E,x,L,!1,null,"f86e597e",null)),T=N.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[t.isLogin?n("div",{staticClass:"header"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.userInfo.picUrl,expression:"userInfo.picUrl"}],staticClass:"pic",attrs:{alt:""}}),n("h1",{staticClass:"name"},[t._v(t._s(t.userInfo.name))]),n("p",{staticClass:"id"},[t._v(t._s(t.userInfo.id))]),n("div",{staticClass:"signin",on:{click:t.signin}},[t._v("签到")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"toLogout",on:{click:t.toLogout}},[t._v("退出登录")])]):n("div",{staticClass:"content"},[n("h2",{staticClass:"text"},[t._v("您还没有登录，赶快去登录吧")]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"toLogin",on:{click:t.toLogin}},[t._v("登录")])])])},U=[],F=n("7ded");function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var H={name:"",components:{},props:{},data:function(){return{}},watch:{},computed:R({},Object(a["c"])(["userInfo","isLogin"])),methods:R({},Object(a["d"])({setUserInfo:"SET_USER_INFO"}),{},Object(a["b"])(["setTips"]),{toLogin:function(){this.$router.push({path:"/login"})},toLogout:function(){F["a"].logout(),this.setUserInfo(null),this.setTips("已为您退出登录")},signin:function(){var t=this;F["a"].signin().then((function(e){200===e.code?t.setTips("签到成功！经验+"+e.point):t.setTips("不要重复签到哦")})).catch((function(){t.setTips("签到失败，可能已经签到过了")}))}}),created:function(){},mounted:function(){}},M=H,z=(n("fa28"),Object(f["a"])(M,$,U,!1,null,"7454bb90",null)),B=z.exports,J=n("42ba");function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var K={name:"user",components:{SearchNav:o["a"],UserTab:v,UserList:k,UserRecommend:T,About:B},props:{},data:function(){return{list:[{text:"最近播放",icon:"#icon-history"},{text:"收藏夹",icon:"#icon-like"},{text:"个性推荐",icon:"#icon-listen"},{text:"关于 ",icon:"#icon-playlist"}],currentIndex:0,recommends:[]}},watch:{currentIndex:function(t){var e=this;2===t&&0===this.recommends.length&&J["a"].getRecommend().then((function(t){e.setRecommends(t)})).catch((function(t){console.log(t)}))}},computed:G({},Object(a["c"])(["playHistory","favoriteList","isLogin","userInfo"]),{title:function(){return this.isLogin?"".concat(this.userInfo.name):"你好呀"}}),methods:G({},Object(a["d"])({setUserInfo:"SET_USER_INFO",setLoading:"SET_LOADING"}),{},Object(a["b"])(["clearPlayHistory","deleteOnePlayHistory","cancelFavorite","clearAllFavorite"]),{selectItem:function(t){this.currentIndex=t},clearHistory:function(){this.clearPlayHistory()},clearFavorite:function(){this.clearAllFavorite()},deleteOneHistory:function(t){this.deleteOnePlayHistory(t)},deleteOneFavorite:function(t){this.cancelFavorite(t)},setRecommends:function(t){var e=this,n=t.recommend;n.forEach((function(t){var n=t.id,s=t.name,r=t.album.picUrl,i=t.album.name,a=t.album.id,o=t.artists?t.artists[0].name:"";e.recommends.push({id:n,name:s,picUrl:r,album:i,albumId:a,singer:o})}))}}),created:function(){var t=this;F["a"].getLoginStatus().then((function(e){if(200===e.code){var n=e.profile,s={name:n.nickname,id:n.userId,picUrl:n.avatarUrl};t.setUserInfo(s)}})).catch((function(t){console.log(t+"还没有登录")}))}},Q=K,V=(n("dd9d"),Object(f["a"])(Q,s,r,!1,null,"26f7e1c6",null));e["default"]=V.exports},"76f3":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-bar"},[n("input",{staticClass:"input",attrs:{type:"text",placeholder:t.placeholder,readonly:""},on:{click:t.clickInput}}),n("svg",{staticClass:"icon souso",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-sousuo"}})])])},r=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),a=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={name:"",components:{},props:{placeholder:{type:String,default:"搜歌手，搜歌曲"}},data:function(){return{}},watch:{},computed:c({},Object(a["c"])(["showFooter","query"])),methods:{clickInput:function(){this.$router.push({path:"/search"})}}},u=l,p=(n("a007"),n("2877")),f=Object(p["a"])(u,s,r,!1,null,"3798c977",null);e["a"]=f.exports},7978:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"pop-menu",on:{click:[t.hide,function(t){t.stopPropagation()}]}},[n("div",{staticClass:"list-wrapper",on:{click:function(t){t.stopPropagation()}}},[n("Scroll",{ref:"listContent",staticClass:"list-content",attrs:{data:t.scrollData}},[n("div",{staticClass:"item-wrapper"},[n("div",{staticClass:"header  item border-bottom",on:{click:t.play}},[t._v("\n            歌曲："+t._s(t.song.name)+"\n          ")]),n("div",{staticClass:"next-play item border-bottom",on:{click:t.playNext}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-play-circle"}})]),t._v("下一首播放\n          ")]),n("div",{staticClass:"like item border-bottom",on:{click:function(e){return t.toggleFavorite(t.song)}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":t.getFavoriteIcon(t.song)}})]),t._v("喜欢\n          ")]),n("div",{staticClass:"singer item border-bottom",on:{click:function(e){return t.toSinger(t.song)}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-user"}})]),t._v("歌手："+t._s(t.song.singer)+"\n          ")]),n("div",{staticClass:"singer item border-bottom"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-album"}})]),t._v("专辑："+t._s(t.song.album)+"\n          ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showDelete,expression:"showDelete"}],staticClass:"delete item border-bottom",on:{click:function(e){return t.deleteOne(t.song)}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-close"}})]),t._v("删除\n          ")])])])],1)])])},r=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),a=n("3ce5"),o=n("0712"),c=n("2f62");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={name:"popMenu",components:{Scroll:a["a"]},mixins:[o["a"]],props:{showDelete:{type:Boolean,default:!1}},data:function(){return{isShow:!1,song:[]}},watch:{},computed:{scrollData:function(){var t=[this.song];return t}},methods:u({},Object(c["b"])(["setTips"]),{show:function(t){this.isShow=!0,this.song=t},hide:function(){this.isShow=!1},playNext:function(){this.$emit("nextPlay",this.song),this.setTips("已经将一首歌曲添加到播放队列")},play:function(){this.$emit("playNow",this.song)},deleteOne:function(t){this.hide(),this.$emit("deleteOne",t),this.setTips("已经删除一首歌曲啦")}}),created:function(){},mounted:function(){}},f=p,d=(n("cf63"),n("2877")),v=Object(d["a"])(f,s,r,!1,null,"3221c0c0",null);e["a"]=v.exports},"7ded":function(t,e,n){"use strict";var s=n("d225"),r=n("b0b4"),i=n("e1d2"),a=function(){function t(){Object(s["a"])(this,t)}return Object(r["a"])(t,null,[{key:"login",value:function(t,e){return Object(i["a"])("login",{params:{phone:t,password:e}})}},{key:"getLoginStatus",value:function(){return Object(i["a"])("loginStatus")}},{key:"refreshLogin",value:function(){return Object(i["a"])("loginRefresh")}},{key:"logout",value:function(){return Object(i["a"])("logout")}},{key:"signin",value:function(){return Object(i["a"])("signin")}}]),t}();e["a"]=a},"84cc":function(t,e,n){},"9d8a":function(t,e,n){},a007:function(t,e,n){"use strict";var s=n("70d6"),r=n.n(s);r.a},b6ac:function(t,e,n){},cf63:function(t,e,n){"use strict";var s=n("b6ac"),r=n.n(s);r.a},d030:function(t,e,n){"use strict";var s=n("d59d"),r=n.n(s);r.a},d59d:function(t,e,n){},dd9d:function(t,e,n){"use strict";var s=n("03c1"),r=n.n(s);r.a},f3e2:function(t,e,n){"use strict";var s=n("9d8a"),r=n.n(s);r.a},fa28:function(t,e,n){"use strict";var s=n("23f1"),r=n.n(s);r.a}}]);
//# sourceMappingURL=user.9a57845a.js.map