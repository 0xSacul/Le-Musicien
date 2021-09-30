module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`❌ **|** Aucune musique en cours de lecture, ${message.author}.`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `✅ **|** Musique actuelle ${queue.current.title} a repris.` : `❌ **|** Quelque chose s'est mal passé, ${message.author}.`);
    },
};