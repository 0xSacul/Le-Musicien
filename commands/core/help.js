const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('Ci-dessous tu peux voir chaque commande que le BOT peut exécuter.\nSi tu rencontres un problème avec celui-ci contact **Sacul#0001**\n\nPréfix du bot: **+**\n\nSacul décline toute responsabilité en cas d\'utilisation non autorisée de ce BOT. ⚠');
        embed.addField(`Liste des commandes actives - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('Pwrd by Sacul ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};