import { playMode } from "@/utils/index.js";
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  showFooter: true,
  transitionName: "page-left",
  disc: {},
  showSearch: false,
  query: ""
};

export default state;
