const { ContextMenuCommandBuilder, ApplicationCommandType, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("avatar")
    .setType(ApplicationCommandType.User),
  async execute(interaction, client) {

    const user = interaction.targetUser;
    const avatar = user.displayAvatarURL({
      dynamic: true,
      size: 512,
    });

    const embed = new EmbedBuilder()
      .setColor("Random")
      .setTitle(`AVATAR: ${user.tag}`)
      .setDescription(`Avatar użytkownika: ${user.tag}`)
      .setImage(avatar);

    await interaction.reply({
      embeds: [embed]
    });
  },
};
