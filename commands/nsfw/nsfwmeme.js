module.exports={
    name: 'nsfwmeme',
    description : 'meme',
    
    usage: '',
    execute (message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const redditFetch = require('reddit-fetch');
        
        const sbredt = ['PornMemes' , 'NSFWMemes' , 'NSFWFunny', 'DirtyMemes' ];
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
        
        
    }
    
};