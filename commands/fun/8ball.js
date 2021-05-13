module.exports = {
    name: '8ball',
    description: "Answers a question",
        argnum: 1,
        usage: " [question]",
        category: "Fun",
    execute: function (msg,args) {
        const Discord = require('discord.js');

        
        if (!args.length) return msg.channel.send("enter a statement");
        var answers = ['Yes', 'No', 'Maybe', 'I don\'t know', 'Probably', 'Probably not' , 'Only on Tuesdays', 'Only on weekends']
        var answer = Math.floor(Math.random() * answers.length)
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(answers[answer]);
            
        msg.channel.send(embed);
    },
    
};