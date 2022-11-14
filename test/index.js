const { clientFetch } = require("../index");

const linkData = new clientFetch("githdub");

linkData.getLink().then((data) => console.log(data));
