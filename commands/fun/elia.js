module.exports ={
    name: 'elia',
    description: 'I dont  know.. its elia lmao',
    usage: 'its  a secret',
    cooldown:'0.69',
    async execute(message, args){
        const Discord = require('discord.js');
        const Canvas = require('canvas');
        const canvas = new Canvas.createCanvas(750,500);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('https://www.msccollege.edu/wp-content/uploads/2019/03/advanced-hair-coloring-techniques-1024x683.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        const user = await Canvas.loadImage('/Users/kovidsrivart/Desktop/ned_Bot/commands/img/image.png');
        
        
        ctx.drawImage(user, 248, 260, 130, 130);
        ctx.rotate(30*Math.PI/180);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'elia.png');
        message.channel.send(attachment);
        
    }
}
