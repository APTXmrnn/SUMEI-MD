let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.lolhuman.xyz/api/random/elf?apikey=NOVEN2447')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'istri gwech ya', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['elf']
handler.tags = ['anime']
handler.command = /^(elf)$/i

handler.limit = true

module.exports = handler
