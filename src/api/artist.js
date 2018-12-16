import fetch from "./fetch.js";

class Artist {
  static singer() {
    return fetch("artist", {});
  }
  static getSingerDetail(id) {
    return fetch("singerDetail", {
      params: {
        id
      }
    });
  }
}

export default Artist;
