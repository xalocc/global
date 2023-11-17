const roles = {
  '*NOVATO(A) V* 🪤': 0,
  '*NOVATO(A) IV* 🪤': 1,
  '*NOVATO(A) III* 🪤': 2,
  '*NOVATO(A) II* 🪤': 3,
  '*NOVATO(A) I* 🪤': 4,
  '*APRENDIS V* 🪚': 5,
  '*APRENDIS IV* 🪚': 6,
  '*APRENDIS III* 🪚': 7,
  '*APRENDIS II* 🪚': 8,
  '*APRENDIS I* 🪚': 9,
  '*EXPLORADOR(A) V* 🪓': 10,
  '*EXPLORADOR(A) IV* 🪓': 11,
  '*EXPLORADOR(A) III* 🪓': 12,
  '*EXPLORADOR(A) II* 🪓': 13,
  '*EXPLORADOR(A) I* 🪓': 14,
  '*MAESTRO(A) V* ⚒️': 15,
  '*MAESTRO(A) IV* ⚒️': 16,
  '*MAESTRO(A) III* ⚒️': 17,
  '*MAESTRO(A) II* ⚒️': 18,
  '*MAESTRO(A) I* ⚒️': 19,
  '*IRON V* 🦾': 20,
  '*IRON IV* 🦾': 21,
  '*IRON III* 🦾': 22,
  '*IRON II* 🦾': 23,
  '*IRON I* 🦾': 24,
  '*PLATA V* 🔮': 25,
  '*PLATA IV* 🔮': 26,
  '*PLATA III* 🔮': 27,
  '*PLATA II* 🔮': 28,
  '*PLATA I* 🔮': 29,
  '*ORO V* 🏅': 30,
  '*ORO IV* 🏅': 31,
  '*ORO III* 🏅': 32,
  '*ORO II* 🏅': 33,
  '*ORO I* 🏅': 34,
  '*DIAMANTE V* 💎': 35,
  '*DIAMANTE IV* 💎': 36,
  '*DIAMANTE III* 💎': 37,
  '*DIAMANTE II* 💎': 38,
  '*DIAMANTE I* 💎': 39,
  '*PRO EN MYSTICBOT V* 😼': 40,
  '*PRO EN MYSTICBOT IV* 😼': 41,
  '*PRO EN MYSTICBOT III* 😼': 42,
  '*PRO EN MYSTICBOT II* 😼': 43,
  '*PRO EN MYSTICBOT I* 😼': 44,
  '*SUPER PRO V* 🎩': 45,
  '*SUPER PRO IV* 🎩': 46,
  '*SUPER PRO III* 🎩': 47,
  '*SUPER PRO II* 🎩': 48,
  '*SUPER PRO I* 🎩': 49,
  '*LEGENDARIO(A) V* 🛡️': 50,
  '*LEGENDARIO(A) IV* 🛡️': 51,
  '*LEGENDARIO(A) III* 🛡️': 52,
  '*LEGENDARIO(A) II* 🛡️': 53,
  '*LEGENDARIO(A) I* 🛡️': 54,
  '*LEYENDA V* 🏆': 55,
  '*LEYENDA IV* 🏆': 56,
  '*LEYENDA III* 🏆': 57,
  '*LEYENDA II* 🏆': 58,
  '*LEYENDA I* 🏆': 59,
  '*ESTELAR V* ☄️': 60,
  '*ESTELAR IV* ☄️': 61,
  '*ESTELAR III* ☄️': 62,
  '*ESTELAR II* ☄️': 63,
  '*ESTELAR I* ☄️': 64,
  '*TOP ASTRAL V* ⚜️🔱': 65,
  '*TOP ASTRAL IV* ⚜️🔱': 66,
  '*TOP ASTRAL III* ⚜️🔱': 67,
  '*TOP ASTRAL II* ⚜️🔱': 68,
  '*TOP ASTRAL I* ⚜️🔱': 69,
  '👑 *ÉLITE GLOBAL V* 🏁': 70,
  '👑 *ÉLITE GLOBAL IV* 🏁': 75,
  '👑 *ÉLITE GLOBAL III* 🏁': 80,
  '👑 *ÉLITE GLOBAL II* 🏁': 85,
  '👑 *ÉLITE GLOBAL I* 🏁': 90,
  '👑 *∞ ÉLITE GLOBAL V* 💎🏁': 100,
  '👑 *∞ ÉLITE GLOBAL IV* 💎🏁': 140,
  '👑 *∞ ÉLITE GLOBAL III* 💎🏁': 180,
  '👑 *∞ ÉLITE GLOBAL II* 💎🏁': 250,
  '👑 *∞ ÉLITE GLOBAL I* 💎🏁': 300,
};

export function before(m) {
  const user = db.data.users[m.sender];
  const level = user.level;
  const role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0];
  user.role = role;
  return !0;
}
