const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("571105795983278140")
setInterval(function() {
channel.send(``);
}, 30)
})

client.login(process.env.token);