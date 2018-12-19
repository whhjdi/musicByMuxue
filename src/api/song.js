import fetch from "./fetch.js";

class Song {
  static getSong(id) {
    return fetch("song", {
      params: {
        id,
        br: 320000
      }
    });
  }
  static getLyric(id) {
    return fetch("lyric", {
      params: {
        id
      }
    });
  }
}

export default Song;
