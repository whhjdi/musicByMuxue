const host = "http://192.168.123.63:3000";
// const host = "http://120.79.162.149:3000";
const urls = {
  banner: "/banner",
  personalized: "/personalized",
  newDisc: "/top/playlist",
  disc: "/playlist/detail",
  artist: "/toplist/artist",
  singerDetail: "/artists",
  topList: "/toplist/detail",
  topListDetail: "/top/list",
  song: "/song/url",
  lyric: "/lyric",
  hotSearch: "/search/hot",
  suggest: "/search/suggest",
  album: "/album",
  //登录之后
  login: "/login/cellphone",
  loginStatus: "/login/status",
  loginRefresh: "/login/refresh",
  logout: "/logout",
  recommend: "/recommend/songs",
  resource: "/recommend/resource"
};

for (let key in urls) {
  urls[key] = host + urls[key];
}

export default urls;
