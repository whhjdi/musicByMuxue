import fetch from "./fetch.js";

class Radio {
  static getRadio() {
    return fetch("radio", {
      params: {
        xhrFields: { withCredentials: true }
      }
    });
  }
  static getRadioProgram(rid) {
    return fetch("radioProgram", {
      params: {
        rid,
        asc: true,
        xhrFields: { withCredentials: true }
      }
    });
  }
}

export default Radio;
