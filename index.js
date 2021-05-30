// Quizbot
const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env['token']

client.once('ready', () => {
  console.log("ready")
});

client.on('message', message => {
  if (message.content === '!information') {
    const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Silo Information')
      .setDescription('')
      .setFooter('Silo 2021 | Created by Joseph & Michael')
      .setTimestamp()
      .setImage('https://media.discordapp.net/attachments/848521014451109947/848526532737499156/unknown.png')
      .addFields(
        {name: "Information", value: "\u200B"},
        {name: '\u200B', value: '\u200B'},
        {name: "\u200B", value: "Silo is a bot that quiz's you on the most up-to-date news of the world. This includes current elections, development and updates, and a lot more. All commands for the bot will be listed down below. If you encounter any issues with the bot, please DM MichaelS#9738 or JolteonYellow#7328."}
      )

    message.channel.send(embed)
  }
})

client.login(token)