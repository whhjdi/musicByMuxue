//构造歌手类，包含基本的三个属性
import Storage from "good-storage";
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

export const playMode = {
  sequence: 0,
  loop: 1,
  random: 2
};

export function shuffle(arr) {
  let _arr = arr.slice();
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i);
    let t = _arr[i];
    _arr[i] = _arr[j];
    _arr[j] = t;
  }
  return _arr;
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//缓存
const SEARCH_KEY = "__search__";
const SEARCH_MAX_LENGTH = 15;
export function cacheSearchHistory(query) {
  let searches = Storage.get(SEARCH_KEY, []);
  insertArray(
    searches,
    query,
    item => {
      return item === query;
    },
    SEARCH_MAX_LENGTH
  );
  Storage.set(SEARCH_KEY, searches);
  return searches;
}
function insertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare);
  if (index === 0) {
    return;
  }
  if (index > 0) {
    arr.splice(index, 1);
  }
  arr.unshift(val);
  if (maxLen && arr.length > maxLen) {
    arr.pop();
  }
}

export function loadSearch() {
  return Storage.get(SEARCH_KEY, []);
}
//删除某条缓存

export function deleteCacheSearchHistory(query) {
  let searches = Storage.get(SEARCH_KEY, []);
  deleteFromArray(searches, item => {
    return item === query;
  });
  Storage.set(SEARCH_KEY, searches);
  return searches;
}

function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare);
  if (index > -1) {
    arr.splice(index, 1);
  }
}
//删除所有缓存
export function deleteAllCacheSearchHistory() {
  Storage.remove(SEARCH_KEY, []);
  return [];
}

//播放记录
const PLAY_KEY = "__play__";
const PLAY_MAX_LENGTH = 200;

export function savePlay(song) {
  let songs = Storage.get(PLAY_KEY, []);
  insertArray(
    songs,
    song,
    item => {
      return item.id === song.id;
    },
    PLAY_MAX_LENGTH
  );
  Storage.set(PLAY_KEY, songs);
  return songs;
}
export function loadPlay() {
  return Storage.get(PLAY_KEY, []);
}
