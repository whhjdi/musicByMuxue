# mx-music

## 项目总览
- 首页·歌单·歌单分类

![](https://ws3.sinaimg.cn/large/006tNbRwly1fyc9pf8jdwj315y0u0hdu.jpg)

- 排行·歌手·排行榜详情

![](https://ws2.sinaimg.cn/large/006tNbRwly1fyc9s6a1swj315j0u0hcj.jpg)

- 歌手详情·评论·播放列表

![](https://ws3.sinaimg.cn/large/006tNbRwly1fyc9vksa8bj315j0u0e81.jpg)

- 最近播放·个人信息·登录

![](https://ws4.sinaimg.cn/large/006tNbRwly1fyc9ya5q8uj315j0u01kx.jpg)

- 搜索推荐·搜索历史·收藏夹

![](https://ws4.sinaimg.cn/large/006tNbRwly1fyca10yxdtj315j0u0wpg.jpg)

- 菜单·全屏播放·歌词

![](https://ws2.sinaimg.cn/large/006tNbRwly1fyca3pegp2j315k0u0hdu.jpg)

## 主要功能

### 歌单
歌单分为四类：推荐歌单（登录前），推荐歌单（登录后），全部歌单，分类歌单。根据是否登录推荐你喜欢的歌单，支持歌单类型选择和按照最新和最热排序，歌单展示实现触底加载，加快加载速度，减少不必要流量消耗

### 排行榜

排行榜由于接口问题，原本的26个排行删减为23个，默认显示前三名，进入后显示全部歌曲。

### 歌手

右侧字母索引和左侧歌手联动，支持滑动和点击。

### 我的

实现最近播放，收藏夹，个性推荐（需登录），个人中心（个人信息展示，签到，登录）

### 播放器

实现顺序播放，随机播放，单曲循环，上一曲、下一曲，播放/暂停，收藏,播放列表，歌词展示等功能
最小化之后显示mini播放器，支持播放/暂停，播放列表

### 歌曲列表（通用组件）

歌单详情，专辑详情，歌手详情都用这个组件展示，查看评论功能也在这个组件实现，歌曲支持直接播放，下一曲播放和收藏

### 搜索

实现热门搜索，搜索推荐（专辑，歌手，歌曲）等基本功能，歌曲支持直接播放，下一曲播放和收藏，考虑稳定性这些数据都保存在localstorage,暂时不会使用在线接口，防止收藏歌曲等误操作

## 技术栈

### 前端

Vue：用于构建用户界面的 MVVM 框架
vue-router：为单页面应用提供的路由系统，使用了 Lazy Loading Routes 技术来实现异步加载优化性能
vuex：Vue 集中状态管理，在多个组件共享某些状态时非常便捷
vue-lazyload：实现图片懒加载，节省用户流量，优化页面加载速度
better-scroll：解决移动端各种滚动场景需求的插件，使移动端滑动体验更加流畅
SCSS：css 预编译处理器
ES6：ECMAScript 新一代语法，模块化、解构赋值、Promise、Class 等方法非常好用
vw:使用vw的方案适配移动端

### 后端

Node.js：利用 Express 搭建的本地测试服务器
vue-axios：用来请求后端 API 音乐数据
NeteaseCloudMusicApi：网易云音乐 NodeJS 版 API，提供音乐数据

### 其他工具

vue-cli3：Vue 脚手架工具
eslint：代码风格检查工具
iconfont ：阿里巴巴图标库

## 如果觉得我的项目还不错的话 👏，就给个 star ⭐️ 鼓励一下吧~

### 参考
部分功能参考[orbem](https://github.com/orbem/vue-music-webapp)的项目

后端接口使用[NeteaseCloudMusicApi](https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=neteasecloudmusicapi)项目

## Project setup
clone本项目和[NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)
```bash
//进入NeteaseCloudMusicApi目录
node app.js
//进入musicByMusic目录
yarn install
//开启serve
yarn serve
//编译打包
yarn build
```
