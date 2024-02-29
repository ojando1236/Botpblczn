const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reactor")
    .setDescription("Returns reactions..."),
  async execute(interaction, client) {
    const message = await interaction.reply({
      content: "Kliknij w reakcje!",
      fetchReply: true,
    });

    message.react("1207075766454714389");

    const filter = (reaction, user) => {
      return reaction.emoji.name == "da18_08" && user.id == interaction.user.id;
    };

    const collector = message.createReactionCollector({ filter, time: 15000 });

    collector.on("collect", (reaction, user) => {
      console.log(`Zebrano ${reaction.emoji.name} przez ${user.tag}!`);
    });

    collector.on("end", collected => {
      console.log(`Zebrano ${collected.size} reakcji!`);
    });
  }
}