import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './Menu.png'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/.')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `*⌬∙ • ──╾⊱﹝﷽﹞⊰╼── • ∙⌬*
『بـوت⤜ماريـن』
◈🕊╎اهلا بكم ف بوت كوماندو قبل استخدام اي امر(.) ╎🕊◈
❋ ─━─⊰🍷⊱─━─ ❋
⌬⚔»┊اوامـر الـجـروبات』↯
❋ ─━─⊰🍷⊱─━─ ❋
↞〔ضـيـف〕↠
↞〔الاشباح〕↠
↞〔طـرد〕↠
↞〔مـنـشـني〕↠
↞〔تـرقـية〕↠
↞〔اعـفـاء〕↠
↞〔انـذار〕↠
↞〔حـذف - انـذار〕↠
↞〔حـذف〕↠
↞〔مـنـشـن〕↠
↞〔عـمـلات〕↠
↞〔مـخـفـي〕↠
↞〔المـشـرفـيـن〕↠
↞〔المـنـشـن〕↠
↞〔الـبـروفايـل〕↠
↞〔الـقـروب〕↠
↞〔دعـوة〕↠
↞〔رستر〕↠
↞〔لـفـل〕↠
↞〔التـرحـيـب〕↠
↞〔الـمـغادرة〕↠
↞〔فتـح القـروب〕↠
↞〔اغـلاق القـروب〕↠
↞〔خـط〕↠
↞〔تـوب〕↠
↞〔ليـنـك〕↠
↞〔يـومـي〕↠
↞〔الـمـاس〕↠
↞〔تـرتـيـب_البـنـك〕↠
↞〔شـراء〕↠
↞〔هـجـوم〕↠
❋ ─━─⊰🍷⊱─━─ ❋
ء⌬🕋»┊القـسـم الاسلامـي』↯*
↞〔سـورة〕↠
↞〔حـديـث〕↠
↞〔قـرآن〕↠
↞〔الله〕↠
↞〔آيـات〕↠
❋ ─━─⊰🍷⊱─━─ ❋
⌬🕹»┊قـسـم التـرفـيه』↯
↞〔اكـس او〕↠
↞〔كـت〕↠
↞〔صـراحـة〕↠
↞〔تحدي〕↠
↞〔ذكـاء〕↠
↞〔غـبـاء〕↠
↞〔جـمـال〕↠
↞〔سـيـارات〕↠
↞〔عين〕↠
↞〔الـحـب〕↠
↞〔لـو〕↠
↞〔هـل〕↠
↞〔رونـالـدو〕↠
↞〔مـيـسـي〕↠
↞〔احـرز〕↠
↞〔تـفـكيـك〕↠
↞〔ميـمـز〕↠
↞〔دمـج〕↠
↞〔زواج〕↠
↞〔طـلاق〕↠
↞〔عيد〕↠
↞〔كيوت〕↠
↞〔اقتباس〕↠
↞〔عـلـم〕↠
↞〔تـاج〕↠
↞〔حـكـمة〕↠
↞〔ميـمـز〕↠
↞〔سـؤال〕↠
❋ ─━─⊰🍷⊱─━─ ❋
⌬⏏»┊قـسـم التـنـزيـلات』↯
❋ ─━─⊰🍷⊱─━─ ❋
↞〔انـسـتغـرام〕↠
↞〔جوجـل〕↠
↞〔ويكيـبـديا〕↠
↞〔انـسـتا〕↠
↞〔اسـم_اغنـية〕↠
↞〔فـيـس〕↠
↞〔بـيـن〕↠
↞〔مـيـديافايـر〕↠
↞〔شـغـل〕↠
"↞〔تـيكـتـوك〕↠*
" ↞〔تويـتـر〕↠*
↞〔بحـث〕↠
↞〔اغنـية〕↠
↞〔فيـديـو〕↠
↞〔تطبـيـق〕↠
↞〔صـورة〕↠
↞〔صـورة²〕↠
❋ ─━─⊰🍷⊱─━─ ❋
⌬♻»┊قـسـم التـحـويـلات』↯
❋ ─━─⊰🍷⊱─━─ ❋
↞〔مـلـصـق〕↠
↞〔سـرقة〕↠
↞〔لفيـديو〕↠
↞〔لصـورة〕↠
↞〔دائـري〕↠
↞〔تـخـيل〕↠
↞〔مكـس〕↠
↞〔لرابط〕↠
↞〔جـواهـر〕↠
↞〔سـتـك〕↠
↞〔تيـلجـراف〕↠
↞〔لكـرتـون〕↠
↞〔باركـود〕↠
❋ ─━─⊰🍷⊱─━─ ❋
⌬♠»┊قـسـم المـطـور』↯
❋ ─━─⊰🍷⊱─━─ ❋
↞〔ضـيـف_بريـمـيام〕↠
↞〔حـذف_بريـمـيام〕↠
↞〔الحـالة〕↠
↞〔ريـستـارت〕↠
↞〔بـان〕↠
↞〔الـغاء_البـان〕↠
#↞〔اطـفاء〕↠*
↞〔الحـالة〕↠
↞〔تفـعيـل〕↠
↞〔المـبنـديـن〕↠
↞〔إعـادة〕↠
↞〔ادخـل〕↠
↞〔ضـيف_اكـس بي〕↠
↞〔ضيـف_جـواهـر〕↠
❋ ─━─⊰🍷⊱─━─ ❋
⌬🔊»┊قـسـم الصـوتـيات』↯
❋ ─━─⊰🍷⊱─━─ ❋
↞〔عمـيق〕↠
↞〔منـفـوخ〕↠
↞〔تخـيـن〕↠
↞〔صـاخـب〕↠
↞〔سـريـع〕↠
↞〔تخـييـن²〕↠
↞〔روبـوت〕↠
↞〔بـطيـئ〕↠
↞〔نـاعـم〕↠
↞〔سـنـجـاب〕↠
❋ ─━─⊰🍷⊱─━─ ❋
『تـوقـيـع ┊ ˼‏📜˹』↶
「🍷𝒦𝒪𝑀𝒜𝒩𝒟𝒪 ℬ𝒪𝒯🍷」
❋ ─━─⊰🍷⊱─━─ ❋
`.trim()
const _0x77a59c=_0x2e9a;function _0x2e9a(_0x1990a6,_0x17eb48){const _0x368c59=_0x368c();return _0x2e9a=function(_0x2e9a51,_0xa97983){_0x2e9a51=_0x2e9a51-0x8c;let _0x45f59e=_0x368c59[_0x2e9a51];return _0x45f59e;},_0x2e9a(_0x1990a6,_0x17eb48);}(function(_0x3f4e40,_0x2b167f){const _0x5b60fd=_0x2e9a,_0x40876c=_0x3f4e40();while(!![]){try{const _0x59d774=-parseInt(_0x5b60fd(0xa4))/0x1+parseInt(_0x5b60fd(0x8e))/0x2*(parseInt(_0x5b60fd(0x9c))/0x3)+-parseInt(_0x5b60fd(0x96))/0x4*(-parseInt(_0x5b60fd(0x91))/0x5)+-parseInt(_0x5b60fd(0x9e))/0x6+-parseInt(_0x5b60fd(0xa2))/0x7+-parseInt(_0x5b60fd(0x99))/0x8*(-parseInt(_0x5b60fd(0xa5))/0x9)+-parseInt(_0x5b60fd(0x94))/0xa;if(_0x59d774===_0x2b167f)break;else _0x40876c['push'](_0x40876c['shift']());}catch(_0x3dc2d2){_0x40876c['push'](_0x40876c['shift']());}}}(_0x368c,0xaecda));const _0x3c7cab=_0x5a1d;function _0x5a1d(_0x371e1a,_0x4ec89b){const _0x1c3ed3=_0x42ca();return _0x5a1d=function(_0x33a680,_0x37afef){_0x33a680=_0x33a680-0x0;let _0x1e2262=_0x1c3ed3[_0x33a680];return _0x1e2262;},_0x5a1d(_0x371e1a,_0x4ec89b);}function _0x42ca(){const _0x1c950c=_0x2e9a,_0x50b794=[_0x1c950c(0x8c),_0x1c950c(0x9b),_0x1c950c(0x9f),_0x1c950c(0x95),_0x1c950c(0x8f),_0x1c950c(0x98),_0x1c950c(0x92),'406070MLYaeB','https://www.atom.bio/harley_light',_0x1c950c(0x97),_0x1c950c(0x90),'322835aPaRGc','VIDEO',_0x1c950c(0x9a),'sender',_0x1c950c(0xa1)];return _0x42ca=function(){return _0x50b794;},_0x42ca();}(function(_0x30573c,_0x1cf580){const _0x9ac237=_0x2e9a,_0x37d7a0=_0x5a1d,_0x5820ff=_0x30573c();while(!![]){try{const _0x389a26=parseInt(_0x37d7a0(0x5))/0x1+parseInt(_0x37d7a0(0x1))/0x2+-parseInt(_0x37d7a0(0xa))/0x3*(parseInt(_0x37d7a0(0x3))/0x4)+parseInt(_0x37d7a0(0x7))/0x5+-parseInt(_0x37d7a0(0xf))/0x6*(parseInt(_0x37d7a0(0xd))/0x7)+parseInt(_0x37d7a0(0x4))/0x8*(-parseInt(_0x37d7a0(0x9))/0x9)+-parseInt(_0x37d7a0(0xb))/0xa*(-parseInt(_0x37d7a0(0xe))/0xb);if(_0x389a26===_0x1cf580)break;else _0x5820ff[_0x9ac237(0x93)](_0x5820ff[_0x9ac237(0x8d)]());}catch(_0x426094){_0x5820ff[_0x9ac237(0x93)](_0x5820ff[_0x9ac237(0x8d)]());}}}(_0x42ca,0x772cd));let buttonMessage={'image':pp,'caption':str[_0x3c7cab(0xc)](),'mentions':[m[_0x3c7cab(0x8)]],'footer':''+wm,'headerType':0x4,'contextInfo':{'mentionedJid':[m[_0x77a59c(0x9d)]],'externalAdReply':{'showAdAttribution':!![],'mediaType':_0x3c7cab(0x6),'mediaUrl':null,'title':_0x3c7cab(0x0),'body':null,'thumbnail':img,'sourceUrl':_0x3c7cab(0x2)}}};conn[_0x77a59c(0xa0)](m[_0x77a59c(0xa3)],buttonMessage,{'quoted':m});function _0x368c(){const _0x15ee5e=['1430690UXyuuo','831853GQAjyu','840496IPJeXP','7870rKuYSV','⁨🍷𝐌𝐀𝐑𝐘𝐍┊🤖┊𝐁𝐎𝐓🍷','push','21802600GDflcE','2708027tOnEUS','3380VkKmJM','4YbGMkZ','6ZrUjVF','356696syMKXJ','3639410cLSfPv','70SxKSwY','6AdkcmL','sender','519642qkpbTC','trim','sendMessage','9LtUyCF','5694136eYTYHI','chat','79086PXKrBw','225NHsCDI','2409147cMTtvV','shift'];_0x368c=function(){return _0x15ee5e;};return _0x368c();}

    } catch {
        conn.reply(m.chat, '[❗خطاء❗]', m)
    }
}
handler.command = /^(اوامر|الاوامر|مهام|المهام|menu)$/i
handler.exp = 20
handler.fail = null
export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
