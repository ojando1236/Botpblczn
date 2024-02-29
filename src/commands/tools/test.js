const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Test command"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
    })

    const newMessage = `API Latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`
    await interaction.editReply({
      content: newMessage,
      ephemeral: true
    })
  
  }
}