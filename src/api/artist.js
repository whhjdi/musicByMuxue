import fetch from "./fetch.js";

class Artist {
  static singer() {
    return fetch("artist", {
      params: {
        xhrFields: { withCredentials: true }
      }
    });
  }
  static getSingerDetail(id) {
    return fetch("singerDetail", {
      params: {
        id,
        xhrFields: { withCredentials: true }
      }
    });
  }
}

export default Artist;
