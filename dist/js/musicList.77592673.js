(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["musicList"],{2941:function(t,e,s){},"42ba":function(t,e,s){"use strict";var n=s("d225"),i=s("b0b4"),a=s("e1d2"),o=function(){function t(){Object(n["a"])(this,t)}return Object(i["a"])(t,null,[{key:"getBanner",value:function(){return Object(a["a"])("banner")}},{key:"getRecommend",value:function(){return Object(a["a"])("recommend")}},{key:"getRecommendSongs",value:function(){return Object(a["a"])("personalized",{params:{limit:6}})}},{key:"getNewSong",value:function(){return Object(a["a"])("newSong",{})}},{key:"getDisc",value:function(t){return Object(a["a"])("disc",{params:{id:t}})}},{key:"getNewDisc",value:function(){return Object(a["a"])("newDisc",{params:{order:"new",limit:6}})}},{key:"getResource",value:function(){return Object(a["a"])("resource",{params:{limit:6}})}},{key:"getAllSongList",value:function(t,e,s){return Object(a["a"])("newDisc",{params:{limit:10,cat:t,offset:e,order:s}})}},{key:"getCatList",value:function(){return Object(a["a"])("catList")}},{key:"getComment",value:function(t,e){return Object(a["a"])("comment",{params:{id:t,offset:e}})}}]),t}();e["a"]=o},7978:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"pop-menu",on:{click:[t.hide,function(t){t.stopPropagation()}]}},[s("div",{staticClass:"list-wrapper",on:{click:function(t){t.stopPropagation()}}},[s("Scroll",{ref:"listContent",staticClass:"list-content",attrs:{data:t.scrollData}},[s("div",{staticClass:"item-wrapper"},[s("div",{staticClass:"header  item border-bottom",on:{click:t.play}},[t._v("歌曲："+t._s(t.song.name))]),s("div",{staticClass:"next-play item border-bottom",on:{click:t.playNext}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-play-circle"}})]),t._v("下一首播放\n          ")]),s("div",{staticClass:"like item border-bottom",on:{click:function(e){return t.toggleFavorite(t.song)}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":t.getFavoriteIcon(t.song)}})]),t._v("喜欢\n          ")]),s("div",{staticClass:"singer item border-bottom",on:{click:function(e){return t.toSinger(t.song)}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-user"}})]),t._v("歌手："+t._s(t.song.singer)+"\n          ")]),s("div",{staticClass:"singer item border-bottom"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-album"}})]),t._v("专辑："+t._s(t.song.album)+"\n          ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showDelete,expression:"showDelete"}],staticClass:"delete item border-bottom",on:{click:function(e){return t.deleteOne(t.song)}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-close"}})]),t._v("删除\n          ")])])])],1)])])},i=[],a=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),o=s("3ce5"),r=s("0712"),c=s("5880");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function m(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(s,!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var u={name:"popMenu",components:{Scroll:o["a"]},mixins:[r["a"]],props:{showDelete:{type:Boolean,default:!1}},data:function(){return{isShow:!1,song:[]}},computed:{scrollData:function(){var t=[this.song];return t}},watch:{},methods:m({},Object(c["mapActions"])(["setTips"]),{show:function(t){this.isShow=!0,this.song=t},hide:function(){this.isShow=!1},playNext:function(){this.$emit("nextPlay",this.song),this.setTips("已经将一首歌曲添加到播放队列")},play:function(){this.$emit("playNow",this.song)},deleteOne:function(t){this.hide(),this.$emit("deleteOne",t),this.setTips("已经删除一首歌曲啦")}})},h=u,d=(s("aaee"),s("2877")),p=Object(d["a"])(h,n,i,!1,null,"1010f241",null);e["a"]=p.exports},"86a1":function(t,e,s){"use strict";var n=s("a904"),i=s.n(n);i.a},a904:function(t,e,s){},aaee:function(t,e,s){"use strict";var n=s("2941"),i=s.n(n);i.a},d9b3:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"slide-left"}},[s("div",{ref:"musicList",staticClass:"music-list"},[s("header",{ref:"header"},[s("svg",{staticClass:"icon i-back",attrs:{"aria-hidden":"true"},on:{click:t.goBack}},[s("use",{attrs:{"xlink:href":"#icon-arrowleft"}})]),s("h1",{staticClass:"title"},[t._v(t._s(t.headerTitle))])]),s("Scroll",{ref:"list",staticClass:"wrapper",attrs:{data:t.songs,"probe-type":t.probeType,listenscroll:t.listenScroll},on:{scroll:t.scroll}},[s("div",{staticClass:"list-wrapper"},[s("div",{ref:"bg",staticClass:"bg",style:t.bgStyle},[s("div",{staticClass:"filter"}),s("h1",{staticClass:"title"},[t._v(t._s(t.title))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.showComment,expression:"!showComment"}],staticClass:"song-list-wrapper"},[s("svg",{staticClass:"icon i-comment",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.stopPropagation(),t.toggleComment(e)}}},[s("use",{attrs:{"xlink:href":"#icon-comment"}})]),s("div",{staticClass:"control-wrapper border-bottom"},[s("svg",{staticClass:"icon i-play",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-play-circle"}})]),s("span",{staticClass:"desc",on:{click:t.playAll}},[t._v("播放全部（共"+t._s(t.songs.length)+"首）")])]),s("ul",{ref:"wrapper",staticClass:"song-list"},t._l(t.songs,(function(e,n){return s("li",{key:e.id,staticClass:"song border-bottom",on:{click:function(s){return t.selectItem(e,n)}}},[s("div",{staticClass:"number"},[t._v(t._s(n+1))]),s("div",{staticClass:"right"},[s("div",{staticClass:"name"},[t._v(t._s(e.name))]),s("div",{staticClass:"singer"},[t._v("\n                  "+t._s(e.singer)+"\n                  "),s("span",{staticClass:"album"},[t._v("-"+t._s(e.album))])])]),s("svg",{staticClass:"icon i-switch",attrs:{"aria-hidden":"true"},on:{click:function(s){return s.stopPropagation(),t.showPopOver(e)}}},[s("use",{attrs:{"xlink:href":"#icon-switch"}})])])})),0)]),s("transition",{attrs:{name:"comment-show"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showComment,expression:"showComment"}],staticClass:"comment"},[s("svg",{staticClass:"icon i-song",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.stopPropagation(),t.toggleComment(e)}}},[s("use",{attrs:{"xlink:href":"#icon-close"}})]),s("h3",{directives:[{name:"show",rawName:"v-show",value:t.hotComments&&t.hotComments.length>0,expression:"hotComments && hotComments.length > 0"}],staticClass:"hot-title"},[t._v("热门评论("+t._s(t.hotComments.length)+")")]),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.hotComments&&t.hotComments.length>0,expression:"hotComments && hotComments.length > 0"}],staticClass:"hot-list"},t._l(t.hotComments,(function(e,n){return s("li",{key:n,staticClass:"hot"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.user.avatarUrl,expression:"comment.user.avatarUrl"}],staticClass:"pic",attrs:{alt:""}}),s("div",{staticClass:"right border-bottom"},[s("div",{staticClass:"nickname"},[t._v(t._s(e.user.nickname))]),s("p",{staticClass:"content"},[t._v(t._s(e.content))])]),s("div",{staticClass:"likedCount"},[s("span",{staticClass:"like"},[t._v(t._s(e.likedCount))]),s("svg",{staticClass:"icon i-like",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-like1"}})])])])})),0),s("h3",{directives:[{name:"show",rawName:"v-show",value:t.comments&&t.comments.length>0,expression:"comments && comments.length > 0"}],staticClass:"new-title"},[t._v("最新评论("+t._s(t.comments.length)+")")]),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.comments&&t.comments.length>0,expression:"comments && comments.length > 0"}],staticClass:"hot-list"},t._l(t.comments,(function(e,n){return s("li",{key:n,staticClass:"hot"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.user.avatarUrl,expression:"comment.user.avatarUrl"}],staticClass:"pic",attrs:{alt:""}}),s("div",{staticClass:"right border-bottom"},[s("div",{staticClass:"nickname"},[t._v(t._s(e.user.nickname))]),s("p",{staticClass:"content"},[t._v(t._s(e.content))])]),s("div",{staticClass:"likedCount"},[s("span",{staticClass:"like"},[t._v(t._s(e.likedCount))]),s("svg",{staticClass:"icon i-like",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-like1"}})])])])})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.comments.length&&0===t.hotComments.length,expression:"comments.length === 0 && hotComments.length === 0"}],staticClass:"void"},[t._v("暂时还没有评论")])])])],1)]),s("pop-menu",{ref:"popMenu",on:{nextPlay:t.nextPlay}})],1)])},i=[],a=(s("8e6e"),s("ac6a"),s("456d"),s("7f7f"),s("bd86")),o=(s("c5f6"),s("3ce5")),r=s("0712"),c=s("7978"),l=s("5880"),m=s("42ba");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function h(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(s,!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={name:"MusicList",components:{Scroll:o["a"],PopMenu:c["a"]},mixins:[r["b"]],props:{songs:{type:Array,default:function(){return[]}},title:{type:String,default:"歌单"},picUrl:{type:String},id:{type:Number}},data:function(){return{scrollY:0,headerTitle:"",showComment:!1,comments:[],hotComments:[]}},computed:h({},Object(l["mapGetters"])(["currentIndex"]),{bgStyle:function(){return"background-image:url(".concat(this.picUrl,")")}}),watch:{scrollY:function(t){var e=Math.abs(t/this.imageHeight);t<this.minTranslateHeight?this.headerTitle=this.title:this.headerTitle="歌单",this.$refs.header.style.background=t<0?"rgba(0,0,0, ".concat(e,")"):"rgba(0,0,0,0)"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){var t=this;this.$nextTick((function(){t.imageHeight=t.$refs.bg.clientHeight,t.minTranslateHeight=44-t.imageHeight}))},methods:h({},Object(l["mapMutations"])({setLoading:"SET_LOADING"}),{},Object(l["mapActions"])(["insertSongNext","insertSong","randomPlay","selectPlay"]),{goBack:function(){this.$router.go(-1)},scroll:function(t){this.scrollY=t.y},selectItem:function(t,e){this.$emit("select",t,e)},playAll:function(){this.randomPlay({list:this.songs})},refresh:function(){this.$refs.list.refresh()},showPopOver:function(t){this.$refs.popMenu.show(t)},nextPlay:function(t){-1!==this.currentIndex?this.insertSongNext(t):this.insertSong(t)},toggleComment:function(){var t=this;this.showComment||m["a"].getComment(this.id).then((function(e){t.comments=e.comments,t.hotComments=e.hotComments})),this.showComment=!this.showComment}}),beforeRouteEnter:function(t,e,s){e.name?s():s((function(t){t.id||t.$router.go(-1)}))}},p=d,v=(s("86a1"),s("2877")),g=Object(v["a"])(p,n,i,!1,null,"161d5066",null);e["default"]=g.exports}}]);
//# sourceMappingURL=musicList.77592673.js.map