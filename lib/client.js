const fetch = require("node-fetch");
const config = require("../config");
const chalk = require("chalk");

class Client {
  constructor(options, id) {
    this.options = options;
    this.id = id;
  }

  // Get a Link
  getLink(id) {
    if (!id) {
      throw new Error(chalk.red("No id provided"));
    }

    return fetch(
      `${config.api_endpoint}/link?id=${id}&key=${this.options.token}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (
          data.message ===
          "Link was not found in our Database. Try with a valid linkId"
        ) {
          throw new Error(chalk.red(data.message));
        } else if (
          data.message === "Invalid API_KEY. Please use an valid API_KEY"
        ) {
          throw new Error(chalk.red("Your API_KEY is invalid"));
        } else {
          return data;
        }
      });
  }

  // Get Users Links
  getUserLinks(id) {
    if (!id) {
      throw new Error(chalk.red("No id provided"));
    }

    return fetch(
      `${config.api_endpoint}/@me/links?id=${id}&key=${this.options.token}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (
          data.message ===
          "Link was not found in our Database. Try with a valid linkId"
        ) {
          throw new Error(chalk.red(data.message));
        } else if (
          data.message === "Invalid API_KEY. Please use an valid API_KEY"
        ) {
          throw new Error(chalk.red("Your API_KEY is invalid"));
        } else {
          return data;
        }
      });
  }

  // Create link
  create(url) {
    if (!url) {
      throw new Error(chalk.red("No url provided"));
    }

    return fetch(
      `${config.api_endpoint}/create/link?url=${url}&key=${this.options.token}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Your link must have start with http or https!") {
          throw new Error(chalk.red(data.message));
        } else if (data.message === "Your link is too short!") {
          throw new Error(chalk.red(data.message));
        } else if (data.message === "Your link is too long!") {
          throw new Error(chalk.red(data.message));
        } else if (
          data.message ===
          "Link was not found in our Database. Try with a valid linkId"
        ) {
          throw new Error(chalk.red(data.message));
        } else if (
          data.message === "Invalid API_KEY. Please use an valid API_KEY"
        ) {
          throw new Error(chalk.red("Your API_KEY is invalid"));
        } else {
          return data;
        }
      });
  }
}

module.exports = Client;
