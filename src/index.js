require('dotenv').config();

const { Client, Intents, MessageFlags } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async msg => {
    if (msg.content.toLowerCase().startsWith("!clearchat")) {
        var msg_size = 100;
        while (msg_size == 100) {
            await msg.channel.bulkDelete(100)
                .then(messages => msg_size = messages.size)
                .catch(console.error);
        }
        clear();
    }
});

client.login(process.env.BOT_TOKEN);