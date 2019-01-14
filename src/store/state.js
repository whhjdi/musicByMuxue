import { playMode, loadSearch, loadPlay, loadFavorite } from "@/utils/index.js";
const state = {
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  showFooter: false,
  transitionName: "page-left",
  query: "",
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favoriteList: loadFavorite(),
  userInfo: null,
  showTips: false,
  tipText: "",
  loading: false
};

export default state;
