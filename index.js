const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'ODA4ODYwODEyOTQzOTQ5ODU0.YCMsVQ.dRf50eQzA96A5DBa1uk9L4xSHcs';


client.on('ready', () => {
    console.log('DISCORD BOT LOGIN');
});


client.on('message', (message) => {
    if(message.content === '하이') {
        message.reply('님 하이!')
        }
});

client.on('message', (message) => {
   if(message.content === '쿠키0티어') {
        message.reply('0티어:에스프레소,허브,감초,다크초코')
        } 
});
    
client.on('message', (message) => {
     if(message.content === '쿠키1티어') {
        message.reply('1티어:우유,정글전사,석류,독버섯,뱀파이어,마들렌')    
        }
});

client.on('message', (message) => {
    if(message.content === '쿠키2티어') {
        message.reply('2티어:스파클링,칠리,눈설탕')    
        }
});

client.on('message', (message) => {
    if(message.content === '쿠키대체용') {
        message.reply('탱커대체용:공주/힐러대체용:커스터드')   
        }
});

client.on('message', (message) => {
    if(message.content === '보물0티어') {
        message.reply('0티어:무공비서,젤리시계')   
        }
});

client.on('message', (message) => {
    if(message.content === '보물1티어') {
        message.reply('1티어:설탕깃털,사탕,뿔')   
        }
});

client.on('message', (message) => {
    if(message.content === '보물2티어') {
        message.reply('2티어:낫,새총')   
        }
});

client.on('message', (message) => {
    if(message.content === '보물3티어') {
        message.reply('3티어:점액,종이부적')   
        }
});

client.on('message', (message) => {
    if(message.content === '탱커토핑') {
        message.reply('체력 ,방어력 ,피해감소')   
        }
});

client.on('message', (message) => {
    if(message.content === '딜러토핑') {
        message.reply('공격력 (감초랑 정글전사는 쿨감소)')   
        }
});

client.on('message', (message) => {
    if(message.content === '힐러토핑') {
        message.reply('지원가 :쿨감 ,치유사 :공격력')   
        }
});

client.on('message', (message) => {
    if(message.content === '2월쿠폰') {
        message.reply('KINGDOMWELOVEYOU , KINGDOMSUNBA0128 , KINGDOMYANGDDING , KINGDOMSWAMP0130 , TK2PO5GA87DBJALQ , KINGDOMLILKA2021 ')   
        }
});

client.on('message', (message) => {
    if(message.content === '쿠폰입력링크') {
        message.reply('https://www.cookierun-kingdom.com/ko/')   
        }
});

    client.login(token);