const { SlashCommandBuilder } = require("discord.js");
const chalk = require("chalk");
const token = process.env.token;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reset")
    .setDescription("Reset the bot"),
  async execute(interaction, client) {
    if (interaction.user.id == "815544312275140660") {
      await interaction.reply({
        content: "Reseting...",
      })
      await interaction.editReply({
        content: "Reseting..",
      })
      await interaction.editReply({
        content: "Reseting.",
      })

      client.destroy()
      client.login(token)

      interaction.editReply({
        content: "Reseted!",
      })

      console.log(chalk.redBright(`Bot reseted by ${interaction.user.tag}`));
    } else {
      await interaction.reply({
        content: "You are not the bot developer!",
        ephemeral: true,
      })
    }
  },
};
