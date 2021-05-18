
const db = require('quick.db');
module.exports={
    name: 'set',
    description: 'Helps to set your profile',
    cooldown : '1',
    usage: ' bday <bday date> (sets your birthday) \n !set houselvl <house level> (sets houselvl) \n !set troop <troop tier> (Sets troop tier) \n  !set primary <your primary troop type> (your primary troop type) \n !set time <time zone> (e.g. +5:30 GMT )  ',
    async execute (message, args){
        const cmd = args[0].toLowerCase();
        const ans = args.slice(1).join(' ');
        if (cmd === 'bday'){
            if (!db.fetch('bday.'+message.author.id)){
            await db.set('bday.'+message.author.id , ans);
            message.channel.send({ embed:{ 
                description: 'Your birthday is set to ' + db.fetch('bday.'+message.author.id),
            }})
            }
            else{
                db.delete('bday.'+message.author.id);
                await db.set('bday.'+message.author.id , ans);
                message.channel.send({ embed:{ 
                    description: 'Your birthday is set to ' + db.fetch('bday.'+message.author.id),
                }})
            }
        }
        else if (cmd === 'houselvl'){
            if (!db.fetch('houselvl.'+message.author.id)){
            await db.set('houselvl.'+message.author.id , ans);
            message.channel.send({ embed:{ 
                description: 'Your House Level is set to ' + db.fetch('houselvl.'+message.author.id),
            }})
            }
            else{
                db.delete('houselvl.'+message.author.id);
                await db.set('houselvl.'+message.author.id , ans);
                message.channel.send({ embed:{ 
                    description: 'Your house level is set to ' + db.fetch('houselvl.'+message.author.id),
                }})
            }
        }
        else if (cmd === 'troop'){
            if (!db.fetch('troop.'+message.author.id)){
            await db.set('troop.'+message.author.id , ans);
            message.channel.send({ embed:{ 
                description: 'Your Troop tier is set to ' + db.fetch('troop.'+message.author.id),
            }})
            }
            else{
                db.delete('troop.'+message.author.id);
                await db.set('troop.'+message.author.id , ans);
                message.channel.send({ embed:{ 
                    description: 'Your Troop tier is set to ' + db.fetch('troop.'+message.author.id),
                }})
            }
        }
        else if (cmd === 'primary'){
            if (!db.fetch('primary.'+message.author.id)){
            await db.set('primary.'+message.author.id , ans);
            message.channel.send({ embed:{ 
                description: 'Your primary troop is set to ' + db.fetch('primary.'+message.author.id),
            }})
            }
            else{
                db.delete('primary.'+message.author.id);
                await db.set('primary.'+message.author.id , ans);
                message.channel.send({ embed:{ 
                    description: 'Your primary troop is set to ' + db.fetch('primary.'+message.author.id),
                }})
            }
        }
        else if (cmd === 'time'){
            if (!db.fetch('time.'+message.author.id)){
            await db.set('time.'+message.author.id , ans);
            message.channel.send({ embed:{ 
                description: 'Your Time Zone is set to ' + db.fetch('time.'+message.author.id),
            }})
            }
            else{
                db.delete('time.'+message.author.id);
                await db.set('time.'+message.author.id , ans);
                message.channel.send({ embed:{ 
                    description: 'Your Time Zone is set to ' + db.fetch('time.'+message.author.id),
                }})
            }
            
        }
        else{
            message.channel.send({ embed:{
                title: 'Usage',
                description: '!set bday <bday date> (sets your birthday) \n !set houselvl <house level> (sets houselvl) \n !set troop <troop tier> (Sets troop tier) \n  !set primary <your primary troop type> (your primary troop type) \n !set time <time zone> (e.g. +5:30 GMT )  '
            }})
        }

    }

}