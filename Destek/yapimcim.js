const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("Samuray Ekonomi | Yapımcım")
.setDescription(`
**Botu Kodlayan** | **\` Samuray#6826 \`**

**Botun Sahibi** | Samuray#6826  ****

[Destek olan Samuray'a Teşekkür Ederiz!](https://discord.gg/UKpAcJuDHZ)
`)

  return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["yapimcim","yapımcı","yapimci"],
  };
  
  exports.help = {
    name: 'yapımsfasfacım'
  };
