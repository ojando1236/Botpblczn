module.exports = {
  data: {
    name: "fav-color",
  },
  async execute(interaction, client) {
    await interaction.reply(`Twoj ulubiony kolor to: ${interaction.fields.getTextInputValue("favColorInput")}`)
  }
};
