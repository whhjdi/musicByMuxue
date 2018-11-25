const host = "http://localhost:3000";

const urls = {};

for (let key in urls) {
  urls[key] = host + urls[key];
}

export default urls;
