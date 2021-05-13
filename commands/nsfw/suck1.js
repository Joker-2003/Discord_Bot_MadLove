module.exports ={
    name : 'suck1',
    description : 'breastfeading',
    usage : ' <mention user>',
    async execute  (message, args){
        const Canvas = require('canvas');
        
        const Discord = require('discord.js');
        const user2 = message.mentions.users.first();
        const user1 = message.author;
        const client = new Discord.Client();
        const canvas = Canvas.createCanvas(700, 550);
        const ctx = canvas.getContext('2d');
        

        const background = await Canvas.loadImage('/Users/kovidsrivart/Desktop/ned_Bot/commands/img/boobs-suck-gif-8.gif');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
        ctx.font = '60px sans-serif';
        ctx.fillStyle = 'white';
        
        const avatar2 = await Canvas.loadImage(user2.displayAvatarURL({ format: "png" }));
        const avatar1 = await Canvas.loadImage(user1.displayAvatarURL({ format: "png"}));
        
        ctx.drawImage( avatar1, 70, 200, 200, 200);
        // ctx.beginPath();
        // ctx.arc(500, 125, 100, 0, Math.PI * 2, true);
        // ctx.closePath();
        // ctx.clip();      
        ctx.drawImage(avatar2, 250, 00 , 200, 200);  
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'suck.png');
        message.channel.send(attachment);

    
    }
}