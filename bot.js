
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const os = require('os')
const speed = require(`performance-now`);
const RA = require('ra-api')
const chalk = require('chalk')
const spin = require('spinnies')
const { promisify } = require('util')
const _gis = require('g-i-s')
const gis = promisify(_gis)
const cfonts = require('cfonts')
const delay = require('delay')
const fs = require('fs')
const ms = require ('ms')
let tik = [];
let music = [];
const pino = require('pino')
const nekos = require('nekos.life')
const neko = new nekos
const util = require('util')
const transllate = require('@vitalets/google-translate-api')
const afk = JSON.parse(fs.readFileSync('./json/afk.json'))
const simi = JSON.parse(fs.readFileSync('./json/simi.json'))
const ban = JSON.parse(fs.readFileSync('./json/ban.json'))
const updateLogger = require('telegraf-update-logger')
const { sendVideo,cekStatus, banner,success, Sukses, GetFotoProfile, pushname, gmt, weton, week, date, waktu, toJson,isUrl, range, argsGet } = require('./lib/functions')
const { sendProses, format, sendText, sendsearch, sendDonation, sendHelp, sendStart, sendTest, getPosition } = require('./lib/log')
const fig = JSON.parse(fs.readFileSync('./json/config.json'))
global.config = fig[0]
global.l = pino(config.pino)
const parseResult = async(json, options = {}) => {
    let {arrow,head,upper,down,line } = config.unicode
    let opts = {
      unicode: true,
      ignoreVal: [null,
        undefined],
      ignoreKey: [],
      title: 'IkyyBott',
      headers: `${head}${line.repeat(4)}${arrow} » %title «`,
      body: `➜ %key : %value`,
      footer: head+line+line+line+arrow+'\n',...options,
    };
    let {unicode,ignoreKey,title,headers,ignoreVal,body,footer} = opts;
    let obj = Object.entries(json);
    let tmp = [];
    for (let [_key, val] of obj) {
      if (ignoreVal.indexOf(val) !== -1) continue;
      let key = _key[0].toUpperCase() + _key.slice(1);
      let type = typeof val;
      if (ignoreKey && ignoreKey.includes(_key)) continue;
      switch (type) {
        case 'boolean':
          tmp.push([key, val ? 'Ya': 'Tidak']);
          break;
        case 'object':
          if (Array.isArray(val)) {
            tmp.push([key, val.join(', ')]);
          } else {tmp.push([key,parseResult(val, {ignoreKey, unicode: false}), ]);}
          break;
        default:
          tmp.push([key, val]);
          break;
 }}
    if (unicode) {
      let text = [headers.replace(/%title/g, title),tmp.map((v) => {return body.replace(/%key/g, v[0]).replace(/%value/g, v[1]);}).join('\n'),footer,];
      return text.join('\n').trim();
    }
    return tmp;
  }
const {
y2mateA,
y2mateV
} = require('./scraper/y2mate.js')
const yts = require('yt-search')

if (config.Bot_Token == "TOKEN BOT" || config.Bot_Token == "") return console.log(new Error('ENGLISH\n\nBot token is required, get token in telegram @BotFather and create bot\n if you dont understand, please contact via WhatsApp 6282387804410\n\nINDONESIA\n\n Bot Token Diperlukan token bot, dapatkan token di telegram @BotFather dan buat bot\n jika Anda tidak mengerti, silakan hubungi melalui WhatsApp 6282387804410'))
console.log(chalk.blue('Connected to token : ')+' '+config.BotToken)
/*console.log(chalk.cyanBright("################### TOKEN BOT KOSONG ###################\n"))
}
return
}*/

global.bot = new Telegraf(config.BotToken)
/*bot.catch((err) => {
  l.error('Ooops', err)
})*/
const cekBan = async(ctx) => {
aw = getPosition(ban, await ctx.message.from.id)
return aw
}

const univ = config.unicode.head
const error = `https://telegra.ph/file/4ab397f49255b2a79f687.jpg`
const uptime = process.uptime();
const timestamp = speed();
const latensi = speed() - timestamp
const tutid = moment().millisecond()
//welcome and leave
bot.on("new_chat_members", async(iky) => {
 var message = iky.message
 var groupname = message.chat.title
 var groupmembers = await bot.telegram.getChatMembersCount(message.chat.id)
 for (x of message.new_chat_members) {
var pp_user = await GetFotoProfile(bot,x.id)
var full_name = pushname(x).full_name

console.log(chalk.whiteBright("*"), chalk.cyanBright("[JOINED]"), chalk.whiteBright(full_name), chalk.greenBright("join in"), chalk.whiteBright(groupname))
await iky.replyWithPhoto({ url: pp_user},{caption: `Selamat datang @${pushname(x).username}
di group ${groupname}

${config.unicode.arrow} Info User
${univ} ID : ${x.id}
${univ} Nama: ${full_name}
${univ} Bot : ${x.is_bot}`, parse_mode: "Markdown" })
 }
})

bot.on("left_chat_member", async(iky) => {
 var message = iky.message
 var groupname = message.chat.title
 var groupmembers = await bot.telegram.getChatMembersCount(message.chat.id)
 var pp_user = await GetFotoProfile(bot,message.left_chat_member.id)
 var full_name = pushname(message.left_chat_member).full_name
 console.log(chalk.whiteBright("*"), chalk.cyanBright("[LEAVE]"), chalk.whiteBright(full_name), chalk.greenBright("leave from"), chalk.whiteBright(groupname))
 await iky.replyWithPhoto({ url: `${pp_user}` }, {caption: `GoodBye @${pushname(message.left_chat_member).username}
 
${config.unicode.arrow} Info User
${univ} ID : ${message.left_chat_member.id}
${univ} Nama: ${full_name}
${univ} Bot : ${message.left_chat_member.is_bot}`, parse_mode: "Markdown" })
 
 })
 const monoscape = (text) => {
 	return '`'+text+'`'
 }
 
 //Logs
bot.use(
updateLogger({
colors: {
id: chalk.red,
chat: chalk.yellow,
user: chalk.green,
type: chalk.bold,
},
}),
);
console.log(banner.string)
Sukses('2', 'Connecting...')
setTimeout( () => {
success('2', 'Connected')
console.log(chalk.whiteBright('[ BOT STARTED ]'))
}, 3000)


/*+*+*+*+*+*+*+*+* ACTION *+*+*+*+*+*+*+*+*+*+*/
const cekWaktuBan = (_dir) => {
setInterval(() => {
let position = null
Object.keys(_dir).forEach((i) => {
if (Date.now() >= _dir[i].time) {
position = i
}
})
if (position !== null) {
 bot.telegram.sendMessage(_dir[position].id, '*Mute* Kamu sudah dibuka\n*Mohon jangan spam lagi!*\n\nMending ngobrol² di group [`RzkyyyBot`](https://t.me/+cV7x1HKVr6UxNTA1)',{parse_mode: "Markdown"})
_dir.splice(getPosition(ban, _dir[position].id), 1)}
}, 1000)
}
bot.action('info', ctx =>{
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
bot.telegram.sendMessage(ctx.chat.id,` Info Bot ${bot.botInfo.username}

- Nama Bot : ${bot.botInfo.username}
- First Nama : ${bot.botInfo.first_name}
- Apakah Bot boleh di add ke group? ${bot.botInfo.can_join_groups ? 'Diperbolehkan' : 'Tidak diperbolehkan'}
- Apakah bot read chat group? ${bot.botInfo.can_read_all_group_messages ? 'Iya' : 'Tidak'}`, {
reply_markup: {
keyboard: [
[
{text: "Creator",callback_data: 'credit'},
{text: "Source",callback_data: 'script'}
],
[
{text: "Hilangkan keyboard"}
]
],
resize_keyboard: true
}
})
})
bot.hears('Creator', ctx => {
if(cekStatus(ctx.message.from.id, ban)) return
bot.telegram.sendMessage(ctx.chat.id, 'Bot ini dibuat oleh @Rizky9788 / Rizky Fadilah',{
reply_markup: {
inline_keyboard:[
[
{ text: 'Back!', callback_data: 'start'}
]
]
},
parse_mode: "Markdown"
 })
});
bot.hears('Source', ctx => {	
if(cekStatus(ctx.message.from.id, ban)) return
bot.telegram.sendMessage(ctx.chat.id,'Source: https://github.com/Rizky878/bot-tele',{
reply_markup: {
inline_keyboard:[
[
{ text: 'Back!', callback_data: 'start'}
]
]
},
parse_mode: "Markdown"
 })
});
bot.hears('Hilangkan keyboard', ctx => {
if(cekStatus(ctx.message.from.id, ban)) return
bot.telegram.sendMessage(ctx.chat.id, "Keyboard dihilangkan", 
{
reply_markup: {
remove_keyboard: true
}
})
})
bot.action('afk',(ctx) => {
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
if(!ctx.chat.type.includes("group")) {
bot.telegram.sendMessage(ctx.chat.id, 'Perintah ini hanya dapat digunakan dalam group',{
reply_markup: {
inline_keyboard:[
[
{ text: 'Back!', callback_data: 'start'}
]
]
},
parse_mode: "Markdown"
})
return
}
afk.push('@'+pushname(ctx.from).username)
fs.writeFileSync('./json/afk.json', JSON.stringify(afk))
console.log('@'+pushname(ctx.from).username)
ini_txt = "Anda telah afk. \nJika ada yang tag kamu bot akan memberitahukan bahwa kamu off\nJika ingin kembali dari afk ketik hai di sini"
ctx.reply(ini_txt)
})
bot.action('ping', (ctx) => {
ctx.deleteMessage()
const tmenu = `
Host : ${os.hostname()}
Platfrom : ${os.platform()}
Penggunaan RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require(`os`).totalmem / 1024 / 1024)}MB
 
Ping : ${tutid}MS
Speed : ${latensi.toFixed(4)} Second

 ` 
bot.telegram.sendMessage(ctx.chat.id, tmenu ,
{
reply_markup: {
inline_keyboard:[
[
{ text: 'Back!', callback_data: 'start'}
]
]
},
parse_mode: "Markdown"
 })
})
bot.action('pinterest', ctx => {
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
 bot.telegram.sendMessage(ctx.chat.id, 'Silahkan ketik /pinterest nama foto \ncontoh: /pinterest ayam',
 {
reply_markup: {
inline_keyboard: [
[
{ text: 'Back', callback_data: 'start'}
]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
})
})
bot.action('ytmp3', ctx => {
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
 bot.telegram.sendMessage(ctx.chat.id, 'Silahkan ketik /ytmp3 link YouTube \ncontoh: /ytmp3 https://youtu.be/ST5v7-C3iDk ',
{
reply_markup: {
inline_keyboard: [
[
{ text: 'Back', callback_data: 'start'}
]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
})
})
bot.action('ytmp4', ctx => {
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
bot.telegram.sendMessage(ctx.chat.id, 'Silahkan ketik /ytmp4 link YouTube \ncontoh: /ytmp4 https://youtu.be/ST5v7-C3iDk',
{
reply_markup: {
inline_keyboard: [
[
{ text: 'Back', callback_data: 'start'}
]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
})
})
bot.action('ytsearch', ctx => {
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
bot.telegram.sendMessage(ctx.chat.id, 'Silahkan ketik /ytsearch judul \ncontoh: /ytsearch ayam ',
{
reply_markup: {
inline_keyboard: [
[
{ text: 'Back', callback_data: 'start'}
]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
})
})
bot.action('downloadermenu', ctx => {
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
 sendText(bot,ctx,`${univ} Downloader Menu\n\n`+downloadermenu)
})
bot.action('nsfwmenu', ctx => {
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
 sendText(bot,ctx,`${univ} Nsfw Menu\n\n`+nsfwmenu)
})
bot.action('funmenu', ctx => {
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
 sendText(bot,ctx,`${univ} Fun Menu\n\n`+funmenu)
})
bot.action('searchmenu', ctx => {
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
 sendText(bot,ctx,`${univ} Search Menu\n\n`+searchmenu)
})
bot.action('randomenu', ctx => {
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
 sendText(bot,ctx,`${univ} Random Menu\n\n${randommenu}`)
})
bot.action('groupmenu', ctx => {
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
sendText(bot,ctx,`${univ} Group Menu\n\n`+groupmenu)
})
bot.action('adminmenu', ctx => {
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
sendText(bot,ctx,`${univ} Admin Menu\n\n`+adminmenu)
})
bot.action('loli', async(ctx) => {
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
ctx.reply('mencari')
paq = await toJson(`https://api.rzkyfdlh.tech/loli`)
ctx.replyWithPhoto({
url: paq.url,
filename: 'kitten.jpg'
},{caption: 'Pedo yh bg 🤨📸'})
})
bot.action('rizky', ctx => {

if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
bot.telegram.sendMessage(ctx.chat.id, config.ownerusername+' itu ownerku',
{
reply_markup: {
inline_keyboard: [
[
{ text: 'Back', callback_data: 'start'}
]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
})
 
})
bot.action('yt3', async(iky) =>{
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
iky.deleteMessage()
try {
url = music.find(g => g.id == iky.chat.id)
//return console.log(iky.chat.id)
y2mateA(url.url).then((tes) => {
console.log(tes)
iky.replyWithChatAction("upload_photo")
iky.replyWithPhoto({
url: tes[0].thumb,
filename: tes[0].judul+'.jpg'
},{caption: `「 YOUTUBE MP3 」\n\n• Judul : ${tes[0].judul}\n• Size : ${tes[0].size}\n\nMohon Tunggu sebentar lagu sedang dikirim`})
music.splice(getPosition(music, iky.chat.id),1)
iky.replyWithAudio({
url: tes[0].link,
filename: tes[0].output
}).catch(e => { iky.reply('Link Invalid')
console.log(e)
})
iky.replyWithChatAction("upload_audio")
})
} catch (e) {
console.log(e)
}
})
bot.action('donasi', (ctx) =>{
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
sendDonation(bot,ctx)
})
bot.action('yt4', (iky) =>{
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
iky.deleteMessage()
try {
url = music.find(g => g.id == iky.chat.id)
y2mateV(url.url).then((tes) => {
console.log(tes)
iky.replyWithPhoto({
url: tes[0].thumb,
filename: tes[0].judul+'.jpg'
},{caption: `「 YOUTUBE MP4 」\n\n• Judul : ${tes[0].judul}\n• Size : ${tes[0].size}\n\nMohon Tunggu sebentar video sedang dikirim`})
music.splice(getPosition(iky.chat.id, music),1)
iky.replyWithVideo({
url: tes[0].link,
filename: tes[0].output
}).catch(e => { iky.reply('Link Invalid')
console.log(e)
})
iky.replyWithChatAction("upload_video")
})
} catch (e) {
console.log(e)
}
})
bot.action('start', async(ctx) =>{

if(cekStatus(ctx.update.callback_query.from.id, ban)) return
sendStart(bot,ctx)
})
bot.action('quotes', async(ctx) =>{

if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
sendsearch(bot,ctx)
buff = await toJson('https://api.rzkyfdlh.tech/randomtext/quotes')
bot.telegram.sendMessage(ctx.chat.id, buff.result.quotes+'\n\nBy: '+buff.result.author,{reply_markup: {inline_keyboard: [[{text: 'Get Again', callback_data: 'quotes'}]]},parse_mode: "Markdown",disable_web_page_preview: "true" })
})
bot.action(['help','menu'], (ctx) =>{
if(cekStatus(ctx.update.callback_query.from.id, ban)) return
sendHelp(bot,ctx)
})
bot.action('simioff', (ctx) =>{

if(cekStatus(ctx.update.callback_query.from.id, ban)) return
ctx.deleteMessage()
sendText(bot,ctx ,'/simioff <mematikan fitur simsimi>\n/simion <menghidupkan mode simsimi>')
})
bot.start(async(ctx) => {

if(cekStatus(ctx.message.from.id, ban)) return
sendStart(bot,ctx)
})
bot.help((ctx) => {

if(cekStatus(ctx.message.from.id, ban)) return
sendHelp(bot,ctx)
})
bot.action('star', async(iky) => {

if(cekStatus(iky.update.callback_query.from.id, ban)) return
iky.deleteMessage()
if (iky.chat.type.includes("group")) return bot.telegram.sendMessage(iky.chat.id,`Perintah Ini hanya Bisa Digunakan Chat Pribadi!`)
bot.telegram.sendMessage(iky.chat.id, 'Jika Ingin memakai Anonymous chat\nSilahkan ketik \n/star untuk memulai\n/next untuk mencari partner baru\n/leave untuk berhenti')
})
/*_*_*_*_*_*_*_* END ACTION *_*_*_*_*_*_*_*/


this.anonymous = this.anonymous ? this.anonymous : {}
this.spam = this.spam ? this.spam : {}
/*-*-*-*-*-*-*- CASE -*-*-*-*-*-*-*/
bot.on('message', async(iky) => {
try {
awalan = '/'
if(iky.message.from.is_bot) return
const q = iky.message.text || iky.message.caption || ''
const command = q.slice(1).trim().replace("@"+bot.botInfo.username,'').split(" ").shift().toLowerCase()
const args = await argsGet(iky)
const name = pushname(iky.message.from) 
const OwnerId = [`${config.ownerusername}`]
const qe = args.join(' ')
const from = iky.chat.id
const sender = name.username
const sender2 = iky.message.from.id
const isOwner = OwnerId.includes(name.username)
if(cekStatus(iky.message.from.id, ban)) return console.log('ban')
const reply = async(text) => {
bot.telegram.sendMessage(iky.chat.id, text,
{
reply_to_message_id: iky.message.message_id,
reply_markup: {
inline_keyboard: [
[
{ text: 'Back', callback_data: 'start'}]]},
parse_mode: "Markdown",
disable_web_page_preview: "true" })}

const replyMenu = async(text) => {
bot.telegram.sendMessage(iky.chat.id, text,
{
reply_markup: {
inline_keyboard: [
 [
{ text: 'Menu', callback_data: 'start'}
]]},
parse_mode: "Markdown",
disable_web_page_preview: "true" })}

const simirep = async(text) => {
bot.telegram.sendMessage(iky.chat.id, text,
{
reply_markup: {
inline_keyboard: [
 [
{ text: 'Simsimi off', callback_data: 'simioff'}
]]},
parse_mode: "Markdown",
disable_web_page_preview: "true" })}

const costum = async(id,text,inline) => {
bot.telegram.sendMessage(id, text,
{
reply_markup: {
inline_keyboard: [    //EXAMPLE -- custom(from,`Hai` , [{text: 'button 1' , callback_data: 'script'}])
 inline 
]},
parse_mode: "Markdown",
disable_web_page_preview: "true" })}

const reply2 = (text) => {
 bot.telegram.sendMessage(from,text,{parse_mode: 'Markdown',reply_to_message_id: iky.message.message_id})
}
let admin = [];


const getLink = async(file_id) => { try { return (await bot.telegram.getFileLink(file_id)).href } catch { throw "Error while get url" } }
const isImage = iky.message.hasOwnProperty("photo")
const isText = iky.message.hasOwnProperty("text")
const isVideo = iky.message.hasOwnProperty("video")
const isAudio = iky.message.hasOwnProperty("audio")
const isSticker = iky.message.hasOwnProperty("sticker")
const isContact = iky.message.hasOwnProperty("contact")
const isLocation = iky.message.hasOwnProperty("location")
const isDocument = iky.message.hasOwnProperty("document")
const isAnimation = iky.message.hasOwnProperty("animation")
const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation
const Quoted = iky.message.reply_to_message || {}
const isQuotedImage = Quoted.hasOwnProperty("photo")
const isQuotedVideo = Quoted.hasOwnProperty("video")
const isQuotedAudio = Quoted.hasOwnProperty("audio")
const isQuotedSticker = Quoted.hasOwnProperty("sticker")
const isQuotedContact = Quoted.hasOwnProperty("contact")
const isQuotedLocation = Quoted.hasOwnProperty("location")
const isQuotedDocument = Quoted.hasOwnProperty("document")
const isQuotedAnimation = Quoted.hasOwnProperty("animation")
const isQuoted = iky.message.hasOwnProperty("reply_to_message")
var file_id = ""
cekWaktuBan(ban)
if (isQuoted) {
file_id = isQuotedImage ? iky.message.reply_to_message.photo[iky.message.reply_to_message.photo.length - 1].file_id :
isQuotedVideo ? iky.message.reply_to_message.video.file_id :
isQuotedAudio ? iky.message.reply_to_message.audio.file_id :
isQuotedSticker ? iky.message.reply_to_message.sticker.file_id :
isQuotedDocument ? iky.message.reply_to_message.document.file_id :
isQuotedAnimation ? iky.message.reply_to_message.animation.file_id : ""
} else {
file_id = isImage ? iky.message.photo[iky.message.photo.length - 1].file_id :
isVideo ? iky.message.video.file_id :
isAudio ? iky.message.audio.file_id :
isDocument ? iky.message.document.file_id :
isSticker ? iky.message.sticker.file_id :
isAnimation ? iky.message.animation.file_id : ""
}
var mediaLink = file_id != "" ? await getLink(file_id) : ""
const isCmd = q.startsWith(awalan)
const isGroup = iky.chat.type.includes("group")
const isPrivate = iky.chat.type.includes("private")
const groupName = isGroup ? iky.chat.title : ""
const cekadmin = isGroup ? await bot.telegram.getChatAdministrators(from) : ''
for(let i of cekadmin) {
admin.push(i.user.id)
}
const isAdmin = isGroup ? admin.includes(sender2) : false
//anonymous
if (!isGroup && !isCmd) {
    let rm = Object.values(this.anonymous).find(room => [room.c, room.b].includes(sender2) && room.state === 'CHATTING')
    if (rm) {
        let other = [rm.c, rm.b].find(user => user !== sender2)
isImage ? bot.telegram.sendPhoto(other,{url: mediaLink},{caption: q ? q : ''}) : 
isSticker ? bot.telegram.sendSticker(other,{url: mediaLink},) :
isDocument ? bot.telegram.sendDocument(other,{url: mediaLink,filename: iky.message.document.file_name}) :
isAnimation ? bot.telegram.sendAnimation(other,{url: mediaLink},) :
isVideo ? bot.telegram.sendVideo(other, {url: mediaLink, filename: iky.message.video.file_name},) :
isAudio ? bot.telegram.sendAudio(other,{url: mediaLink,filename: iky.message.audio.file_name},) :
isLocation ? bot.telegram.sendLocation(other,iky.message.location.latitude,iky.message.location.longitude) :
isText ? bot.telegram.sendMessage(other, q,{parse_mode: "Markdown"}) : ''
}}
if (sender in this.spam) {
this.spam[sender].count++
if (iky.message.date - this.spam[sender].totalspam > 5) {
if (this.spam[sender].count > 5) {
if(isGroup) {
reply2('*Terdeteksi '+sender+' Spam kamu akan dimute selama 10 menit*')
bot.telegram.banChatMember(from,sender2,{until_date: Date.now() + ms("10m")})
this.spam[sender].count = 0
this.spam[sender].totalspam = iky.message.date
return
}
reply2('*Terdeteksi '+sender+' Spam kamu akan dimute selama 10 menit*')
ban.push({id: sender2,time: Date.now()+ms('10m')})
fs.writeFileSync('./json/ban.json',JSON.stringify(ban))
}
this.spam[sender].count = 0
this.spam[sender].totalspam = iky.message.date
}
} else this.spam[sender] = {jid: sender,count: 0,totalspam: 0
}
if (afk.includes(q)) {
ini_txt = "Maaf user yang anda tag sedang afk. "
reply(ini_txt)
return
}
if (afk.includes('@'+name.username)) {
reply("Anda telah keluar dari mode afk.")
afs = afk.indexOf('@'+name.username)
afk.splice(afs,1)
fs.writeFileSync("./json/afk.json", JSON.stringify(afk))
return
}
switch (command) {
case 'delete': case 'del': case 'd':
if(!isQuoted) return reply2(monoscape(`Reply pesan bot`))
if(!iky.message.reply_to_message.from.username == bot.botInfo.username) return reply2(monoscape(`Hanya dapat menghapus pesan dari bot ${bot.botInfo.username}`))
try {
iky.deleteMessage(iky.message.reply_to_message.message_id)
reply2('`Sukses menghapus pesan`')
} catch {
reply2('gagal')
}
break
case 'gimage': 
if(!qe) return reply2('Nyari apa kak?\nContoh: /gimage kuda')
let results = await gis(args.join(" ")) || []
let { url, width, height } = results[Math.floor(Math.random() * results.length)] || {}
if (!url) return reply2('Gambar tidak ditemukan')
iky.replyWithPhoto({
url: url,
filename: Date.now() + '.jpg' },{caption: 'sukses'})
break
case 'pin':
if(!isGroup && !isAdmin ) return reply2('`Khusus Admin and group`')
if(!isQuoted) return reply(`reply pesan yang ingin dipin`)
bot.telegram.pinChatMessage(from,iky.message.reply_to_message.message_id)
reply2(monoscape(`Sukses Pin pesan`))
break
case '>':
if(!isOwner) return 
iky.reply('Excuting '+qe)
await delay(3000)
try {
iky.reply(util.format(await eval(`;(async () => { ${args.join(' ')} })()`)))
} catch(e) {
iky.reply(`Error: ${e}`)
}
break
case 'cekadmin': case 'admin':
ad = await bot.telegram.getChatAdministrators(from)
an = '*INFO ADMIN GROUP '+groupName+'*\n\n'
for ( let i of ad){
an += `Username: @${i.user.username}\n`
an += `Status: ${i.status}\n`
if(i.status == 'administrator') {
an += `Edit Group? *${i.can_be_edited ? 'Boleh' : 'Dilarang'}*
`
an += `Edit Chat? *${i.can_manage_chat ? 'Boleh' : 'Dilarang'}*
`
an += `Ganti Info Group? *${i.can_change_info ? 'Boleh' : 'Dilarang'}*
`
an += `Hapus Pesan member? *${i.can_delete_messages ? 'Boleh' : 'Dilarang'}*
`
an += `Undang Orang? *${i.can_invite_users ? 'Boleh' : 'Dilarang'}*
`
an += `Blockir Member? *${i.can_restrict_members ? 'Boleh' : 'Dilarang'}*
`
an += `Pin Pesan? *${i.can_pin_messages ? 'Boleh' : 'Dilarang'}*
`
an += `Promote Member? *${i.can_promote_members ? 'Boleh' : 'Dilarang'}*
`
an += `Kelola obrolan video? *${i.can_manage_voice_chats ? 'Boleh' : 'Dilarang'}*
\n\n`
} else {
an += `*Pemilik Group Bebas melakukan apa pun*\n`
}
}
reply2(an)
break
case 'whatmusic':
try {
if(!isQuotedAudio) return iky.reply(`kirim audio lalu reply audio tersebut dengan pesan /whatmusic`)
a= await toJson(`https://api.rzkyfdlh.tech/downloader/whatmusic?link=${mediaLink}`)
anu = a.result
anu.artists = anu.artists[0].name
anu.deezer_track = anu.deezer_track.id
ba = await parseResult(anu,{title: `What Music`})
music.push({id: from, url: anu.youtube_link})
bot.telegram.sendMessage(from, `${ba}`,
{
reply_markup: {
inline_keyboard: [
[
{text: 'Download Audio' ,callback_data: 'yt3'}],
[
{text: 'Download Video' ,callback_data: 'yt4'}] 
]},
disable_web_page_preview: "true" })
} catch (e){
console.log(e)
iky.reply(`tidak ditemukan`)}
break
case 'leave': 
if (!isPrivate) return reply(`Perintah Ini hanya Bisa Digunakan Chat Pribadi!`)
let reme = Object.values(this.anonymous).find(room => room.check(sender2))
if (!reme) {
bot.telegram.sendMessage(from, `Kamu tidak sedang berada di anonymous chat`)
return
}
bot.telegram.sendMessage(from, `Berhasil Meninggalkan chat`)
delete this.anonymous[reme.id]
let erh = reme.other(sender2)
if (erh) {
bot.telegram.sendMessage(erh, `Partner memberhentikan chat`)
}
break
case 'next': 
if (!isPrivate) return reply(`Perintah Ini hanya Bisa Digunakan Chat Pribadi!`)
let rom = Object.values(this.anonymous).find(room => room.check(sender2))
if (!rom) {
bot.telegram.sendMessage(from,`Kamu tidak sedang berada di anonymous chat`,{reply_to_message_id: iky.message.message_id})
return
}
let other = rom.other(sender2)
if (other) {
bot.telegram.sendMessage(other,`Partner memberhentikan chat`)
}
delete this.anonymous[rom.id]
case 'star':
if (!isPrivate) return reply(`Perintah Ini hanya Bisa Digunakan Chat Pribadi!`)
if (Object.values(this.anonymous).find(room => room.check(sender2))) return reply( 'Kamu masih berada di dalam anonymous chat')
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(sender2))
if (room) {
bot.telegram.sendMessage(room.c,`Menemukan partner!\nSilahkan memulai chat`,{parse_mode: 'Markdown'})
room.b = sender2
room.state = 'CHATTING'
bot.telegram.sendMessage(from, `Menemukan partner!\nSilahkan memulai chat`,{reply_to_message_id: iky.message.message_id})
} else {
let ifd = + new Date
this.anonymous[ifd] = {
id: ifd,c: sender2,b: '',state: 'WAITING',
check: function (who = '') {
return [this.c, this.b].includes(who)
},
other: function (who = '') {
return who === this.c ? this.b : who === this.b ? this.c : ''
},
}
reply2('`Mohon Tunggu Sebentar sedang mencari partner`')
}
break
case 'afk':
if(!isGroup) return reply('Gunakan Perintah ini di group')
alasan = args.join(" ")
afk.push('@'+name.username)
fs.writeFileSync('./json/afk.json', JSON.stringify(afk))
console.log('@'+name.username)
ini_txt = "Anda telah afk. \nJika ada yang tag kamu bot akan memberitahukan bahwa kamu off\nJika ingin kembali dari afk ketik hai di sini"
reply(ini_txt)
break
case 'nenen':
res = await toJson(`https://api.rzkyfdlh.tech/nenen?teks=${qe}`)
reply(res.result)
break
case 'tiktok':
sendsearch (bot,iky)
iky.replyWithChatAction("upload_video")
url= `https://api.rzkyfdlh.tech/downloader/tiktoknowm?link=${qe}`
filename = Date.now()+'.mp4'
caption = `Sukses`
sendVideo(iky,url,filename,caption)
break
case 'asupan':
anu = ['loli','santuy','ukhty']
if(!anu.includes(qe.toLowerCase())) return reply(`Tidak ditemukan harap masukan dengan benar\nLIST YANG TERSEDIA:
1. loli
2. ukhty
3. santuy`)
sendsearch (iky)
try {
url = `https://api.rzkyfdlh.tech/asupan/${qe.toLowerCase()}`,
filename = Date.now()+'.mp4'
caption = `List asupan:\n1. Loli \n2. Ukhty \n3. Santuy\n\nExample: /asupan loli`
sendVideo(iky,url,filename,caption)
} catch(e) {
console.log(e)
reply(`Tidak ditemukan harap masukan dengan benar\nLIST YANG TERSEDIA:
1. loli
2. ukhty
3. santuy`)}
break
case 'loli':
iky.reply('mencari')
paq = await toJson(`https://api.rzkyfdlh.tech/loli`)
iky.replyWithPhoto({
url: paq.url,
filename: 'kitten.jpg'
},{caption: 'Pedo yh bg 🤨📸',reply_to_message_id: iky.message.message_id})
break
case 'donasi':
sendDonation(bot,iky)
break
case 'owner':
reply(`Tuh owner ku kak @${config.ownerusername}`)
break
case 'info':
bot.telegram.sendMessage(from,` Info Bot ${bot.botInfo.username}

- Nama Bot : - ${bot.botInfo.username} -
- First Nama : - ${bot.botInfo.first_name} -
- Apakah Bot boleh di add ke group? - ${bot.botInfo.can_join_groups ? 'Diperbolehkan' : 'Tidak diperbolehkan'} -
- Apakah bot read chat group? - ${bot.botInfo.can_read_all_group_messages ? 'Iya' : 'Tidak'} -`, {
reply_to_message_id: iky.message.message_id,
reply_markup: {
keyboard: [
[
{text: "Creator",callback_data: 'credit'},
{text: "Source",callback_data: 'script'}],
[
{text: "Hilangkan keyboard"}]
],
resize_keyboard: true,
parse_mode: "html"
}
})
break
case 'quotes':
sendsearch(bot,iky)
buff = await toJson('https://api.rzkyfdlh.tech/randomtext/quotes')
bot.telegram.sendMessage(from, buff.result.quotes+'\n\nBy: '+buff.result.author,{reply_to_message_id: iky.message.message_id,reply_markup: {inline_keyboard: [[{text: 'Get Again', callback_data: 'quotes'}]]},parse_mode: "Markdown",disable_web_page_preview: "true" })
break
case 'ytmp3':
if(!isUrl(qe) && !qe.includes('youtu')) return iky.reply('Link Invalid')
sendsearch(bot,iky)
try {
y2mateA(qe).then((tes) => {
console.log(tes)
iky.replyWithChatAction("upload_photo")
iky.replyWithPhoto({
url: tes[0].thumb,
filename: tes[0].judul+'.jpg'
},{caption: `「 YOUTUBE MP3 」\n\n• Judul : ${tes[0].judul}\n• Size : ${tes[0].size}\n\nMohon Tunggu sebentar lagu sedang dikirim`,reply_to_message_id: iky.message.message_id})
iky.replyWithAudio({
url: tes[0].link,
filename: tes[0].output
},{reply_to_message_id: iky.message.message_id}).catch(e => { iky.reply('Link Invalid')
console.log(e)
})
iky.replyWithChatAction("upload_audio")
})
} catch (e) {
console.log(e)
}
break
case 'ping': case 'p':
const tmenu = `Host : _${os.hostname()}_
Platfrom : _${os.platform()}_
Penggunaan RAM : _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require(`os`).totalmem / 1024 / 1024)}MB_

Ping : ${tutid}MS
Runtime : ${await format(uptime)}
Speed : ${latensi.toFixed(4)} Second` 
bot.telegram.sendMessage(iky.chat.id, tmenu ,
{reply_to_message_id: iky.message.message_id,
reply_markup: {
inline_keyboard:[
[
{ text: 'Back!', callback_data: 'start'}]
]
},
parse_mode: "Markdown"
})
break
case 'ig': case 'instagram':
if(qe.length == 1){
message = "Please enter link, for example: /instagram https://www.instagram.com/p/CREqfvJirTd/?utm_medium=copy_link"
sendText(bot,iky,message)
} else{
sendProses(bot,iky)
if(!isUrl(qe) && !qe.includes('instag')) return sendText(bot,iky,'Link Invalid')
try {
const insta = await toJson(`https://api.rzkyfdlh.tech/downloader/igdl?link=${qe}`)
for (let i of insta) {
if(i.includes('jpg')) {
iky.replyWithChatAction("upload_photo")
iky.replyWithPhoto({
url: i,
filename: 'iky.jpg'
},{reply_to_message_id: iky.message.message_id})
} else {
iky.replyWithChatAction("upload_video")
sendVideo(iky,i,Date.now()+'.mp4',`Sukses`)
}
sendText(bot,iky,`Download Selesai`)
}
}catch(e){
const insta = await toJson(`https://api.rzkyfdlh.tech/downloader/igdl?link=${qe}`)
console.log(e+'\n\n\n'+require ('util').format(insta))
sendText(bot,iky,`Error/Link Invalid`)
}
}
break
case 'yts': case 'ytsearch':
if(!qe){
message = "Please enter text, for example: /ytsearch snowman"
iky.reply(message)
} else{
sendProses(bot,iky)
try {
terus = '❒ 「 YOUTUBE SEARCH」\n\n'
res = await yts(`${qe}`)
for (let i = 0; i < 5; i++) {
terus += `NOMOR: ${i}
• Judul : ${res.all[i].title}
• ID Video : ${res.all[i].videoId}
• Views : ${res.all[i].views}
• Di Upload Pada : ${res.all[i].ago}
• Durasi : ${res.all[i].timestamp}
• Channel : ${res.all[i].author.name}
• Link Channel : ${res.all[i].author.url}
• Link Video : ${res.all[i].url}`
}
bot.telegram.sendMessage(from,terus)
} catch {
iky.reply(`Pastikan judul sudah benar!`)
}
}
break
case 'pin': case 'pinterest':
sendsearch(bot,iky)
try {
toJson(`https://api.rzkyfdlh.tech/search/pinterest?query=${qe}`).then((res) =>{
json = res.result
pa = Math.floor(Math.random() * json.length)
paq = json[pa]
iky.replyWithPhoto({
url: paq,
filename: qe+'.jpg'
},{reply_to_message_id: iky.message.message_id})}).catch(e => console.log(e))
} catch (e) {
console.log(e)
}
break
case 'ytmp4':
if(!isUrl(qe) && !qe.includes('youtu')) return iky.reply('Link Invalid')
sendsearch(bot,iky)
try {
y2mateV(qe).then((tes) => {
console.log(tes)
iky.replyWithPhoto({
url: tes[0].thumb,
filename: tes[0].judul+'.jpg'
},{caption: `「 YOUTUBE MP4 」\n\n• Judul : ${tes[0].judul}\n• Size : ${tes[0].size}\n\nMohon Tunggu sebentar video sedang dikirim`,reply_to_message_id: iky.message.message_id})
iky.replyWithVideo({
url: tes[0].link,
filename: tes[0].output
},{reply_to_message_id: iky.message.message_id}).catch(e => { iky.reply('Link Invalid')
 console.log(e)
})
iky.replyWithChatAction("upload_video")
})
} catch (e) {
console.log(e)
}
break
case 'play':
sendsearch(bot,iky)
try{
yts(`${args.join(' ')}`).then((res) => {
if (res.all[0].duration.seconds > 600 ) return iky.replyWithPhoto({
url: res.all[0].thumbnail},{caption: `「 YOUTUBE MP3 」\n\n• Judul : ${res.all[0].title}\n• Durasi : ${res.all[0].timestamp}\n\nMaaf, Durasi video melebihi 10 Menit\nLagu Tidak akan dikirim`})
let thumbInfo = `❒「 Youtube Play 」
├ Judul : ${res.all[0].title}
├ ID Video : ${res.all[0].videoId}
├ Diupload Pada : ${res.all[0].ago}
├ Views : ${res.all[0].views}
├ Durasi : ${res.all[0].timestamp}
├ Channel : ${res.all[0].author.name}
└ Link Channel : ${res.all[0].author.url}

Tunggu Proses Mengirim.....
`
iky.replyWithPhoto({
url: res.all[0].image,
filename: res.all[0].title+'.jpg'
},{caption: thumbInfo,reply_to_message_id: iky.message.message_id})
y2mateA(res.all[0].url).then((tes) => {
console.log(tes)
iky.replyWithChatAction("upload_audio")
iky.replyWithAudio({
url: tes[0].link,
filename: tes[0].output
},{reply_to_message_id: iky.message.message_id}).catch(e => iky.reply('error silahkan cari lagu lain'))
}).catch(e => iky.reply('error silahkan cari lagu lain'))
}).catch(e => iky.reply('error silahkan cari lagu lain'))
} catch (e) {
console.log(e)
}
break
case 'pussy':
case 'lesbian':
case 'kuni':
case 'cumsluts':
case 'classic':
case 'boobs':
case 'anal':
case 'avatar':
case 'yuri':
case 'trap':
case 'tits':
case 'kitsune':
case 'keta':
case 'holo':
case 'hentai':
case 'futanari':
case 'femdom':
case 'feet':
case 'ero':
case 'spank':
case 'gasm':
case 'hentai':
sendsearch(bot,iky)
try {
	
if(command == 'hentai') {
var coo = 'randomHentaiGif'
iky.replyWithPhoto({
url: (await neko['nsfw'][coo]()).url, 
filename: 'loli.jpg'
},{caption: coo,reply_to_message_id: iky.message.message_id})
return 
}
var coo = command
iky.replyWithPhoto({
url: (await neko['nsfw'][coo]()).url, 
filename: 'loli.jpg'
},{caption: coo,reply_to_message_id: iky.message.message_id})
} catch {
reply ('error')
}
break
case 'tes':
console.log(iky)
break
case 'menu':
sendHelp(bot,iky)
break
case 'simioff':
if(simi.includes(sender)) return reply ('sudah mati sebelumnya')
simi.push(sender)
fs.writeFileSync('json/simi.json',JSON.stringify(simi))
reply('Sukses Mematikan Simsimi')
break
case 'simion':
if(!simi.includes(sender)) return reply ('sudah hidup sebelumnya')
simi.splice(sender, 1)
fs.writeFileSync('./json/simi.json',JSON.stringify(simi))
reply('Sukses Menghidupkan Simsimi')
break
default:
/*if(!isGroup && !isCmd && !isMedia) {
if(simi.includes(sender)) return
await iky.replyWithChatAction("typing")
anu = await toJson(`https://api.simsimi.net/v2/?text=${q}&lc=id`)
	if (anu.error) return 
	simsi = anu.success
	simirep(`${simsi.replace('Jawaban untuk ini adalah dilarang','aku dilarang untuk berkata kasar sama ownerku kak maaf ya').replace('Tiara',name.username).replace(/simi/gi,'Kurumi').replace(/Jangan berkata kasar!!!dong/gi,'Bacot kontol sok kata kasar loe '+name.username).replace(/bangchan/gi,'Rizky Fadilah').replace(/simsimi/gi,'Kurumi').replace(/please enter the text - text=hello/gi,`Ada apa kak ${name.username}`).replace(/Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku./gi,'Maaf Kurumi tidak paham 😔')}`)
console.log(chalk.whiteBright(""), chalk.cyanBright("[ SIMI ]"), chalk.whiteBright(q), chalk.greenBright("from"), chalk.whiteBright(name.username))
console.log(chalk.whiteBright(""), chalk.cyanBright("[ BOT ]"), chalk.whiteBright(simsi.replace('Jawaban untuk ini adalah dilarang','aku dilarang untuk berkata kasar sama ownerku(Rizky) kak maaf ya').replace('Tiara',name.username).replace(/simi/gi,'Kurumi').replace(/Jangan berkata kasar!!!dong/gi,'Bacot kontol sok kata kasar loe '+name.username).replace(/bangchan/gi,'Rizky Fadilah').replace(/simsimi/gi,'Kurumi').replace(/please enter the text - text=hello/gi,`Ada apa kak ${name.username}`).replace(/Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku./gi,'Maaf Kurumi tidak paham 😔')), chalk.greenBright("from"), chalk.whiteBright(user.username))
}*/ //simsimi
}
} catch(e) {
console.log(e)
}
})
bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))