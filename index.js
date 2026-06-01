const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("clientReady", () => {
  console.log("Bot is online!");
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === "!ping") {
    message.reply("Pong 🏓");
  }

  if (message.content === "!help") {
    message.reply(`
Commands:
!ping - Check bot ping
!help - Show commands
    `);
  }
});

client.login(process.env.TOKEN);
