const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1099642415754776628')
        .setType('PLAYING')
        .setURL('https://www.youtube.com/channel/UCYvGMEkXftp8u6El8HyVayw')
        .setState('APGR')
        .setName('AnonymousPlaysGR')
        .setDetails('Check my SocialMedia')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1140101823227773040/1171746862726909972/standard_7.gif?ex=6582b74e&is=6570424e&hm=e91a69d0c288fc27517532c0e35101e2317d253b2deb977df3ce43b498b6b42d&')
        .setAssetsLargeText('APGR')
        .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1101758417720328203.webp?size=96&quality=lossless')
        .setAssetsSmallText('APGR')
        .addButton('Yt Channel', 'https://youtube.com/@apgr.?si=xaA3E784XL5HUu-V')
        .addButton('Twitter (𝕏) ', 'https://x.com/FortniteAPGR?t=UDJYgTstYkjhpAeX_2T7cg&s=09');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);












