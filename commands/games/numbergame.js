module.exports={
    name: 'ng' ,
    description: 'starts a numbergame',
    cooldown : '2',
    usage : ' ',
    async execute(message, args){
        const Discord = require('discord.js')
        message.channel.send({
            embed:{
                title : 'NUMBER GAME',
                description : 'Welcome to number game.. The bot will pick for you and itself randomly between 0 - 20 taking turns. Whoever reaches 100 first wins ',
                color : 'RANDOM',
                footer: {
                    text : 'All the best for the game!',
                },
                thumbnail : {
                    url : 'https://cdn1.vectorstock.com/i/thumb-large/71/85/game-concept-retro-colorful-word-art-vector-35127185.jpg'
                }
            }
        })
        let userSum = 0;
        let botSum = 0;
        
        const embed = new Discord.MessageEmbed()
        .setTitle('SCORES')
        .setDescription('write ``roll`` to roll the number')
        .addFields (
            {name: 'Player Sum', value: userSum + botSum},
            {name: 'Bot Sum', value: botSum})
        .setColor("RANDOM")
        const msg = await message.channel.send(embed)
        addNumbers()
        async function addNumbers()
        {
            try {
                
            
           
            filter = (m) => m.author.id === message.author.id  ;
                const  collected = await message.channel.awaitMessages(filter, {max : 1 , time : 60000  , errors : ['time']}).catch(err => message.reply({embed : {description : 'you failed to roll in 60 seconds.. The game ended'}}))
                 
                 
                //console.log(collected.first().content);
                if (!collected) {check();}
                const user_answer = collected.first().content.toLowerCase();

                if (user_answer === 'roll')
                {
                    let userChoice = Math.floor(Math.random()*19)+1;
                    let botChoice = Math.floor(Math.random()*19)+1;
                    //console.log("user ==> " + userChoice);
                    //console.log("bot ==> " + botChoice);
                    const usermsg = await message.channel.send({
                        embed:{ 
                            color: 'RANDOM',
                            description: 'You rolled a ' + userChoice + '!!'
                                                
                        }
                    })
                    const botmsg = await message.channel.send({
                        embed:{ 
                            color: 'RANDOM',
                            description: '  I rolled a ' + botChoice + '!!'
                                                
                        }
                    })
                    usermsg.delete();
                    botmsg.delete();
                    userSum = userSum + userChoice;
                    botSum = botSum + botChoice;
                    const newembed = new Discord.MessageEmbed()
                    .setTitle('SCORES')
                    .setDescription('write ``roll`` to roll the number')
                    .addFields (
                        {name: 'Player Sum', value: userSum },
                        {name: 'Bot Sum', value: botSum})
                    .setColor ('RANDOM')
                    msg.edit(newembed)
                    collected.delete();

                } 
                
                if (userSum < 100 && botSum < 100) {
                    addNumbers();
                }
                else{
                    check()
                }
            } catch (error) {
                console.log("error: " + error.message);
            }
                
        }
        function check() {
            if (userSum >=100 || botSum >= 100) {
                if (userSum >=100){
                    return message.channel.send({
                        embed:{
                            title : 'Congratulations!! You won!!',
                            description: 'You got a total of ' + userSum + ' and the I only acheieved a total of ' + botSum,
                            color : 'RANDOM',
                            thumbnail: { url : 'https://t3.ftcdn.net/jpg/02/57/27/20/360_F_257272034_PqpJ7rx0pqXHqB6RJ27w662p3FwY0r2G.jpg'}
                        }
                    })
                }
                else{
                    return message.channel.send({
                        embed:{
                            title : '   Alas!! You lost!!',
                            description: 'You got a total of ' + userSum + ' and the I acheieved a total of ' + botSum,
                            color : 'RANDOM',
                            thumbnail: { url : 'https://images.unsplash.com/photo-1612436395449-279ee9a6afd0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9zZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'}
                        }
                    })
                }
            }
        }      
                
    }
}