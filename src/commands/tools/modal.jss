const {
  SlashCommandBuilder,
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("modal")
    .setDescription("Returns an modal."),
  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId("fav-color")
      .setTitle("Ulubiony kolor?");

    const textInput = new TextInputBuilder()
      .setCustomId("favColorInput")
      .setLabel("Jaki jest twój ulubiony kolor?")
      .setStyle(TextInputStyle.Short);

    modal.addComponents(new ActionRowBuilder().addComponents(textInput));

    await interaction.showModal(modal);
  },
};
