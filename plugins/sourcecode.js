let handler = async (m, { conn }) => {
     conn.reply(m.chat, `Donasi bang biar bisa beli keperluan :)`, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


