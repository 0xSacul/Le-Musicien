module.exports = async (client) => {
    console.log(`Connecté au client ${client.user.username}\n-> Prêt sur ${client.guilds.cache.size} serveur(s) pour un total de ${client.users.cache.size} membres`);

    client.user.setActivity(client.config.app.playing);
};