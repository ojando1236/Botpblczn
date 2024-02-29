const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log("test")
    client.user.setActivity("Przerwa techniczna! (W trakcie)", { type: ActivityType.Playing });
    client.user.setStatus("idle");
    
    //console.log(`✅ | Zalogowano jako ${client.user.tag}!`);
  },
};