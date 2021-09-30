player.on('error', (queue, error) => {
    console.log(`❌ **|** Erreur émise par la file d'attente ${error.message}.`);
});

player.on('connectionError', (queue, error) => {
    console.log(`❌ **|** Erreur émise par la connexion ${error.message}.`);
});

player.on('trackStart', (queue, track) => {
    queue.metadata.send(`🎧 **|** J'ai commencé à jouer **${track.title}** dans **${queue.connection.channel.name}**.`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`✅ **|** Musique **${track.title}** ajouté dans la file d'attente.`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('❌ **|** J\'ai été déconnecté manuellement du channel vocal.');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('❌ **|** Personne n\'est dans le channel vocal, je me déconnecte...');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('✅ **|** J\'ai fini de lire toute la file d\'attente.');
});