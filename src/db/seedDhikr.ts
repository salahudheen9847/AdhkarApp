import { db } from "./db";
import type { Transaction, SQLiteDatabase } from "react-native-sqlite-storage";

import { DhikrItem } from "../data/types";

import { asmaulHusnaData } from "../data/asmaulHusna/asmaulHusnaData";
import { duaMarichavarkData } from "../data/duaMarichavark/duaMarichavarkData";
import { duaQabarData } from "../data/duaQabar/duaQabarData";
import { haddadData } from "../data/haddad/haddadData";
import { nariyathSwalath } from "../data/swalath/nariyathSwalath";
import { salawatAlFatih } from "../data/swalath/salawatAlFatih"; // ✅ ADD
import { thajuSwalath } from "../data/swalath/thajuSwalath";
import { adhkarAfterSalah } from "../data/salah/adhkarAfterSalah";
import { janazahDuas } from "../data/janazahDuas";
import { sicknessDuas } from "../data/sicknessDuas";
import { homeDuas } from "../data/homeDuas";
import { travelDuas } from "../data/travelDuas";
import { anxietyWorryDuas } from "../data/anxietyWorryDuas";
import { debtReliefDuas } from "../data/debtReliefDuas";
import { badDreamDuas } from "../data/badDreamDuas";
import { clothingDuas } from "../data/clothingDuas";
import { foodDuas } from "../data/foodDuas";
import { masjidDuas } from "../data/masjidDuas";
import { shortSurahsForKids } from "../data/shortSurahsForKids";
import { duaForSick } from "../data/duaForSick";
import { hospitalSurgeryDuas } from "../data/hospitalSurgeryDuas";
import { pregnancyDuas } from "../data/pregnancyDuas";
import { adhanIqamahDuas } from "../data/adhanIqamahDuas";
import { akhirahDuas } from "../data/akhirahDuas";
import { angerControlDuas } from "../data/angerControlDuas";
import { atTahiyyat } from "../data/at-tahiyyat";
import { beforeSleepAdhkar } from "../data/beforeSleepAdhkar";
import { breastfeedingDuas } from "../data/breastfeedingDuas";
import { businessLossRecoveryDuas } from "../data/businessLossRecoveryDuas";
import { courtCaseDuas } from "../data/courtCaseDuas";
import { duasForChildren } from "../data/duasForChildren";
import { duasForParents } from "../data/duasForParents";
import { elderlyParentsDuas } from "../data/elderlyParentsDuas";
import { eveningAdhkarComplete } from "../data/eveningAdhkarComplete";
import { examDuas } from "../data/examDuas";
import { familyUnityDuas } from "../data/familyUnityDuas";
import { fearPanicDuas } from "../data/fearPanicDuas";
import { forgivenessDuas } from "../data/forgivenessDuas";
import { griefLossDuas } from "../data/griefLossDuas";
import { nazarBlackMagicProtectionDuas } from "../data/nazarBlackMagicProtectionDuas";
import { protectionFromGossipDuas } from "../data/protectionFromGossipDuas";
import { ashraqaBaithFull } from "../data/ashraqaBaithFull";
import { duaUlQunoot } from "../data/dua-ul-qunoot";
import { duaForSickness } from "../data/duaForSickness";
import { morningAdhkarComplete } from "../data/morningAdhkarComplete";
import { wakeUpAdhkar } from "../data/wakeUpAdhkar";
import { marriageDuas } from "../data/marriageDuas";
import { rainDuas } from "../data/rainDuas";
import { windStormDuas } from "../data/windStormDuas";
import { protectionDuas } from "../data/protectionDuas";
import { successMotivationDuas } from "../data/successMotivationDuas";
import { swalathuIbramiyya } from "../data/swalath/swalathuIbramiyya";
import { houseLandDuas } from "../data/houseLandDuas";
import { husbandWifeDuas } from "../data/husbandWifeDuas";
import { innerPeaceDuas } from "../data/innerPeaceDuas";
import { istikharaDua } from "../data/istikharaDua";
import { jumuahAdhkar } from "../data/jumuahAdhkar";
import { kidsDailyDuas } from "../data/kidsDailyDuas";
import { kidsIslamicDuas } from "../data/kidsIslamicDuas";
import { kidsLearningDuas } from "../data/kidsLearningDuas";
import { knowledgeDuas } from "../data/knowledgeDuas";
import { newbornDuas } from "../data/newbornDuas";
import { oppressionJusticeDuas } from "../data/oppressionJusticeDuas";
import { singleParentDuas } from "../data/singleParentDuas";
import { stressReliefDuas } from "../data/stressReliefDuas";
import { taubahDuas } from "../data/taubahDuas";
import { workRizqDuas } from "../data/workRizqDuas";
import { zakatDuas } from "../data/zakatDuas";
import { salawatOnProphet } from "../data/salathuIbrahim";
import { salamBaithFull } from "../data/salamBaithFull";
import { baderMoulidData } from "../data/BaderMoulid/baderMoulidData";
import { ManqusMoulidData } from "../data/ManqusMoulid/manqusMoulidData";
import { qaseedathulBurda } from "../data/qaseeda/qaseedathulBurda";

/* 🔧 helper */
const normalize = (v?: string | string[]) =>
  Array.isArray(v) ? v.join("\n") : v ?? "";

/* 🔧 Bulk seeding helper */
const seedDuaCategory = (
  tx: Transaction,
  type: string,
  data: any
) => {
  if (!data?.content && !Array.isArray(data)) return;
  
  // Handle both array data (moulid) and object data (duas)
  const dataArray = Array.isArray(data) ? data : data.content;
  
  dataArray.forEach((i: any, index: number) => {
    const item: DhikrItem = {
      id: i.id,
      text: Array.isArray(i.arabic) ? i.arabic.join("\n") : i.arabic,
      malayalam: Array.isArray(i.malayalam) ? i.malayalam.join("\n") : i.malayalam,
      english: Array.isArray(i.english) ? i.english.join("\n") : i.english,
      start: index * 5,
      end: (index + 1) * 5,
    };
    insertDhikr(tx, type, item);
  });
};

const insertDhikr = (
  tx: Transaction,
  type: string,
  item: DhikrItem
) => {
  tx.executeSql(
    `
    INSERT OR IGNORE INTO dhikr
    (id, type, arabic, malayalam, english, start, end)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `,
    [
      item.id,
      type,
      normalize(item.text),
      normalize(item.malayalam),
      normalize(item.english),
      item.start ?? null,
      item.end ?? null,
    ]
  );
};

export const seedDhikr = async () => {
  const database: SQLiteDatabase = await db;

  return new Promise<void>((resolve, reject) => {
    database.transaction(
      tx => {
        asmaulHusnaData.forEach(i =>
          insertDhikr(tx, "asmaulHusna", i)
        );

        duaMarichavarkData.forEach(i =>
          insertDhikr(tx, "duaMarichavark", i)
        );

        duaQabarData.forEach(i =>
          insertDhikr(tx, "duaQabar", i)
        );

        haddadData.forEach(i =>
          insertDhikr(tx, "haddad", i)
        );

        // 🌸 NARIYATH SWALATH
        nariyathSwalath.forEach(i =>
          insertDhikr(tx, "nariyathSwalath", i)
        );

        // 🤍 THAJU SWALATH
        thajuSwalath.forEach(i =>
          insertDhikr(tx, "thajuSwalath", i)
        );

        // 🌟 SALAWAT AL-FATIH
        salawatAlFatih.forEach(i =>
          insertDhikr(tx, "salawatAlFatih", i)
        );

        // 🕌 ADHKAR AFTER SALAH
        adhkarAfterSalah.forEach(i =>
          insertDhikr(tx, "adhkarAfterSalah", i)
        );

        // 🪦 JANAZAH DUAS
        janazahDuas.content?.forEach((i, index) => {
          const item: DhikrItem = {
            id: i.id,
            text: Array.isArray(i.arabic) ? i.arabic.join("\n") : i.arabic,
            malayalam: Array.isArray(i.malayalam) ? i.malayalam.join("\n") : i.malayalam,
            english: Array.isArray(i.english) ? i.english.join("\n") : i.english,
            start: index * 5, // dummy timing
            end: (index + 1) * 5,
          };
          insertDhikr(tx, "janazahDuas", item);
        });

        // 🏥 SICKNESS DUAS
        sicknessDuas.content?.forEach((i, index) => {
          const item: DhikrItem = {
            id: i.id,
            text: Array.isArray(i.arabic) ? i.arabic.join("\n") : i.arabic,
            malayalam: Array.isArray(i.malayalam) ? i.malayalam.join("\n") : i.malayalam,
            english: Array.isArray(i.english) ? i.english.join("\n") : i.english,
            start: index * 5,
            end: (index + 1) * 5,
          };
          insertDhikr(tx, "sicknessDuas", item);
        });

        // 🏠 HOME DUAS
        homeDuas.content?.forEach((i, index) => {
          const item: DhikrItem = {
            id: i.id,
            text: Array.isArray(i.arabic) ? i.arabic.join("\n") : i.arabic,
            malayalam: Array.isArray(i.malayalam) ? i.malayalam.join("\n") : i.malayalam,
            english: Array.isArray(i.english) ? i.english.join("\n") : i.english,
            start: index * 5,
            end: (index + 1) * 5,
          };
          insertDhikr(tx, "homeDuas", item);
        });

        // ✈️ TRAVEL DUAS
        travelDuas.content?.forEach((i, index) => {
          const item: DhikrItem = {
            id: i.id,
            text: Array.isArray(i.arabic) ? i.arabic.join("\n") : i.arabic,
            malayalam: Array.isArray(i.malayalam) ? i.malayalam.join("\n") : i.malayalam,
            english: Array.isArray(i.english) ? i.english.join("\n") : i.english,
            start: index * 5,
            end: (index + 1) * 5,
          };
          insertDhikr(tx, "travelDuas", item);
        });

        // 😰 ANXIETY DUAS
        anxietyWorryDuas.content?.forEach((i, index) => {
          const item: DhikrItem = {
            id: i.id,
            text: Array.isArray(i.arabic) ? i.arabic.join("\n") : i.arabic,
            malayalam: Array.isArray(i.malayalam) ? i.malayalam.join("\n") : i.malayalam,
            english: Array.isArray(i.english) ? i.english.join("\n") : i.english,
            start: index * 5,
            end: (index + 1) * 5,
          };
          insertDhikr(tx, "anxietyWorryDuas", item);
        });

        // 💰 DEBT RELIEF DUAS
        debtReliefDuas.content?.forEach((i, index) => {
          const item: DhikrItem = {
            id: i.id,
            text: Array.isArray(i.arabic) ? i.arabic.join("\n") : i.arabic,
            malayalam: Array.isArray(i.malayalam) ? i.malayalam.join("\n") : i.malayalam,
            english: Array.isArray(i.english) ? i.english.join("\n") : i.english,
            start: index * 5,
            end: (index + 1) * 5,
          };
          insertDhikr(tx, "debtReliefDuas", item);
        });

        // 😴 BAD DREAM DUAS
        badDreamDuas.content?.forEach((i, index) => {
          const item: DhikrItem = {
            id: i.id,
            text: Array.isArray(i.arabic) ? i.arabic.join("\n") : i.arabic,
            malayalam: Array.isArray(i.malayalam) ? i.malayalam.join("\n") : i.malayalam,
            english: Array.isArray(i.english) ? i.english.join("\n") : i.english,
            start: index * 5,
            end: (index + 1) * 5,
          };
          insertDhikr(tx, "badDreamDuas", item);
        });

        // 👕 CLOTHING DUAS
        clothingDuas.content?.forEach((i, index) => {
          const item: DhikrItem = {
            id: i.id,
            text: Array.isArray(i.arabic) ? i.arabic.join("\n") : i.arabic,
            malayalam: Array.isArray(i.malayalam) ? i.malayalam.join("\n") : i.malayalam,
            english: Array.isArray(i.english) ? i.english.join("\n") : i.english,
            start: index * 5,
            end: (index + 1) * 5,
          };
          insertDhikr(tx, "clothingDuas", item);
        });

        // 🍽️ FOOD DUAS
        foodDuas.content?.forEach((i, index) => {
          const item: DhikrItem = {
            id: i.id,
            text: Array.isArray(i.arabic) ? i.arabic.join("\n") : i.arabic,
            malayalam: Array.isArray(i.malayalam) ? i.malayalam.join("\n") : i.malayalam,
            english: Array.isArray(i.english) ? i.english.join("\n") : i.english,
            start: index * 5,
            end: (index + 1) * 5,
          };
          insertDhikr(tx, "foodDuas", item);
        });

        // 🕌 MASJID DUAS
        masjidDuas.content?.forEach((i, index) => {
          const item: DhikrItem = {
            id: i.id,
            text: Array.isArray(i.arabic) ? i.arabic.join("\n") : i.arabic,
            malayalam: Array.isArray(i.malayalam) ? i.malayalam.join("\n") : i.malayalam,
            english: Array.isArray(i.english) ? i.english.join("\n") : i.english,
            start: index * 5,
            end: (index + 1) * 5,
          };
          insertDhikr(tx, "masjidDuas", item);
        });

        // 👶 SHORT SURAHS FOR KIDS
        shortSurahsForKids.content?.forEach((i, index) => {
          const item: DhikrItem = {
            id: i.id,
            text: Array.isArray(i.arabic) ? i.arabic.join("\n") : i.arabic,
            malayalam: Array.isArray(i.malayalam) ? i.malayalam.join("\n") : i.malayalam,
            english: Array.isArray(i.english) ? i.english.join("\n") : i.english,
            start: index * 5,
            end: (index + 1) * 5,
          };
          insertDhikr(tx, "shortSurahsForKids", item);
        });

        // 🏥 DUA FOR SICK
        duaForSick.content?.forEach((i, index) => {
          const item: DhikrItem = {
            id: i.id,
            text: Array.isArray(i.arabic) ? i.arabic.join("\n") : i.arabic,
            malayalam: Array.isArray(i.malayalam) ? i.malayalam.join("\n") : i.malayalam,
            english: Array.isArray(i.english) ? i.english.join("\n") : i.english,
            start: index * 5,
            end: (index + 1) * 5,
          };
          insertDhikr(tx, "duaForSick", item);
        });

        // 🏥 HOSPITAL SURGERY DUAS
        hospitalSurgeryDuas.content?.forEach((i, index) => {
          const item: DhikrItem = {
            id: i.id,
            text: Array.isArray(i.arabic) ? i.arabic.join("\n") : i.arabic,
            malayalam: Array.isArray(i.malayalam) ? i.malayalam.join("\n") : i.malayalam,
            english: Array.isArray(i.english) ? i.english.join("\n") : i.english,
            start: index * 5,
            end: (index + 1) * 5,
          };
          insertDhikr(tx, "hospitalSurgeryDuas", item);
        });

        // 🤰 PREGNANCY DUAS
        seedDuaCategory(tx, "pregnancyDuas", pregnancyDuas);

        // 📢 ADHAN & IQAMAH DUAS
        seedDuaCategory(tx, "adhanIqamahDuas", adhanIqamahDuas);

        // 🌅 AKHIRAH DUAS
        seedDuaCategory(tx, "akhirahDuas", akhirahDuas);

        // 😡 ANGER CONTROL DUAS
        seedDuaCategory(tx, "angerControlDuas", angerControlDuas);

        // 🙏 AT-TAHIYYAT
        seedDuaCategory(tx, "atTahiyyat", atTahiyyat);

        // 😴 BEFORE SLEEP ADHKAR
        seedDuaCategory(tx, "beforeSleepAdhkar", beforeSleepAdhkar);

        // 🤱 BREASTFEEDING DUAS
        seedDuaCategory(tx, "breastfeedingDuas", breastfeedingDuas);

        // 💼 BUSINESS LOSS RECOVERY DUAS
        seedDuaCategory(tx, "businessLossRecoveryDuas", businessLossRecoveryDuas);

        // ⚖️ COURT CASE DUAS
        seedDuaCategory(tx, "courtCaseDuas", courtCaseDuas);

        // 👶 DUAS FOR CHILDREN
        seedDuaCategory(tx, "duasForChildren", duasForChildren);

        // 👨‍👩‍👧‍👦 DUAS FOR PARENTS
        seedDuaCategory(tx, "duasForParents", duasForParents);

        // 👴 ELDERLY PARENTS DUAS
        seedDuaCategory(tx, "elderlyParentsDuas", elderlyParentsDuas);

        // 🌆 EVENING ADHKAR COMPLETE
        seedDuaCategory(tx, "eveningAdhkarComplete", eveningAdhkarComplete);

        // 📝 EXAM DUAS
        seedDuaCategory(tx, "examDuas", examDuas);

        // 👨‍👩‍👧‍👦 FAMILY UNITY DUAS
        seedDuaCategory(tx, "familyUnityDuas", familyUnityDuas);

        // 😨 FEAR & PANIC DUAS
        seedDuaCategory(tx, "fearPanicDuas", fearPanicDuas);

        // 🙏 FORGIVENESS DUAS
        seedDuaCategory(tx, "forgivenessDuas", forgivenessDuas);

        // 😢 GRIEF & LOSS DUAS
        seedDuaCategory(tx, "griefLossDuas", griefLossDuas);

        // 🛡️ NAZAR & BLACK MAGIC PROTECTION DUAS
        seedDuaCategory(tx, "nazarBlackMagicProtectionDuas", nazarBlackMagicProtectionDuas);

        // 🗣️ PROTECTION FROM GOSSIP DUAS
        seedDuaCategory(tx, "protectionFromGossipDuas", protectionFromGossipDuas);

        // 🌅 ASHRAQA BAIT FULL
        seedDuaCategory(tx, "ashraqaBaithFull", ashraqaBaithFull);

        // 🙏 DUA-UL-QUNOOT
        seedDuaCategory(tx, "duaUlQunoot", duaUlQunoot);

        // 🏥 DUA FOR SICKNESS
        seedDuaCategory(tx, "duaForSickness", duaForSickness);

        // 🌅 MORNING ADHKAR COMPLETE
        seedDuaCategory(tx, "morningAdhkarComplete", morningAdhkarComplete);

        // ⏰ WAKE UP ADHKAR
        seedDuaCategory(tx, "wakeUpAdhkar", wakeUpAdhkar);

        // 💑 MARRIAGE DUAS
        seedDuaCategory(tx, "marriageDuas", marriageDuas);

        // 🌧️ RAIN DUAS
        seedDuaCategory(tx, "rainDuas", rainDuas);

        // 🌪️ WIND & STORM DUAS
        seedDuaCategory(tx, "windStormDuas", windStormDuas);

        // 🛡️ PROTECTION DUAS
        seedDuaCategory(tx, "protectionDuas", protectionDuas);

        // 🎯 SUCCESS & MOTIVATION DUAS
        seedDuaCategory(tx, "successMotivationDuas", successMotivationDuas);

        // 🙏 SWALATHU IBRAMIYYA
        seedDuaCategory(tx, "swalathuIbramiyya", swalathuIbramiyya);

        // 🏠 HOUSE & LAND DUAS
        seedDuaCategory(tx, "houseLandDuas", houseLandDuas);

        // 💑 HUSBAND & WIFE DUAS
        seedDuaCategory(tx, "husbandWifeDuas", husbandWifeDuas);

        // 🧘 INNER PEACE DUAS
        seedDuaCategory(tx, "innerPeaceDuas", innerPeaceDuas);

        // 🔮 ISTIKHARA DUA
        seedDuaCategory(tx, "istikharaDua", istikharaDua);

        // 🕌 JUMUAH ADHKAR
        seedDuaCategory(tx, "jumuahAdhkar", jumuahAdhkar);

        // 👶 KIDS DAILY DUAS
        seedDuaCategory(tx, "kidsDailyDuas", kidsDailyDuas);

        // 👶 KIDS ISLAMIC DUAS
        seedDuaCategory(tx, "kidsIslamicDuas", kidsIslamicDuas);

        // 👶 KIDS LEARNING DUAS
        seedDuaCategory(tx, "kidsLearningDuas", kidsLearningDuas);

        // 📚 KNOWLEDGE DUAS
        seedDuaCategory(tx, "knowledgeDuas", knowledgeDuas);

        // 👶 NEWBORN DUAS
        seedDuaCategory(tx, "newbornDuas", newbornDuas);

        // ⚖️ OPPRESSION & JUSTICE DUAS
        seedDuaCategory(tx, "oppressionJusticeDuas", oppressionJusticeDuas);

        // 👨‍👩‍👧‍👦 SINGLE PARENT DUAS
        seedDuaCategory(tx, "singleParentDuas", singleParentDuas);

        // 😌 STRESS RELIEF DUAS
        seedDuaCategory(tx, "stressReliefDuas", stressReliefDuas);

        // 🙏 TAWBAH DUAS
        seedDuaCategory(tx, "taubahDuas", taubahDuas);

        // 💼 WORK & RIZQ DUAS
        seedDuaCategory(tx, "workRizqDuas", workRizqDuas);

        // 💰 ZAKAT DUAS
        seedDuaCategory(tx, "zakatDuas", zakatDuas);

        // 🙏 SALAWAT ON PROPHET
        seedDuaCategory(tx, "salawatOnProphet", salawatOnProphet);

        // 🕌 SALAM BAIT FULL
        seedDuaCategory(tx, "salamBaithFull", salamBaithFull);

        // 📿 BADER MOULID
        seedDuaCategory(tx, "baderMoulidData", baderMoulidData);

        // 📿 MANQUS MOULID
        seedDuaCategory(tx, "ManqusMoulidData", ManqusMoulidData);

        // 📜 QASEEDATHUL BURDA
        seedDuaCategory(tx, "qaseedathulBurda", qaseedathulBurda);
      },
      err => reject(err),
      () => {
        console.log("✅ All dhikr seeded (79+ categories - comprehensive dua collection)");
        resolve();
      }
    );
  });
};
