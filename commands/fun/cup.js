module.exports={
    name: 'cup',
    description: 'Starts a guess which glass has real milk game by drinking',
    usage : ' ',
    async execute ( message,args){
        message.channel.send({
            embed:{
                title:'CUP GUESSING GAME',
                description : 'You are given with 3 cups and one of them has real milk rest have fake milk.. you have to guess the cup with real milk in one turn. \n reply ``left`` , ``middle`` or ``right`` to choose',
                
            }
        })
        message.channel.send({
            embed:{
                title:':milk:     :milk:     :milk:',
             }
        })
        const answers = ['left' , 'right' , 'middle'];
        const answer = answers[Math.floor(Math.random() * answers.length)];
        console.log(answer)
        filter = (m) => m.author.id === message.author.id ;
                const  collected = await message.channel.awaitMessages(filter, {max : 1 , time : 60000  , errors : ['time']})
                 
                 
                console.log(collected.first().content);
                const user_answer = collected.first().content.toLowerCase();
                if (user_answer == answer){
                    message.channel.send({
                        embed:{
                            title: 'You Won!! Congratulations',
                            description : "The " + answer + " glass had real milk. You drank it and you survived.",
                            image: { url : 'https://scontent.flko5-1.fna.fbcdn.net/v/t1.6435-9/119609918_115937056919633_1734648744500115999_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=6e5ad9&_nc_ohc=O5tBI3wknGQAX-z7-DK&_nc_ht=scontent.flko5-1.fna&oh=8ab71f8766646ea0ed3795e0d69390c5&oe=60C1481F'}
                        }
                    })
                    
                }else{
                    message.channel.send({
                        embed:{
                            title: 'You Lost!! ',
                            description : "The " + answer + " glass had real milk. You drank  fake milk  and puked it all over yourself. "
                            
                        }
                    })
                }
    }
    
}