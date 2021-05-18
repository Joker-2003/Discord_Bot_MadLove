module.exports ={
    name : 'toon',
    description : 'toon **<baby no.3>**  sucking elia\'s tits',
    usage : ' ',
    async execute  (message, args){
        if (message.author.username =='Jøker' || message.author.username == 'Robin2712' || message.author.username == 'Elia in Timeout'){
            const Canvas = require('canvas');
            
            const Discord = require('discord.js');
            const user2 = message.mentions.users.first();
            const user1 = message.author;
            const client = new Discord.Client();
            const canvas = Canvas.createCanvas(700, 550);
            const ctx = canvas.getContext('2d');
            

            const background = await Canvas.loadImage('/Users/kovidsrivart/Desktop/ned_Bot/commands/img/GettyImages-sb10065825c-003KazMoriBreastfeeding-56a0b94f3df78cafdaa46081.jpg');
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        
            ctx.font = '60px sans-serif';
            ctx.fillStyle = 'white';
            
            const avatar1 = await Canvas.loadImage('/Users/kovidsrivart/Desktop/ned_Bot/commands/img/bunny.jpg');
            const avatar2 = await Canvas.loadImage('/Users/kovidsrivart/Desktop/ned_Bot/commands/img/elia.jpg');
            
            ctx.drawImage( avatar1, 70, 200, 200, 200);
            // ctx.beginPath();
            // ctx.arc(500, 125, 100, 0, Math.PI * 2, true);
            // ctx.closePath();
            // ctx.clip();      
            ctx.drawImage(avatar2, 250, 00 , 200, 200);  
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'toon.png');
            message.channel.send(attachment);

        }
        else{
            message.channel.send({ 
                embed:{
                    description: 'You can\'t use this command. It is exclusive'
                }
            })
        }

    }
}