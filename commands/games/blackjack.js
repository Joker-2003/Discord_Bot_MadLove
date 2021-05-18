module.exports={
    name: 'blackjack',
    description: 'Starts a new blacjack game', 
    usage: ' ',
    cooldown : '2.1',
    async execute (message, args){
        chan = message.channel
        let i = 0;
        let j = 0;
        const card_deck = ["🂡" , "🂲" , "🂣", "🃔" , "🂥" , "🂶", "🃇" , "🂨" , "🃙" , "🂺" , "🂫", "🂽", "🃎" ]
        const number = [11, 2 , 3, 4, 5, 6, 7, 8, 9 ,10, 10, 10 ,10]
        let user_pos = Math.floor(Math.random()*card_deck.length);
        let bot_pos = Math.floor(Math.random()*card_deck.length);
        let user_cards = [card_deck[user_pos]];
        let bot_cards = [card_deck[bot_pos]];
        let user_sum = number[user_pos];
        let bot_sum = number[bot_pos];
        message.channel.send ( "What do you want to do? \n Type ``h`` to **hit**, type ``s`` to **stand**, or type ``e``to **end** the game.")
        message.channel.send ({ 
            embed: { 
                color: 'RANDOM',
                title: 'Blackjack Game',
                author: {image : message.author.avatarURL()},
                fields : [
                    {name: message.author.username , value : user_cards.map(card => card).join(' ')+ '\n Total : ' +  user_sum , inline : true},
                    {name : 'Ned' , value : bot_cards.map(card => card).join(' ')+ '\n Total : ' + bot_sum , inline : true},  
                ]
            }
        })
        let s = 0;
        function user_turn (){
            if (user_sum <=21){ 
                user_pos = Math.floor(Math.random()*card_deck.length);
                //bot_pos = Math.floor(Math.random()*card_deck.length);
                user_cards.push(card_deck[user_pos]);
                //bot_cards.push(card_deck[bot_pos]);
                if (user_pos == 0){
                    if (user_sum + 11 > 21){
                        user_sum = user_sum + 1;
                    }
                    else{
                        user_sum = user_sum +number[user_pos]
                    }
                }
                else{
                    user_sum = user_sum + number[user_pos];
                }
                //bot_sum = number[bot_pos];
                message.channel.send ({ 
                    embed: { 
                        color: 'RANDOM',
                        title: 'Blackjack Game',
                        author: {image : message.author.avatarURL()},
                        fields : [
                            {name: message.author.username , value : user_cards.map(cards => cards).join(' ')  + '\n Total : ' +  user_sum , inline : true},
                            {name : 'Ned' , value : bot_cards.map(card => card).join(' ') + '\n Total : ' + bot_sum , inline : true},
                        ]
                    }
                })
                //console.log("user ===> " + user_sum)
                if(user_sum>21){
                    bot_turn()
                }
            }
            
            
        }
        function bot_turn (){
            const turn = [1,2,3]
            const p =turn[Math.floor(Math.random()*3)]
            while ( i < p ){
                i++;
                //let user_pos = Math.floor(Math.random()*card_deck.length);
                bot_pos = Math.floor(Math.random()*card_deck.length);
                //let user_cards = [card_deck[user_pos]];
                bot_cards.push([card_deck[bot_pos]]);
                //let user_sum = number[user_pos];
                if (bot_pos == 0){
                    if (user_sum + 11 > 21){
                        bot_sum = bot_sum + 1;
                    }
                    else{
                        bot_sum = bot_sum +number[bot_pos]
                    }
                }
                else{
                    bot_sum = bot_sum + number[bot_pos];
                }
                //console.log("bot ===> " + bot_sum)
                if (bot_sum > 21 || i==p || bot_sum>user_sum ){
                    check()
                    break;

                }
            }
        }
        function check (){
            s = 1
            i = 10
            j = 20
            if (user_sum > 21){
                chan.send ({
                    embed:{
                        title : 'You Lost!!',
                        description : 'You lost the balckjack game, you have ' + user_sum,
                        color : 'red'
                    }
                })
            }
            else if (bot_sum > 21){
                return chan.send({ 
                    embed:{ 
                        title : 'You won',
                        description : 'You won the blackjack game , you have ' + user_sum + ' and ned has ' + bot_sum, 
                        fields : [
                            {name: message.author.username , value : user_cards.map(cards => cards).join(' ')  + '\n Total : ' +  user_sum , inline : true},
                            {name : 'Ned' , value : bot_cards.map(card => card).join(' ') + '\n Total : ' + bot_sum , inline : true},
                        ]
                    }
                })
            }
            else if (user_sum > bot_sum){
                return chan.send({ 
                    embed:{ 
                        title : 'You won',
                        description : 'You won the blackjack game , you have ' + user_sum + ' and ned has ' + bot_sum, 
                        fields : [
                            {name: message.author.username , value : user_cards.map(cards => cards).join(' ')  + '\n Total : ' +  user_sum , inline : true},
                            {name : 'Ned' , value : bot_cards.map(card => card).join(' ') + '\n Total : ' + bot_sum , inline : true},
                        ]
                    }
                })
            }
            else if (user_sum < bot_sum){
                return chan.send({ 
                    embed:{ 
                        title : 'You lost!!',
                        description : 'You lost the blackjack game , you have ' + user_sum + ' and ned has ' + bot_sum, 
                        fields : [
                            {name: message.author.username , value : user_cards.map(cards => cards).join(' ')  + '\n Total : ' +  user_sum , inline : true},
                            {name : 'Ned' , value : bot_cards.map(card => card).join(' ') + '\n Total : ' + bot_sum , inline : true},
                        ]
                    }
                })
                
            }
            else{
               return chan.send({ 
                    embed:{ 
                        title : 'It was a tie',
                        description : 'Nobody won this blackjack game , you have ' + user_sum + ' and ned has ' + bot_sum, 
                        fields : [
                            {name: message.author.username , value : user_cards.map(cards => cards).join(' ')  + '\n Total : ' +  user_sum , inline : true},
                            {name : 'Ned' , value : bot_cards.map(card => card).join(' ') + '\n Total : ' + bot_sum , inline : true},
                        ]
                    }
                })
            }
        
        }
        if (s==0){
            while( j<20 ){
                j++;
                filter = (m) => m.author.id === message.author.id ;
                        const  collected = await message.channel.awaitMessages(filter, {max : 1 , time : 60000  , errors : ['time']}).catch(err => console.log(err))
                        
                        
                        //console.log(collected.first().content);
                        const user_answer = collected.first().content.toLowerCase();
                        if (user_answer === 'h'){
                            user_turn()
                        }
                        else if (user_answer === 's'){
                            bot_turn()
                        }
                        else if (user_answer === 'e'){
                            return message.channel.send ("YOU ENDED THE GAME")
                        }
                        else{
                            message.channel.send ("Enter a valid choice")
                        }
    }}}
}