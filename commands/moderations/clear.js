// export const name = 'delete';
// export const description = 'to delete messages.. usage !delete <no. of mssgs> ';
// export function execute(message, args){
//     const amount = parseInt(args[0]);
    
//       if (isNaN(amount)) {
//                  return message.reply('that doesn\'t seem to be a valid number.');
//       }
//          message.reply ("nico has deleted " + amount + " messages");
    
//       message.channel.bulkDelete(amount,true);
// }
module.exports = {
    name : 'clear',
    description : 'to delete messages.. ',
    usage : ' <no. of messages>',
     execute (message,args){
        try {
            
       
        const amount = parseInt(args[0]);
    
      if (isNaN(amount)) {
          return message.reply('that doesn\'t seem to be a valid number.');
      }
      if (amount >100){
          return message.reply("the amount should be less than 100 ")
      }
         
    
         message.channel.bulkDelete(amount,true); 
         message.reply ("nico has deleted " + amount + " messages").then(m => m.delete());
         
    } catch (error) {
            message.send.channel("why so serious.. something went wrong. Try again");
    }
    }

};