module.exports = {
  data: {
    name: "sub-btn"
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: "Dziękuję! :blush:"
    });
    
  }
}