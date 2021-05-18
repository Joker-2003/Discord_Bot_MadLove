const Discord = module.require('discord.js');
const moment = require('moment');

module.exports={
    name: 'userinfo',
    description : 'displays user info',
    usage : ' or <@mention>',
    async execute(message, args) {
        let joinPosition = 0;
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else {
            user = message.author;}

            if (!args.length) {
                // Display info about the calling user
                member = message.guild.member(message.author);
              }
              else {
                // Display info about the user specified by the first argument
                member = message.guild.member(message.mentions.users.first());}

            const members = message.guild.members.cache.array();
            members.sort((a, b) => a.joinedAt - b.joinedAt);
            //console.log(members.id);
            for (let i = 0; i < message.guild.members.cache.size; i++) {
                console.log(message.guild.members)
              if (members[i].id == member.id){
             
                joinPosition = ++i;
                console.log(i)}
            }

        
    //console.log(user)
        // const member = message.guild.member(user);
    const joinDiscord = moment(user.createdAt).format('llll');
    const joinServer = moment(user.joinedAt).format('llll');
    message.channel.send({
        embed:{
            title: 'Profile Information',
            author : { text : user.username + '#' + user.discriminator, image: user.avatarURL() },

            thumbnail: { url : message.author.avatarURL() },
            fields : [
                {name: 'Joined at:' , value: member.joinedAt.toDateString()+ " at "+member.joinedAt.toTimeString()},
              
                
                {name : "Account Created On:", value:  moment.utc(user.createdAt).format("dddd, MMMM Do YYYY , HH:mm:ss") },

            ],
            color: 'RANDOM',
            footer: { text : 'ID: ' + user.id},
        }
    })
    
}
}