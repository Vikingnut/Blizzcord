const Discord = require('discord.js');
const bot = new Discord.Client();
 
// insert bot token in 'login()', so bot may log in
bot.login();
 
// array to get month
var month = new Array;
month[0] = "january";
month[1] = "febuary";
month[2] = "march";
month[3] = "april";
month[4] = "may";
month[5] = "june";
month[6] = "july";
month[7] = "august";
month[8] = "september";
month[9] = "october";
month[10] = "november";
month[11] = "december";
 
// set date variables
var currentDate = new Date;
var currentMonth = month[currentDate.getMonth()];
var currentDay = currentDate.getDay();
var currentYear = currentDate.getFullYear;
 
// function to get news on HotS for currebt date
var hotsNews = window.open('https://news.blizzard.com/en-us', 'Blizzard News')
hotsNews.onload = () => {
    var patch = [], l = hotsNews.document.links;
    for(var i=0; i<l.length; i++) {
        if ((l.includes('patch') || l.includes('hotfix')) && l.includes(currentMonth + '-' + currentDay + '-' + currentYear)) {
            patch.push(l[i].href);
        }
    }
};
 
updatePatches = () => {
    hotsNewsChannel = channels.find('name', 'bot-testing');
    for (var i = 0; i < patch.length; i++) {
        hotsNewsChannel.sendMessage(patch[i]);
    }
};
 
// Notify user running bot when bot is ready
bot.on('ready', () => {
    console.log('I am ready!');
});
 
// Greet new users to server
bot.on('guildMemberAdd', member => {
    // Get channel named 'general'
    const channel = member.guild.channels.find('name', 'general');
    // Do nothing if channel not found
    if (!channel) return;
    // greet member
    channel.send(`Welcome to the server, ${member}! I am here to meet all your Blizzard Patch needs!! (in due time)`)
});
 
bot.on('message', (message) => {
 
    if (message.content == 'kms') {
        message.channel.sendMessage('Call 1-800-273-8255');
    } else if (message.content == 'ping') {
        message.channel.sendMessage('pong');
    } else if (message.content == 'Omae wa mou shindeiru') {
        message.channel.sendMessage('NANI??!');
    } else if (message.content == 'Update patches') {
        updatePatches();
    }
};