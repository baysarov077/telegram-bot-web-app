const TelegramBot = require('node-telegram-bot-api');

const token = '5906887552:AAGwNePYHfmWMVbC5pERdSmTRUuTdNuMUZE';
const webAppUrl = 'https://compasstudio.ru'
const bot = new TelegramBot(token, {polling: true});



bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text

  if(text === '/start'){
    await bot.sendMessage(chatId, 'Привет, выберите действие', {
        reply_markup: {
          keyboard: [
            [{text: 'Наш сайт', web_app: {url: webAppUrl}}, {text: 'Каталог'}, {text: 'Контакты'}]
          ]
        }
    })
  }

  if(text === 'Контакты'){
    await bot.sendMessage(chatId, 'Вот как вы можете связаться с нами', {
      reply_markup: {
        inline_keyboard: [
          [{text: 'Наш телеграм', web_app: {url: 'https://web.telegram.org/k/#telegram'}}],
        ]
      }
    })
  }

  
});