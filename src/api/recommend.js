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
  static dj() {
    return fetch("dj", {
      params: {
        xhrFields: { withCredentials: true }
      }
    });
  }
}

export default Recommend;
