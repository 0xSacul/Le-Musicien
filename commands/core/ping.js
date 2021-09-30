const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`🛰️ **|** Dernier battement de cœur calculé il y a ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} avec **${client.ws.ping}ms**.`);
    },
};