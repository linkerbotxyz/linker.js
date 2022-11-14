const { clientFetch } = require("../index");

const linkData = new clientFetch("github");
const userData = new clientFetch("508700048452878347");

linkData.getLink().then((data) => console.log(data));
userData.getUserLinks().then((data) => console.log(data));
