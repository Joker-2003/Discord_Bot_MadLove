module.exports={
    name: 'slap',
    description: 'slap',
    cooldown : '1',
   execute (message,args) {
    const Discord = require('discord.js');
       if (!args.length){
        const slapAr = ['https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif' , 'https://i.pinimg.com/originals/fc/e1/2d/fce12d3716f05d56549cc5e05eed5a50.gif' , 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b02c16d5-1b1b-4139-92e6-ca6b3d768d7a/d6wv007-5fbf8755-5fca-4e12-b04a-ab43156ac7d4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwMmMxNmQ1LTFiMWItNDEzOS05MmU2LWNhNmIzZDc2OGQ3YVwvZDZ3djAwNy01ZmJmODc1NS01ZmNhLTRlMTItYjA0YS1hYjQzMTU2YWM3ZDQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4MVfHXfzK83yI6L2NpBfVb2knaJtyGd7TlSEDH79bH8']
        author = message.author.username;
       
        const embed = new Discord.MessageEmbed()
         .setColor('red')
         .setTitle(  "sugar daddy slapped " + author + ' !!!')
         .setImage (slapAr[Math.floor(Math.random() * slapAr.length)]);
        message.channel.send(embed);
       }
       else{
        const slapAr = ['https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif' , 'https://i.pinimg.com/originals/fc/e1/2d/fce12d3716f05d56549cc5e05eed5a50.gif' , 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b02c16d5-1b1b-4139-92e6-ca6b3d768d7a/d6wv007-5fbf8755-5fca-4e12-b04a-ab43156ac7d4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwMmMxNmQ1LTFiMWItNDEzOS05MmU2LWNhNmIzZDc2OGQ3YVwvZDZ3djAwNy01ZmJmODc1NS01ZmNhLTRlMTItYjA0YS1hYjQzMTU2YWM3ZDQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4MVfHXfzK83yI6L2NpBfVb2knaJtyGd7TlSEDH79bH8']
        author = message.author.username;
        mentioned = message.mentions.users.first().username;
        const embed = new Discord.MessageEmbed()
            .setColor('red')
            .setTitle(author + " slapped " + mentioned + ' !!!')
            .setImage (slapAr[Math.floor(Math.random() * slapAr.length)]);
        message.channel.send(embed);
    

       }
    }
};