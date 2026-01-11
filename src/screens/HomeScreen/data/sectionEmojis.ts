export const SECTION_EMOJIS = {
  dua: "🤲",
  moulid: "🌙",
  qaseeda: "📖",
  ratib: "📿",
  swalath: "🤍",
  asma: "🌟",
  ramadan: "🕌",
  salah: "🧎",
  protection: "🛡️",
} as const;

export type SectionKey = keyof typeof SECTION_EMOJIS;
