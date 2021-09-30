module.exports = {
    app: {
        px: '+',
        token: '',
        playing: '',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        discordPlayer: {}
    }
};

// px : Préfix du bot.
// token : Le token du ton bot. Retrouves ton token sur https://discord.com/developers/applications
// playing : (optionel) Affiche un statut personnalisé quand le bot est en ligne.

// DJ: Si activé, toutes les personnes avec le rôle correspondant à la valeur dans "roleName" pourront utilsier les commandes inscrite dans "commands".
// toutes autre personnes sans le role ni de permissions Admin ne pourront pas utiliser le bot.