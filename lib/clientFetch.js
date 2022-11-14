const fetch = require("node-fetch");
const config = require("../config");

class clientFetch {
  constructor(id) {
    this.id = id;
  }

  getLink() {
    return fetch(`${config.api_endpoint}/link?id=${this.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data === null) {
          throw new Error("Link was not found");
        } else {
          return data;
        }
      });
  }
}

module.exports = clientFetch;
