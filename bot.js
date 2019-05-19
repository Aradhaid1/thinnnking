const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('message', message => {

if(message.content.toLowerCase() === 'nigga')
    message.channel.send('racist');


    else if(message.content.toLowerCase() === 'hi')
        message.reply('bye');


    else if(message.content.toLowerCase() === 'oh no')
        message.reply('ikr')

    else if(message.content.toLowerCase() === 'yes')
        message.reply('rEEEEEEEEEE')

});


const prefix = "t!" //This can be anything you want

client.on("ready", () => {
  client.user.setActivity("alex has a fat bum lololol");
});

 client.on('message', msg => {
    if (msg.content === prefix + 'ping') {
      msg.reply('pong');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'help') {
      msg.reply('***Prefix: t!***, **Commands**: ___thoink___, ___pong___, ___yes___, ___w o k e___, ___rEEE___, ___Developer___, ___loli___, ___sonny ol jim___, ___where is 69?___, ___version___');
    }
  });

  client.on('message', msg => {
    if (msg.content === prefix +'yes') {
      msg.reply('no');
    }
  });

  client.on('message', msg => {
    if (msg.content === prefix + 'w o k e') {
      msg.reply('oh no');
    }
  });

  client.on('message', msg => {
    if (msg.content === prefix + 'rEEE') {
      msg.reply('RUUUUUUN');
    }
  });

  client.on('message', msg => {
    if (msg.content === prefix + 'developer') {
      msg.reply('@the guy who watches anime#0069 did lol');
    }
  });

 
  client.on('message', msg => {
    if (msg.content === prefix + 'loli') {
      msg.reply(':wazzup_dude_xd:');
    }
  });

  client.on('message', msg => {
    if (msg.content === prefix + 'sonny ol jim') {
      msg.reply('what did u call me?');
    }
  });

  client.on('message', msg => {
    if (msg.content === prefix + 'thoink') {
      msg.reply('Gotcha');
    }
  });

  client.on('message', msg => {
    if (msg.content === prefix + 'where is 69?') {
      msg.reply('jail');
    }
  });

  client.on('message', msg => {
    if (msg.content === prefix + 'version') {
      msg.reply('V1.0.0');
    }
  });

\\THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
