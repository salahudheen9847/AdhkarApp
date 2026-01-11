import type { HOME_LABELS } from "./HomeData";

export const ITEM_EMOJIS: Partial<
  Record<keyof typeof HOME_LABELS, string>
> = {
  // 🧠 Mental
  anxietyWorryDuas: "😔",
  stressReliefDuas: "🧘‍♂️",
  innerPeaceDuas: "🕊️",
  angerControlDuas: "😡",
  badDreamDuas: "🌙",
  griefLossDuas: "💔",
  fearPanicDuas: "😨",

  // 👨‍👩‍👧 Family / Kids (cartoon vibe)
  kidsDailyDuas: "🧒✨",
  kidsLearningDuas: "📖🌈",
  kidsIslamicDuas: "🕌🧸",
  shortSurahsForKids: "📜🐣",
  duasForChildren: "👶💖",
  newbornDuas: "👶🎀",
  pregnancyDuas: "🤰🌸",
  breastfeedingDuas: "🍼😊",
  familyUnityDuas: "👨‍👩‍👧‍👦",
  husbandWifeDuas: "💞",
  marriageDuas: "💍",

  // 💼 Rizq / Life
  workRizqDuas: "💼",
  debtReliefDuas: "💸",
  successMotivationDuas: "🚀",
  businessLossRecoveryDuas: "🏪",
  houseLandDuas: "🏠",
  courtCaseDuas: "⚖️",

  // 🛡️ Protection
  nazarBlackMagicProtectionDuas: "🧿",
  protectionFromGossipDuas: "👅",
  windStormDuas: "🌪️",

  // 🕌 Ibadah / Time
  ramadanAdhkar: "🌙",
  jumuahAdhkar: "🕌",
  morningAdhkarComplete: "🌅",
  eveningAdhkarComplete: "🌆",
  beforeSleepAdhkar: "😴",
  wakeUpAdhkar: "⏰",

  // 🤲 Events
  duaMarichavark: "🤍",
  janazahDuas: "⚰️",
  sicknessDuas: "🤒",
  hospitalSurgeryDuas: "🏥",
  travelDuas: "✈️",
  foodDuas: "🍽️",
  clothingDuas: "👕",

  // 📚 Akhirah
  knowledgeDuas: "📚",
  akhirahDuas: "🌌",
  taubahDuas: "🔁",
  forgivenessDuas: "🙏",
  zakatDuas: "💰",
};
