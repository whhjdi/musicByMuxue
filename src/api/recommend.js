import fetch from "./fetch.js";

class Recommend {
  static banner() {
    return fetch("banner", {
      params: {
        xhrFields: { withCredentials: true }
      }
    });
  }
  static personalized() {
    return fetch("personalized", {
      params: {
        xhrFields: { withCredentials: true }
      }
    });
  }
  static newSong() {
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
