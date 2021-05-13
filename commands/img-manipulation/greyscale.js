module.exports ={
    name : 'greyscale',
    description : 'blacwhite img',
    usage : ' <mention user> ',
    cooldown : '2',
    async execute  (message, args){
        const Canvas = require('canvas');
        
        const Discord = require('discord.js');
        
        const user1 = message.author;
        const client = new Discord.Client();
        const canvas = Canvas.createCanvas(150,150);
        const ctx = canvas.getContext('2d');
        const user2 = message.mentions.users.first();
        
        // ctx.closePath();
        // ctx.clip();
        
        if (!user2){
        
        const avatar2 = await Canvas.loadImage(user1.displayAvatarURL({ format: "png"}));
        ctx.drawImage(avatar2, 0, 0);
        const scannedimg = ctx.getImageData(0,0,canvas.width,canvas.height);
        const scannedData = scannedimg.data;
        for(let i = 0; i < scannedData.length ; i+=4){
            const total = scannedData[i] + scannedData[i+1] + scannedData[i+2];
            const avg = total/3;
            scannedData[i] = avg ;
            scannedData[i+1] = avg;
            scannedData[i+2] = avg;
        }
        scannedimg.data = scannedData;
        ctx.putImageData(scannedimg, 0 , 0);
        // ctx.beginPath();
        // ctx.arc(500, 125, 100, 0, Math.PI * 2, true);
        // ctx.closePath();
        // ctx.clip();      
    }
    else{
        const avatar2 = await Canvas.loadImage(user2.displayAvatarURL({ format: "png"}));
        ctx.drawImage(avatar2, 0, 0);
        const scannedimg = ctx.getImageData(0,0,canvas.width,canvas.height);
        const scannedData = scannedimg.data;
        for(let i = 0; i < scannedData.length ; i+=4){
            const total = scannedData[i] + scannedData[i+1] + scannedData[i+2];
            const avg = total/3;
            scannedData[i] = avg ;
            scannedData[i+1] = avg;
            scannedData[i+2] = avg;
        }
        scannedimg.data = scannedData;
        ctx.putImageData(scannedimg, 0 , 0);
    }
    
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'blackwhite.png');
        message.channel.send(attachment);

    
    }
}