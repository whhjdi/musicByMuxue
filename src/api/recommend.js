import fetch from "./fetch.js";

class Recommend {
  static getBanner() {
    return fetch("banner");
  }
  static getRecommend() {
    return fetch("recommend");
  }
  static getRecommendSongs() {
    return fetch("personalized", {
      params: {
        limit: 6
      }
    });
  }
  static getNewSong() {
    return fetch("newSong", {});
  }
  static getDisc(id) {
    return fetch("disc", {
      params: {
        id
      }
    });
  }
  static getNewDisc() {
    return fetch("newDisc", {
      params: {
        order: "new",
        limit: 6
      }
    });
  }
  static getResource() {
    return fetch("resource", {
      params: {
        limit: 6
      }
    });
  }
  static getAllSongList(cat, offset, order) {
    return fetch("newDisc", {
      params: {
        limit: 10,
        cat,
        offset,
        order
      }
    });
  }
  static getCatList() {
    return fetch("catList");
  }
}

export default Recommend;
