module.exports={
    name : 'mute',
    description : 'mutes person for the provided time',
    usage : ' < ``[@user] [time]``> ',
    async execute (message, args){
        const ms = require('ms');
        let member = message.mentions.members.first();
      console.log(member.roles);
        let muteRoleId = message.guild.roles.cache.find(role => role.name === "Mute").id;
        
        if (!muteRoleId){
            message.channel.send("Make a role named ``Mute`` with permission not to send any messages");
            return;
        }
        if (!member) 
        return message.channel.send('Please mention a user or provide a valid user ID');
        if (member === message.member)
        return message.channel.send('You cannot mute yourself');
        if (member === message.guild.me) return message.channel.send(message, 0, 'You cannot mute me');
        
        
        if (!args[1])
        return message.channel.send('Please enter a length of time of 14 days or less (1s/m/h/d)');
        let time = ms(args[1]);
        if (!time || time > 1209600000) 
        return message.channel.send('Please enter a length of time of 14 days or less (1s/m/h/d)');

        let reason = args.slice(2).join(' ');
        if (!reason) reason = '`None Provided`';
        if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';
        
        if (member.roles.cache.find(muteRoleId))
      return message.channel.send('Provided member is already muted');

    // Mute member
    try {
      await member.roles.add(muteRoleId);
    } catch (err) {
      console.log(err)
      return message.channel.send('Please check the role hierarchy', err.message);
    }
    
    const muteEmbed = new MessageEmbed()
      .setTitle('Mute Member')
      .setDescription(`${member} has now been muted for **${ms(time, { long: true })}**.`)
      .addField('Moderator', message.member, true)
      .addField('Member', member, true)
      .addField('Time', `\`${ms(time)}\``, true)
      .addField('Reason', reason)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(muteEmbed);

    // Unmute member
    member.timeout = message.client.setTimeout(async () => {
      try {
        await member.roles.remove(muteRoleId);
        const unmuteEmbed = new MessageEmbed()
          .setTitle('Unmute Member')
          .setDescription(`${member} has been unmuted.`)
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
        message.channel.send(unmuteEmbed);
      } catch (err) {
        console.log(err)
        return message.channel.send('Please check the role hierarchy', err.message);
      }
    }, time);


    }
}