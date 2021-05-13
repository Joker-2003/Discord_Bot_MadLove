module.exports ={
    name : 'ship',
    description : 'relationship command',
    usage : ' <mention user>',
    async execute  (message, args){
        const Canvas = require('canvas');
        
        const Discord = require('discord.js');
        const user2 = message.mentions.users.first();
        const user1 = message.author;
        const client = new Discord.Client();
        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');
        const sbredt = ['/Users/kovidsrivart/Desktop/ned_Bot/commands/img/wallpaper12.jpg', '/Users/kovidsrivart/Desktop/ned_Bot/commands/img/wallpaper.jpg', '/Users/kovidsrivart/Desktop/ned_Bot/commands/img/2.jpg','http://xdesktopwallpapers.com/wp-content/uploads/2012/07/Too%20Horny%20Today.jpg','https://www.teahub.io/photos/full/1-10996_hot-horny-beautiful-girl.jpg','https://www.adultwalls.com/web/wallpapers/young-sexy-nude-babe-pussy-breasts-wallpaper/1680x1050.jpg']

        const background = await Canvas.loadImage(sbredt[Math.floor(Math.random() * sbredt.length)]);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        // ctx.beginPath();
        // ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        // ctx.closePath();
        // ctx.clip();
        ctx.font = '60px sans-serif';
        ctx.fillStyle = 'white';
        ctx.fillText (Math.floor(Math.random() * 101) + "%", 300, 125, 100);
        
        const avatar1 = await Canvas.loadImage(user2.displayAvatarURL({ format: "png" }));
        const avatar2 = await Canvas.loadImage(user1.displayAvatarURL({ format: "png"}));
        ctx.drawImage(avatar1, 50, 25, 200, 200);
        // ctx.beginPath();
        // ctx.arc(500, 125, 100, 0, Math.PI * 2, true);
        // ctx.closePath();
        // ctx.clip();      
        ctx.drawImage(avatar2, 450, 25 , 200, 200);  
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'ship.png');
        message.channel.send(attachment);

    
    }
}