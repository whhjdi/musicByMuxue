import fetch from "./fetch.js";

class Artist {
  static singer() {
    return fetch("artist", {
      params: {
        limit: 100,
        xhrFields: { withCredentials: true }
      }
    });
  }
}

export default Artist;
