(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["search"],{"1e0b":function(t,e,r){},"214f":function(t,e,r){"use strict";r("b0c5");var s=r("2aba"),n=r("32e9"),i=r("79e5"),a=r("be13"),o=r("2b4c"),c=r("520a"),l=o("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var f=o(t),p=!i((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),g=p?!i((function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[l]=function(){return r}),r[f](""),!e})):void 0;if(!p||!g||"replace"===t&&!u||"split"===t&&!h){var d=/./[f],m=r(a,f,""[t],(function(t,e,r,s,n){return e.exec===c?p&&!n?{done:!0,value:d.call(e,r,s)}:{done:!0,value:t.call(r,e,s)}:{done:!1}})),v=m[0],b=m[1];s(String.prototype,t,v),n(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"386d":function(t,e,r){"use strict";var s=r("cb7c"),n=r("83a1"),i=r("5f1b");r("214f")("search",1,(function(t,e,r,a){return[function(r){var s=t(this),n=void 0==r?void 0:r[e];return void 0!==n?n.call(r,s):new RegExp(r)[e](String(s))},function(t){var e=a(r,t,this);if(e.done)return e.value;var o=s(t),c=String(this),l=o.lastIndex;n(l,0)||(o.lastIndex=0);var u=i(o,c);return n(o.lastIndex,l)||(o.lastIndex=l),null===u?-1:u.index}]}))},"4bb7":function(t,e,r){},"512b":function(t,e,r){"use strict";var s=r("d225"),n=r("b0b4"),i=r("e1d2"),a=function(){function t(){Object(s["a"])(this,t)}return Object(n["a"])(t,null,[{key:"singer",value:function(){return Object(i["a"])("artist",{})}},{key:"getSingerDetail",value:function(t){return Object(i["a"])("singerDetail",{params:{id:t}})}}]),t}();e["a"]=a},"520a":function(t,e,r){"use strict";var s=r("0bfb"),n=RegExp.prototype.exec,i=String.prototype.replace,a=n,o="lastIndex",c=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t[o]||0!==e[o]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(a=function(t){var e,r,a,u,h=this;return l&&(r=new RegExp("^"+h.source+"$(?!\\s)",s.call(h))),c&&(e=h[o]),a=n.call(h,t),c&&a&&(h[o]=h.global?a.index+a[0].length:e),l&&a&&a.length>1&&i.call(a[0],r,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)})),a}),t.exports=a},"5f1b":function(t,e,r){"use strict";var s=r("23c6"),n=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==s(t))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},7269:function(t,e,r){},7978:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"slide"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"pop-menu",on:{click:[t.hide,function(t){t.stopPropagation()}]}},[r("div",{staticClass:"list-wrapper",on:{click:function(t){t.stopPropagation()}}},[r("Scroll",{ref:"listContent",staticClass:"list-content",attrs:{data:t.scrollData}},[r("div",{staticClass:"item-wrapper"},[r("div",{staticClass:"header  item border-bottom",on:{click:t.play}},[t._v("歌曲："+t._s(t.song.name))]),r("div",{staticClass:"next-play item border-bottom",on:{click:t.playNext}},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-play-circle"}})]),t._v("下一首播放\n          ")]),r("div",{staticClass:"like item border-bottom",on:{click:function(e){return t.toggleFavorite(t.song)}}},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":t.getFavoriteIcon(t.song)}})]),t._v("喜欢\n          ")]),r("div",{staticClass:"singer item border-bottom",on:{click:function(e){return t.toSinger(t.song)}}},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-user"}})]),t._v("歌手："+t._s(t.song.singer)+"\n          ")]),r("div",{staticClass:"singer item border-bottom"},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-album"}})]),t._v("专辑："+t._s(t.song.album)+"\n          ")]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showDelete,expression:"showDelete"}],staticClass:"delete item border-bottom",on:{click:function(e){return t.deleteOne(t.song)}}},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-close"}})]),t._v("删除\n          ")])])])],1)])])},n=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),a=r("3ce5"),o=r("0712"),c=r("5880");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={name:"popMenu",components:{Scroll:a["a"]},mixins:[o["a"]],props:{showDelete:{type:Boolean,default:!1}},data:function(){return{isShow:!1,song:[]}},computed:{scrollData:function(){var t=[this.song];return t}},watch:{},methods:u({},Object(c["mapActions"])(["setTips"]),{show:function(t){this.isShow=!0,this.song=t},hide:function(){this.isShow=!1},playNext:function(){this.$emit("nextPlay",this.song),this.setTips("已经将一首歌曲添加到播放队列")},play:function(){this.$emit("playNow",this.song)},deleteOne:function(t){this.hide(),this.$emit("deleteOne",t),this.setTips("已经删除一首歌曲啦")}})},f=h,p=(r("cec9"),r("2877")),g=Object(p["a"])(f,s,n,!1,null,"23a81a98",null);e["a"]=g.exports},"79ce":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("search-bar",{ref:"searchbar"}),r("Scroll",{ref:"list",staticClass:"shortcut",attrs:{data:t.shortCut}},[r("div",[r("h3",{staticClass:"title"},[t._v("热门搜索")]),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],staticClass:"hots border-bottom"},t._l(t.hots,(function(e){return r("div",{key:e.first,staticClass:"hot",on:{click:function(r){return t.setQuery(e.first)}}},[t._v("\n          "+t._s(e.first)+"\n        ")])})),0),r("History",{directives:[{name:"show",rawName:"v-show",value:!t.query&&t.searchHistory&&t.searchHistory.length>0,expression:"!query && searchHistory && searchHistory.length > 0"}],on:{selectItem:t.setQuery,deleteOne:t.deleteSearchHistory,deleteAll:t.showConfirm}})],1)]),r("Suggest",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],on:{handleAlbum:t.getAlbum,handleSinger:t.getSinger,handleSong:t.setSong}}),r("transition",{attrs:{name:"slide-left"}},[r("router-view",{ref:"musicList",attrs:{title:t.title,songs:t.songsList,picUrl:t.picUrl,id:t.id},on:{select:t.selectItem}})],1),r("Confirm",{ref:"confirm",attrs:{text:"确定要清空所有搜索历史吗"},on:{deleteAll:t.deleteAllSearchHistory}})],1)},n=[],i=(r("8e6e"),r("456d"),r("ac6a"),r("7f7f"),r("bd86")),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-bar"},[r("svg",{staticClass:"icon back",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.stopPropagation(),t.hideSearch(e)}}},[r("use",{attrs:{"xlink:href":"#icon-left"}})]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.queryArg,expression:"queryArg"}],ref:"input",staticClass:"input",attrs:{placeholder:t.placeholder,type:"text",autofocus:""},domProps:{value:t.queryArg},on:{input:function(e){e.target.composing||(t.queryArg=e.target.value)}}}),t.query?r("svg",{staticClass:"icon souso",attrs:{"aria-hidden":"true"},on:{click:t.deleteQuery}},[r("use",{attrs:{"xlink:href":"#icon-close"}})]):r("svg",{staticClass:"icon souso",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-sousuo"}})])])},o=[],c=r("5880");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={name:"",components:{},props:{placeholder:{type:String,default:"搜歌手，搜歌曲"}},data:function(){return{queryArg:""}},computed:u({},Object(c["mapGetters"])(["showFooter","query"])),created:function(){var t=this;this.$watch("queryArg",(function(e){t.setQuery(e)})),this.$watch("query",(function(e){t.queryArg=e}))},methods:u({},Object(c["mapMutations"])({setShowSearch:"SET_SHOW_SEARCH",setQuery:"SET_QUERY",setShowFooter:"SET_SHOW_FOOTER"}),{hideSearch:function(){this.setQuery(""),this.$router.go(-1)},deleteQuery:function(){this.setQuery("")}})},f=h,p=(r("aee9"),r("2877")),g=Object(p["a"])(f,a,o,!1,null,"fe1d1ed4",null),d=g.exports,m=r("d225"),v=r("b0b4"),b=r("e1d2"),y=function(){function t(){Object(m["a"])(this,t)}return Object(v["a"])(t,null,[{key:"getHotSearch",value:function(){return Object(b["a"])("hotSearch")}},{key:"getSuggest",value:function(t){return Object(b["a"])("suggest",{params:{keywords:t}})}},{key:"getAlbumDetail",value:function(t){return Object(b["a"])("album",{params:{id:t}})}}]),t}(),O=y,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"suggest"},[r("Scroll",{ref:"list",staticClass:"scroll-wrapper",attrs:{data:t.allData}},[r("div",{staticClass:"list-detail"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.album&&t.album.length>0,expression:"album && album.length > 0"}],staticClass:"album"},[r("ul",{staticClass:"list"},[r("h3",{staticClass:"title"},[t._v("专辑")]),t._l(t.album,(function(e){return r("li",{key:e.albumId,staticClass:"item border-bottom",on:{click:function(r){return t.selectAlbum(e)}}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],staticClass:"img",attrs:{alt:""}}),r("div",{staticClass:"right"},[r("div",{staticClass:"name"},[t._v("专辑："+t._s(e.name))]),r("div",{staticClass:"singer"},[t._v(t._s(e.singer))])])])}))],2)]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.artists&&t.artists.length>0,expression:"artists && artists.length > 0"}],staticClass:"artists"},[r("ul",{staticClass:"list"},[r("h3",{staticClass:"title"},[t._v("歌手")]),t._l(t.artists,(function(e){return r("li",{key:e.id,staticClass:"item border-bottom",on:{click:function(r){return t.selectSinger(e)}}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],staticClass:"img",attrs:{alt:""}}),r("div",{staticClass:"singer"},[t._v("歌手："+t._s(e.singer))])])}))],2)]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.songs&&t.songs.length>0,expression:"songs && songs.length > 0"}],staticClass:"songs"},[r("ul",{ref:"wrapper",staticClass:"song-list"},[r("h3",{staticClass:"title"},[t._v("歌曲")]),t._l(t.songs,(function(e,s){return r("li",{key:e.id,staticClass:"song border-bottom",on:{click:function(r){return t.selectSong(e)}}},[r("div",{staticClass:"number"},[t._v(t._s(s+1))]),r("div",{staticClass:"right"},[r("div",{staticClass:"name"},[t._v(t._s(e.name))]),r("div",{staticClass:"singer"},[t._v("\n                "+t._s(e.singer)+"\n                "),r("span",{staticClass:"album"},[t._v("-"+t._s(e.album))])])]),r("svg",{staticClass:"icon i-switch",attrs:{"aria-hidden":"true"},on:{click:function(r){return r.stopPropagation(),t.showPopOver(e)}}},[r("use",{attrs:{"xlink:href":"#icon-switch"}})])])}))],2),r("pop-menu",{ref:"popMenu",on:{nextPlay:t.nextPlay,playNow:t.nowPlay}})],1)])])],1)},S=[],j=(r("386d"),r("3ce5")),x=r("0712"),C=r("7978");function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var k={name:"",components:{Scroll:j["a"],PopMenu:C["a"]},mixins:[x["b"],x["c"]],props:{},data:function(){return{page:1,album:[],artists:[],songs:[]}},computed:_({},Object(c["mapGetters"])(["query"]),{allData:function(){return this.album.concat(this.artists,this.songs)}}),watch:{query:function(t){""!==t&&this.search(t)}},created:function(){},mounted:function(){},methods:{selectAlbum:function(t){this.$emit("handleAlbum",t)},selectSinger:function(t){this.$emit("handleSinger",t)},selectSong:function(t){this.$emit("handleSong",t)},search:function(t){var e=this;O.getSuggest(t).then((function(t){var r,s=t.result;r=s.albums&&s.albums[0].artist.picUrl?s.albums[0].artist.picUrl:"https://ws2.sinaimg.cn/large/006tNbRwly1fy54tapw58j30yl0u0h16.jpg",s.albums&&s.albums.length>0&&e.setAlbum(s.albums),s.artists&&s.artists.length>0&&e.setArtist(s.artists),s.songs&&s.songs.length>0&&e.setSongs(s.songs,r)}))},setAlbum:function(t){var e=this;this.album=[],t.forEach((function(t){var r=t.id,s=t.name,n=t.artist.name,i=t.artist.picUrl;e.album.push({id:r,name:s,singer:n,picUrl:i})}))},setArtist:function(t){var e=this;this.artists=[],t.forEach((function(t){var r=t.id,s=t.name,n=t.picUrl;e.artists.push({id:r,singer:s,picUrl:n})}))},setSongs:function(t,e){var r=this;this.songs=[],t.forEach((function(t){var s=t.id,n=t.name,i=t.artists[0].name,a=t.album.name;r.songs.push({id:s,name:n,singer:i,picUrl:e,album:a})}))}}},D=k,E=(r("f572"),Object(p["a"])(D,w,S,!1,null,"ecac710c",null)),A=E.exports,H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"history"},[r("h3",{staticClass:"title"},[t._v("搜索历史")]),r("p",{staticClass:"delete",on:{click:function(e){return e.stopPropagation(),t.deleteAll(e)}}},[t._v("清空历史")]),r("transition-group",{staticClass:"list",attrs:{tag:"ul",name:"list"}},t._l(t.searchHistory,(function(e){return r("li",{key:e,staticClass:"item border-bottom",on:{click:function(r){return t.selectItem(e)}}},[r("span",{staticClass:"text"},[t._v(t._s(e))]),r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:function(r){return r.stopPropagation(),t.deleteHistoryItem(e)}}},[r("use",{attrs:{"xlink:href":"#icon-close"}})])])})),0)],1)},q=[];function $(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?$(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var U={name:"",computed:N({},Object(c["mapGetters"])(["searchHistory"])),created:function(){},mounted:function(){},methods:{deleteHistoryItem:function(t){this.$emit("deleteOne",t)},selectItem:function(t){this.$emit("selectItem",t)},deleteAll:function(){this.$emit("deleteAll")}}},I=U,R=(r("da96"),Object(p["a"])(I,H,q,!1,null,"37ba2e92",null)),Q=R.exports,T=r("512b"),z=r("ed08"),F=r("a32c");function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function G(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(r,!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var L={name:"Search",components:{SearchBar:d,Suggest:A,History:Q,Confirm:F["a"],Scroll:j["a"]},mixins:[x["b"]],props:{},data:function(){return{hots:[],songsList:[],list:{}}},computed:G({},Object(c["mapGetters"])(["query","searchHistory"]),{title:function(){return this.list.name},picUrl:function(){return this.list.picUrl},id:function(){return this.list.id},shortCut:function(){return this.hots.concat(this.searchHistory)}}),watch:{query:function(t){var e=this;t||setTimeout((function(){e.$refs.list.refresh()}),20)}},created:function(){var t=this;O.getHotSearch().then((function(e){t.hots=e.result.hots}))},methods:G({},Object(c["mapMutations"])({setQuery:"SET_QUERY"}),{},Object(c["mapActions"])(["randomPlay","insertSong","insertSongNext","saveSearchHistory","deleteSearchHistory","deleteAllSearchHistory"]),{showConfirm:function(){this.$refs.confirm.show()},getAlbumDetail:function(t){var e=this;O.getAlbumDetail(t).then((function(r){var s=r.songs;e.setDetail(s,t)}))},getDeatil:function(t){var e=this;T["a"].getSingerDetail(t).then((function(r){var s=r.hotSongs;e.setDetail(s,t)}))},setDetail:function(t,e){this.songsList=this.normalizeSongs(t),e&&this.$router.push({path:"/search/".concat(e)})},normalizeSongs:function(t){var e=[];return t.forEach((function(t){e.push(Object(z["c"])(t))})),e},getAlbum:function(t){this.saveSearchHistory(this.query),this.list=t;var e=t.id;this.getAlbumDetail(e)},getSinger:function(t){this.saveSearchHistory(this.query),this.list=t;var e=t.id;this.getDeatil(e)},setSong:function(t){this.saveSearchHistory(this.query),this.insertSong(t)},selectItem:function(t){this.insertSong(t)}})},B=L,J=(r("d11c"),Object(p["a"])(B,s,n,!1,null,"349427e8",null));e["default"]=J.exports},"7b9e":function(t,e,r){},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},a422:function(t,e,r){},aee9:function(t,e,r){"use strict";var s=r("7b9e"),n=r.n(s);n.a},b0c5:function(t,e,r){"use strict";var s=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})},cec9:function(t,e,r){"use strict";var s=r("a422"),n=r.n(s);n.a},d11c:function(t,e,r){"use strict";var s=r("7269"),n=r.n(s);n.a},da96:function(t,e,r){"use strict";var s=r("1e0b"),n=r.n(s);n.a},f572:function(t,e,r){"use strict";var s=r("4bb7"),n=r.n(s);n.a}}]);
//# sourceMappingURL=search.47179158.js.map