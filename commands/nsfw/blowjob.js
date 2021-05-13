module.exports={
    name: 'blowjob',
    description : 'blowjobs',
    aliases : ['bj'],
    
    usage: '[command name]',
    execute (message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const redditFetch = require('reddit-fetch');
        if (message.channel.nsfw) {
            
            redditFetch({

                subreddit: 'blowjobs',
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