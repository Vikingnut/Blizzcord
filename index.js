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
