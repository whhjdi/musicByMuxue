import Recommend from "../api/recommend";
export function getAllRecommend() {
  let p1 = Recommend.personalized();
  let p2 = Recommend.newSong();
  let p3 = Recommend.dj();
  return Promise.all([p1, p2, p3]);
}

export class Singer {
  constructor({ id, name, avatar }) {
    (this.id = id), (this.name = name), (this.avatar = avatar);
  }
}

//构造歌曲类,包含基本的5个属性
export class Song {
  constructor({ id, singer, name, album, picUrl }) {
    this.id = id;
    this.name = name;
    this.singer = singer;
    this.album = album;
    this.picUrl = picUrl;
  }
}
//生成歌曲
export function createSong(musicData) {
  return new Song({
    id: musicData.id,
    singer: singerName(musicData.ar),
    name: musicData.name,
    album: musicData.al.name,
    picUrl: musicData.al.picUrl
  });
}

function singerName(ar) {
  let name = [];
  name = ar.map(item => {
    return item.name;
  });
  return name.join("/");
}
export function getData(el, name, val) {
  const prefix = "data-";
  name = prefix + name;
  if (val) {
    return el.setAttribute(name, val);
  } else {
    return el.getAttribute(name);
  }
}
