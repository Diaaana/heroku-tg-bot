const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '691180471:AAF5oEGZG-uvkns-sUOLuraWp2GnboRNkjM'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello, ' ${msg.from.first_name})
})

