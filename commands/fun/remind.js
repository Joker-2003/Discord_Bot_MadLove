const ms = require('ms');
const Discord = require('discord.js');
const client = new Discord.Client();
const db  = require('quick.db')
module.exports = {
    name: 'remind',
    description: 'sets a reminder',
    usage: '<time in 10s,10h,10d>  <reason>',
    cooldown: '1',
    async execute (message,args){
        const time = args[0];
        const reason = args.slice(1).join(' ');
        //console.log(db.table);
        if (!time){
            return message.channel.send({
                embed:{ 
                    color: 'Black',
                    author: 'Ned',
                    title: 'Reminder Error',
                    description: ":x: you should enter time in 10s 10h 10d 10m  .",
                    footer : { text: '`!remind 10m to eat pizza`'}
                }
            })
        }
        db.set('remind.'+message.author.id , Date.now() + ms(time));
        message.channel.send({
            embed:{
                color: 'green',
                author: 'Ned',
                title : 'Reminder is set',
                description: ' I will remind you to  **' + reason + '** in ' + time + '.',
                footer : { text: 'Don\'t worry.. I\'ll remind you for sure'}
            }
        })
        const interval = setInterval(function(){
            if (Date.now() > db.fetch('remind.'+message.author.id)){
                db.delete('remind.'+message.author.id)
                message.channel.send({
                    embed:{ 
                        color: 'RANDOM',
                        author: 'Ned',
                        title: 'Reminder',
                        description: "You are reminded : " + reason ,
                        
                    }
                });
                message.author.send({
                    embed:{ 
                        color: 'RANDOM',
                        author: 'Ned',
                        title: 'Reminder',
                        description: "You are reminded : " + reason ,
                        footer : { text: 'Chlorine magic'}
                    }
                })
                .catch(err => message.channel.send(err));
                clearInterval(interval)
            }
        },1000)


        
    }
    }
// else{
//     message.reply("give arguments");
// }}
