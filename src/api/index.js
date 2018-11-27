const host = "http://192.168.123.63:3000";
// const host = "http://120.79.162.149:3000";
const urls = {
  banner: "/banner",
  personalized: "/personalized",
  newSong: "/personalized/newsong",
  dj: "/personalized/djprogram",
  artist: "/toplist/artist"
};

for (let key in urls) {
  urls[key] = host + urls[key];
}

export default urls;
