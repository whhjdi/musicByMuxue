import fetch from "./fetch.js";

class Recommend {
  static getBanner() {
    return fetch("banner", {
      params: {
        xhrFields: { withCredentials: true }
      }
    });
  }
  static getRecommendSongs() {
    return fetch("personalized", {
      params: {
        limit: 6,
        xhrFields: { withCredentials: true }
      }
    });
  }
  static getNewSong() {
    return fetch("newSong", {
      params: {
        xhrFields: { withCredentials: true }
      }
    });
  }
  static getDisc(id) {
    return fetch("disc", {
      params: {
        id,
        xhrFields: { withCredentials: true }
      }
    });
  }
  static getNewDisc() {
    return fetch("newDisc", {
      params: {
        order: "new",
        limit: 6,
        xhrFields: { withCredentials: true }
      }
    });
  }
}

export default Recommend;
