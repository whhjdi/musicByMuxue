import { playMode } from "@/utils/index.js";
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
  query: ""
};

export default state;
