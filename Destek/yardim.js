const Discord = require('discord.js')
let z = `.`
exports.run = function(client, message, args) {
let yardim = new Discord.MessageEmbed()
.setTitle("Samuray Ekonomi | Komut Listesi")
.setColor("RANDOM")
.addField("__💰  Ekonomi__",`
**\`${z}yardım ekonomi\`** - *Ekonomi komutları hakkında bilgi edinin!*

\`günlük\`, \`çalış\`, \`soygun\`, \`yatır\`, \`çek\`, \`gönder\`
`)
.addField("__🎲  Oyunlar__",`
**\`${z}yardım oyunlar\`** - *Eğlence/Bahis oyunları oynayarak para kazanın!*

\`balık-tut\`, \`bahis\`, \`slot-machine\`
`)

let ekonomi = new Discord.MessageEmbed()
.setTitle("__💰Ekonomi__")
.setColor("RANDOM")
.setDescription(`
**\`${z}günlük\` - __24 saat aralıkla 2300-2700 arası para kazanırsınız.__**
**\`${z}para\` - __Etiketlediğiniz kişinin veya kendi paranızı görürsünüz.__**
**\`${z}gönder\` - __Etiketlediğiniz kullanıcıya para gönderirsiniz.__**
**\`${z}soygun\` - __14 dakikada bir soygun yaparsınız.__**
**\`${z}çalış\` - __Rastgele bir işte çalışıp maaş alırsınız.__**
**\`${z}yatır\` - __Kendi cüzdanınızdan bankaya para yatırırsınız.__**
**\`${z}çek\` - __Bankadan kendi cüzdanınıza para çekersiniz.**
**\`${z}çal\` - __Etiketlediğiniz kişinin cüzdanından para çalarsınız.__**
[Destek Sunucumuza](https://discord.gg/ew3dpTu4Z5) katılmayı unutmayın
`)
let oyunlar = new Discord.MessageEmbed()
.setTitle("__🎲  Oyun Komutları__")
.setColor("RANDOM")
.setDescription(`
**\`${z}bahis\` - __Bahis oynarsınız, para kaybeder veya 2 katını kazanırsınız.__**
**\`${z}slot-machine\` - __Slots oynarsınız, para kaybeder veya 2 katını kazanırsınız.__**
**\`${z}balık-tut\` - __Balık tutarsınız, rastgele para kazanırsınız veya kaybedersiniz.__** 
`)
  if(!args[0]) return message.channel.send(yardim)
  

  if(args[0] === 'ekonomi' || args[0] === 'economy') return message.channel.send(ekonomi)
  if(args[0] === 'oyunlar' || args[0] === 'oyun' || args[0] === 'games' || args[0] === 'game') return message.channel.send(oyunlar)
  
  
};


exports.conf = {
    enabled: true, 
    aliases: ["","",'',''],
  };
  
  exports.help = {
    name: 'ekonosadasdaasdmi'
  };
