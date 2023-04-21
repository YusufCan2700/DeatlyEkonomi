const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("Samuray Ekonomi | Oyver")
.setDescription(`
**Bota OY VER ve bizi öne çıkart!**

[≫ Oy Vermek İçin Tıkla ≪](https://discord.gg/UKpAcJuDHZ)
`)

  return message.channel.send(davet)
  
};

exports.conf = {
    enabled: true, 
    aliases: ["support"],
  };
  
  exports.help = {
    name: 'desfsaafstek'
  };

