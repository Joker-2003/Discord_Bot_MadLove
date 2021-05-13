module.exports={
    name: 'boobs',
    description : 'hot titis',
    cooldown:'0.1',
    
    
    usage: '[command name]',
    execute (message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const redditFetch = require('reddit-fetch');
        if (message.channel.nsfw) {
            const sbredt = ["boobies" , "boobs" , "titstouchingtits", 'boobbounce' ,'amazingtits', 'titfuck' , 'nipples'  ,'aa_cups']
            
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