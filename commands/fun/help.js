const { prefix } = require('../../config.json');
module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '',
	cooldown: 5,
	execute(message, args) {
        const Discord = require('discord.js');

        // const client = new Discord.Client();
        // const infos = message.client.commands.filter(x => x.category == 'fun').map((x) => '`' + x.name + '`').join(', ');
        // const music = message.client.commands.filter(x => x.category == 'games').map((x) => '`' + x.name + '`').join(', ');
        // const img = message.client.commands.filter(x => x.category == 'img-manipulation').map((x) => '`' + x.name + '`').join(', ');
        // const nsfw = message.client.commands.filter(x => x.category == 'nsfw').map((x) => '`' + x.name + '`').join(', ');
        // const mod = message.client.commands.filter(x => x.category == 'moderation').map((x) => '`' + x.name + '`').join(', ');
        // message.channel.send({
        //     embed: {
        //         color: 'ORANGE',
        //         author: { name: 'Help pannel' },
        //         footer: { text: 'when bishops come together they won’t know it, DEMA don’t control us' },
        //         fields: [
        //             { name: 'fun', value: infos },
        //             { name: 'game', value: music },
        //             { name: 'image-manipulation', value: img },
        //             { name: 'nsfw', value: nsfw },
        //             { name: 'moderation', value: mod },

        //         ],
        //         timestamp: new Date(),
                
        //     },
        // });
         const data = [];
        const { commands } = message.client;

        if (!args.length) {
            return message.channel.send({
                    embed: {
                        color: 'ORANGE',
                         author: { name: 'Help pannel' },
                         footer: { text: `\nYou can send \`${prefix}help [command name]\` to get info on a specific command!` },
                         fields: [
                             { name: 'commands', value: commands.map(command => prefix + command.name).join(', ')},
                            
        
                         ],
                         timestamp: new Date(),
                        
                     },
                 });
            // data.push('Here\'s a list of all my commands:');
            //  data.push(commands.map(command => prefix + command.name).join(', '));
            //  data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

            //  return message.reply(data, { split: true })



             // ...
         }
         const name = args[0].toLowerCase();
         const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

         if (!command) {
             return message.reply('that\'s not a valid command!');
         }
         return message.channel.send({
            embed: {
                color: 'ORANGE',
                 author: { name: 'Help pannel :'+  command.name },
                 footer: { text: '  ' },
                 fields: [
                     { name: 'Description', value: command.description },
                     { name: 'usage' , value:  prefix + command.name +' ' + command.usage},
                     {name: 'cooldown' ,  value : command.cooldown || 3 + "second(s)"}, 
                    

                 ],
                 timestamp: new Date(),
                
             },
         });
        //  data.push(`**Name:** ${command.name}`);
        //  if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        //  if (command.description) data.push(`**Description:** ${command.description}`);
        //  if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        // data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        //  message.channel.send(data, { split: true });
        //  // ...
    },
};