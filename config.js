const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ProRTJQT#n8o0TJkuP5fYoxS-ApFMyVLSLNV1LYuqry3m1GcNdwQ", // 𝐀𝐃𝐃 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃 
SUDO_NB: process.env.SUDO_NB || "916909950582", // 𝐀𝐃𝐃 𝐘𝐎𝐔𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 𝐖𝐈𝐓𝐇 𝐂𝐎𝐔𝐍𝐓𝐑𝐘 𝐂𝐎𝐃𝐄
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false", //  𝐓𝐑𝐔𝐄 𝐎𝐑 𝐅𝐀𝐋𝐒𝐄
OWNER_NUMBER: "916909950582",
MODE: process.env.MODE || "public", //𝐏𝐑𝐈𝐕𝐀𝐓𝐄 𝐎𝐑 𝐏𝐔𝐁𝐋𝐈𝐂
BOT_NAME: process.env.BOT_NAME || "◄⏤͟͞➸⃝❥͜͡𝑆𝛩𝑈𝑅𝛥𝐽𝛪𝑇➸⃝⚡-SS-S2",
// add bot namw here for menu
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "916909950582",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "◄⏤͟͞➸⃝❥͜͡𝑆𝛩𝑈𝑅𝛥𝐽𝛪𝑇➸⃝⚡-SS",
DESCRIPTION: process.env.DESCRIPTION || "*©
Listening to: *◄⏤͟͞➸⃝❥͜͡𝑆𝛩𝑈𝑅𝛥𝐽𝛪𝑇➸⃝⚡*
01:43 ━━━━●───── 03:50
⇆ㅤ ㅤ◁ㅤ ❚❚ ㅤ▷ ㅤㅤ↻﻿
               ılıılıılıılıılıılı
ᴠᴏʟᴜᴍᴇ : ▮▮▮▮▮▮▮▮▮▮  *",
};
