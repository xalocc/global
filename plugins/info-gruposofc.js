const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*𝙷𝙾𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 👋🏻, 𝚃𝙴 𝙸𝙽𝚅𝙸𝚃𝙾 𝙰 𝚄𝙽𝙸𝚁𝚃𝙴 𝙰 𝙻𝙾𝚂 𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂 𝙳𝙴 LA COMUNIDAD DKN*

*➤ 𝙶𝚛𝚞𝚙𝚘𝚜 𝚘𝚏𝚒𝚌𝚒𝚊𝚕𝚎𝚜 de vs:*
*1.-* https://chat.whatsapp.com/EZofeD04M7y4xeWVsXbYz2
*2.-* https://chat.whatsapp.com/CjyxXfxKcoG6E98NDmLNI1
*3.-* https://chat.whatsapp.com/BZrhgXP9nRhEtjtZ7FYDIq
*4.-* https://chat.whatsapp.com/EO3DJHJAwJ3K7ledcZCJsU
*5.-* https://chat.whatsapp.com/Km0lgn5N5WC1loqScNiMFv
*6.-* https://chat.whatsapp.com/BdnmCIWfBEgAQO5LdpAM4i

*➤ Eventos paga:*
*1.-* https://chat.whatsapp.com/GlR796cUzht2oy81N3jK6h
*2.-* https://chat.whatsapp.com/JYYd1Y8d8k7EkvESlv4OGn
*3.-* https://chat.whatsapp.com/Dxk6g2YawEgJrnfg2GFMDy`.trim();
  const buttonMessage= {
    'document': {url: `https://www.instagram.com/comunidad.dkn`},
    'mimetype': `application/${document}`,
    'fileName': `「  @COMUNIDAD.DKN 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://www.instagram.com/comunidad.dkn',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.instagram.com/comunidad.dkn'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
