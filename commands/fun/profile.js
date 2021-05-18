const db  = require('quick.db');
module.exports={
    name: 'profile',
    description: 'Shows you your profile',
    usage: '  or !proflie <@user>',
    cooldown :'2',
    execute (message, args){
        if (!args.length){
        message.channel.send({
            embed:{
                title: 'Profile Information',
                thumbnail: { url : message.author.avatarURL() },
                fields : [
                    {name: 'NAME' , value: message.author.username , inline : true},
                    {name : 'BIRTHDAY' , value: db.fetch('bday.' + message.author.id) || 'empty' , inline : true},
                    {name : 'TROOP TIER' , value: db.fetch('troop.' + message.author.id) || 'empty', inline : true} ,
                    {name : 'HOUSE LEVEL' , value: db.fetch('houselvl.' + message.author.id) || 'empty' , inline : true} ,
                    {name : 'PRIMARY TROOP' , value: db.fetch('primary.' + message.author.id) || 'empty', inline : true} ,
                    {name : 'TIME ZONE' , value: db.fetch('time.' + message.author.id) || 'empty', inline : true} ,

                ],
                color: 'RANDOM',
                footer: { text : 'You should try !21pilots command'},
            }
        })
    }
    else {
        message.channel.send({
            embed:{
                title: 'Profile Information',
                thumbnail: {url : message.mentions.users.first().avatarURL()},
                fields : [
                    {name: 'NAME' , value: message.mentions.users.first().username , inline : true},
                    {name : 'BIRTHDAY' , value: db.fetch('bday.' + message.mentions.users.first().id) || 'empty', inline : true},
                    {name : 'TROOP TIER' , value: db.fetch('troop.' + message.mentions.users.first().id) || 'empty', inline : true} ,
                    {name : 'HOUSE LEVEL' , value: db.fetch('houselvl.' + message.mentions.users.first().id) || 'empty', inline : true} ,
                    {name : 'PRIMARY TROOP' , value: db.fetch('primary.' + message.mentions.users.first().id) || 'empty', inline : true} ,
                    {name : 'TIME ZONE' , value: db.fetch('time.' + message.mentions.users.first().id) || 'empty', inline : true} ,

                ],
                color: 'RANDOM',
                footer: { text : 'You should try !21pilots command'},
                
            }
        })
    }
    }
}