let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://melcanz.com/husbu?&apikey=NOVENSxd')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'nyoh husbu mu', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i

handler.limit = true

module.exports = handler
