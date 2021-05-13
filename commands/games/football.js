const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('/Users/kovidsrivart/Desktop/ned_Bot/config.json');
module.exports={
    name: 'football',
    description: 'takes penalty shots',
    cooldown:'1',
    usage: '',
    execute(message,args) {
        if (!args.length){
            message.reply ("The game is starting in a while:")
            message.channel.send ("You have to send " + prefix + "football ``left`` , " + prefix + "football  ``right`` or " + prefix + "football  ``middle`` to score the goal");
            message.channel.send (":goal: :goal: :goal: ");
            message.channel.send( "       :person_standing:");
        }
        else{
            const goal = ["left", "right", "middle"];
            const compGoal = goal[Math.floor(Math.random() * goal.length)];

        
            if (args[0] == "left" || args[0] == "right" || args[0] == "middle" ||args[0] == "Left" ||  args[0] == "Right" || args[0] == "Middle"){
                if (args[0] == compGoal){
                    message.channel.send ("The goalkeeper went `` " + compGoal + " `` and  defended the penalty.. You were unsuccesssful in scoring a goal");   
                }
                else{
                    message.channel.send ("The goalkeeper went `` " + compGoal + " `` and you scored the goal.. Congratulations!!");
                    
                }
            }
            else{
                message.channel.send ("Please make a valid choice :arrow_right: ``left`` , ``right`` or ``middle``  ");
            }
            
        }
    }
};

