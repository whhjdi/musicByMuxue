import fetch from "./fetch.js";

class Rank {
  static topList() {
    return fetch("topList", {
      params: {
        xhrFields: { withCredentials: true }
      }
    });
  }
}

export default Rank;
