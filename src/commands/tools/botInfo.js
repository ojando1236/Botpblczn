const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ibot")
    .setDescription("Informacje o bocie o jego właścicielu."),
  async execute(interaction, client) {
    // Informacje
    const linkToAdd = "https://bit.ly/dBbD_170-94";

    const bId = client.user.id;
    const bTag = client.user.tag;
    const bAvatar = client.user.displayAvatarURL();
    const owner = client.users.cache.get("815544312275140660");
    const ownerTag = owner.tag;
    const ownerID = owner.id;
    const ownerAvatar = owner.displayAvatarURL();

    // Embed z informacjami

    const embed = new EmbedBuilder()
      .setColor("Random")
      .setDescription(
        "**Poniżej znajdują się informacje o bocie i o jego właścicielu!**",
      )
      .addFields([
        {
          name: "Informacje o bocie:",
          value: "**_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_**",
          inline: false,
        },
        {
          name: "Link do dodania:",
          value: `[Kliknij tutaj](${linkToAdd})`,
          inline: true,
        },
        {
          name: "Nazwa Bota:",
          value: bTag,
          inline: true,
        },
        {
          name: "ID bota:",
          value: bId,
          inline: true,
        },
        {
          name: "Avatar bota:",
          value: `[Kliknij tutaj](${bAvatar})`,
        },
        {
          name: "Właściciel bota:",
          value: "**_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_**",
          inline: false,
        },
        {
          name: "Nazwa właściciela:",
          value: ownerTag,
          inline: true,
        },
        {
          name: "ID właściciela:",
          value: ownerID,
          inline: true,
        },
        {
          name: "Avatar właściciela:",
          value: `[Kliknij tutaj](${ownerAvatar})`,
          inline: true,
        },
      ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
