import axios from "axios";
import urls from "./index";

function fetch(api, data) {
  return new Promise((resolve, reject) => {
    axios
      .get(urls[api], data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export default fetch;
