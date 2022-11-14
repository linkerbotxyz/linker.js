const { clientFetch, clientCreate } = require("../index");

// Using the clientFetch
// const linkData = new clientFetch("github");
// const userData = new clientFetch("508700048452878347");

// linkData.getLink().then((data) => console.log(data));
// userData.getUserLinks().then((data) => console.log(data));

// Using the clientCreate
const newLink = new clientCreate("dadasda");

newLink.run().then((data) => console.log(data));
