let { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Ban a user from the server")
    .addUserOption((option) => option.setName("user").setDescription("The user to ban").setRequired(true))
    .addStringOption((option) => option.setName("reason").setRequired(false).setDescription("The reason for the ban"))
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
  async execute(interaction, client) {
    const userId = interaction.options.getUser("user");
    const reason = interaction.options.getString("reason") || "No reason provided!";

    await interaction.deferReply();

    const targetUser = await interaction.guild.members.fetch(userId);

    if (!targetUser) {
      await interaction.editReply("That user is not in this server!");
      return;
    }

    if (targetUser.id === interaction.guild.ownerId) {
      await interaction.editReply("You cannot ban the owner of the server!");
      return;
    }

    const targetUserRolePosition = targetUser.roles.highest.position;
    const requestUserRolePosition = interaction.member.roles.highest.position;
    const botRolePosition = interaction.guild.members.me.roles.highest.position;

    if (targetUserRolePosition >= requestUserRolePosition) {
      await interaction.editReply(
        "You cannot ban this member because they have the same/highter role than you!",
      );
      return;
    }

    if (targetUserRolePosition >= botRolePosition) {
      await interaction.editReply(
        "I can't ban this member because they have the same/highter role than me!",
      );
      return;
    }

    const embed1 = new EmbedBuilder()
      .setTitle("Zostałeś zbanowany!")
      .setDescription(`Zbanowano cię na serwerze ${interaction.guild.name} za ${reason}!`)
      .setFooter({ text: `Jeżeli masz pytania, skontaktuj się z moderatorem <@${interaction.user.id}> !`});

    await targetUser.send({ embeds: [embed1] });

    // Ban user
    try {
      await targetUser.ban({ reason });
      await interaction.editReply(
        `${targetUser} has been banned successfully!\n\nReason: ${reason}`,
      );
    } catch (error) {
      console.log(error);
    }

    const logsChannel = await interaction.guild.channels.fetch(
      "1208755048272764928",
    );

    const embed = new EmbedBuilder()
      .setTitle("Użytkownik zbanowany!")
      .addFields([
        {
          name: "Użytkownik",
          value: `${targetUser}`,
        },
        {
          name: "Moderator",
          value: `${interaction.user}`,
        },
        {
          name: "Powód",
          value: `${reason}`,
        },
      ])

    await logsChannel.send({ embeds: [embed] });
  },
};
