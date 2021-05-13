module.exports={
    name: 'ass',
    description : 'ass',
    
    usage: '',
    execute (message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const redditFetch = require('reddit-fetch');
        if (message.channel.nsfw) {
            
            redditFetch({

                subreddit: 'ass',
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