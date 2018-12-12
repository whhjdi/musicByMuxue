import fetch from "./fetch.js";

class Search {
  static getHotSearch() {
    return fetch("hotSearch", {
      params: {
        xhrFields: { withCredentials: true }
      }
    });
  }
  static getSuggest(keywords) {
    return fetch("suggest", {
      params: {
        keywords,
        xhrFields: { withCredentials: true }
      }
    });
  }
  static getSearchResult(keywords) {
    return fetch("search", {
      params: {
        keywords,
        xhrFields: { withCredentials: true }
      }
    });
  }
}

export default Search;
