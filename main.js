const Discord = require("discord.js");
const bot = new Discord.Client();
const db = require("quick.db") 
const ms = require("parse-ms")
const PREFIX = "!"
const color = "#e600e6"
bot.on("ready", () => {
    console.log(`Longing as ${bot.user.tag} => (${bot.user.id}) on ${bot.guilds.size} servers`)
})


bot.on('message', msg=>{
 /////////////////////////////////////////////////////////
var message = msg
var args = message.content.slice(PREFIX.length).split(/ +/g)
const command = args.shift().toLowerCase()
//////////////////////////////////////////////////////////////////////////////////////////////////////////
const checkemoji = bot.guilds.get('649614795087020032').emojis.get('655742726004015104')    
const xemoji = bot.guilds.get('649614795087020032').emojis.get('655758872035721216')    

   if(msg.content === ( PREFIX + 'help mod') || msg.content === ( PREFIX + 'help moderation')){
    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setTitle('Information for command 🔨Moderantor!')
    .setDescription(`Soon!`)
   return message.channel.send(embed)
   }
   if(msg.content === ( PREFIX + 'help config')){
 let des =
              ' `!avatar` *Ur profile!* \n'+
              ' `!userinf <mention>` *Information for a specifiky user!* \n'+
              ' `!userinf` *Information about you!* \n'+
              ' `!serverinf` *Information about tehs server!*'
    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setTitle('Information for command ⚙️Config')
    .setDescription(`${des}`)
   return message.channel.send(embed)
   }
   if(msg.content === (PREFIX +'help currency')){
    let des =
              ' `!balance` *Your balance!* \n'+
              ' `!dep <amount>` *Deposit ur money to the bank!* \n'+
              ' `!dep all` *Depozit all ur money to the bank!* \n'+
              ' `!with <amount>` *Get an amount from ur bank account!*\n'+
              ' `!with all` *Get all ur money from ur bank account!* \n'+
              ' `!gift <amount>` *Give some cash to a poor guy;)* \n'+
              ' `!rob <mention>` *Rob someone money, be carefull!!!*\n'+
              ' `!daily` *get an amount of money from ower stuff ;)*\n'+
              ' `!list license` *List of the jobs license!*\n'+
              ' `!buy <job>` *Buy license of a job!*\n'+
              ' `!list jobs` *The list of the jobs!*\n'+
              ' `!work <job>` *Work to win some money poor guy!*\n'+
              ' `!leaderboard` *List of the top 10 richest guys!*\n'+
	      ' `!flip` *Flip a coin!*\n'+
              ' `!gamble <amount>` *Gamble ur money, carefull im good at this game!*\n'+
	      ' `!gamble all` *Gamble all ur money, carefull im good at this game!*'
             // ' `` **\n'
             
            
              
    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setTitle('Information for command 💰Currency!')
    .setDescription(des)
   return message.channel.send(embed)
   }
   if(msg.content === ( PREFIX + 'help games')){
    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setTitle('Information for command 🎲Games!')
    .setDescription(`Soon!`)
   return message.channel.send(embed)
   }
	
   if(msg.content === ( PREFIX + 'help fun')){
 let des =
              ' `!penis` *Your penis size!* \n'+
              ' `!vagina` *Your vagina size!* \n'+
              ' `!8ball` *Take my optinion!* \n'+
              ' `!version <mention>` *Funy version about someone!* \n'+
              ' `!version ` *Funy version about u!* \n'+
              ' `!yesno` *YES or NO!!*'
    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setTitle('Information for command 😆Fun!')
    .setDescription(`${des}`)
   return message.channel.send(embed)
   }
   if(msg.content === ( PREFIX + 'bot')){
    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setTitle('Information for the Bot!')
    .setDescription(`Hello, this  is my first bot and hope u like it!\nI'm working on it and i hope very very soon i will finesh all the basic commands!\n**Futures**\n**~** Adding all the commands for  modernation,fun,games ect..\n**~** Adding more elements on the currency game.\n **Contact** ${'<@440569814591995904>'}** for bugs or ideas for adding on the bot**`)
   return message.channel.send(embed)
   }
   if(msg.content === ('!help')){   
    let embed = new Discord.RichEmbed()
    .setColor(color)
    .setTitle('Information about the commands!')
    .setThumbnail(bot.displayAvatarURL)
    .addField('🤖Inf Bot','`'+PREFIX+'bot`',true)
    .addField('🔨Moderation','`'+PREFIX+'help moderation`',true)
    .addField(`💰Currency`,'`'+PREFIX+'help currency`',true)
    .addField('🎲Lojra','`'+PREFIX+'help games`',true)
    .addField('😆Fun','`'+PREFIX+'help fun`',true)
    message.channel.send(embed)
}
/////////////////////////////////////////////////////////////////////////////////////welcome comands///////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////loja buxheti//////////////////////////////////////////
if(message.content === '!get12'){
	
if(message.author.id !== "440569814591995904" ){
return;
}
	
db.add(`Bank_${message.guild.id}_${message.author.id}`, 10000)
	message.channel.send('hello boss')
}
	///balance///// check
if(msg.content === PREFIX+"bal" || msg.content === PREFIX+"balance"){
let member = message.mentions.users.first() || message.author

let bank = db.fetch(`Bank_${message.guild.id}_${member.id}`)
let para = db.fetch(`Para_${message.guild.id}_${member.id}`)

    if (para === null) para = 0;
    if (bank === null) bank = 0;
 
    
    let ballembed = new Discord.RichEmbed()
    .setColor(0x46FF00)
    .setAuthor(`Balance ${member.username}`,member.displayAvatarURL)
    .setDescription(`**Wallet**: ${para} **L**\n**Bank**: ${bank} **L**`)
    
    message.channel.send(ballembed);

}
////DEPOZITIMI I PARAVE/////
if(msg.content.startsWith(PREFIX + "dep")){
    let Para = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
    
    if(args[0] === "all"){
        let para = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
        if(para <= 0 ){ return message.channel.send("You don't have money!")}
        db.add(`Bank_${message.guild.id}_${message.author.id}`, para)
        db.add(`Para_${message.guild.id}_${message.author.id}`, -para)
      return  message.channel.send(`**${message.author.username}**, **${para}**$ are depozited to ur bank account!`)
      
   
    }
    if(!args[0]){
    return message.reply(`**${message.author.username}**, specify an amount!`)
     }
    if (isNaN(args[0])){ 
        return message.reply(`**${message.author.username}**, u can depozit only numbers !`)
     } 
    if (message.content.includes('-')) { // if the message includes "-" do this.
    return message.channel.send(`**${message.author.username}**, negative money, srly ;/.`)
}
    if(args[0] > Para){
        return message.reply(`**${message.author.username}**, u dont ahve that amount of money!`)
     }
   
    
     
      db.subtract(`Para_${message.guild.id}_${message.author.id}`, args[0])
      db.add(`Bank_${message.guild.id}_${message.author.id}`,args[0])
      let bank = db.fetch(`Bank_${message.guild.id}_${message.author.id}`)
      if(bank == null) bank = 0
     message.channel.send(`**${message.author.username}**, **${args[0]} $** added on ur bank account!`)
}
////TERHEQJA E PARAVE/////
if(msg.content.startsWith(PREFIX + "with")){

    if(args[0] === "all"){
        let para = db.fetch(`Bank_${message.guild.id}_${message.author.id}`)
        if(para <= 0 ){ return message.channel.send(`**${message.author.username}**, u dont have money to depozit!`)}
        
        db.add(`Para_${message.guild.id}_${message.author.id}`, para)
        db.add(`Bank_${message.guild.id}_${message.author.id}`, -para)
       return message.channel.send(`${message.author.username}, **${para}$** are added on ur walled!`)
    }
    let Para = db.fetch(`Bank_${message.guild.id}_${message.author.id}`)
    
    
    if(!args[0]){
    return message.channel.send(`**${message.author.username}**, specify an amount of money that u want to get from ur bank`)
     }
    if (isNaN(args[0])){ 
        return message.channel.send(`**${message.author.username}**, that's not an amount of money!`)
     }  
    if(args[0] > Para){
        return message.channel.send(`**${message.author.username}**, you dont have all that money on ur bank!`)
     }
    if (message.content.includes('-')) { // if the message includes "-" do this.
    return message.channel.send(`**${message.author.username}**, negative money srly ;/.`)
     }
     
     
      db.subtract(`Bank_${message.guild.id}_${message.author.id}`, args[0])
      db.add(`Para_${message.guild.id}_${message.author.id}`,args[0])
      
     message.channel.send(`**${message.author.username}**, **${args[0]}L** are added on ur walled!`)
}


if(msg.content.startsWith(PREFIX + "rob")){

    let timeout = 8.64e+7
    let user = message.mentions.members.first()
    const daily =  db.fetch(`rob_${message.guild.id}_${message.author.id}`);
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
     return message.channel.send(`${message.author.username}, Chill!! WORLD IS NOT MADE FROM MONEY.!  Wait**${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } 
if (!user) {
    return message.channel.send(`${message.author.username}, mention someone that u want to rob.`)
}
let targetuser =  db.fetch(`Para_${message.guild.id}_${user.id}`) // fetch mentioned users balance
let author = db.fetch(`Para_${message.guild.id}_${message.author.id}`) // fetch authors balance
if (author < 1000) { // if the authors balance is less than 250, return this.
    return message.channel.send(`${message.author.username}:x: u need 1000$ to rob someone!`)
}
let policia = Math.floor(Math.random() * 3) + 1;
let policiakap = Math.floor(Math.random() * 3) + 1;

if(policia === policiakap){
    let replyies = ["HAHAHAHA","noob rober","don't worry this is life","heh","Well u got fucked","LOL","Cearfully next time"];
    let result = Math.floor((Math.random() * replyies.length));
    let paidtarged = 1000
    db.subtract(`Para_${message.guild.id}_${message.author.id}`, paidtarged);
    db.add(`Para_${message.guild.id}_${targetuser.id}`, paidtarged);
    return message.channel.send(`The police arrested you, ${replyies[result]}!!\nU paid the person u tried to rob ${paidtarged}`)
}

if (targetuser <= 0) { // if mentioned user has 0 or less, it will return this.
    let random_ = Math.floor(Math.random() * 1000) + 1;
    db.subtract(`Para_${message.guild.id}_${message.author.id}`, 1000)
    let replyies = ["HAHAHAHA","noob rober","don't worry this is life","heh","Well u got fucked","LOL","Cearfully next time"];
    let result = Math.floor((Math.random() * replyies.length));
    return message.channel.send(`:x: **${user.user.username}** didn't had money:man_facepalming:\n and u lost **${random_}$**, ${replyies[result]} `)
}


let random = Math.floor(Math.random() * targetuser) + 1; // random number 200-1, you can change 200 to whatever you'd like
let random_ = Math.floor(Math.random() * 1000) + 1;
let replyies = ["fuel","to corrupt the police","robberies","bootlicker"];
let result = Math.floor((Math.random() * replyies.length));
let embed = new Discord.RichEmbed()
.setDescription(`${message.author} u robed ${user} and got with **${random}** $ ,but u lose **${random_}**$ for ${replyies[result]}!`)
.setColor("GREEN")
.setTimestamp()
message.channel.send(embed);


db.subtract(`Para_${message.guild.id}_${user.id}`, random)
db.add(`Para_${message.guild.id}_${message.author.id}`, random)
db.subtract(`Para_${message.guild.id}_${message.author.id}`, random_)
db.set(`rob_${message.guild.id}_${message.author.id}`, Date.now())

}
////ditor///
if(msg.content === (PREFIX + "daily")){
let timeout = 8.64e+7 // 24 hours in milliseconds.
let daily = db.fetch(`daily_${message.guild.id}_${message.author.id}`)
if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
    let replyies = ["I'm not a drug dealer","I'm not made from money","I'm not a millionaire","Chill","Daily means daily not ANYTIME"];
    let result = Math.floor((Math.random() * replyies.length));
 return message.channel.send(`${replyies[result]}, Wait **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
} 

let amount = 500


let embed = new Discord.RichEmbed()
.setColor("GREEN")
.setDescription(`**Daily reward**\n\nCollected😁 ${amount}$, a gift from staf!!`)

.setFooter(message.author.username,message.author.displayAvatarURL)
message.channel.send(embed)
db.add(`Para_${message.guild.id}_${message.author.id}`, amount)
db.set(`daily_${message.guild.id}_${message.author.id}`, Date.now())
    
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////


if(msg.content === PREFIX + 'list license'){
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`**List of license for jobs**\n\nWho said the waiter doesn't need a license, WELL he needs experience!😜\n\nCommand => `+'`!buy <name>`'+`\n\nFast Food seller ~ 500L *<fsseller>*\nMarket seller ~ 1500L *<mseller>*\nWaiter ~ 2000L *<waiter>*\nBanker ~ 3500L *<banker>*\nTeacher ~ 5000L *<teacher>*\nDoctor ~ 7000L *<doctor>*\nArkitekt ~ 9000L *<arkitekt>*\nPolitican ~ 15000L *<politican>*`)
    message.channel.send(embed)
}

if(msg.content === PREFIX + 'buy fsseller'){
   let lice =  db.fetch(`fsshites_${message.guild.id}_${message.author.id}`)
        let parate = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
        if(lice === 1){
            return message.channel.send(`${message.author.username}, u have that license, why u need 2!`)
        }
         if(parate < 500) {
           return  message.channel.send(`${message.author.username}, u dont have that amount of money to buy it!`)
         }
         db.subtract(`Para_${message.guild.id}_${message.author.id}`, 500)
        db.set(`fsshites_${message.guild.id}_${message.author.id}`,1)
       return message.channel.send(`${message.author.username}, u just bought **Fast Food seller** license for 500$`)
}

if(msg.content === PREFIX + 'buy mseller'){
    let licensa =  db.fetch(`mshites_${message.guild.id}_${message.author.id}`)
    let parate = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
    if(licensa === 1){
        return message.channel.send(`${message.author.username}, u have that license, why u need 2!`)
    }
     if(parate < 1500) {
       return  message.channel.send(`${message.author.username}, u dont have that amount of money to buy it!`)
     }
     db.subtract(`Para_${message.guild.id}_${message.author.id}`, 1500)
    db.set(`mshites_${message.guild.id}_${message.author.id}`,1)
   return message.channel.send(`${message.author.username},  u just bought **Market seller** license for 1500$`)
}

if(msg.content === PREFIX + 'buy waiter'){
    let licensa =  db.fetch(`kamarier_${message.guild.id}_${message.author.id}`)
    let parate = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
    if(licensa === 1){
        return message.channel.send(`${message.author.username}, u have that license, why u need 2!`)
    }
     if(parate < 2000) {
       return  message.channel.send(`${message.author.username}, u dont have that amount of money to buy it!`)
     }
     db.subtract(`Para_${message.guild.id}_${message.author.id}`, 2000)
    db.set(`kamarier_${message.guild.id}_${message.author.id}`,1)
   return message.channel.send(`${message.author.username},  u just bought **Waiter** license for 2000$`)
}

if(msg.content === PREFIX + 'buy banker'){
    let licensa =  db.fetch(`bankier_${message.guild.id}_${message.author.id}`)
    let parate = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
    if(licensa === 1){
        return message.channel.send(`${message.author.username}, u have that license, why u need 2!`)
    }
     if(parate < 3500) {
       return  message.channel.send(`${message.author.username},  u dont have that amount of money to buy it!`)
     }
     db.subtract(`Para_${message.guild.id}_${message.author.id}`, 3500)
    db.set(`bankier_${message.guild.id}_${message.author.id}`,1)
   return message.channel.send(`${message.author.username}, u just bought **Bankerr** license for 3500$`)
}

if(msg.content === PREFIX + 'buy teacher'){
    let licensa =  db.fetch(`mesues_${message.guild.id}_${message.author.id}`)
    let parate = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
    if(licensa === 1){
        return message.channel.send(`${message.author.username}, u have that license, why u need 2!`)
    }
     if(parate < 5000) {
       return  message.channel.send(`${message.author.username},  u dont have that amount of money to buy it!`)
     }
     db.subtract(`Para_${message.guild.id}_${message.author.id}`, 5000)
    db.set(`mesues_${message.guild.id}_${message.author.id}`,1)
   return message.channel.send(`${message.author.username},  u just bought **Teacher** license for 5000$`)
}

if(msg.content === PREFIX + 'buy doctor'){
    let licensa =  db.fetch(`doktor_${message.guild.id}_${message.author.id}`)
    let parate = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
    if(licensa === 1){
        return message.channel.send(`${message.author.username}, u have that license, why u need 2!`)
    }
     if(parate < 7000) {
       return  message.channel.send(`${message.author.username}, u dont have that amount of money to buy it!`)
     }
     db.subtract(`Para_${message.guild.id}_${message.author.id}`, 7000)
    db.set(`doktor_${message.guild.id}_${message.author.id}`,1)
   return message.channel.send(`${message.author.username},  u just bought **Doctor** license for 10000$`)
}

if(msg.content === PREFIX + 'buy architect'){
    let licensa =  db.fetch(`arkitekt_${message.guild.id}_${message.author.id}`)
    let parate = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
    if(licensa === 1){
        return message.channel.send(`${message.author.username}, u have that license, why u need 2!`)
    }
     if(parate < 9000) {
       return  message.channel.send(`${message.author.username}, u dont have that amount of money to buy it!`)
     }
     db.subtract(`Para_${message.guild.id}_${message.author.id}`, 9000)
    db.set(`arkitekt_${message.guild.id}_${message.author.id}`,1)
   return message.channel.send(`${message.author.username}, u just bought **Architect** license for 100000L`)
}

if(msg.content === PREFIX + 'buy politican'){
    let licensa =  db.fetch(`politikan_${message.guild.id}_${message.author.id}`)
    let parate = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
    if(licensa === 1){
        return message.channel.send(`${message.author.username}, u have that license, why u need 2!`)
    }
     if(parate < 15000) {
       return  message.channel.send(`${message.author.username}, u dont have that amount of money to buy it!`)
     }
     db.subtract(`Para_${message.guild.id}_${message.author.id}`, 15000)
    db.set(`politikan_${message.guild.id}_${message.author.id}`,1)
   return message.channel.send(`${message.author.username}, u just bought **Politican** license for 1000000L`)
}


////lista e puneve

if(msg.content === (PREFIX + "list jobs")){

    let member = message.mentions.users.first() || message.author
  let   fskuzhin  =  db.fetch(`fskuzhin_${message.guild.id}_${message.author.id}`)
  if(fskuzhin === null) fskuzhin = checkemoji
  let   furxhi    =  db.fetch(`furxhi_${message.guild.id}_${message.author.id}`)
  if(furxhi === null) furxhi = checkemoji
  let   fsshites  =  db.fetch(`fsshites_${message.guild.id}_${message.author.id}`)
  if(fsshites === null) fsshites = xemoji
  if(fsshites === 1) fsshites = checkemoji
  let   mshites   =  db.fetch(`mshites_${message.guild.id}_${message.author.id}`)
  if(mshites === null) mshites = xemoji
  if(mshites === 1) mshites = checkemoji
  let   kamarier  =  db.fetch(`kamarier_${message.guild.id}_${message.author.id}`)
  if(kamarier === null) kamarier = xemoji
  if(kamarier === 1) kamarier = checkemoji
  let   bankier   =  db.fetch(`bankier_${message.guild.id}_${message.author.id}`)
  if(bankier === null) bankier = xemoji
  if(bankier === 1) bankier = checkemoji
  let   mesues    =  db.fetch(`mesues_${message.guild.id}_${message.author.id}`)
  if(mesues === null) mesues = xemoji
  if(mesues === 1) mesues = checkemoji
  let   doktor    =  db.fetch(`doktor_${message.guild.id}_${message.author.id}`)
  if(doktor === null) doktor = xemoji
  if(doktor === 1) doktor = checkemoji
  let   arkitekt  =  db.fetch(`arkitekt_${message.guild.id}_${message.author.id}`)
  if(arkitekt === null) arkitekt = xemoji
  if(arkitekt === 1) arkitekt = checkemoji
  let   politikan = db.fetch(`politikan_${message.guild.id}_${message.author.id}`)
  if(politikan === null) politikan = xemoji
  if(politikan === 1) politikan = checkemoji
        let embed = new Discord.RichEmbed()
        .setDescription(`***Lista e puneve per ***<@${message.member.id}>\n\nWorks with ${xemoji} u cant use them! `+'`!list license`'+` to buy them!!\nCommanda => `+'`!work <job>`'+`\n\n${fskuzhin}Fast Food kitchen ~ 1-100$  ***1min*** *<fskitchen>*\n${furxhi}Baker ~ 1-150$  ***1.5min*** *<baker>*\n${fsshites}Fast Food seller ~ 1-200$  ***2min*** *<fsseller>*\n${mshites}Market seller ~ 1-350$  ***3.4min*** *<mseller>*\n${kamarier}Waiter ~ 1-300$  ***4min*** *<waiter>*\n${bankier}Banker ~ 1-290$  ***2.5min*** *<banker>*\n${mesues}Teacher ~ 1-500$  ***5min*** *<teacher>*\n${doktor}Doctor ~ 1-500$  ***5min*** *<doctor>*\n${arkitekt}Architect ~ 500-2000$  ***10min*** *<architect>*\n${politikan}Politican ~ 1000-5000$  ***20min*** *<politican>*`)
        .setFooter(`Lista e puneve per ${member.username}`,message.author.displayAvatarURL)
        return message.channel.send(embed)
    
    
}
const timeout =  db.fetch(`kohapun_${message.guild.id}_${message.author.id}`);
const daily =  db.fetch(`pun_${message.guild.id}_${message.author.id}`);
if(msg.content === (PREFIX + 'work')) {
    msg.channel.send('`!work <job>`specifky the job u want to work , `!list jobs`')
}

const replyies = ["Rosaku","Edi","Kuksi","New","Bum bum","Hot","Milk","Arjel","Dibra","Yamm","QTU","Cool"];
const result = Math.floor((Math.random() * replyies.length));

if(msg.content.startsWith(PREFIX + "work fskitchen")){
    
   
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
     return message.channel.send(`You can come to work after **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } 
   
        let koha = 60000
        let para = Math.floor(Math.random() * 100) + 1;
        db.add(`Para_${message.guild.id}_${message.author.id}`, para)
        db.set(`pun_${message.guild.id}_${message.author.id}`, koha)
        db.set(`kohapun_${message.guild.id}_${message.author.id}`, Date.now())
       
       return message.channel.send(`You are paid **${para}$**  for the job u did at **Fast Food ${replyies[result]}**`)
       }
if(msg.content.startsWith(PREFIX+"work baker")){

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
     return message.channel.send(`You can come to work after **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } 

    let koha = 90000
    let para = Math.floor(Math.random() * 150) + 1;
    let bakshish = Math.floor(Math.random() * 0) + 0;
  
    db.add(`Para_${message.guild.id}_${message.author.id}`, para)
    db.add(`Para_${message.guild.id}_${message.author.id}`, bakshish)
    db.set(`pun_${message.guild.id}_${message.author.id}`, koha)
    db.set(`kohapun_${message.guild.id}_${message.author.id}`, Date.now())
  
   return message.channel.send(`You won **${para}$** for working as baker. `)
       }
if(msg.content.startsWith(PREFIX+"work mseller")){
    let lices = db.fetch(`mshites_${message.guild.id}_${message.author.id}`)
    if(lices === null){
      return  message.channel.send('You dont have the license to work this job!! Buy the license `!list license`')
    }
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
     return message.channel.send(`You can come to work after **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } 
  
    let koha = 210000
    let para = Math.floor(Math.random() * 180) + 1;
    let bakshish = Math.floor(Math.random() * 30) + 1;
    db.add(`Para_${message.guild.id}_${message.author.id}`, para)
    db.add(`Para_${message.guild.id}_${message.author.id}`, bakshish)
    db.set(`pun_${message.guild.id}_${message.author.id}`, koha)
    db.set(`kohapun_${message.guild.id}_${message.author.id}`, Date.now())
   
   return message.channel.send(`Ju fituat **${para}L** per punen qe bete ne **Marketin ${replyies[result]}** si SHITES dhe moret **${bakshish}L**😉 bakshish. `)
       }        
if(msg.content.startsWith(PREFIX+"work fsseller")){
    let lices = db.fetch(`fsshites_${message.guild.id}_${message.author.id}`)
     
    if(lices === null){
      return  message.channel.send('You dont have the license to work this job!! Buy the license `!list license`')
    }
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));
         return message.channel.send(`You can come to work after **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
        } 
       
        let koha = 120000
        let para = Math.floor(Math.random() * 120) + 1;
        let bakshish = Math.floor(Math.random() * 15) + 1;
     
        db.add(`Para_${message.guild.id}_${message.author.id}`, para)
        db.add(`Para_${message.guild.id}_${message.author.id}`, bakshish)
        db.set(`pun_${message.guild.id}_${message.author.id}`, koha)
        db.set(`kohapun_${message.guild.id}_${message.author.id}`, Date.now())
      
       return message.channel.send(`You are paid **${para}** $ for the job u did at **Fast Food ${replyies[result]}** as seller and won **${bakshish}$**😉 baksheesh. `)
        }
if(msg.content.startsWith(PREFIX+"work waiter")){
    let lices = db.fetch(`kamarier_${message.guild.id}_${message.author.id}`)
    if(lices === null){
      return  message.channel.send('You dont have the license to work this job!! Buy the license `!list license`')
    }
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));
         return message.channel.send(`You can come to work after **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
        } 
       
        let koha = 240000
        let para = Math.floor(Math.random() * 300) + 1;
        let bakshish = Math.floor(Math.random() * 90) + 1;
        
        db.add(`Para_${message.guild.id}_${message.author.id}`, para)
        db.add(`Para_${message.guild.id}_${message.author.id}`, bakshish)
        db.set(`pun_${message.guild.id}_${message.author.id}`, koha)
        db.set(`kohapun_${message.guild.id}_${message.author.id}`, Date.now())
      
       return message.channel.send(`You are paid **${para}$** for the job u did at **${replyies[result]}** as waiter and won **${bakshish}$**😉 baksheesh. `)
        }
if(msg.content.startsWith(PREFIX+"puno banker")){
    let lices = db.fetch(`bankier_${message.guild.id}_${message.author.id}`)
    if(lices === null){
       return message.channel.send('You dont have the license to work this job!! Buy the license `!list license`')
    }
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
     return message.channel.send(`You can come to work after **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } 
        let koha = 150000
        let para = Math.floor(Math.random() * 190) + 1;
        let bakshish = Math.floor(Math.random() * 0) + 0;
       
        db.add(`Para_${message.guild.id}_${message.author.id}`, para)
        db.add(`Para_${message.guild.id}_${message.author.id}`, bakshish)
        db.set(`pun_${message.guild.id}_${message.author.id}`, koha)
        db.set(`kohapun_${message.guild.id}_${message.author.id}`, Date.now())
      
       return message.channel.send(`You are paid **${para}** $ for the job u did at **${replyies[result]}** as banker!`)
        }
if(msg.content.startsWith(PREFIX+"work teacher")){
    let lices = db.fetch(`mesues_${message.guild.id}_${message.author.id}`)
    if(lices === null){
    return    message.channel.send('You dont have the license to work this job!! Buy the license `!list license`')
    }
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
     return message.channel.send(`You can come to work after **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } 

    let koha = 300000
    let para = Math.floor(Math.random() * 500) + 1;
    let bakshish = Math.floor(Math.random() * 10) + 1;
   
    db.add(`Para_${message.guild.id}_${message.author.id}`, para)
    db.add(`Para_${message.guild.id}_${message.author.id}`, bakshish)
    db.set(`pun_${message.guild.id}_${message.author.id}`, koha)
    db.set(`kohapun_${message.guild.id}_${message.author.id}`, Date.now())
  
   return message.channel.send(`You are paid **${para}$**  for the job u did at **Fast Food ${replyies[result]}** as seller and won **${bakshish}$**😉 corruption!`)
        }
if(msg.content.startsWith(PREFIX+"work doctor")){
    let lices = db.fetch(`doktor_${message.guild.id}_${message.author.id}`)
    if(lices === null){
        return message.channel.send('You dont have the license to work this job!! Buy the license `!list license`')
    }
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));
         return message.channel.send(`You can come to work after **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
        } 
       
        let koha = 330000
        let para = Math.floor(Math.random() * 500) + 1;
        let bakshish = Math.floor(Math.random() * 100) + 1;
        
        db.add(`Para_${message.guild.id}_${message.author.id}`, para)
        db.add(`Para_${message.guild.id}_${message.author.id}`, bakshish)
        db.set(`pun_${message.guild.id}_${message.author.id}`, koha)
        db.set(`kohapun_${message.guild.id}_${message.author.id}`, Date.now())
      
       return message.channel.send(`You are paid **${para}$** for the job u did at **hospital ${replyies[result]}** as doctor and won **${bakshish}$**😉 baksheesh! `)
        }
if(msg.content.startsWith(PREFIX+"work architect")){
    let lices = db.fetch(`arkitekt_${message.guild.id}_${message.author.id}`)
    if(lices === null){
        return message.channel.send('You dont have the license to work this job!! Buy the license `!list license`')
    }
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));
         return message.channel.send(`You can come to work after **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
        } 
        
        let koha = 600000
        let para = Math.floor(Math.random() * 2000) + 1;
        let bakshish = Math.floor(Math.random() * 0) + 0;
        
        db.add(`Para_${message.guild.id}_${message.author.id}`, para)
        db.add(`Para_${message.guild.id}_${message.author.id}`, bakshish)
        db.set(`pun_${message.guild.id}_${message.author.id}`, koha)
        db.set(`kohapun_${message.guild.id}_${message.author.id}`, Date.now())
      
       return message.channel.send(`You are paid **${para}$** for the job u did at the  **company ${replyies[result]}** as architect!`)
        }
if(msg.content.startsWith(PREFIX+"work politican")){
    let lices = db.fetch(`politikan_${message.guild.id}_${message.author.id}`)
    if(lices === null){
      return  message.channel.send('You dont have the license to work this job!! Buy the license `!list license`')
    }
     if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));
         return message.channel.send(`You can come to work after **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
        } 
       
        let koha = 1200000
        let para = Math.floor(Math.random() * 5000) + 1;
        let bakshish = Math.floor(Math.random() * 1000) + 1;
    
        db.add(`Para_${message.guild.id}_${message.author.id}`, para)
        db.add(`Para_${message.guild.id}_${message.author.id}`, bakshish)
        db.set(`pun_${message.guild.id}_${message.author.id}`, koha)
        db.set(`kohapun_${message.guild.id}_${message.author.id}`, Date.now())
      
       return message.channel.send(`You are paid **${para}$** for the job u did as politican and won **${bakshish}$**😉 corruption!!! `)
        }
if(message.content.startsWith(PREFIX+'gamble')  ){
   
   
    if(!args[0]){return message.channel.send('Specifky an amount!')}
    if(args[0] === "all"){
        let Para = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
        if(Para === 0){
        const embed = new Discord.RichEmbed()
       .setAuthor('You dont have money!')
       return message.channel.send(embed);   
        }
        let random1 = Math.floor(Math.random() * 20) + 1;
        let random2 = Math.floor(Math.random() * 20) + 5;
        
        
        if(random1 <= random2){
            let parate = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
            db.subtract(`Para_${message.guild.id}_${message.author.id}`, parate)
        const embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}'s gambling game`, message.author.displayAvatarURL)
        .setColor('RANDOM')
        .setDescription(`You lost **${parate}** $\n\nYou now have **0** $ `)
        .addField(`${message.author.username}`, `Rolled ${random1}`,true)
        .addField(`${bot.user.username}`, `Rolled ${random2}`,true)
        .setFooter('Your number has to be at least 1 higher than mine')
       return message.channel.send(embed);
     
        }
        if(random1 > random2){
            let random3 = Math.floor(Math.random() * 3) + 1;
            let Para = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
            let parat = Para/random3
            let parate = Para*parat
            let para = Para+parate
        
         db.add(`Para_${message.guild.id}_${message.author.id}`, parate)
        const embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username}'s gambling game`, message.author.displayAvatarURL)
        .setColor('RANDOM')
        .setDescription(`You won **${parate}** $\n\nYou now have **${para}** $ `)
    
        .addField(`${message.author.username}`, `Rolled ${random1}`,true)
        .addField(`${bot.user.username}`, `Rolled ${random2}`,true)
        .setFooter('Your number has to be at least 1 higher than mine')
       return message.channel.send(embed);
     
        }
    }
    let Para = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
   
    if (isNaN(args[0])){ 
        return message.reply(` u can depozit only numbers !`)
     } 
     if(args[0] > Para){
        return message.reply(` u dont have that amount of money!`)
     }
    let random1 = Math.floor(Math.random() * 20) + 1;
    let random2 = Math.floor(Math.random() * 20) + 5;

    if(random1 <= random2){
        let parate = args[0]
        let moneyss = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
        let para = moneyss-parate
        db.subtract(`Para_${message.guild.id}_${message.author.id}`, parate)
        const embed = new Discord.RichEmbed()
     .setAuthor(`${message.author.username}'s gambling game`, message.author.displayAvatarURL)
     .setColor('RANDOM')
     .setDescription(`You lost **${parate}** $\n\nYou now have **${para}** $ `)
 
     .addField(`${message.author.username}`, `Rolled ${random1}`,true)
     .addField(`${bot.user.username}`, `Rolled ${random2}`,true)
     .setFooter('Your number has to be at least 1 higher than mine')
    return message.channel.send(embed);
 
    }
    if(random1 > random2){
        let random3 = Math.floor(Math.random() * 3) + 1;
        let Para = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
        let parat = Para/random3
        let parate = Para*parat
        let para = Para+parate
    
     db.add(`Para_${message.guild.id}_${message.author.id}`, parate)
    const embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}'s gambling game`, message.author.displayAvatarURL)
    .setColor('RANDOM')
    .setDescription(`You won **${parate}** $\n\nYou now have **${para}** $ `)

    .addField(`${message.author.username}`, `Rolled ${random1}`,true)
    .addField(`${bot.user.username}`, `Rolled ${random2}`,true)
    .setFooter('Your number has to be at least 1 higher than mine')
   return message.channel.send(embed);
 
    }
    
}
if(message.content === PREFIX+'flip'){
   let Para = db.fetch(`Para_${message.guild.id}_${message.author.id}`)
   if(Para === 0){ return message.channel.send('Find a coin mate!')}
   db.set(`flip_${message.guild.id}_${message.author.id}`, Date.now())
   return message.channel.send('Call `heads` or `tails`\nYou have about 10 seconds before I give up.')  
}
if(message.content === 'heads'){
const timeoutflip = 10000
const dailyflip =  db.fetch(`flip_${message.guild.id}_${message.author.id}`)
if (dailyflip !== null && timeoutflip - (Date.now() - dailyflip) > 0) {
    let flip =  Math.floor(Math.random() * 2) + 1;
    if(flip === 1){
    db.subtract(`Para_${message.guild.id}_${message.author.id}`, 1)
    db.set(`flip_${message.guild.id}_${message.author.id}`, 0)
    return message.channel.send('aw it was tails and you suck, sad day for you');
    }
    if(flip === 2){
    db.add(`Para_${message.guild.id}_${message.author.id}`, 1)
    db.set(`flip_${message.guild.id}_${message.author.id}`, 0)
    return message.channel.send('It was heads! You got my coin!');
    }
} 
return;

}
if(message.content === 'tails'){
    const timeoutflip = 10000
    const dailyflip =  db.fetch(`flip_${message.guild.id}_${message.author.id}`)
    if (dailyflip !== null && timeoutflip - (Date.now() - dailyflip) > 0) {
        let flip =  Math.floor(Math.random() * 2) + 1;
  
        if(flip === 1){
        db.subtract(`Para_${message.guild.id}_${message.author.id}`, 1)
        db.set(`flip_${message.guild.id}_${message.author.id}`, 0)
        return message.channel.send('aw it was heads and you suck, sad day for you');
        }
        if(flip === 2){
        db.add(`Para_${message.guild.id}_${message.author.id}`, 1)
        db.set(`flip_$${message.guild.id}_${message.author.id}`, 0)
        return message.channel.send('It was tails! You got my coin!');
        }  
    } 
    
    return;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
   if(msg.content === PREFIX+"leaderboard" || msg.content === PREFIX+"lb" ) {  
  
   const money = db.all().filter(data => data.ID.startsWith('Bank_')).sort((a, b) => b.data - a.data)
   money.length = 10;
   var finalLb = "";
   var i = 0;
   let indexnum = 0;
   for (i in money) {
     finalLb += `**${++indexnum}. <@${bot.users.get(money[i].ID.split(`${message.guild.id}_`)[1]).id}>** - ${money[i].data} Leke\n`;
   }
console.log(money)
   
   const embed = new Discord.RichEmbed()
   .setAuthor(`The richest of this server !`, message.guild.iconURL)
   .setColor('RANDOM')
   .setDescription(finalLb)
   .setTimestamp()
   message.channel.send(embed)
}

if(message.content.startsWith(PREFIX + "avatar") || message.content.startsWith(PREFIX + "av")){
 //  if(message.author.id === "393376407247519754") {  
//return   message.channel.send('shko mr pall');
//}
    let mem = message.mentions.users.first() || message.author;
    
    var embed = new Discord.RichEmbed()
    .setColor(0x46FF00)
    .setAuthor(mem.username,mem.displayAvatarURL)
    .setImage(mem.displayAvatarURL);
    message.channel.send(embed);
    
    }
   if(message.content.startsWith(PREFIX +"version")) {
        
        let replyies1 = ["1","20","-1","-0","200","100","∞","8"];
        let replyies2 = ["He can laugh,cough,sneeze and pee all on the same time","fast as fuck","no skills","dark skills"];
        let replyies3 = ["[==100%==]","[==30%==]","[==1%==]","[==60%==]","[==50%==]",,"[==0%==]","[==No machine to charge==]"];
        let replyies4 = ["muhaha","ah-ah-ah-ahhh","xaxaxa","donkey laugh"];   
        
        let result1 = Math.floor((Math.random() * replyies1.length));
        let result2 = Math.floor((Math.random() * replyies2.length));
        let result3 = Math.floor((Math.random() * replyies3.length));
        let result4 = Math.floor((Math.random() * replyies4.length));
        let auser = message.mentions.users.first() || message.author
        
        let ballembed = new Discord.RichEmbed()
        .setColor(0x46FF00)
        .addField('**User info**', auser.username)
        .setThumbnail(auser.avatarURL)
        .addField('IQ', replyies1[result1]+" IQ")
        .addField('Skills' , replyies2[result2] )
        .addField('Peepe machine battery' , replyies3[result3])
        .addField('Laught version', replyies4[result4] );
        message.channel.send(ballembed);
    
    }  
 if(message.content.startsWith(PREFIX+"vagina")) {
       
        let replyies = ["(   )","wtf is that tunnel !!","()","o","( )"];
           
        let result = Math.floor((Math.random() * replyies.length));
        let auser = message.mentions.users.first() || message.author
        let ballembed = new Discord.RichEmbed()
        .setColor(0x46FF00)
        .addField(auser.username,"Pussy size")
        .setFooter(replyies[result]);
        message.channel.send(ballembed).then(message => {message.delete(5000)});
    
    }
 if(message.content.startsWith(PREFIX+"penis")) {
        
        let replyies = ["8=D","8==D","8===D","8===D","8====D","8====D","8======D","8========D","WTF..CANT SEND MORE THEN 200 CARACTERS"];

        let result = Math.floor((Math.random() * replyies.length));
        let auser = message.mentions.users.first() || message.author
        let ballembed = new Discord.RichEmbed()
        .setColor(0x46FF00)
        .addField(auser.username,"Dick size")
        .setFooter(replyies[result]);
        message.channel.send(ballembed).then(message => {message.delete(5000)});
    
    } 
if(message.content.startsWith(PREFIX+'8ball')){
      let question = message.content.split(/\s+/g).slice(1).join(" ");

if (!question) {
    return message.channel.send(`You must provide a question! **Usage: ${PREFIX}8ball <question>**`);

}

var answer = ['It is certain',
                            'It is decidedly so',
                            'Without a doubt',
                            'Yes, definitely',
                            'You may rely on it',
                            'As I see it, yes',
                            'Most likely',
                            'Outlook good',
                            'Yes',
                            'Signs point to yes',
                            'Reply hazy try again',
                            'Ask again later',
                            'Better not tell you now',
                            'Cannot predict now',
                            'Concentrate and ask again',
                            'Don\'t count on it',
                            'My reply is no',
                            'My sources say no',
                            'Outlook not so good',
                            'Very doubtful'];
    const ballEmbed = new Discord.RichEmbed()
        
        .setAuthor('Question =>  "'+ question + '"')
        .setDescription("Answer =>  " + answer[Math.round(Math.random() * (answer.length - 1))] + '.')
        .setColor("RANDOM")
        .setFooter("Replying to " + message.author.username)
   return message.channel.send(ballEmbed); 
}
 
     if(message.content === (PREFIX+"yesno")) {
       
        let replyies = ["Yes","No"];
           
        let result = Math.floor((Math.random() * replyies.length));
       
     return   message.channel.send(replyies[result]);
    
    }
// if(message.content.startsWith('!event')){
//     message.delete(2000);
//     db.set(`Event@Date@now@time@set_${message.guild.id}_${message.channel}`, Date.now())//call the coins data now
//     db.set(`Event@call@onse_${message.guild.id}_${message.channel.send}`, 0) //qe mos te bej multiply call
//     db.set(`channel@event@call${message.guild.id}_${message.channel.id}`, message.channel.id)  //to call it on the smae channel
    
  
//     msg.channel.send('Call `10min` `1h` `2h` `3h` `5h` `10h` `24h` to set the time of the event end. \n I will give up on 10 seconds.').then( m => {
       
//             m.delete(10000)
        
//         });
//  }
//  if(message.content === '10min'){
    
//     let ischannelhere =  db.fetch(`channel@event@call${message.guild.id}_${message.channel.id}`)

//     if(message.channel.id !== ischannelhere) {
//         return; 
//     }

//     let callonse = db.get(`Event@call@onse_${message.guild.id}_${message.channel.send}`)
//     if(callonse === 1){
//         return;
//     }
//     let timeoutcall = 10000
    
//     let Datathencall = db.fetch(`Event@Date@now@time@set_${message.guild.id}_${message.channel}`)
  
//     if(Datathencall !== null && timeoutcall - (Date.now() - Datathencall) > 0){
//         message.delete(2000);

//     let eventovertime = 600000
   
//     db.set(`Event@Date@now@time@start_${message.guild.id}_${message.channel}`, Date.now()) // koha tani
//     let Datathenevent = db.get(`Event@Date@now@time@start_${message.guild.id}_${message.channel}`) // koha tani

//     var time = ms(eventovertime - (Date.now() - Datathenevent));
    
//     let embed1 = new Discord.RichEmbed()
//     .setDescription(`Event timeout **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
//     .setColor('RANDOM')
//     message.channel.send(embed1).then(() => {
//         db.set(`event@channel@id_${message.channel.id}_${message.channel.id}`, message.channel.id) // qe mos te ngatroj serverin
        
//         db.add(`channel@member@event_${message.guild.id}_${message.channel.id}`, 1) // per qe te qoj vetem 1 mesazh everyone
//         db.set(`Event@call@onse_${message.guild.id}_${message.channel.send}`, 1) // event call vetem 1 here 

//     })
  
//     message.channel.send('**Everyone can send only one comment!!**').then(m => {
//         setTimeout(() => {
            
//         let embed = new Discord.RichEmbed()

//         .setDescription(`**Event over**`)
//         .setColor('RANDOM')
//         m.channel.send(embed)
//         db.set(`Event@call@onse_${message.guild.id}_${message.channel.send}`, 0)  
//         db.set(`event@channel@id_${message.channel.id}_${message.channel.id}`, 0)
      
//     }, eventovertime)
//     })
      
  
//     }
   
    
// return;
//  }
// 	 if(message.content === '1h'){
    
//     let ischannelhere =  db.fetch(`channel@event@call${message.guild.id}_${message.channel.id}`)

//     if(message.channel.id !== ischannelhere) {
//         return; 
//     }

//     let callonse = db.get(`Event@call@onse_${message.guild.id}_${message.channel.send}`)
//     if(callonse === 1){
//         return;
//     }
//     let timeoutcall = 10000
    
//     let Datathencall = db.fetch(`Event@Date@now@time@set_${message.guild.id}_${message.channel}`)
  
//     if(Datathencall !== null && timeoutcall - (Date.now() - Datathencall) > 0){
//         message.delete(2000);

//     let eventovertime = 3600000
   
//     db.set(`Event@Date@now@time@start_${message.guild.id}_${message.channel}`, Date.now()) // koha tani
//     let Datathenevent = db.get(`Event@Date@now@time@start_${message.guild.id}_${message.channel}`) // koha tani

//     var time = ms(eventovertime - (Date.now() - Datathenevent));
    
//     let embed1 = new Discord.RichEmbed()
//     .setDescription(`Event timeout **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
//     .setColor('RANDOM')
//     message.channel.send(embed1).then(() => {
//         db.set(`event@channel@id_${message.channel.id}_${message.channel.id}`, message.channel.id) // qe mos te ngatroj serverin
        
//         db.add(`channel@member@event_${message.guild.id}_${message.channel.id}`, 1) // per qe te qoj vetem 1 mesazh everyone
//         db.set(`Event@call@onse_${message.guild.id}_${message.channel.send}`, 1) // event call vetem 1 here 

//     })
  
//     message.channel.send('**Everyone can send only one comment!!**').then(m => {
//         setTimeout(() => {
            
//         let embed = new Discord.RichEmbed()

//         .setDescription(`**Event over**`)
//         .setColor('RANDOM')
//         m.channel.send(embed)
//         db.set(`Event@call@onse_${message.guild.id}_${message.channel.send}`, 0)  
//         db.set(`event@channel@id_${message.channel.id}_${message.channel.id}`, 0)
      
//     }, eventovertime)
//     })
      
  
//     }
   
    
// return;
//  }
// 	 if(message.content === '2h'){
    
//     let ischannelhere =  db.fetch(`channel@event@call${message.guild.id}_${message.channel.id}`)

//     if(message.channel.id !== ischannelhere) {
//         return; 
//     }

//     let callonse = db.get(`Event@call@onse_${message.guild.id}_${message.channel.send}`)
//     if(callonse === 1){
//         return;
//     }
//     let timeoutcall = 10000
    
//     let Datathencall = db.fetch(`Event@Date@now@time@set_${message.guild.id}_${message.channel}`)
  
//     if(Datathencall !== null && timeoutcall - (Date.now() - Datathencall) > 0){
//         message.delete(2000);

//     let eventovertime = 3600000*2
   
//     db.set(`Event@Date@now@time@start_${message.guild.id}_${message.channel}`, Date.now()) // koha tani
//     let Datathenevent = db.get(`Event@Date@now@time@start_${message.guild.id}_${message.channel}`) // koha tani

//     var time = ms(eventovertime - (Date.now() - Datathenevent));
    
//     let embed1 = new Discord.RichEmbed()
//     .setDescription(`Event timeout **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
//     .setColor('RANDOM')
//     message.channel.send(embed1).then(() => {
//         db.set(`event@channel@id_${message.channel.id}_${message.channel.id}`, message.channel.id) // qe mos te ngatroj serverin
        
//         db.add(`channel@member@event_${message.guild.id}_${message.channel.id}`, 1) // per qe te qoj vetem 1 mesazh everyone
//         db.set(`Event@call@onse_${message.guild.id}_${message.channel.send}`, 1) // event call vetem 1 here 

//     })
  
//     message.channel.send('**Everyone can send only one comment!!**').then(m => {
//         setTimeout(() => {
            
//         let embed = new Discord.RichEmbed()

//         .setDescription(`**Event over**`)
//         .setColor('RANDOM')
//         m.channel.send(embed)
//         db.set(`Event@call@onse_${message.guild.id}_${message.channel.send}`, 0)  
//         db.set(`event@channel@id_${message.channel.id}_${message.channel.id}`, 0)
      
//     }, eventovertime)
//     })
      
  
//     }
   
    
// return;
//  }
// 	 if(message.content === '3h'){
    
//     let ischannelhere =  db.fetch(`channel@event@call${message.guild.id}_${message.channel.id}`)

//     if(message.channel.id !== ischannelhere) {
//         return; 
//     }

//     let callonse = db.get(`Event@call@onse_${message.guild.id}_${message.channel.send}`)
//     if(callonse === 1){
//         return;
//     }
//     let timeoutcall = 10000
    
//     let Datathencall = db.fetch(`Event@Date@now@time@set_${message.guild.id}_${message.channel}`)
  
//     if(Datathencall !== null && timeoutcall - (Date.now() - Datathencall) > 0){
//         message.delete(2000);

//     let eventovertime = 3600000*3
   
//     db.set(`Event@Date@now@time@start_${message.guild.id}_${message.channel}`, Date.now()) // koha tani
//     let Datathenevent = db.get(`Event@Date@now@time@start_${message.guild.id}_${message.channel}`) // koha tani

//     var time = ms(eventovertime - (Date.now() - Datathenevent));
    
//     let embed1 = new Discord.RichEmbed()
//     .setDescription(`Event timeout **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
//     .setColor('RANDOM')
//     message.channel.send(embed1).then(() => {
//         db.set(`event@channel@id_${message.channel.id}_${message.channel.id}`, message.channel.id) // qe mos te ngatroj serverin
        
//         db.add(`channel@member@event_${message.guild.id}_${message.channel.id}`, 1) // per qe te qoj vetem 1 mesazh everyone
//         db.set(`Event@call@onse_${message.guild.id}_${message.channel.send}`, 1) // event call vetem 1 here 

//     })
  
//     message.channel.send('**Everyone can send only one comment!!**').then(m => {
//         setTimeout(() => {
            
//         let embed = new Discord.RichEmbed()

//         .setDescription(`**Event over**`)
//         .setColor('RANDOM')
//         m.channel.send(embed)
//         db.set(`Event@call@onse_${message.guild.id}_${message.channel.send}`, 0)  
//         db.set(`event@channel@id_${message.channel.id}_${message.channel.id}`, 0)
      
//     }, eventovertime)
//     })
      
  
//     }
   
    
// return;
//  }
// 	 if(message.content === '10h'){
    
//     let ischannelhere =  db.fetch(`channel@event@call${message.guild.id}_${message.channel.id}`)

//     if(message.channel.id !== ischannelhere) {
//         return; 
//     }

//     let callonse = db.get(`Event@call@onse_${message.guild.id}_${message.channel.send}`)
//     if(callonse === 1){
//         return;
//     }
//     let timeoutcall = 10000
    
//     let Datathencall = db.fetch(`Event@Date@now@time@set_${message.guild.id}_${message.channel}`)
  
//     if(Datathencall !== null && timeoutcall - (Date.now() - Datathencall) > 0){
//         message.delete(2000);

//     let eventovertime = 3600000*10
   
//     db.set(`Event@Date@now@time@start_${message.guild.id}_${message.channel}`, Date.now()) // koha tani
//     let Datathenevent = db.get(`Event@Date@now@time@start_${message.guild.id}_${message.channel}`) // koha tani

//     var time = ms(eventovertime - (Date.now() - Datathenevent));
    
//     let embed1 = new Discord.RichEmbed()
//     .setDescription(`Event timeout **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
//     .setColor('RANDOM')
//     message.channel.send(embed1).then(() => {
//         db.set(`event@channel@id_${message.channel.id}_${message.channel.id}`, message.channel.id) // qe mos te ngatroj serverin
        
//         db.add(`channel@member@event_${message.guild.id}_${message.channel.id}`, 1) // per qe te qoj vetem 1 mesazh everyone
//         db.set(`Event@call@onse_${message.guild.id}_${message.channel.send}`, 1) // event call vetem 1 here 

//     })
  
//     message.channel.send('**Everyone can send only one comment!!**').then(m => {
//         setTimeout(() => {
            
//         let embed = new Discord.RichEmbed()

//         .setDescription(`**Event over**`)
//         .setColor('RANDOM')
//         m.channel.send(embed)
//         db.set(`Event@call@onse_${message.guild.id}_${message.channel.send}`, 0)  
//         db.set(`event@channel@id_${message.channel.id}_${message.channel.id}`, 0)
      
//     }, eventovertime)
//     })
      
  
//     }
   
    
// return;
//  }
// 	 if(message.content === '24h'){
    
//     let ischannelhere =  db.fetch(`channel@event@call${message.guild.id}_${message.channel.id}`)

//     if(message.channel.id !== ischannelhere) {
//         return; 
//     }

//     let callonse = db.get(`Event@call@onse_${message.guild.id}_${message.channel.send}`)
//     if(callonse === 1){
//         return;
//     }
//     let timeoutcall = 10000
    
//     let Datathencall = db.fetch(`Event@Date@now@time@set_${message.guild.id}_${message.channel}`)
  
//     if(Datathencall !== null && timeoutcall - (Date.now() - Datathencall) > 0){
//         message.delete(2000);

//     let eventovertime = 3600000*24
   
//     db.set(`Event@Date@now@time@start_${message.guild.id}_${message.channel}`, Date.now()) // koha tani
//     let Datathenevent = db.get(`Event@Date@now@time@start_${message.guild.id}_${message.channel}`) // koha tani

//     var time = ms(eventovertime - (Date.now() - Datathenevent));
    
//     let embed1 = new Discord.RichEmbed()
//     .setDescription(`Event timeout **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
//     .setColor('RANDOM')
//     message.channel.send(embed1).then(() => {
//         db.set(`event@channel@id_${message.channel.id}_${message.channel.id}`, message.channel.id) // qe mos te ngatroj serverin
        
//         db.add(`channel@member@event_${message.guild.id}_${message.channel.id}`, 1) // per qe te qoj vetem 1 mesazh everyone
//         db.set(`Event@call@onse_${message.guild.id}_${message.channel.send}`, 1) // event call vetem 1 here 

//     })
  
//     message.channel.send('**Everyone can send only one comment!!**').then(m => {
//         setTimeout(() => {
            
//         let embed = new Discord.RichEmbed()

//         .setDescription(`**Event over**`)
//         .setColor('RANDOM')
//         m.channel.send(embed)
//         db.set(`Event@call@onse_${message.guild.id}_${message.channel.send}`, 0)  
//         db.set(`event@channel@id_${message.channel.id}_${message.channel.id}`, 0)
      
//     }, eventovertime)
//     })
      
  
//     }
   
    
// return;
//  }
// 	 if(message.content === '5h'){
    
//     let ischannelhere =  db.fetch(`channel@event@call${message.guild.id}_${message.channel.id}`)

//     if(message.channel.id !== ischannelhere) {
//         return; 
//     }

//     let callonse = db.get(`Event@call@onse_${message.guild.id}_${message.channel.send}`)
//     if(callonse === 1){
//         return;
//     }
//     let timeoutcall = 10000
    
//     let Datathencall = db.fetch(`Event@Date@now@time@set_${message.guild.id}_${message.channel}`)
  
//     if(Datathencall !== null && timeoutcall - (Date.now() - Datathencall) > 0){
//         message.delete(2000);

//     let eventovertime = 3600000*5
   
//     db.set(`Event@Date@now@time@start_${message.guild.id}_${message.channel}`, Date.now()) // koha tani
//     let Datathenevent = db.get(`Event@Date@now@time@start_${message.guild.id}_${message.channel}`) // koha tani

//     var time = ms(eventovertime - (Date.now() - Datathenevent));
    
//     let embed1 = new Discord.RichEmbed()
//     .setDescription(`Event timeout **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
//     .setColor('RANDOM')
//     message.channel.send(embed1).then(() => {
//         db.set(`event@channel@id_${message.channel.id}_${message.channel.id}`, message.channel.id) // qe mos te ngatroj serverin
        
//         db.add(`channel@member@event_${message.guild.id}_${message.channel.id}`, 1) // per qe te qoj vetem 1 mesazh everyone
//         db.set(`Event@call@onse_${message.guild.id}_${message.channel.send}`, 1) // event call vetem 1 here 

//     })
  
//     message.channel.send('**Everyone can send only one comment!!**').then(m => {
//         setTimeout(() => {
            
//         let embed = new Discord.RichEmbed()

//         .setDescription(`**Event over**`)
//         .setColor('RANDOM')
//         m.channel.send(embed)
//         db.set(`Event@call@onse_${message.guild.id}_${message.channel.send}`, 0)  
//         db.set(`event@channel@id_${message.channel.id}_${message.channel.id}`, 0)
      
//     }, eventovertime)
//     })
      
  
//     }
   
    
// return;
//  }
//  if(message){

//     let eventchannelid =  db.fetch(`event@channel@id_${message.channel.id}_${message.channel.id}`) 
    
//     if(eventchannelid === null) eventchannelid = 0
    
//     if(message.channel.id !== eventchannelid){
//         return;
//     }
   
//     let memberevent = db.fetch(`member@message@event_${message.guild.id}_${message.author.id}`)
//     let channelevent = db.fetch(`channel@member@event_${message.guild.id}_${message.channel.id}`)
    
//     if(memberevent === null) memberevent = 0
    
//     if(memberevent === channelevent){
//         message.delete().catch(O_o=>{});
       
//     }
//     if(memberevent < channelevent){
//      let msgeventmember = channelevent - memberevent

//      db.add(`member@message@event_${message.guild.id}_${message.author.id}`, msgeventmember)
//         return;
//     }
 
//  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////
if(msg.author.bot) return;
console.log(
`________________________________________________________________
//A: ${args[0]}  B: ${args[1]} C: ${args[2]}
//CMD: ${msg.content} 
//Args: ${args} 
//Command: ${command} `
);

console.log(db.all())

	

//////////////////////////////////////////////////////////////////////////////////////////////////////////  
})
////////////////////////////////////////////////////////////////////////////////////////////////////////// 
bot.login(process.env.BOT_TOKEN);
