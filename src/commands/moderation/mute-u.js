const { ContextMenuCommandBuilder, ApplicationCommandType, PermissionFlagsBits } = require("discord.js");
let reason = "Dodane przez funkcje aplikacje na użytkowniku!";

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("mute")
    .setType(ApplicationCommandType.User)
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction) {
    const user = interaction.targetUser
    const member = await interaction.guild.members
      .fetch(user.id)
      .catch(console.error);

    if (!reason) {
      user
        .send({
          content: `Ustawiono ci czas przerwy na serwerze **${interaction.guild.name}**!`,
        })
    }

    await member.timeout(60 * 60 * 1000, reason).catch(console.error);
    console.warn("Ustawiono mute na użytkownika " + user.tag + "!")

    await interaction.reply({
      content: `Pomyślnie ustawiono czas przerwy dla użytkownika ${user.tag}!`,
    });
  },
};
