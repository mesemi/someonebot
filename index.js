const { Client, Intents } = require('discord.js');
const _ = require('underscore');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });


client.once('ready', () => {
	console.log('Ready!');
  client.guilds.cache.forEach(guild => {
		console.log(`${guild.name} | ${guild.id}`);
    })
});

const thebot = '882990260345249853';

client.on('message', message => {
	if (message.author.bot) return;

	if (message.content == '<@!' + thebot + '>') {
        let theUser = message.guild.members.cache.random().id
        message.channel.send('<@' + theUser + '>');
}});
client.login(process.env.BOTTOKEN)