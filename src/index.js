require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

// Logs message to terminal when bot is online
client.on("ready", (c) => {
    console.log(`${c.user.tag} is online! 😎`);
});

// When user sends message, bot logs content of message to terminal
client.on("messageCreate", (message) => {
    console.log(message.content);
})

//when user sends a message that says "Hi Noodle" exactly, the bot will reply
client.on("messageCreate", (message) => {
    // If the user that sent the message is a bot, my bot will NOT reply
    if (message.author.bot) {
        return;
    }

    if (message.content === "Hi Noodle") {
        message.reply("Hi Noodle")
    }
})

// User bot token to start bot on run
client.login(process.env.BOT_TOKEN);