const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("permission")
    .setDescription("Require permissions to use this command")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction) {
    const { roles } = interaction.member;
    const permission = "Administrator";

    if (!roles.cache.has(PermissionFlagsBits.permission)) {
      interaction.reply({
        content: `Masz wymaganą permisje! (${permission})`,
        ephemeral: true,
      });
    }
  },
};
