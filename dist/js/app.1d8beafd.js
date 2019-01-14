(function(t){function e(e){for(var i,r,a=e[0],c=e[1],u=e[2],l=0,f=[];l<a.length;l++)r=a[l],s[r]&&f.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);h&&h(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var a=n[r];0!==s[a]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},r={app:0},s={app:0},o=[];function a(t){return c.p+"js/"+({allSongList:"allSongList",artist:"artist",home:"home",login:"login",musicList:"musicList",rank:"rank",search:"search",user:"user"}[t]||t)+"."+{allSongList:"84d6822c",artist:"2b089d72",home:"5dd51a02",login:"f324aa68",musicList:"2cd59fc9",rank:"13557b76",search:"9cc2f6a6",user:"4290deff"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={allSongList:1,artist:1,home:1,login:1,musicList:1,rank:1,search:1,user:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var i="css/"+({allSongList:"allSongList",artist:"artist",home:"home",login:"login",musicList:"musicList",rank:"rank",search:"search",user:"user"}[t]||t)+"."+{allSongList:"194058d2",artist:"c64570f7",home:"5f562261",login:"83422d51",musicList:"d4afbbec",rank:"8ed8a9b2",search:"d21a7c98",user:"e398d902"}[t]+".css",s=c.p+i,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var u=o[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===s))return e()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){u=f[a],l=u.getAttribute("data-href");if(l===i||l===s)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var i=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.request=i,delete r[t],h.parentNode.removeChild(h),n(o)},h.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(h)}).then(function(){r[t]=0}));var i=s[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise(function(e,n){i=s[t]=[e,n]});e.push(i[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(t),u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+i+": "+r+")");o.type=i,o.request=r,n[1](o)}s[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/musicByMuxue/dist/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var h=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0712":function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return c}),n.d(e,"e",function(){return u}),n.d(e,"d",function(){return l});n("ac6a"),n("20d6");var i=n("cebc"),r=n("2f62"),s=n("ed08"),o={computed:Object(i["a"])({},Object(r["c"])(["playList"])),mounted:function(){this.handlePlayList(this.playList)},activated:function(){this.handlePlayList(this.playList)},watch:{playList:function(t){this.handlePlayList(t)}},methods:{handlePlayList:function(t){var e=t.length>0?"52px":"";this.$refs.list.$el.style.bottom=e,this.$refs.list.refresh()}}},a={computed:Object(i["a"])({},Object(r["c"])(["currentIndex"])),methods:Object(i["a"])({},Object(r["b"])(["insertSongNext","insertSong","setTips"]),{nextPlay:function(t){-1!=this.currentIndex?(this.insertSongNext(t),this.setTips("已经将一首歌曲添加到播放队列")):this.insertSong(t)},nowPlay:function(t){this.insertSong(t)},showPopOver:function(t){this.$refs.popMenu.show(t)}})},c={computed:Object(i["a"])({},Object(r["c"])(["favoriteList"])),methods:Object(i["a"])({},Object(r["b"])(["cancelFavorite","saveToFavoriteList","setTips"]),{isFavorite:function(t){var e=this.favoriteList.findIndex(function(e){return e.id===t.id});return e>-1},getFavoriteIcon:function(t){return this.isFavorite(t)?"#icon-heart-fill":"#icon-heart"},toggleFavorite:function(t){this.isFavorite(t)?(this.cancelFavorite(t),this.setTips("你不喜欢这首歌了吗，已经从收藏夹移出了")):(this.saveToFavoriteList(t),this.setTips("已经添加歌曲到收藏夹"))}})},u={computed:{},methods:Object(i["a"])({},Object(r["b"])(["randomPlay"]),{selectItem:function(t){this.insertSong(t)},playAll:function(){this.randomPlay({list:this.userList})},refresh:function(){this.$refs.list.refresh()}}),created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.refresh()}},l={methods:Object(i["a"])({},Object(r["b"])(["selectPlay","randomPlay"]),{setList:function(t){this.list=t.playlist,this.songs=this.normalizeSongs(this.list)},normalizeSongs:function(){var t=[],e=this.list;return e.tracks.forEach(function(e){t.push(Object(s["c"])(e))}),t},playAll:function(){this.randomPlay({list:this.songs})},selectItem:function(t,e){this.selectPlay({list:this.songs,index:e})}})}},"2b8a":function(t,e,n){},"327f":function(t,e,n){"use strict";var i=n("bc8b"),r=n.n(i);r.a},"36d4":function(t,e,n){},"3ce5":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrapper",staticClass:"scroll"},[t._t("default")],2)},r=[],s=(n("c5f6"),n("cadf"),n("551c"),n("097d"),n("1fba")),o={name:"",components:{},props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},listenscroll:{type:Boolean,default:!1},pullup:{type:Boolean,default:!1}},data:function(){return{}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},20)}},computed:{},methods:{initScroll:function(){var t=this;if(this.$refs.wrapper){if(this.scroll=new s["a"](this.$refs.wrapper,{click:this.click,probeType:this.probeType}),this.listenscroll){var e=this;this.scroll.on("scroll",function(t){e.$emit("scroll",t)})}if(this.pullup){var n=this;this.scroll.on("scrollEnd",function(){n.scroll.y<=n.scroll.maxScrollY+50&&t.$emit("scrollToEnd")})}}},enable:function(){this.scroll&&this.scroll.enable()},disable:function(){this.scroll&&this.scroll.disable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},created:function(){},mounted:function(){var t=this;setTimeout(function(){t.initScroll()},20)}},a=o,c=n("2877"),u=Object(c["a"])(a,i,r,!1,null,"3a9724b5",null);u.options.__file="Scroll.vue";e["a"]=u.exports},"471d":function(t,e,n){"use strict";var i=n("70fe"),r=n.n(i);r.a},"4ee2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"selectPlay",function(){return Et}),n.d(i,"randomPlay",function(){return kt}),n.d(i,"insertSongNext",function(){return $t}),n.d(i,"insertSong",function(){return Nt}),n.d(i,"saveSearchHistory",function(){return Ft}),n.d(i,"deleteSearchHistory",function(){return Rt}),n.d(i,"deleteAllSearchHistory",function(){return qt}),n.d(i,"deleteSong",function(){return At}),n.d(i,"clearSong",function(){return Mt}),n.d(i,"savePlayHistory",function(){return Ht}),n.d(i,"clearPlayHistory",function(){return Bt}),n.d(i,"deleteOnePlayHistory",function(){return Ut}),n.d(i,"saveToFavoriteList",function(){return Wt}),n.d(i,"cancelFavorite",function(){return Dt}),n.d(i,"clearAllFavorite",function(){return Yt}),n.d(i,"setTips",function(){return Xt});var r={};n.r(r),n.d(r,"playing",function(){return zt}),n.d(r,"fullScreen",function(){return Gt}),n.d(r,"playList",function(){return Jt}),n.d(r,"sequenceList",function(){return Qt}),n.d(r,"mode",function(){return Vt}),n.d(r,"currentIndex",function(){return Kt}),n.d(r,"currentSong",function(){return Zt}),n.d(r,"showFooter",function(){return te}),n.d(r,"transitionName",function(){return ee}),n.d(r,"query",function(){return ne}),n.d(r,"searchHistory",function(){return ie}),n.d(r,"playHistory",function(){return re}),n.d(r,"favoriteList",function(){return se}),n.d(r,"userInfo",function(){return oe}),n.d(r,"isLogin",function(){return ae}),n.d(r,"showTips",function(){return ce}),n.d(r,"tipText",function(){return ue});n("7f7f"),n("cadf"),n("551c"),n("097d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:t.transitionName},on:{"after-leave":t.afterLeave}},[n("keep-alive",[n("router-view")],1)],1),n("Player"),n("the-footer"),n("Tips",{ref:"tips"},[n("span",{staticClass:"text"},[t._v(t._s(t.tipText))])])],1)},a=[],c=n("cebc"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.playList.length>0,expression:"playList.length > 0"}],staticClass:"player"},[n("transition",{attrs:{name:"normal"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"normal-player"},[n("div",{staticClass:"background"},[n("img",{staticClass:"img",attrs:{src:t.currentSong.picUrl,alt:"",width:"100%",height:"100%"}}),n("div",{staticClass:"filter"}),n("div",{staticClass:"filterR"})]),n("div",{staticClass:"top"},[n("svg",{staticClass:"icon i-left",attrs:{"aria-hidden":"true"},on:{click:t.goBack}},[n("use",{attrs:{"xlink:href":"#icon-down"}})]),n("div",{staticClass:"name"},[n("h1",{staticClass:"title"},[t._v(t._s(t.currentSong.name))]),n("h2",{staticClass:"subtitle"},[t._v(t._s(t.currentSong.singer))])]),n("svg",{staticClass:"icon  i-right",attrs:{"aria-hidden":"true"},on:{click:function(e){t.toggleFavorite(t.currentSong)}}},[n("use",{attrs:{"xlink:href":t.getFavoriteIcon(t.currentSong)}})])]),n("div",{staticClass:"middle",on:{click:t.changeMiddle}},[n("div",{directives:[{name:"show",rawName:"v-show",value:"cd"===t.currentShow,expression:"currentShow === 'cd'"}],staticClass:"middle-l"},[n("div",{ref:"cdWrapper",staticClass:"cd-wrapper"},[n("div",{staticClass:"cd",class:t.playing?"play":"pause"},[n("img",{staticClass:"image",attrs:{src:t.currentSong.picUrl,alt:""}})])])]),n("transition",{attrs:{name:"middleR"}},[n("Scroll",{directives:[{name:"show",rawName:"v-show",value:"lyric"===t.currentShow,expression:"currentShow === 'lyric'"}],ref:"lyricList",staticClass:"middle-r",attrs:{data:t.currentLyric&&t.currentLyric.lines}},[n("div",{staticClass:"lyric-wrapper"},[t.currentLyric?n("div",t._l(t.currentLyric.lines,function(e,i){return n("p",{key:i,ref:"lyricLine",refInFor:!0,staticClass:"text",class:{current:t.currentLineNum===i}},[t._v("\n                  "+t._s(e.txt)+"\n                ")])}),0):n("p",{staticClass:"no-lyric"},[t._v(t._s(t.updatecurrentLyric))])])])],1)],1),n("div",{staticClass:"bottom"},[n("div",{staticClass:"progress-wrapper"},[n("span",{staticClass:"time time-l"},[t._v(t._s(t.format(t.currentTime)))]),n("div",{staticClass:"progress-bar-wrapper"},[n("progress-bar",{attrs:{percent:t.percent},on:{percentChange:t.onProgressChange,percentChangeEnd:t.onProgressChangeEnd}})],1),n("span",{staticClass:"time time-r"},[t._v(t._s(t.format(t.duration)))])]),n("div",{staticClass:"operators"},[n("svg",{staticClass:"icon i-left",attrs:{"aria-hidden":"true"},on:{click:t.changeMode}},[n("use",{attrs:{"xlink:href":t.iconMode}})]),n("svg",{staticClass:"icon i-left",class:t.disableClass,attrs:{"aria-hidden":"true"},on:{click:t.prev}},[n("use",{attrs:{"xlink:href":"#icon-step-backward"}})]),n("svg",{staticClass:"icon i-center",class:t.disableClass,attrs:{"aria-hidden":"true"},on:{click:t.togglePlaying}},[n("use",{attrs:{"xlink:href":t.playIcon}})]),n("svg",{staticClass:"icon i-right",class:t.disableClass,attrs:{"aria-hidden":"true"},on:{click:t.next}},[n("use",{attrs:{"xlink:href":"#icon-step-forward"}})]),n("svg",{staticClass:"icon i-right",attrs:{"aria-hidden":"true"},on:{click:t.showPlayList}},[n("use",{attrs:{"xlink:href":"#icon-menu"}})])])])])]),n("transition",{attrs:{name:"normal"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.fullScreen&&!t.showFooter,expression:"!fullScreen && !showFooter"}],staticClass:"mini-player",on:{click:t.open}},[n("div",{staticClass:"left"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.currentSong.picUrl,expression:"currentSong.picUrl"}],staticClass:"pic",attrs:{alt:""}}),n("div",{staticClass:"name"},[t._v(t._s(t.currentSong.name))]),n("div",{staticClass:"singer"},[t._v(t._s(t.currentSong.singer))])]),n("div",{staticClass:"right"},[n("svg",{staticClass:"icon i-mini",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.togglePlaying(e)}}},[n("use",{attrs:{"xlink:href":t.miniIcon}})]),n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.stopPropagation(),t.showPlayList(e)}}},[n("use",{attrs:{"xlink:href":"#icon-menu"}})])])])]),n("audio",{ref:"audio",on:{canplay:t.ready,error:t.error,timeupdate:t.updateTime,ended:t.ended}}),n("play-list",{ref:"playList",on:{modeChange:t.changeMode}})],1)},l=[],f=(n("20d6"),n("6b54"),n("2f62")),h=n("d225"),d=n("b0b4"),p=n("e1d2"),m=function(){function t(){Object(h["a"])(this,t)}return Object(d["a"])(t,null,[{key:"getSong",value:function(t){return Object(p["a"])("song",{params:{id:t,br:32e4}})}},{key:"getLyric",value:function(t){return Object(p["a"])("lyric",{params:{id:t}})}}]),t}(),g=m,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"progressBar",staticClass:"progress-bar",on:{click:t.progressClick}},[n("div",{staticClass:"bar-inner"},[n("div",{ref:"progress",staticClass:"progress"}),n("div",{ref:"btn",staticClass:"progress-btn-wrapper",on:{touchstart:function(e){return e.preventDefault(),t.progressTouchStart(e)},touchmove:function(e){return e.preventDefault(),t.progressTouchmove(e)},touchend:function(e){return e.preventDefault(),t.progressTouchend(e)}}},[n("div",{staticClass:"progress-btn"})])])])},y=[],b=(n("c5f6"),{name:"",components:{},props:{percent:{type:Number,default:0}},data:function(){return{}},watch:{percent:function(t){if(t>0&&!this.touch.inited){var e=this.$refs.progressBar.clientWidth-16,n=t*e;this.offset(n)}}},computed:{},methods:{progressTouchStart:function(t){this.touch.inited=!0,this.touch.startX=t.touches[0].pageX,this.touch.left=this.$refs.progress.clientWidth},progressTouchmove:function(t){if(this.touch.inited){this.triggerPercent();var e=this.$refs.progressBar.clientWidth-16,n=t.touches[0].pageX-this.touch.startX,i=Math.min(e,Math.max(0,this.touch.left+n));this.offset(i)}},progressTouchend:function(){this.touch.inited=!1;var t=this.$refs.progressBar.clientWidth-16,e=this.$refs.progress.clientWidth/t;this.$emit("percentChangeEnd",e)},triggerPercent:function(){var t=this.$refs.progressBar.clientWidth-16,e=this.$refs.progress.clientWidth/t;this.$emit("percentChange",e)},offset:function(t){this.$refs.progress.style.width="".concat(t,"px"),this.$refs.btn.style.transform="translateX(".concat(t,"px)")},progressClick:function(t){var e=this.$refs.progressBar.getBoundingClientRect(),n=e.left,i=t.pageX-n;this.offset(i);var r=this.$refs.progressBar.clientWidth-16,s=this.$refs.progress.clientWidth/r;this.$emit("percentChangeEnd",s)}},created:function(){this.touch={}},mounted:function(){}}),S=b,_=(n("c281"),n("2877")),L=Object(_["a"])(S,v,y,!1,null,"fae28f1a",null);L.options.__file="ProgressBar.vue";var T=L.exports,w=n("ed08"),C=n("3c75"),x=n.n(C),O=n("3ce5"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"playList",on:{click:t.hide}},[n("div",{staticClass:"list-wrapper",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"header border-bottom"},[n("h2",{staticClass:"title"},[n("span",{staticClass:"text",on:{click:t.changeMode}},[n("svg",{staticClass:"icon i-mode",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":t.iconMode}})]),t._v(t._s(t.modeText))]),n("span",{staticClass:"clear",on:{click:t.showConfirm}},[t._v("清空列表")])])]),n("Scroll",{ref:"listContent",staticClass:"list-content",attrs:{data:t.sequenceList}},[n("transition-group",{attrs:{tag:"ul",name:"list"}},t._l(t.sequenceList,function(e,i){return n("li",{key:e.id,ref:"item",refInFor:!0,staticClass:"list-item border-bottom",class:t.isPlaying(e),on:{click:function(n){t.selectItem(e,i)}}},[n("div",{staticClass:"text"},[n("span",{staticClass:"name"},[t._v(t._s(e.name))]),n("span",{staticClass:"singer"},[t._v("-"+t._s(e.singer))])]),n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:function(n){n.stopPropagation(),t.deleteItem(e)}}},[n("use",{attrs:{"xlink:href":"#icon-close"}})])])}),0)],1)],1),n("Confirm",{ref:"confirm",attrs:{text:"是否清空播放列表"},on:{deleteAll:t.confirmClear}})],1)])},E=[],k=n("a32c"),P={name:"",components:{Scroll:O["a"],Confirm:k["a"]},props:{},data:function(){return{isShow:!1}},watch:{currentSong:function(t,e){this.isShow&&t.id!==e.id&&this.scrollToCurSong(t)}},computed:Object(c["a"])({},Object(f["c"])(["sequenceList","mode","currentSong","playList"]),{iconMode:function(){return this.mode===w["n"].sequence?"#icon-retweet":this.mode===w["n"].loop?"#icon-danquxunhuan":"#icon-suijibofang"},modeText:function(){return this.mode===w["n"].sequence?"顺序播放":this.mode===w["n"].loop?"单曲循环":"随机播放"}}),methods:Object(c["a"])({},Object(f["b"])(["deleteSong","clearSong","setTips"]),Object(f["d"])({setCurrentIndex:"SET_CURRENT_INDEX",setShowFooter:"SET_SHOW_FOOTER",setFullScreen:"SET_FULL_SCREEN"}),{show:function(){var t=this;this.isShow=!0,setTimeout(function(){t.$refs.listContent.refresh(),t.scrollToCurSong(t.currentSong)})},hide:function(){this.isShow=!1},changeMode:function(){this.$emit("modeChange")},isPlaying:function(t){return this.currentSong.id===t.id?"on":""},selectItem:function(t,e){this.mode===w["n"].random&&(e=this.playList.findIndex(function(e){return e.id===t.id})),this.setCurrentIndex(e)},scrollToCurSong:function(t){var e=this.sequenceList.findIndex(function(e){return t.id===e.id});this.$refs.listContent.scrollToElement(this.$refs.item[e],300)},deleteItem:function(t){this.deleteSong(t),this.playList.length||this.hide()},showConfirm:function(){this.$refs.confirm.show()},confirmClear:function(){this.clearSong(),this.hide(),this.setTips("已经清空播放列表啦"),this.setFullScreen(!1),this.$route.name&&"search"!==this.$route.name&&this.setShowFooter(!0)}}),created:function(){},mounted:function(){}},I=P,$=(n("fe8a"),Object(_["a"])(I,j,E,!1,null,"540cfc76",null));$.options.__file="PlayList.vue";var N=$.exports,F=n("0712"),R={name:"",components:{ProgressBar:T,Scroll:O["a"],PlayList:N},mixins:[F["a"]],props:{},data:function(){return{url:"",songReady:!1,currentTime:0,duration:0,currentLyric:null,currentLineNum:0,currentShow:"cd"}},watch:{currentSong:function(t,e){t.id!==e.id&&(this.$refs.audio.pause(),t.id&&(this.$refs.audio.currentTime=0,this.getSongUrl(t.id)))},url:function(t){var e=this;t&&(this.$refs.audio.src=t,clearTimeout(this.timer),this.timer=setTimeout(function(){e.$refs.audio.play().then(function(){e.duration=e.$refs.audio.duration})},1e3),this.setPlayingState(!0))}},computed:Object(c["a"])({},Object(f["c"])(["fullScreen","playList","currentSong","playing","currentIndex","mode","sequenceList","showFooter"]),{playIcon:function(){return this.playing?"#icon-timeout":"#icon-play-circle"},miniIcon:function(){return this.playing?"#icon-timeout":"#icon-play-circle"},disableClass:function(){return this.songReady?"":"disable"},percent:function(){return this.currentTime/this.duration},iconMode:function(){return this.mode===w["n"].sequence?"#icon-retweet":this.mode===w["n"].loop?"#icon-danquxunhuan":"#icon-suijibofang"},updatecurrentLyric:function(){return this.noLyric?"暂无歌词":this.noLyric?void 0:"歌词加载中"}}),methods:Object(c["a"])({},Object(f["b"])(["savePlayHistory"]),Object(f["d"])({setFullScreen:"SET_FULL_SCREEN",setPlayingState:"SET_PLAYING_STATE",setCurrentIndex:"SET_CURRENT_INDEX",setPlayMode:"SET_PLAYING_MODE",setPlayList:"SET_PLAY_LIST",setShowFooter:"SET_SHOW_FOOTER"}),{showPlayList:function(){this.$refs.playList.show()},goBack:function(){this.setFullScreen(!1),this.$route.name&&"search"!==this.$route.name&&this.setShowFooter(!0)},open:function(){this.setFullScreen(!0),this.setShowFooter(!1)},togglePlaying:function(){if(this.songReady){this.currentLyric&&this.currentLyric.togglePlay(),this.setPlayingState(!this.playing);var t=this.$refs.audio;this.playing?t.play():t.pause()}},getSongUrl:function(t){var e=this;g.getSong(t).then(function(n){e.url=n.data[0].url,e.getLyric(t)})},getLyric:function(t){var e=this;this.currentLyric&&(this.currentLyric.stop(),this.currentLyric=null),g.getLyric(t).then(function(t){e.currentLyric=new x.a(t.lrc.lyric,e.handleLyric),e.noLyric=!1,e.playing&&(e.currentLyric.play(),e.currentLineNum=0,e.$refs.lyricList.scrollTo(0,0,1e3))}).catch(function(t){console.log(t),e.noLyric=!0})},handleLyric:function(t){var e=t.lineNum;if(this.currentLineNum=e,e>4){var n=this.$refs.lyricLine[e-4];this.$refs.lyricList.scrollToElement(n,1e3)}else this.$refs.lyricList.scrollTo(0,0,1e3)},prev:function(){if(this.songReady){if(1===this.playList.length)this.loop();else{var t=this.currentIndex-1;-1===t&&(t=this.playList.length-1),this.setCurrentIndex(t),this.playing||this.togglePlaying()}this.songReady=!1}},next:function(){if(this.songReady){if(1===this.playList.length)this.loop();else{var t=this.currentIndex+1;t===this.playList.length&&(t=0),this.setCurrentIndex(t),this.playing||this.togglePlaying()}this.songReady=!1}},ready:function(){this.songReady=!0,this.duration=this.$refs.audio.duration,this.savePlayHistory(this.currentSong)},error:function(){this.songReady=!0},updateTime:function(t){this.move||(this.currentTime=t.target.currentTime)},format:function(t){t|=0;var e=t/60|0,n=this.pad(t%60);return"".concat(e,":").concat(n)},pad:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=t.toString().length;return n<e&&(t="0"+t,n++),t},onProgressChange:function(t){this.move=!0;var e=this.duration*t;this.currentTime=e,this.currentLyric&&this.currentLyric.seek(1e3*e)},onProgressChangeEnd:function(t){this.move=!1;var e=this.duration*t;this.$refs.audio.currentTime=e,this.playing||(this.$refs.audio.play(),this.setPlayingState(!0)),this.currentLyric&&this.currentLyric.seek(1e3*e)},changeMode:function(){var t=(this.mode+1)%3;this.setPlayMode(t);var e=null;e=t===w["n"].random?Object(w["q"])(this.sequenceList):this.sequenceList,this.resetCurrentIndex(e),this.setPlayList(e)},resetCurrentIndex:function(t){var e=this,n=t.findIndex(function(t){return t.id===e.currentSong.id});this.setCurrentIndex(n)},ended:function(){this.mode===w["n"].loop?this.loop():this.next()},loop:function(){this.currentLyric&&this.currentLyric.seek(0),this.$refs.audio.currentTime=0,this.$refs.audio.play(),this.setPlayingState(!0)},changeMiddle:function(){"cd"===this.currentShow?this.currentShow="lyric":this.currentShow="cd"}}),created:function(){this.move=!1,this.noLyric="歌词加载中"},mounted:function(){}},q=R,A=(n("471d"),Object(_["a"])(q,u,l,!1,null,"1f9f55f4",null));A.options.__file="index.vue";var M=A.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"normal"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFooter&&!t.fullScreen,expression:"showFooter && !fullScreen"}],staticClass:"footer"},[n("div",{staticClass:"footer-wrapper"},t._l(t.navigation,function(e){return n("router-link",{key:e.icon,staticClass:"nav",attrs:{to:e.link,"active-class":"on",tag:"div"}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.link==t.$route.name?e.iconon:e.icon}})]),n("span",[t._v(t._s(e.name))])])}),1),n("div",{staticClass:"circle",on:{click:t.showPlayer}},[n("img",{staticClass:"circle-bg",class:t.setClass,attrs:{src:t.picBg,alt:""}})])])])},B=[],U=[{name:"我的",icon:"#icon-wode",iconon:"#icon-wodefill",link:"user"},{name:"推荐",icon:"#icon-home",iconon:"#icon-homefill",link:"home"},{name:"",icon:"",iconon:"",link:""},{name:"排行",icon:"#icon-fanli",iconon:"#icon-fanlifill",link:"rank"},{name:"歌手",icon:"#icon-artist",iconon:"#icon-artistfill",link:"artist"}],W={name:"",components:{},props:{},data:function(){return{navigation:U}},watch:{},computed:Object(c["a"])({},Object(f["c"])(["currentSong","showFooter","fullScreen","playing"]),{picBg:function(){return this.currentSong.picUrl?this.currentSong.picUrl:"https://ws1.sinaimg.cn/large/006tNbRwly1fy1lzl0xf9j31040pjb2a.jpg"},setClass:function(){return this.playing?"play":""}}),methods:Object(c["a"])({},Object(f["d"])({setFullScreen:"SET_FULL_SCREEN",setShowFooter:"SET_SHOW_FOOTER"}),{showPlayer:function(){this.currentSong.id&&(this.setFullScreen(!0),this.setShowFooter(!1))}}),created:function(){},mounted:function(){}},D=W,Y=(n("327f"),Object(_["a"])(D,H,B,!1,null,"a91231ea",null));Y.options.__file="TheFooter.vue";var X=Y.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"drop"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showTips,expression:"showTips"}],staticClass:"tips"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-tips"}})]),t._t("default")],2)])},G=[],J={name:"",components:{},props:{},data:function(){return{}},watch:{},computed:Object(c["a"])({},Object(f["c"])(["showTips"])),methods:{},created:function(){},mounted:function(){}},Q=J,V=(n("8272"),Object(_["a"])(Q,z,G,!1,null,"3f80abb0",null));V.options.__file="Tips.vue";var K=V.exports,Z={components:{Player:M,TheFooter:X,Tips:K},data:function(){return{}},computed:Object(c["a"])({},Object(f["c"])(["transitionName","tipText"])),watch:{$route:function(t,e){if(e.name&&t.meta.index&&e.meta.index){if(t.meta.index&&e.meta.index){var n=t.meta.index<e.meta.index?"page-right":"page-left";this.setTransitionName(n)}}else this.setTransitionName("")}},methods:Object(c["a"])({},Object(f["d"])({setTransitionName:"SET_TRANSITION_NAME"}),{afterLeave:function(){this.setTransitionName("page-left")}})},tt=Z,et=(n("5c0b"),Object(_["a"])(tt,o,a,!1,null,null,null));et.options.__file="App.vue";var nt=et.exports,it=n("8c4f");s["a"].use(it["a"]);var rt=function(){return n.e("home").then(n.bind(null,"16c0"))},st=function(){return n.e("rank").then(n.bind(null,"948d"))},ot=function(){return n.e("artist").then(n.bind(null,"2d99"))},at=function(){return n.e("user").then(n.bind(null,"7368"))},ct=function(){return n.e("search").then(n.bind(null,"79ce"))},ut=function(){return n.e("login").then(n.bind(null,"d9c9"))},lt=function(){return n.e("allSongList").then(n.bind(null,"25f8"))},ft=function(){return n.e("musicList").then(n.bind(null,"d9b3"))},ht=new it["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:rt,meta:{index:2},children:[{path:":id",component:ft}]},{path:"/rank",name:"rank",component:st,meta:{index:3},children:[{path:":idx",component:ft}]},{path:"/artist",name:"artist",component:ot,meta:{index:4},children:[{path:":id",component:ft}]},{path:"/user",name:"user",component:at,meta:{index:1},children:[{path:":id",component:ft}]},{path:"/search",name:"search",component:ct,meta:{trans:0},children:[{path:":id",component:ft}]},{path:"/login",name:"login",component:ut},{path:"/songslist",name:"songslist",component:lt,children:[{path:":id",component:ft}]}]}),dt="SET_PLAYING_STATE",pt="SET_FULL_SCREEN",mt="SET_PLAY_LIST",gt="SET_SEQUENCE_LIST",vt="SET_PLAYING_MODE",yt="SET_CURRENT_INDEX",bt="SET_SHOW_FOOTER",St="SET_TRANSITION_NAME",_t="SET_QUERY",Lt="SET_SEARCH_HISTORY",Tt="SET_PLAY_HISTORY",wt="SET_FAVORITE_LIST",Ct="SET_USER_INFO",xt="SET_SHOW_TIPS",Ot="SET_TIP_TEXT ",jt=n("5118"),Et=function(t,e){var n=t.commit,i=t.state,r=e.list,s=e.index;if(n(gt,r),i.mode===w["n"].random){var o=Object(w["q"])(r);n(mt,o),s=Pt(o,r[s])}else n(mt,r);n(yt,s),n(pt,!0),n(dt,!0)},kt=function(t,e){var n=t.commit,i=e.list;n(vt,w["n"].random),n(gt,i);var r=Object(w["q"])(i);n(mt,r),n(yt,0),n(pt,!0),n(dt,!0)};function Pt(t,e){return t.findIndex(function(t){return t.id===e.id})}var It,$t=function(t,e){var n=t.commit,i=t.state,r=i.playList.slice(),s=i.sequenceList.slice(),o=i.currentIndex,a=r[o],c=Pt(r,e),u=o+1;r.splice(u,0,e),c>-1&&(o>c?(r.splice(c,1),o--):r.splice(c+1,1));var l=Pt(s,a)+1,f=Pt(s,e);s.splice(l,0,e),f>-1&&(l>f?s.splice(f,1):s.splice(f+1,1)),n(mt,r),n(gt,s),n(yt,o),n(dt,!0)},Nt=function(t,e){var n=t.commit,i=t.state,r=i.playList.slice(),s=i.sequenceList.slice(),o=i.currentIndex,a=r[o],c=Pt(r,e);o++,r.splice(o,0,e),c>-1&&(o>c?(r.splice(c,1),o--):r.splice(c+1,1));var u=Pt(s,a)+1,l=Pt(s,e);s.splice(u,0,e),l>-1&&(u>l?s.splice(l,1):s.splice(l+1,1)),n(mt,r),n(gt,s),n(yt,o),n(pt,!0),n(dt,!0)},Ft=function(t,e){var n=t.commit;n(Lt,Object(w["b"])(e))},Rt=function(t,e){var n=t.commit;n(Lt,Object(w["g"])(e))},qt=function(t){var e=t.commit;e(Lt,Object(w["e"])())},At=function(t,e){var n=t.commit,i=t.state,r=i.playList.slice(),s=i.sequenceList.slice(),o=i.currentIndex,a=Pt(r,e),c=Pt(s,e);r.splice(a,1),s.splice(c,1),(o>a||o===r.length)&&o--;var u=r.length>0;n(dt,u),n(mt,r),n(gt,s),n(yt,o)},Mt=function(t){var e=t.commit;e(mt,[]),e(gt,[]),e(yt,-1),e(dt,!1)},Ht=function(t,e){var n=t.commit;n(Tt,Object(w["o"])(e))},Bt=function(t){var e=t.commit;e(Tt,Object(w["d"])())},Ut=function(t,e){var n=t.commit;n(Tt,Object(w["i"])(e))},Wt=function(t,e){var n=t.commit;n(wt,Object(w["p"])(e))},Dt=function(t,e){var n=t.commit;n(wt,Object(w["h"])(e))},Yt=function(t,e){var n=t.commit;n(wt,Object(w["f"])(e))},Xt=function(t,e){var n=t.commit;n(xt,!0),n(Ot,e),Object(jt["clearTimeout"])(i);var i=setTimeout(function(){n(xt,!1)},2e3)},zt=function(t){return t.playing},Gt=function(t){return t.fullScreen},Jt=function(t){return t.playList},Qt=function(t){return t.sequenceList},Vt=function(t){return t.mode},Kt=function(t){return t.currentIndex},Zt=function(t){return t.playList[t.currentIndex]||{}},te=function(t){return t.showFooter},ee=function(t){return t.transitionName},ne=function(t){return t.query},ie=function(t){return t.searchHistory},re=function(t){return t.playHistory},se=function(t){return t.favoriteList},oe=function(t){return t.userInfo},ae=function(t){return!!t.userInfo},ce=function(t){return t.showTips},ue=function(t){return t.tipText},le={playing:!1,fullScreen:!1,playList:[],sequenceList:[],mode:w["n"].sequence,currentIndex:-1,showFooter:!1,transitionName:"page-left",query:"",searchHistory:Object(w["m"])(),playHistory:Object(w["l"])(),favoriteList:Object(w["k"])(),userInfo:null,showTips:!1,tipText:""},fe=le,he=n("bd86"),de=(It={},Object(he["a"])(It,dt,function(t,e){t.playing=e}),Object(he["a"])(It,pt,function(t,e){t.fullScreen=e}),Object(he["a"])(It,mt,function(t,e){t.playList=e}),Object(he["a"])(It,gt,function(t,e){t.sequenceList=e}),Object(he["a"])(It,vt,function(t,e){t.mode=e}),Object(he["a"])(It,yt,function(t,e){t.currentIndex=e}),Object(he["a"])(It,bt,function(t,e){t.showFooter=e}),Object(he["a"])(It,St,function(t,e){t.transitionName=e}),Object(he["a"])(It,_t,function(t,e){t.query=e}),Object(he["a"])(It,Lt,function(t,e){t.searchHistory=e}),Object(he["a"])(It,Tt,function(t,e){t.playHistory=e}),Object(he["a"])(It,wt,function(t,e){t.favoriteList=e}),Object(he["a"])(It,Ct,function(t,e){t.userInfo=e}),Object(he["a"])(It,xt,function(t,e){t.showTips=e}),Object(he["a"])(It,Ot,function(t,e){t.tipText=e}),It),pe=de,me=n("b054"),ge=n.n(me);s["a"].use(f["a"]);var ve=!1,ye=new f["a"].Store({state:fe,getters:r,mutations:pe,actions:i,strict:ve,plugins:ve?[ge()()]:[]}),be=n("323e"),Se=n.n(be),_e=n("283e"),Le=n.n(_e);n("f5df"),n("4ee2"),n("a5d8"),n("7691");s["a"].config.productionTip=!1,Se.a.configure({showSpinner:!1}),s["a"].prototype.$NProgress=Se.a,s["a"].use(Le.a),ht.beforeEach(function(t,e,n){t.name&&"search"!==t.name&&"login"!==t.name&&"songslist"!==t.name?ye.commit("SET_SHOW_FOOTER",!0):ye.commit("SET_SHOW_FOOTER",!1),Se.a.start(),n()}),ht.afterEach(function(){Se.a.done()}),new s["a"]({router:ht,store:ye,render:function(t){return t(nt)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),r=n.n(i);r.a},"5e27":function(t,e,n){},"70fe":function(t,e,n){},"73d6":function(t,e,n){},7691:function(t,e,n){},8272:function(t,e,n){"use strict";var i=n("d50d"),r=n.n(i);r.a},a32c:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"show"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showConfirm,expression:"showConfirm"}],staticClass:"confirm",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"confirm-wrapper"},[n("div",{staticClass:"confirm-content"},[n("p",{staticClass:"text"},[t._v(t._s(t.text))]),n("div",{staticClass:"operate"},[n("div",{staticClass:"operate-btn left",on:{click:t.cancel}},[t._v("\n            "+t._s(t.cancelBtnText)+"\n          ")]),n("div",{staticClass:"operate-btn",on:{click:t.confirm}},[t._v(t._s(t.confirmBtnText))])])])])])])},r=[],s={name:"",components:{},props:{text:{type:String,default:""},confirmBtnText:{type:String,default:"确定"},cancelBtnText:{type:String,default:"取消"}},data:function(){return{showConfirm:!1}},watch:{},computed:{},methods:{show:function(){this.showConfirm=!0},hide:function(){this.showConfirm=!1},cancel:function(){this.hide()},confirm:function(){this.$emit("deleteAll"),this.hide()}},created:function(){},mounted:function(){}},o=s,a=(n("ef78"),n("2877")),c=Object(a["a"])(o,i,r,!1,null,"16650df4",null);c.options.__file="Confirm.vue";e["a"]=c.exports},bc8b:function(t,e,n){},c281:function(t,e,n){"use strict";var i=n("36d4"),r=n.n(i);r.a},d50d:function(t,e,n){},e1d2:function(t,e,n){"use strict";var i=n("795b"),r=n.n(i),s=n("bc3a"),o=n.n(s),a=(n("cadf"),n("551c"),n("097d"),"https://muxue-music.herokuapp.com/"),c={banner:"/banner",catList:"/playlist/catlist",personalized:"/personalized",newDisc:"/top/playlist",disc:"/playlist/detail",artist:"/toplist/artist",singerDetail:"/artists",topList:"/toplist/detail",topListDetail:"/top/list",song:"/song/url",lyric:"/lyric",hotSearch:"/search/hot",suggest:"/search/suggest",album:"/album",comment:"/comment/playlist",login:"/login/cellphone",loginStatus:"/login/status",loginRefresh:"/login/refresh",logout:"/logout",recommend:"/recommend/songs",resource:"/recommend/resource",signin:"/daily_signin"};for(var u in c)c[u]=a+c[u];var l=c;function f(t,e){return new r.a(function(n,i){o.a.get(l[t],e).then(function(t){n(t.data)}).catch(function(t){i(t)})})}o.a.defaults.withCredentials=!0;e["a"]=f},ed08:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"c",function(){return a}),n.d(e,"j",function(){return u}),n.d(e,"n",function(){return l}),n.d(e,"q",function(){return f}),n.d(e,"b",function(){return m}),n.d(e,"m",function(){return v}),n.d(e,"g",function(){return y}),n.d(e,"e",function(){return S}),n.d(e,"o",function(){return T}),n.d(e,"l",function(){return w}),n.d(e,"i",function(){return C}),n.d(e,"d",function(){return x}),n.d(e,"k",function(){return E}),n.d(e,"p",function(){return k}),n.d(e,"h",function(){return P}),n.d(e,"f",function(){return I});n("20d6"),n("7f7f");var i=n("d225"),r=n("335a"),s=function t(e){var n=e.id,r=e.name,s=e.avatar;Object(i["a"])(this,t),this.id=n,this.name=r,this.avatar=s},o=function t(e){var n=e.id,r=e.singer,s=e.name,o=e.album,a=e.picUrl;Object(i["a"])(this,t),this.id=n,this.name=s,this.singer=r,this.album=o,this.picUrl=a};function a(t){return new o({id:t.id,singer:c(t.ar),name:t.name,album:t.al.name,picUrl:t.al.picUrl})}function c(t){var e=[];return e=t.map(function(t){return t.name}),e.join("/")}function u(t,e,n){var i="data-";return e=i+e,n?t.setAttribute(e,n):t.getAttribute(e)}var l={sequence:0,loop:1,random:2};function f(t){for(var e=t.slice(),n=0;n<e.length;n++){var i=h(0,n),r=e[n];e[n]=e[i],e[i]=r}return e}function h(t,e){return Math.floor(Math.random()*(e-t+1)+t)}var d="__search__",p=15;function m(t){var e=r["a"].get(d,[]);return g(e,t,function(e){return e===t},p),r["a"].set(d,e),e}function g(t,e,n,i){var r=t.findIndex(n);0!==r&&(r>0&&t.splice(r,1),t.unshift(e),i&&t.length>i&&t.pop())}function v(){return r["a"].get(d,[])}function y(t){var e=r["a"].get(d,[]);return b(e,function(e){return e===t}),r["a"].set(d,e),e}function b(t,e){var n=t.findIndex(e);n>-1&&t.splice(n,1)}function S(){return r["a"].remove(d,[]),[]}var _="__play__",L=200;function T(t){var e=r["a"].get(_,[]);return g(e,t,function(e){return e.id===t.id},L),r["a"].set(_,e),e}function w(){return r["a"].get(_,[])}function C(t){var e=r["a"].get(_,[]);return b(e,function(e){return e.id===t.id}),r["a"].set(_,e),e}function x(){return r["a"].remove(_,[]),[]}var O="__favourite__",j=200;function E(){return r["a"].get(O,[])}function k(t){var e=r["a"].get(O,[]);return g(e,t,function(e){return e.id===t.id},j),r["a"].set(O,e),e}function P(t){var e=r["a"].get(O,[]);return b(e,function(e){return e.id===t.id}),r["a"].set(O,e),e}function I(){return r["a"].remove(O,[]),[]}},ef78:function(t,e,n){"use strict";var i=n("2b8a"),r=n.n(i);r.a},fe8a:function(t,e,n){"use strict";var i=n("73d6"),r=n.n(i);r.a}});
//# sourceMappingURL=app.1d8beafd.js.map