const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with the token you get from BotFather
const token = '8644091593:AAGLHZqfihnATY54pg74MG-AyNeXzJMJtHw';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  console.log(`Received message: ${text} from ${chatId}`);

  // Simple echo bot
  bot.sendMessage(chatId, `You said: ${text}`);
});

console.log('Bot is running...');