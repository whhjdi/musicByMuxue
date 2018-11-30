import fetch from "./fetch.js";

class Song {
  static song(id) {
    return fetch("song", {
      params: {
        id,
        br: 320000,
        xhrFields: { withCredentials: true }
      }
    });
  }
}

export default Song;
