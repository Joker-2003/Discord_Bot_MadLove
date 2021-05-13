module.exports={
    name: 'weekly',
    description : 'shows weekly stats',
    usage : '<lastfm username>',
    async execute(msg,args) {
        const snekfetch = require("snekfetch");
        const Discord = require('discord.js');
        if (!args.length){
            msg.reply("Please send your last fm name along with the command.. ``!fm <lastfm name>``");
            return;
        }
       try {
        
        
        username = args[0];
        const { api_key, secret } = require('../../config.json');
        class album {
            constructor(album) {
                this.artist = album.artist.name;
                this.name = album.name;
                this.playcount = album.playcount;
                this.image = album.image[album.image.length - 1]["#text"];
            }
            getLine() {
                return { font: "Arial", color: "white", text: this.artist + "\n" + this.name + " " + this.playcount };
            }
        }

        //IMPORTS
        const got = require("got");
        const { createCanvas, loadImage, Image, registerFont } = require("canvas");
        const Canvas = require("canvas");
        let timequery;

        //INPUTS FORMAT: !weekly 3x3 90
        let width = msg.content.match(/\d+(?=x)/) ? msg.content.match(/\d+(?=x)/)[0] : 3;
        let height = msg.content.match(/(?<=x)\d+/) ?  msg.content.match(/(?<=x)\d+/)[0] : 3;
        if (args.length >1){
            timequery = args[1].replace(/[0-9]x[0-9]/g, "").trim();
        }
        else{
            timequery =  "7 days";
        }

        //GET DATE STRING overall | 7day | 1month | 3month | 6month | 12month
        let date;
        switch(timequery.toLowerCase().split(" ").join("")) {
            case "3":
            case "90":
            case "90days":
            case "threemonths":
            case "3month":
            case "3months":
                date = "3month";
                break;
            case "7":
            case "7day":
            case "7days":
            case "oneweek":
            case "1week":
                date = "7day";
                break;
            case "1":
            case "1month":
            case "onemonth":
                date = "1month";
                break;
            case "6":
            case "sixmonths":
            case "6month":
            case "6months":
                date = "6month";
                break;
            case "12":
            case "oneyear":
            case "1year":
            case "12months":
            case "12month":
                date = "12month";
                break;
            case "all":
            case "alltime":
            case "overall":
            case "forever":
                date = "overall";
                break;
            default:
                date = "7day";
                break;
        }

        //FETCH LAST FM DATA
        let req_url = `http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${username}&period=${date}&api_key=${api_key}&format=json`;
        console.log(req_url);
        let collected = [];
        try {
            let r = await got(req_url);
            let json = JSON.parse(r.body)["topalbums"]["album"];
            let num = width * height;
            if (width * height > 50) return msg.channel.send(new Discord.MessageEmbed({ description: "At most 50 albums can be displayed." }).setColor("RANDOM"));
            for (let i = 0; i < num; i++) {
                collected.push(new album(json[i]));
            }
        } catch(e) {
            console.log(e, /ERROR/);
        }
        //CREATE COLLAGE
        let canvas = createCanvas(width * 200, height * 200);
        let ctx = canvas.getContext("2d");
        for (let i = 0; i < collected.length; i++) {
            let album = collected[i];
            if (album.image.length < 2) continue;
            let image = await loadImage(album.image);

            let x = 200 * (i % width);
            let y = 200 * Math.floor(i / width);
            ctx.drawImage(image, x, y, 200, 200);
            ctx.fillStyle = "grey";
            ctx.strokeStyle = "black";
            
            ctx.strokeText(album.name, x, y + 20);
            ctx.font = "20px Ariel";
            ctx.fillText(album.name, x, y + 20);


        }
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'chart.png');
        msg.channel.send(attachment);
        
        // let embed = new Discord.MessageEmbed()
            
        //     .setImage(new Discord.MessageAttachment(canvas.toBuffer(), "chart.png"))
        //     .setColor("RANDOM")
        //     .setDescription(`${width}x${height}, ${date}`)
        //     .setFooter(username);
        // msg.channel.send(embed);
     }
    catch (e) {
         msg.channel.send("blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah its a fucking error! ")
     }
}

};