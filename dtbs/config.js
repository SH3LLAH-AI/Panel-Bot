/*

# Base By 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
# Owner ? : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['263719635497']
global.ownMain = '263719635497'
global.NamaOwner = '𝖒𝖗 𝖘𝖍𝖊𝖑𝖑𝖆𝖍 𝖔𝖋𝖈 //
global.sessionName = 'session'
global.connect = true // 
global.namabot = '𝐀𝐂𝐇𝐈𝐁𝐎𝐓 //
global.author = '𝐌𝐑 𝐒𝐇𝐄𝐋𝐋𝐀𝐇 𝐎𝐅𝐂 //
global.packname = '𝐍𝐁𝐒 //
global.url1 = 'https://whatsapp.com/channel/0029VagGhQAFi8xWQMc0R10G' //global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.url2 = 'https://whatsapp.com/channel/0029VagGhQAFi8xWQMc0R10G' //
global.autoviewstatus = process.env.autoviewstatus || "FALSE"
global.linkgc = 'https://whatsapp.com/channel/0029VagGhQAFi8xWQMc0R10G'
global.delayjpm = 3500
//Panel
global.domain = '' // your admin panel domian
global.apikey = '' // Your admin panel apikey
global.capikey = '' // Your admin panel capikey
global.egg = '15' // 
global.location = '1' // 
global.thumbnailpanel = 'https://i.imgur.com/N1zWDRi.jpeg'

global.mess = { // 
owner: 'You are not owner.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.'
}

global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
