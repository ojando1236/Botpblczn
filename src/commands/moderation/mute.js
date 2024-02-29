const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mute")
    .setDescription("Mute a user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to mute")
        .setRequired(true),
    )
    .addIntegerOption((option) =>
      option
        .setName("time")
        .setDescription("The time to mute the user for")
        .setRequired(true),
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    const user = interaction.options.getUser("user");
    let reason = interaction.options.getString("reason");
    const time = interaction.options.getInteger("time");
    const member = await interaction.guild.members
      .fetch(user.id)
      .catch(console.error);

    if (!reason) {
      reason = "POWÓD NIE ZOSTAŁ PODANY";

      user
        .send({
          content: `Ustawiono ci czas przerwy na serwerze **${interaction.guild.name}**!`,
        })
    }

    await member.timeout(time * 60 * 1000, reason).catch(console.error);

    await interaction.reply({
      content: `Pomyślnie ustawiono czas przerwy dla użytkownika ${user.tag}!`,
    });
  },
};
