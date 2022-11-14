const fetch = require("node-fetch");
const config = require("../config");

class clientCreate {
  constructor(url) {
    this.url = url;
  }

  run() {
    return fetch(`${config.api_endpoint}/create/link?url=${this.url}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }
}

module.exports = clientCreate;
