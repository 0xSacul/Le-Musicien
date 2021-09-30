const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ **|** Aucune musique en cours de lecture, ${message.author}.`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`❌ **|** Vous devez d'abord désactiver la musique actuelle en mode boucle (${client.config.app.px}loop), ${message.author}.`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `🔁 **|** Mode répétition **${queue.repeatMode === 0 ? 'activé' : 'désactivé'}** toute la file d'attente sera répétée à l'infini.` : `❌ **|** Quelque chose s'est mal passé, ${message.author}.`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`❌ **|** Vous devez d'abord désactiver la file d'attente actuelle en mode boucle (${client.config.app.px}loop queue), ${message.author}.`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `🔂 **|** Mode répétition **${queue.repeatMode === 0 ? 'activé' : 'désactivé'}** la musique en cours sera répétée à l'infini.` : `❌ **|** Quelque chose s'est mal passé, ${message.author}.`);
        };
    },
};