import Recommend from "../api/recommend";
export function getAllRecommend() {
  let p1 = Recommend.personalized();
  let p2 = Recommend.newSong();
  let p3 = Recommend.dj();
  return Promise.all([p1, p2, p3]);
}

export default class Singer {
  constructor({ id, name, avatar }) {
    (this.id = id), (this.name = name), (this.avatar = avatar);
  }
}

export function getData(el, name, val) {
  const prefix = "data-";
  name = prefix + name;
  if (val) {
    return el.setAttribute(name, val);
  } else {
    return el.getAttribute(name);
  }
}
