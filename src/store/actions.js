import * as types from "./mutationTypes";
import {
  playMode,
  shuffle,
  cacheSearchHistory,
  deleteCacheSearchHistory,
  deleteAllCacheSearchHistory
} from "@/utils/index.js";
export const selectPlay = function({ commit, state }, { list, index }) {
  commit(types.SET_SEQUENCE_LIST, list);
  if (state.mode === playMode.random) {
    let randomList = shuffle(list);
    commit(types.SET_PLAY_LIST, randomList);
    index = findIdx(randomList, list[index]);
  } else {
    commit(types.SET_PLAY_LIST, list);
  }
  commit(types.SET_CURRENT_INDEX, index);
  commit(types.SET_FULL_SCREEN, true);
  commit(types.SET_PLAYING_STATE, true);
};
export const randomPlay = function({ commit }, { list }) {
  commit(types.SET_PLAYING_MODE, playMode.random);
  commit(types.SET_SEQUENCE_LIST, list);
  let randomList = shuffle(list);
  commit(types.SET_PLAY_LIST, randomList);
  commit(types.SET_CURRENT_INDEX, 0);
  commit(types.SET_FULL_SCREEN, true);
  commit(types.SET_PLAYING_STATE, true);
};

function findIdx(list, song) {
  return list.findIndex(item => {
    return item.id === song.id;
  });
}

export const insertSong = function({ commit, state }, song) {
  let playList = state.playList.slice();
  let sequenceList = state.sequenceList.slice();
  let currentIndex = state.currentIndex;

  let currentSong = playList[currentIndex];
  //查找播放列表中是否有当前歌曲
  let fdIndex = findIdx(playList, song);
  //插入歌曲到列表中
  currentIndex++;
  playList.splice(currentIndex, 0, song);
  if (fdIndex > -1) {
    if (currentIndex > fdIndex) {
      playList.splice(fdIndex, 1);
      currentIndex--;
    } else {
      playList.splice(fdIndex + 1, 1);
    }
  }

  let currentSIndex = findIdx(sequenceList, currentSong) + 1;
  let fsIndex = findIdx(sequenceList, song);
  sequenceList.splice(currentSIndex, 0, song);
  if (fsIndex > -1) {
    if (currentSIndex > fsIndex) {
      sequenceList.splice(fsIndex, 1);
    } else {
      sequenceList.splice(fsIndex + 1, 1);
    }
  }
  commit(types.SET_PLAY_LIST, playList);
  commit(types.SET_SEQUENCE_LIST, sequenceList);
  commit(types.SET_CURRENT_INDEX, currentIndex);
  commit(types.SET_FULL_SCREEN, true);
  commit(types.SET_PLAYING_STATE, true);
};

export const saveSearchHistory = function({ commit }, query) {
  commit(types.SET_SEARCH_HISTORY, cacheSearchHistory(query));
};
export const deleteSearchHistory = function({ commit }, query) {
  commit(types.SET_SEARCH_HISTORY, deleteCacheSearchHistory(query));
};
export const deleteAllSearchHistory = function({ commit }) {
  commit(types.SET_SEARCH_HISTORY, deleteAllCacheSearchHistory());
};

export const deleteSong = function({ commit, state }, song) {
  let playList = state.playList.slice();
  let sequenceList = state.sequenceList.slice();
  let currentIndex = state.currentIndex;

  let pIndex = findIdx(playList, song);
  let sIndex = findIdx(sequenceList, song);
  playList.splice(pIndex, 1);
  sequenceList.splice(sIndex, 1);

  if (currentIndex > pIndex || currentIndex === playList.length) {
    currentIndex--;
  }

  const playingState = playList.length > 0;
  commit(types.SET_PLAYING_STATE, playingState);

  commit(types.SET_PLAY_LIST, playList);
  commit(types.SET_SEQUENCE_LIST, sequenceList);
  commit(types.SET_CURRENT_INDEX, currentIndex);
};

export const clearSong = function({ commit }) {
  commit(types.SET_PLAY_LIST, []);
  commit(types.SET_SEQUENCE_LIST, []);
  commit(types.SET_CURRENT_INDEX, -1);
  commit(types.SET_PLAYING_STATE, false);
};
