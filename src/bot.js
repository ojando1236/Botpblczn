/////////////// HOSTING \\\\\\\\\\\\\\\

//const express = require("express");
//const bodyParser = require("body-parser");

//const app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.static("public"));

//app.get("/", (req, res) => {
//res.send("Hello World!");
//});

//app.listen(3000, () => {
//console.log("Hosting started!");
//});

/////////////// BOT \\\\\\\\\\\\\\\

const { token, databaseToken } = process.env;
const { connect } = require("mongoose");
const {
  Client,
  Collection,
  GatewayIntentBits,
  ActivityType,
} = require("discord.js");
const fs = require("fs");

const client = new Client({ intents: 32767 });
client.commands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.modals = new Collection();
client.commandArray = [];

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}`);
});

const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles) {
    require(`./functions/${folder}/${file}`)(client);
  }
}

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(token);
(async () => {
  await connect(databaseToken).catch(console.error);
})();
