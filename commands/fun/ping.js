module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
		const timeTaken = Date.now() - message.createdTimestamp;
		message.reply('Pong. the latency is' + timeTaken +' ms');
	},
};