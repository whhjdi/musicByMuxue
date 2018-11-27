import Recommend from "../api/recommend";
export function getAllRecommend() {
  let p1 = Recommend.personalized();
  let p2 = Recommend.newSong();
  let p3 = Recommend.dj();
  return Promise.all([p1, p2, p3]);
}