import * as types from "./mutationTypes";

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer;
  },
  [types.SET_TOP_DETAIL_LIST](state, topDetailList) {
    state.topDetailList = topDetailList;
  }
};

export default mutations;
