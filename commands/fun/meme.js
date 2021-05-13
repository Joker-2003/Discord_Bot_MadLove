module.exports={
    name: 'meme',
    description : 'shows hentai',
    
    usage: '',
    execute (message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const redditFetch = require('reddit-fetch');
        redditFetch({

            subreddit: 'memes',
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