module.exports={
    name: 'lesbian',
    description : 'lesbians',
    cooldown:'0.01',
    
    usage: '[command name]',
    execute (message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client();
        const redditFetch = require('reddit-fetch');
        let c =0;
       // if (message.channel.nsfw) {
            
        //} else {
       //     message.channel.send("This channel is SFW.");

       // }
       fetch();
       
        function fetch (){
            console.log(c++);
            // if (message.channel.nsfw) {
                 const sbredt = ['lesbians','Lesbian_gifs' ]
                 
                 redditFetch({
     
                     subreddit: sbredt[Math.floor(Math.random() * sbredt.length)],
                     sort: 'hot',
                     allowNSFW: true,
                     allowModPost: true,
                     allowCrossPost: true,
                     allowVideo: false
       }).then(post => {
        console.log(post.url);
        if (post.url.startsWith('https://redgifs.com' || post.url.startsWith('https://www.redgifs.com') || post.url.startsWith('http://www.redgifs.com') || post.url.startsWith('http://www.redgifs.com'))){
           fetch();
       }
    
        else{
            
           
        message.reply( post.url);
           
        }
    });
        
    }}
};