import fetch from "./fetch.js";

class Artist {
  static singer() {
    return fetch("artist", {
      params: {
        xhrFields: { withCredentials: true }
      }
    });
  }
}

export default Artist;
