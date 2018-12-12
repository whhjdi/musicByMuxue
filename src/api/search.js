import fetch from "./fetch.js";

class Search {
  static getHotSearch() {
    return fetch("hotSearch", {
      params: {
        xhrFields: { withCredentials: true }
      }
    });
  }
}

export default Search;
