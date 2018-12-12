import * as types from "./mutationTypes";

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer;
  },
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag;
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag;
  },
  [types.SET_PLAY_LIST](state, list) {
    state.playList = list;
  },
  [types.SET_SEQUENCE_LIST](state, list) {
    state.sequenceList = list;
  },
  [types.SET_PLAYING_MODE](state, mode) {
    state.mode = mode;
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index;
  },
  [types.SET_SHOW_FOOTER](state, flag) {
    state.showFooter = flag;
  },
  [types.SET_TRANSITION_NAME](state, name) {
    state.transitionName = name;
  },
  [types.SET_DISC](state, list) {
    state.disc = list;
  },
  [types.SET_SHOW_SEARCH](state, flag) {
    state.showSearch = flag;
  }
};

export default mutations;
