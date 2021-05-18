module.exports ={
    name: 'bday',
    execute(message,args){
        
        if (message.author.username =='Jøker' || message.author.username == 'Robin2712' || message.author.username == 'Elia in Timeout'  )
        {
            var d1 = new Date(); //"now"
            var d2 = new Date("2021/11/28");  // some date
            var diff = Math.abs(d1-d2); 

            var hour = parseInt((diff/(1000*60*60*24) - parseInt(diff / (1000*60*60*24))) * 24) ; 
            var min = parseInt((diff/(1000*60*60) - parseInt(diff / (1000*60*60))) * 60);
            var sec = parseInt((diff/(1000*60) - parseInt(diff / (1000*60))) * 60);
            var days = parseInt(diff / (1000*60*60*24))
            message.channel.send({
                embed : {
                    title: 'NUDE GETTING DAY',
                    description: 'elia will drop a nude in ' + days + " days " + hour + " hours " + min + " minutes " + sec + " seconds ",
                    color: 'RANDOM',

                }
            
        })
    }
    else{
        message.channel.send({ embed: {
            description: 'You dumbass you aren\'t eligible of using this exclusive command'
        }})
    }
}}