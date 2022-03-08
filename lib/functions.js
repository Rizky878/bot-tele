const spin = require('spinnies')
const cfonts = require('cfonts')
const chalk = require('chalk')
const fetch = require ('node-fetch')


exports.parseResult = async(json, options = {}) => {
    let {arrow,head,upper,down,line } = config.unicode
    let opts = {
      unicode: true,
      ignoreVal: [null,
        undefined],
      ignoreKey: [],
      title: 'IkyyBott',
      headers: `${head}${line.repeat(4)}${arrow} » %title «`,
      body: `➜ *%key*: _%value_`,
      footer: head+line+line+line+arrow+'\n',...options,
    };
    let {
      unicode,
      ignoreKey,
      title,
      headers,
      ignoreVal,
      body,
      footer
    } = opts;

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
          } else {
            tmp.push([
              key,
              this.parseResult(val, {
                ignoreKey, unicode: false
              }),
            ]);
          }
          break;
        default:
          tmp.push([key, val]);
          break;
      }
    }
    if (unicode) {
      let text = [
        headers.replace(/%title/g, title),
        tmp
        .map((v) => {
          return body.replace(/%key/g, v[0]).replace(/%value/g, v[1]);
        })
        .join('\n'),
        footer,
      ];
      return text.join('\n').trim();
    }
    return tmp;
  }
  
  //logs
exports.banner = cfonts.render(('Rizky Fadilah|Bot Telegram'), {
font: 'chrome',
color: 'candy',
align: 'center',
gradient: ["red","green"],
lineHeight: 3
});
exports.success = (id, text) => {
spins.succeed(id, {text: text})
}
const spinner = { 
"interval": 120,
"frames": [
"🕐",
"🕑",
"🕒",
"🕓",
"🕔",
"🕕",
"🕖",
"🕗",
"🕘",
"🕙",
"🕚",
"🕛"
]}
let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
 exports.Sukses = (id, text) => {
spins.add(id, {text: text})
}

const LinkGet = async(bot,file_id) => { try { return (await bot.telegram.getFileLink(file_id)).href } catch { throw "Error while get url" } }
exports.GetFotoProfile = async(bot,id) => {
 try {
is = "https://telegra.ph/file/4ab397f49255b2a79f687.jpg"
if (String(id).startsWith("-100")) {
var pp = await bot.telegram.getChat(id)
if (!pp.hasOwnProperty("photo")) return is
ids = pp.photo.big_file_id
} else {
var pp = await bot.telegram.getUserProfilePhotos(id)
if (pp.total_count == 0) return is
ids = pp.photos[0][2].file_id
}
return await LinkGet(bot,ids)
 } catch (e) { throw e }
}

exports.pushname = (ctx) => {
 try {
user = ctx
last_name = user["last_name"] || ""
full_name = user.first_name + " " + last_name
user["full_name"] = full_name.trim()
return user
 } catch (e) { throw e }
}
const d = new Date(new Date + 3600000)
const locale = 'id'
exports.gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
exports.weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
exports.week = d.toLocaleDateString(locale, { weekday: 'long' })
exports.date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})


/*#*#*#*#*#*#*#*#*#* MENU ALL *#*#*#*#*#*#*#*/
global.nsfwmenu = `
/pussy
/lesbian
/kuni
/cumsluts
/classic
/boobs
/anal
/avatar
/yuri
/trap
/tits
/loli
/kitsune
/keta
/holo
/hentai
/futanari
/femdom
/feet
/ero
/spank
/gasm
/hentai`
global.downloadermenu = `
/tiktok <link>
/instagram <link>
/play <judul>
/whatmusic
/ytmp3 <link>
/ytmp4 <link>
`
global.searchmenu = `
/pinterest <teks>
/ytsearch <teks>
/whatmusic
`
global.funmenu = `
/nenen <teks>
/star
/next
/leave
`
global.randommenu = `
/quotes
`
global.adminmenu = `
/pin <reply pesan>
`
global.groupmenu = `
/cekadmin
`
/*#*#*#*#*#*#*#*#*#* END MENU ALL *#*#*#*#*#*#*#*/
exports.waktu = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
exports.toJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
// console.log(json)
resolve(json)
})
.catch((err) => {
reject(err)
})
})
exports.isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=])/, 'gi'))
}
exports.sendVideo = (iky,url,filename,caption) => {
iky.replyWithVideo({
url: url,
filename: filename

},{caption: caption})
}
exports.cekStatus = (userId, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === userId) {
status = true
}
})
return status
}
exports.range = async(start, stop, step) => {
 if (typeof stop == 'undefined') {
// one param defined
stop = start;
start = 0;
 }
 if (typeof step == 'undefined') {
step = 1;
 }
 if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
return [];
 }
 var result = [];
 for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
result.push(i);
 }
 return result;
}
exports.argsGet = async(iky) => {
try {
args = iky.message.text
args = args.split(" ")
args.shift()
return args
} catch { return [] }
}
