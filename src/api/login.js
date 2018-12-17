import fetch from "./fetch.js";

class Login {
  static login(phone, password) {
    return fetch("login", {
      params: {
        phone,
        password
      }
    });
  }
  static getLoginStatus() {
    return fetch("loginStatus");
  }
  static refreshLogin() {
    return fetch("loginRefresh");
  }
  static logout() {
    return fetch("logout");
  }
  static signin() {
    return fetch("signin");
  }
}

export default Login;
