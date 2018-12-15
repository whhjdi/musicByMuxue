import { playMode, loadSearch, loadPlay } from "@/utils/index.js";
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  showFooter: false,
  transitionName: "page-left",
  disc: {},
  query: "",
  searchHistory: loadSearch(),
  playHistory: loadPlay()
};

export default state;
