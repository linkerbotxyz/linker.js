# Linker.js

A JavaScript library for interacting with the LinkerBot API

## Get your API token

Go to [linkerbot.xyz/developers](https://www.linkerbot.xyz/developers) and create your API token.

# Creating the Client

```javascript
const Client = require("linker.js");

const client = new Client({
  token: "<my-api-token>",
});
```

### Get a link

```javascript
client.getLink("<link-id>").then((link) => {
  console.log(link);
});
```

The function will return:

- original (The original link)
- short (The shorted id for the link)
- user (The id of the owner)
- clicks (The number of clicks)
- timeStamp (Such as createdAt and updatedAt)

### Get Users Links

```javascript
client.getUserLinks("<user-id>").then((u) => {
  console.log(u);
});
```

This will return all the users links, <b>BUT</b> if the user have private links. Then it wan't return them.

### Creating a new link

```javascript
client.create("<url>").then((link) => {
  console.log(link);
});
```

Make sure your link is valid or you will get errors.
