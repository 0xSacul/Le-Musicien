module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`❌ **|** Aucune musique en cours de lecture, ${message.author}.`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `✅ **|** Musique actuelle ${queue.current.title} en pause.` : `❌ **|** Quelque chose s'est mal passé, ${message.author}.`);
    },
};