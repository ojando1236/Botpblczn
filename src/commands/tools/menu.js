const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("Returns a select menu!"),
  async execute(interaction, client) {
    const menu = new SelectMenuBuilder()
      .setCustomId("sub-menu")
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
        new SelectMenuOptionBuilder(
          {
            label: "Option 1",
            value: "jedynka",
          },
          {
            label: "Option 2",
            value: "dwójka",
          },
          {
            label: "Option 3",
            value: "trójka",
          }
        ),
      );

    await interaction.reply({
      content: "Wybierz opcję!",
      components: [new ActionRowBuilder().addComponents(menu)],
    });
    
    //client.channels.cache.get('CHANNEL_ID').updateOverwrite('ROLE_ID', { SEND_MESSAGES: false });
  },
};
