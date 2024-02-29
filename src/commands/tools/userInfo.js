const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("userInfo")
    .setType(ApplicationCommandType.User),
  async execute(interaction) {
    // Informacje

    const usr = interaction.targetUser;
    const uId = usr.id;
    const uName = usr.tag;
    const uAvatar = usr.displayAvatarURL();

    // Embed z informacjami

    const embed = new EmbedBuilder()
      .setColor("Random")
      .setTitle("Informacje o użytkowniku:")
      .setDescription("*Poniżej znajdują się informacje o użytkowniku!*")
      .addFields([
        {
          name: "Nazwa użytkownika",
          value: uName,
          inline: true,
        },
        {
          name: "ID użytkownika",
          value: uId,
          inline: true,
        },
        {
          name: "Avatar użytkownika",
          value: `[Kliknij tutaj](${uAvatar})`,
          inline: true,
        }
      ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
