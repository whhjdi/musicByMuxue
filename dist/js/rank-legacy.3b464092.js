(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["rank"],{"0ab3":function(t,e,r){"use strict";var n=r("26a1"),s=r.n(n);s.a},"22e2":function(t,e,r){},"26a1":function(t,e,r){},4729:function(t,e,r){},6534:function(t,e,r){"use strict";var n=r("22e2"),s=r.n(n);s.a},"76f3":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-bar"},[r("input",{staticClass:"input",attrs:{type:"text",placeholder:t.placeholder,readonly:""},on:{click:t.clickInput}}),r("svg",{staticClass:"icon souso",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-sousuo"}})])])},s=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),o=r("5880");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={name:"",components:{},props:{placeholder:{type:String,default:"搜歌手，搜歌曲"}},data:function(){return{}},watch:{},computed:c({},Object(o["mapGetters"])(["showFooter","query"])),methods:{clickInput:function(){this.$router.push({path:"/search"})}}},u=l,p=(r("6534"),r("2877")),f=Object(p["a"])(u,n,s,!1,null,"629a2112",null);e["a"]=f.exports},"948d":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"slide"}},[r("div",{staticClass:"rank"},[r("search-bar"),r("div",{staticClass:"rank-list-wrapper"},[r("rank-list",{ref:"rankList",attrs:{topList:t.topList,otherList:t.otherList},on:{selectTopList:t.chooseItem}})],1),r("router-view",{ref:"musicList",attrs:{title:t.title,songs:t.songs,picUrl:t.picUrl,id:t.id},on:{select:t.selectItem,play:t.playAll}})],1)])},s=[],i=(r("8e6e"),r("456d"),r("ac6a"),r("bd86")),o=(r("7f7f"),r("ed08")),a=r("d225"),c=r("b0b4"),l=r("e1d2"),u=function(){function t(){Object(a["a"])(this,t)}return Object(c["a"])(t,null,[{key:"getTopList",value:function(){return Object(l["a"])("topList")}},{key:"getTopListDetail",value:function(t){return Object(l["a"])("topListDetail",{params:{idx:t}})}}]),t}(),p=u,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Scroll",{staticClass:"rank-list",attrs:{data:t.topList}},[r("div",[r("ul",{staticClass:"list-wrapper"},t._l(t.topList,(function(e){return r("li",{key:"top_list_"+e.id,staticClass:"list border-bottom",on:{click:function(r){return t.selectTopList(e)}}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.coverImgUrl,expression:"item.coverImgUrl"}],staticClass:"pic",attrs:{alt:""}}),r("div",{staticClass:"updateFrequency"},[t._v(t._s(e.updateFrequency))]),r("ul",{staticClass:"song-list"},t._l(e.tracks,(function(e,n){return r("li",{key:e.first,staticClass:"song"},[t._v("\n            "+t._s(n+1)+"."+t._s(e.first)+"-"+t._s(e.second)+"\n          ")])})),0)])})),0),r("h2",{staticClass:"other-title"},[t._v("其他榜单")]),r("ul",{staticClass:"other-wrapper"},t._l(t.otherList,(function(e){return r("li",{key:"other_list_"+e.id,staticClass:"other-list border-bottom",on:{click:function(r){return t.selectTopList(e)}}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.coverImgUrl,expression:"item.coverImgUrl"}],staticClass:"other-pic",attrs:{alt:""}}),r("div",{staticClass:"title"},[t._v(t._s(e.name))])])})),0)])])},h=[],d=r("3ce5"),b={name:"",components:{Scroll:d["a"]},props:{topList:{type:Array,default:function(){return[]}},otherList:{type:Array,default:function(){return[]}}},data:function(){return{}},watch:{},computed:{},methods:{selectTopList:function(t){this.$emit("selectTopList",t)}},created:function(){},mounted:function(){}},m=b,O=(r("d8bd"),r("2877")),v=Object(O["a"])(m,f,h,!1,null,"015639e2",null),y=v.exports,g=r("5880"),L=r("76f3");function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var w=["云音乐新歌榜","云音乐热歌榜","网易原创歌曲榜","云音乐飙升榜","云音乐电音榜","UK排行榜周榜","美国Billboard周榜","KTV嗨榜","iTunes榜","Hit FM Top榜","日本Oricon周榜","韩国Melon排行榜周榜","韩国Mnet排行榜周榜","韩国Melon原声周榜","中国TOP排行榜(港台榜)","中国TOP排行榜(内地榜)","香港电台中文歌曲龙虎榜","华语金曲榜","中国嘻哈榜","法国 NRJ EuroHot 30周榜","台湾Hito排行榜","Beatport全球电子舞曲榜","云音乐ACG音乐榜","云音乐嘻哈榜"],_={name:"rank",components:{RankList:y,SearchBar:L["a"]},props:{},data:function(){return{topList:[],otherList:[],songs:[],topDetailList:[]}},watch:{},computed:{title:function(){return this.topDetailList.name},picUrl:function(){return this.topDetailList.coverImgUrl},id:function(){return this.topDetailList.id}},methods:k({},Object(g["mapActions"])(["selectPlay","randomPlay"]),{},Object(g["mapMutations"])({setLoading:"SET_LOADING"}),{getTopList:function(){var t=this;p.getTopList().then((function(e){t.setLoading(!1),t.setTopList(e)}))},setTopList:function(t){var e=t.list,r=[],n=[];e.forEach((function(t){w.forEach((function(e){t.name===e&&(t.tracks&&t.tracks.length>0?r.push(t):n.push(t))}))})),this.topList=r,this.otherList=n},chooseItem:function(t){for(var e=0,r=0;r<w.length;r++)t.name===w[r]&&(e=r);this.getTopListDetail(e),t.id&&this.$router.push({path:"/rank/".concat(t.id)})},getTopListDetail:function(t){var e=this;this.setLoading(!0),p.getTopListDetail(t).then((function(t){e.setLoading(!1),e.topDetailList=t.playlist;var r=e.topDetailList.tracks;e.songs=e.normalizeSongs(r)}))},normalizeSongs:function(t){var e=[];return t.forEach((function(t){e.push(Object(o["c"])(t))})),e},selectItem:function(t,e){this.selectPlay({list:this.songs,index:e})},playAll:function(){this.randomPlay({list:this.songs})}}),activated:function(){this.$refs.rankList.$children[0].refresh()},created:function(){this.setLoading(!0),this.getTopList()},mounted:function(){}},P=_,T=(r("0ab3"),Object(O["a"])(P,n,s,!1,null,"4b20b7f8",null));e["default"]=T.exports},d8bd:function(t,e,r){"use strict";var n=r("4729"),s=r.n(n);s.a}}]);
//# sourceMappingURL=rank-legacy.3b464092.js.map