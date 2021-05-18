const db  = require('quick.db');
module.exports={
    name : 'setfm',
    description : 'sets yout last.FM use name',
    usage : ' <Last.FM username>',
    cooldown : '1',
    async execute (message, args){
        if (!db.fetch('fm.'+message.author.id)){
            await db.set('fm.'+message.author.id , args[0]);
            message.channel.send({ embed:{ 
                description: 'Your Last.FM username is set to ' + db.fetch('fm.'+message.author.id),
            }})
            }
            else{
                db.delete('fm.'+message.author.id);
                await db.set('fm.'+message.author.id , args[0]);
                message.channel.send({ embed:{ 
                    description: 'Your Last.FM username is set to ' + db.fetch('fm.'+message.author.id),
                }})
            }
    }
}