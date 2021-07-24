const brk = require("aoi.js")
var fs = require('fs');
const bot = new brk.Bot({
  token: process.env['token'],
  prefix: "!",
  mobile: false,
  fetchInvites: true
})
bot.onLeave()
bot.onJoined()
bot.onMessage()
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for (const file of reader) {
  const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    aliases: command.aliases,
    bkz: command.bkz,
    code: command.code
  });
}

//variablelar
bot.variables({
variable:"DEĞER", //son variable'da virgül olmaz
variable:"DEĞER2"
})

//komutları alta yazın








//komutları üste yazın

//durum
bot.status({
  text: "DURUM", //durum yazısı
  type: "PLAYING", //oynuyor kısmı
  status: "online", //presence
  time: 12 //burayı elleme
})
bot.status({
  text: "DURUM", //durum yazısı
  type: "PLAYING", //oynuyor kısmı
  status: "online", //presence
  time: 12 //burayı elleme
})
bot.status({
  text: "DURUM", //durum yazısı
  type: "PLAYING", //oynuyor kısmı
  status: "online", //presence
  time: 12 //burayı elleme
})