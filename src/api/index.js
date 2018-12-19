const host = "http://192.168.123.63:3000";

const urls = {
  //banner
  banner: "/banner",
  //歌单分类
  catList: "/playlist/catlist",
  //未登录时推荐歌单
  personalized: "/personalized",
  //最新歌单
  newDisc: "/top/playlist",
  //歌单详情
  disc: "/playlist/detail",
  //歌手列表
  artist: "/toplist/artist",
  //歌手详情
  singerDetail: "/artists",
  // 排行榜
  topList: "/toplist/detail",
  // 排行详情
  topListDetail: "/top/list",
  //获取歌曲
  song: "/song/url",
  //获取歌词
  lyric: "/lyric",
  //热搜
  hotSearch: "/search/hot",
  //搜索结果建议
  suggest: "/search/suggest",
  //获取专辑详情
  album: "/album",
  comment: "/comment/playlist",
  /*登录之后*/
  //手机登录
  login: "/login/cellphone",
  //登录验证
  loginStatus: "/login/status",
  //刷新登录
  loginRefresh: "/login/refresh",
  //登出
  logout: "/logout",
  //每日推荐歌曲（需登录）
  recommend: "/recommend/songs",
  //登录后推荐歌单
  resource: "/recommend/resource",
  //签到
  signin: "/daily_signin"
};

for (let key in urls) {
  urls[key] = host + urls[key];
}

export default urls;
