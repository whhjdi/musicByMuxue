import * as types from "./mutationTypes";
import { playMode, shuffle } from "@/utils/index.js";
export const selectPlay = function({ commit, state }, { list, index }) {
  commit(types.SET_SEQUENCE_LIST, list);
  if (state.mode === playMode.random) {
    let randomList = shuffle(list);
    commit(types.SET_PLAY_LIST, randomList);
    index = findIndex(randomList, list[index]);
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

function findIndex(list, song) {
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
  let fdIndex = findIndex(playList, song);
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

  let currentSIndex = findIndex(sequenceList, currentSong) + 1;
  let fsIndex = findIndex(sequenceList, song);
  sequenceList.splice(currentSIndex, 0, song);
  if (fsIndex > -1) {
    if (currentSIndex > fsIndex) {
      playList.splice(fsIndex, 1);
    } else {
      playList.splice(fsIndex + 1, 1);
    }
  }
  commit(types.SET_PLAY_LIST, playList);
  commit(types.SET_SEQUENCE_LIST, sequenceList);
  commit(types.SET_CURRENT_INDEX, currentIndex);
  commit(types.SET_FULL_SCREEN, true);
  commit(types.SET_PLAYING_STATE, true);
};
