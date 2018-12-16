import fetch from "./fetch.js";

class Search {
  static getHotSearch() {
    return fetch("hotSearch");
  }
  static getSuggest(keywords) {
    return fetch("suggest", {
      params: {
        keywords
      }
    });
  }
}

export default Search;
