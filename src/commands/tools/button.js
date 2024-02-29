const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("btne")
    .setDescription("Return a button"),
  async execute(interaction, client) {
    const button = new ButtonBuilder()
      .setCustomId("btn")
      .setLabel("Naciśnij mnie!")
      .setStyle(ButtonStyle.Primary);

    await interaction.reply({
      content: "Przycisk",
      components: [new ActionRowBuilder().addComponents(button)],
    });
  },
};
