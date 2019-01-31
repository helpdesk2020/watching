const Discord = require("discord.js");
const client = new Discord.Client();
const token = "NDA5MDkxODQzOTQzMzAxMTIx.Dw7Szw.EouutUcQlv5IX0wnKy--rwLMWUk"


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Hatem`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By :Hatem  ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Gamer System`,"http://twitch.tv/Hatem")
client.user.setStatus("dnd")
});



client.login(token);