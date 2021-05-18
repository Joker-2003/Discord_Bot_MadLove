module.exports={
    name: 'number',
    description : 'number game',
    usage : ' ',
    async execute(message,args){
        const chan = message.channel;
        const user = message.author;
        message.channel.send({
            embed:{
                
                color: 'RANDOM',
                title: 'Number Game',
                description : 'You have guess the number selected by the  bot b/w 1-50 in 5 tries. Choose your number.' ,
            }
            })
        const botnumber = Math.floor(Math.random()*50);
        console.log("=======>" + botnumber)
        var filter;
        var success = 0;
        let i  = 0;
        getmsg();
        async function getmsg(){
            message.channel.send({embed:{title:"your guess number " + (i+1)}})
            filter = (m) => m.author.id === message.author.id && !isNaN(m.content);
                const  collected = await message.channel.awaitMessages(filter, {max : 1 , time : 60000  , errors : ['time']})
                 
                 
                console.log(collected.first().content);
                var userNo = parseInt(collected.first().content);
                 if (userNo > botnumber){
                   message.channel.send({embed:{color : 'RANDOM' , description: 'Try guessing lower.. u used your '+ (i+1) + ' attempt'}} );
                }
                else if(userNo < botnumber){
                    chan.send({embed:{ color: 'RANDOM' , description:'Try guessing higher.. u used your ' + (i+1) + ' attempt'}});
                }
                else{
                  success = 1;
                  return chan.send({
                    embed:{
                        title: 'Number Game',
                        color: 'RANDOM' , 
                        description : 'Congratualtions ' + user.username + " You guessed the correct number",
                    }
                    })
                    .catch(e => console.log(e));
                }
            
                i++;
                if (i<5){
                    getmsg();
                }
                if (i == 5){
                    check();
                }
             }
        
        function check(){
        if (success == 0 ){
            chan.send({embed:{description:'You have used all your attempts. The correct number was ' + botnumber}});
        }}
        
    }
}