const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("autocomplete")
    .setDescription("Returns autocomplete.")
    .addStringOption((option) =>
      option
        .setName("colour")
        .setDescription("The colour to autocomplete.")
        .setAutocomplete(true)
        .setRequired(true),
    ),
  async autocomplete(interaction, client) {
    const focusedValue = interaction.options.getFocused();
    const choices = [
      "czerwony",
      "pomarańczowy",
      "żółty",
      "niebieski",
      "zielony",
      "fioletowy",
      "różowy",
      "szary",
      "biały",
      "czarny",
      "brązowy",
    ];
    const filtered = choices.filter((choice) =>
      choice.startsWith(focusedValue),
    );

    await interaction.respond(
      filtered.map((choice) => ({ name: choice, value: choice })),
    );
  },
  async execute(interaction, client) {
    const option = interaction.options.getString("colour");

    await interaction.reply({
      content: `You choose **${option}**`,
      ephemeral: true,
    });
  },
};
