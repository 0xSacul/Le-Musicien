const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
    name: 'leave',
    aliases: [],
    utilisation: '{prefix}leave',
    voiceChannel: true,

    execute(client, message, args) {

    if(message.guild.me.voice.channel){
        const connection = getVoiceConnection(message.member.voice.guild.id);
        connection.destroy();
        message.channel.send('✅ **|** A+ dans l\'bus !')
    } else {
        message.channel.send('❌ **|** Comment veux-tu que je parte d\'un channel vocal si ne je suis pas dedans ?');
    }
    },
};