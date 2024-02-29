const { SlashCommandBuilder } = require("discord.js");
const chalk = require("chalk");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("console-log")
    .setDescription("Send message to console!")
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("Type of message")
        .setRequired(true)
        .setAutocomplete(true),
    )
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("Message to send to console!")
        .setRequired(true),
    ),
  async autocomplete(interaction, client) {
    const focusedValue = interaction.options.getFocused();
    const choices = ["zwykły", "warn", "error", "clear"];
    const filtered = choices.filter((choice) =>
      choice.startsWith(focusedValue),
    );

    await interaction.respond(
      filtered.map((choice) => ({ name: choice, value: choice })),
    );
  },
  
  async execute(interaction, client) {
    if (interaction.user.id == "815544312275140660") {
      const option = interaction.options.getString("type");
      const message = interaction.options.getString("message");

      if (option == "zwykły") {
        console.log(`Wysłane przez ${interaction.user.name}: ${message}`);
      } else if (option == "warn") {
        console.warn(`Wysłane przez ${interaction.user.name}: ${message}`)
      } else if (option == "error") {
        console.error(`Wysłane przez ${interaction.user.name}: ${message}`)
      } else if (option == "clear") {
        console.clear();
      }
    }
  },
};
