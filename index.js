// const Discord = require('discord.js');
// const { prefix, token } = require('./config.json');
// const client = new Discord.Client();

// client.once('ready', () => {
// 	console.log('Ready!');
// });
// client.on('message', message => {
//     if (!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).trim().split(/ +/);
//     const command = args.shift().toLowerCase();

	
//     if (message.content === `${prefix}ping`) {
//         message.channel.send('Pong.');
//     }
//     else if (message.content === `${prefix}user-info`) {
//         message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
//     }
//     else if (message.content === `${prefix}server`) {
//         message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
//     }
//     else if (command === 'args-info') {
//         if (!args.length) {
//             return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
//         }
    
//         message.channel.send(`Command name: ${command}\nArguments: ${args}`);
//     }
//     else if (command === 'kick') {
//         // grab the "first" mentioned user from the message
//         // this will return a `User` object, just like `message.author`
//         if (!message.mentions.users.size) {
//             return message.reply('you need to tag a user in order to kick them!');
//         }
//         const taggedUser = message.mentions.users.first();
    
//         message.channel.send(`You wanted to kick: ${taggedUser.username}`);
//     }
//     else if (command === 'avatar') {
//         if (!message.mentions.users.size) {
//             return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
//         }
    
//         const avatarList = message.mentions.users
//         message.channel.send ( `${message.mentions.user.username}'s avatar: <${message.mentions.user.displayAvatarURL({ format: "png", dynamic: true })}>`);
        
    
//         // send the entire array of strings as a message
//         // by default, discord.js will `.join()` the array with `\n`
       
//     }
//     else if (command === 'delete') {
//         const amount = parseInt(args[0]);
    
//         if (isNaN(amount)) {
//             return message.reply('that doesn\'t seem to be a valid number.');
//         }
//         message.reply ("nico has deleted " + amount + " messages");
    
//         message.channel.bulkDelete(amount,true);
        
//     }
// });
// client.login(token);

const fs = require('fs');
const Discord = require('discord.js');
const Canvas = require('canvas');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();


const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.once('ready', () => {
    console.log('Ready!');
});
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        activity: {
            name: "Twenty Øne Piløts" ,  //The message shown
            type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });
client.on('message', message => {
   
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    const { cooldowns } = client;

    if (!cooldowns.has(command.name)) {
	cooldowns.set(command.name, new Discord.Collection());
        }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    const applyText = (canvas, text) => {
        const ctx = canvas.getContext('2d');
        let fontSize = 70;
    
        do {
            ctx.font = `${fontSize -= 10}px sans-serif`;
        } while (ctx.measureText(text).width > canvas.width - 300);
    
        return ctx.font;
    };
    

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});
client.login(token);