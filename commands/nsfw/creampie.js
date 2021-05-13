module.exports={
    name: 'creampie',
    description : 'creampies',
    
    
    usage: '[command name]',
    execute (message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const redditFetch = require('reddit-fetch');
        if (message.channel.nsfw) {
            const sbredt = ['forcedcreampie' , 'breeding' ]
            
            redditFetch({

                subreddit: sbredt[Math.floor(Math.random() * sbredt.length)],
                sort: 'top',
                allowNSFW: true,
                allowModPost: true,
                allowCrossPost: true,
                allowVideo: true
                
            
            }).then(post => {
                message.reply( post.url);
            });
        } else {
            message.channel.send("This channel is SFW.");
        }
        
    }
};