const host = "http://localhost:3000";

const urls = {
  banner: "/banner"
};

for (let key in urls) {
  urls[key] = host + urls[key];
}

export default urls;
