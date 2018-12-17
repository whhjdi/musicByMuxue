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
  static getAlbumDetail(id) {
    return fetch("album", {
      params: {
        id
      }
    });
  }
}

export default Search;
