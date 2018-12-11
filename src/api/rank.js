import fetch from "./fetch.js";

class Rank {
  static getTopList() {
    return fetch("topList", {
      params: {
        xhrFields: { withCredentials: true }
      }
    });
  }
  static getTopListDetail(idx) {
    return fetch("topListDetail", {
      params: {
        idx,
        xhrFields: { withCredentials: true }
      }
    });
  }
}

export default Rank;
