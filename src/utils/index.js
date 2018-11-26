import Recommend from "../api/recommend";
export function getAllRecommend() {
  let p1 = Recommend.banner();
  let p2 = Recommend.personalized();
  let p3 = Recommend.newSong();
  let p4 = Recommend.dj();
  return Promise.all([p1, p2, p3, p4]);
}
