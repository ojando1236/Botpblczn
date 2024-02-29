const { SlashCommandBuilder } = require("discord.js");
const chalk = require("chalk");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("close")
    .setDescription("Close the bot"),
  async execute(interaction, client) {
    if (interaction.user.id == "815544312275140660") {
      await interaction.reply({
        content: "Turning off...",
      });
      await interaction.editReply({
        content: "Turning off..",
      });
      await interaction.editReply({
        content: "Turning off.",
      });
      
      client.destroy();

      interaction.editReply({
        content: "Closed!",
      });

      console.log(chalk.red(`Bot closed by ${interaction.user.tag}`));
    } else {
      await interaction.reply({
        content: "You are not the bot developer!",
        ephemeral: true,
      });
    }
  },
};
