module.exports = {
  data: {
    name: "sub-menu",
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `Wybrałeś opcje: ${interaction.values[0]}`,
    });
  },
};
