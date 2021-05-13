module.exports={
    name :'roast',
    description :'Roasts Elia',
    usage : ' ',
    cooldown : '2',
    execute (message,args){
        
        if (message.author.username =='Jøker'  ){
            const roasts = ['ELia\'s a gray sprinkle on a rainbow cupcake.' , 'If Elia\s brain was dynamite, there wouldn’t be enough to blow your hat off.' , 'elia is  more disappointing than an unsalted pretzel.', ' Hey Elia, You have so many gaps in your teeth it looks like your tongue is in jail.' , 'I forgot the world revolves around Elia. My apologies! How silly of me.' , 'Hold still. I’m trying to imagine Elia with a personality.' , 'Elia\'s  face makes onions cry.' , 'Hey elia ,Don’t be ashamed of who you are. That’s your parents’ job.' , 'Hey Elia,Your face is just fine, but we’ll have to put a bag over that personality.' , 'Hey Elia,You bring everyone so much joy… when you leave the room.' , "Hey Elia , I thought of you today. It reminded me to take out the trash." , "Hey Elia, Don’t worry about me. Worry about your eyebrows." , "Hey Elia ,  You are the human version of period cramps." , "Hey Elia,If you’re going to be two-faced, at least make one of them pretty." , "Hey Elia, You are like a cloud. When you disappear, it’s a beautiful day." , "Hey Elia, I’d rather treat my baby’s diaper rash than have lunch with you." , "Hey Elia ,I love what you’ve done with your hair. How do you get it to come out of your nostrils like that?" , "Hey Elia , You just might be why the middle finger was invented in the first place." , "Hey Elia , When you look in the mirror, say hi to the clown you see in there for me, would ya?" , "Hey ELia, You’re the reason this country has to put directions on shampoo." , "Hey Elia , It’s a shame you can’t Photoshop your personality."]
            //const roast_main = ['You’re a gray sprinkle on a rainbow cupcake.', 'If your brain was dynamite, there wouldn’t be enough to blow your hat off.' , 'You are more disappointing than an unsalted pretzel.', ' You have so many gaps in your teeth it looks like your tongue is in jail.' , 'I forgot the world revolves around you. My apologies! How silly of me.' , 'Hold still. I’m trying to imagine you with a personality.','Your face makes onions cry.' , 'Don’t be ashamed of who you are. That’s your parents’ job.']
            message.channel.send({
                embed:{
                    title: ' JOKER ROASTED ELIA :joy: ',
                    description: roasts[Math.floor(Math.random()*roasts.length)],
                    color: 'RANDOM',
                    footer: { text: 'Elia went to her time out corner crying'}

                }
            })
        }
        else if ( message.author.username == 'Robin2712' ){
            const roasts = ['ELia\'s a gray sprinkle on a rainbow cupcake.' , 'If Elia\s brain was dynamite, there wouldn’t be enough to blow your hat off.' , 'elia is  more disappointing than an unsalted pretzel.', ' Hey Elia, You have so many gaps in your teeth it looks like your tongue is in jail.' , 'I forgot the world revolves around Elia. My apologies! How silly of me.' , 'Hold still. I’m trying to imagine Elia with a personality.' , 'Elia\'s  face makes onions cry.' , 'Hey elia ,Don’t be ashamed of who you are. That’s your parents’ job.' , 'Hey Elia,Your face is just fine, but we’ll have to put a bag over that personality.' , 'Hey Elia,You bring everyone so much joy… when you leave the room.' , "Hey Elia , I thought of you today. It reminded me to take out the trash." , "Hey Elia, Don’t worry about me. Worry about your eyebrows." , "Hey Elia ,  You are the human version of period cramps." , "Hey Elia,If you’re going to be two-faced, at least make one of them pretty." , "Hey Elia, You are like a cloud. When you disappear, it’s a beautiful day." , "Hey Elia, I’d rather treat my baby’s diaper rash than have lunch with you." , "Hey Elia ,I love what you’ve done with your hair. How do you get it to come out of your nostrils like that?" , "Hey Elia , You just might be why the middle finger was invented in the first place." , "Hey Elia , When you look in the mirror, say hi to the clown you see in there for me, would ya?" , "Hey ELia, You’re the reason this country has to put directions on shampoo." , "Hey Elia , It’s a shame you can’t Photoshop your personality."]
            //const roast_main = ['You’re a gray sprinkle on a rainbow cupcake.', 'If your brain was dynamite, there wouldn’t be enough to blow your hat off.' , 'You are more disappointing than an unsalted pretzel.', ' You have so many gaps in your teeth it looks like your tongue is in jail.' , 'I forgot the world revolves around you. My apologies! How silly of me.' , 'Hold still. I’m trying to imagine you with a personality.','Your face makes onions cry.' , 'Don’t be ashamed of who you are. That’s your parents’ job.']
            message.channel.send({
                embed:{
                    title: ' ROBIN ROASTED ELIA :joy: ',
                    description: roasts[Math.floor(Math.random()*roasts.length)],
                    color: 'RANDOM',
                    footer: { text: 'Elia went to her time out corner crying'}

                }
            })
        }
        else if ( message.author.username == 'Elia In Timeout'){
            message.channel.send({
                embed:{
                    title: 'WOAH ELIA! CALM DOWN!!',
                    description: 'Have some fucking dignity. Don\'t roast yourself :rofl:',
                    color: 'RANDOM',

                }
            })
        }
        else{
            message.channel.send({
                embed:{ 
                    description: 'you can\'t use this command u dumbass.This command is exclusive'
                }
            })
        }
    }
}