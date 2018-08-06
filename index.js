const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if (message.content == 'kms') {
        message.channel.sendMessage('Call 1-800-273-8255');
    } else if (message.content == 'ping') {
        message.channel.sendMessage('pong');
    } else if (message.content == 'Omae wa mou shindeiru') {
        message.channel.sendMessage('NANI??!');
    }
});

bot.login('');

var blizznews = window.open('https://news.blizzard.com/en-us', 'Blizzard News')
blizznews.onload = function() {
    var patch = [], l = blizznews.document.links;
    for(var i=0; i<l.length; i++) {
        if (l.includes('patch') || l.includes('hotfix')) {
            patch.push(l[i].href);
        }
    }
}
