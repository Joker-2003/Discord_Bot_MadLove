module.exports={
    name: 'nsfw',
    description : 'show nudes.. <fetched from subreddit r/nsfw2>',
    
    usage: '',
    execute (message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const redditFetch = require('reddit-fetch');
        
            
            redditFetch({

                subreddit: 'nsfw2',
                sort: 'top',
                allowNSFW: true,
                allowModPost: true,
                allowCrossPost: true,
                allowVideo: true
            
            }).then(post => {
                message.reply("some nudes for you " + post.url);
            });
        
        
    }
    
};