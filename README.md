# Telegram Bot in JavaScript

This is a simple Telegram bot created using Node.js and the `node-telegram-bot-api` library.

## Setup

1. Install Node.js from [nodejs.org](https://nodejs.org/) if not already installed.

2. Clone or download this project.

3. Navigate to the project directory:
   ```
   cd "d:\movie website\telegram-bot"
   ```

4. Install dependencies:
   ```
   npm install
   ```

5. Get a bot token from BotFather:
   - Open Telegram and search for @BotFather.
   - Send `/newbot` and follow the instructions to create a new bot.
   - Copy the token provided.

6. Edit `bot.js` and replace `'YOUR_BOT_TOKEN'` with your actual bot token.

7. Run the bot:
   ```
   npm start
   ```

## Usage

The bot currently echoes back any message you send to it.

You can customize the bot by editing the `bot.on('message', ...)` handler in `bot.js`.

## Troubleshooting

- If you get errors about missing modules, make sure to run `npm install`.
- Ensure your bot token is correct.
- Check that your internet connection allows polling the Telegram API.