module.exports={
    name: 'bdsm',
    description : 'BDSM',
    
    usage: '',
    execute (message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const redditFetch = require('reddit-fetch');
        
            
            redditFetch({

                subreddit: 'bondage',
                sort: 'top',
                allowNSFW: true,
                allowModPost: true,
                allowCrossPost: true,
                allowVideo: true
            
            }).then(post => {
                message.reply( post.url);
            });
        
        
    }
    
};