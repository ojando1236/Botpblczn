const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("locksend")
    .setDescription("Lock sendMessages"),
  async execute(interaction, client) {
    const channel = interaction.channel;
    const embed = new EmbedBuilder()
      .setTitle("Kanał zablokowany!")
      .setDescription("Ten kanał został zablokowany!")
      //.setFooter("Zablokowany przez: " + interaction.user.tag)
      .setTimestamp()

    await channel.permissionOverwrites.edit("1205193160872038450", {
      SendMessages: false,
    });
    const fetched = await channel.messages.fetch({ limit: 1000 });
    channel.bulkDelete(fetched);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
