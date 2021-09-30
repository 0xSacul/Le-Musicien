const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ **|** Aucune musique en cours de lecture, ${message.author}.`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`❌ **|** La durée indiquée est supérieure à la durée totale de la chanson en cours, ${message.author}.\n*Essayez par exemple un temps valide comme **5s, 10s, 20 secondes, 1m**...*`);

        await queue.seek(timeToMS);

        message.channel.send(`✅ **|** Heure réglée sur la chanson en cours **${ms(timeToMS, { long: true })}**.`);
    },
};