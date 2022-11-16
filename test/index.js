const Client = require("../index");

const client = new Client({
  token: "7osLWX7kh0q79aiBKbOelpYgytJuIeEf",
});

client.getLink("google").then((data) => {
  console.log(data);
});
