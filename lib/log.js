const { parseResult, banner,success, Sukses, GetFotoProfile, pushname, gmt, weton, week, date, waktu, toJson,isUrl, range, argsGet } = require('./functions')

exports.sendProses = async(bot,ctx) => {
// let chatId = msg.chat.id;
let botReply = "Wait, Proses"
bot.telegram.sendMessage(ctx.chat.id ,botReply,{reply_to_message_id: ctx.message.message_id})
.then((result) => { setTimeout(() => {
bot.telegram.deleteMessage(ctx.chat.id, result.message_id)
}, 10 * 500)})
.catch(err => console.log(err))
}
exports.format = async(seconds) => {
function pad(s){
return (s < 10 ? `0` : ``) + s;
}
var hours = Math.floor(seconds / (6060));
var minutes = Math.floor(seconds % (6060) / 60);
var seconds = Math.floor(seconds % 60);
return pad(hours) + ` H,` + pad(minutes) + ` M,` + pad(seconds) + ` S`;
 }

 
exports.sendText = async(bot,ctx,teks) => {
bot.telegram.sendMessage(ctx.chat.id, teks,
 {
reply_markup: {
inline_keyboard: [
 [
{ text: 'Back', callback_data: 'help'}

 ]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
 })
 }
 exports.sendsearch = async(bot,ctx) => {
 // let chatId = msg.chat.id;
 let botReply = "Wait a moment.."
 bot.telegram.sendMessage(ctx.chat.id ,botReply,{reply_to_message_id: ctx.message.message_id})
.then((result) => { setTimeout(() => {
bot.telegram.deleteMessage(ctx.chat.id, result.message_id)
}, 10 * 500)})
.catch(err => console.log(err))
 }
exports.sendDonation = async(bot,ctx) => {
 bot.telegram.sendMessage(ctx.chat.id, `• DANA
⤷ 6285364937006

• Telkomsel Credit
⤷ 6285364937006

Very Thanks for Your donation. 😁`,
{

reply_markup: {
inline_keyboard: [
[
{ text: 'Back!🔙', callback_data: 'start'},
{ text: 'Owner🙍', url: 'http://t.me/'+config.ownerusername}
]
]
},
parse_mode: "Markdown"
})
}
exports.sendHelp = async(bot,ctx) => {
bot.telegram.sendMessage(ctx.chat.id, `Selamat datang Silahkan pilih menu dibawah\n\n`,{
reply_markup: {
inline_keyboard: [
[
{ text: 'Menu Downloader', callback_data: 'downloadermenu'}],
[
{ text: 'Menu Fun', callback_data: 'funmenu'}],
[
{ text: 'Menu Search', callback_data: 'searchmenu'}],
[
{ text: 'Menu Random', callback_data: 'randomenu'}],
[
{ text: 'Menu Nsfw', callback_data: 'nsfwmenu'}],
[
{ text: 'Menu Admin', callback_data: 'adminmenu'}],
[
{ text: 'Menu Group', callback_data: 'groupmenu'}],
[
{ text: 'Start Anonymous Chat👥', callback_data: 'star'}],
[
{ text: 'Owner🙍', url: 't.me/'+config.ownerusername}
],
[
{ text: 'Donasi👼🏻', callback_data: 'donasi'},
{ text: 'Ping🚀', callback_data: 'ping'},
{ text: 'Info Bot🤖', callback_data: 'info'}
]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
})
}
exports.sendStart = async(bot,ctx) => {
try {
var pp_user = await GetFotoProfile(bot,ctx.from.id || ctx.chat.id)
ctx.replyWithPhoto({url: `${pp_user}`},
{
caption:'Hai Saya bot '+bot.botInfo.username,
reply_markup: {
inline_keyboard: [
[
{ text: 'Menu📚', callback_data: 'menu'},
{ text: 'Ping🚀', callback_data: 'ping'},
{ text: 'Info Bot🤖', callback_data: 'info'}
],
[{ text: 'Start Anonymous Chat', callback_data: 'star'}],
[
{  text: 'Donasi👼🏻', callback_data: 'donasi'},
{ text: 'Owner Bot🙍', url:'t.me/'+config.ownerusername}
],
[
{ text: 'RzSocial', url: 'https://social.rzkyfdlh.tech'}
]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
})
} catch {
bot.telegram.sendMessage(from,'Hai Saya bot '+bot.botInfo.username,{
	reply_markup: {
inline_keyboard: [
[
{ text: 'Menu📚', callback_data: 'menu'},
{ text: 'Ping🚀', callback_data: 'ping'},
{ text: 'Info Bot🤖', callback_data: 'info'}
],
[{ text: 'Start Anonymous Chat', callback_data: 'star'}],
[
{  text: 'Donasi👼🏻', callback_data: 'donasi'},
{ text: 'Owner Bot🙍', url:'t.me/'+config.ownerusername}
],
[
{ text: 'RzSocial', url: 'https://social.rzkyfdlh.tech'}
]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
})
}
}
exports.sendTest = async(bot,ctx) => {
ctx.replyWithPhoto({url: `https://telegra.ph/file/4ab397f49255b2a79f687.jpg`},
{
caption: 'hai',

reply_markup: {
inline_keyboard: [
[
{ text: 'Donasi👼🏻', callback_data: 'donasi'},
{ text: 'Menu📚', callback_data: 'menu'},
{ text: 'Ping🚀', callback_data: 'ping'},
{ text: 'Info Bot🤖', callback_data: 'info'}
],
[
{ text: 'RzSocial📱', url: 'https://social.rzkyfdlh.tech'},
]
]
},
parse_mode: "Markdown",
disable_web_page_preview: "true" 
})
}

exports.getPosition = async(userId, _dir) => {
				let position = null
					Object.keys(_dir).forEach((i) => {
					if (_dir[i].id === userId) {
					position = i
					}
						})
					return position
					}