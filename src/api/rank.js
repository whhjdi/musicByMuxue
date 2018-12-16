import fetch from "./fetch.js";

class Rank {
  static getTopList() {
    return fetch("topList");
  }
  static getTopListDetail(idx) {
    return fetch("topListDetail", {
      params: {
        idx
      }
    });
  }
}

export default Rank;
