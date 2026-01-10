import { useState, useRef, useEffect, useCallback } from "react";
import { Animated, Platform } from "react-native";
import Sound from "react-native-sound";

import {
  getDhikrByType,
  getManqusMoulid,
  getBaderMoulid,
} from "../db/queries";

import { ramadanAdhkar } from "../data/ramadan/ramadanAdhkar";
import { duaAfterSalah } from "../data/salah/duaAfterSalah";
import { adhkarAfterSalah } from "../data/salah/adhkarAfterSalah";
import { qaseedathulBurda } from "../data/qaseeda/qaseedathulBurda";
import { talqeenForMen } from "../data/TalqeenMen";
import { salawatOnProphet } from "../data/salathuIbrahim";
import { atTahiyyat } from "../data/at-tahiyyat";
import { duaUlQunoot } from "../data/dua-ul-qunoot";
import { morningAdhkarComplete } from "../data/morningAdhkarComplete";
import { eveningAdhkarComplete } from "../data/eveningAdhkarComplete";
import { beforeSleepAdhkar } from "../data/beforeSleepAdhkar";
import { wakeUpAdhkar } from "../data/wakeUpAdhkar";
import { foodDuas } from "../data/foodDuas";
import { travelDuas } from "../data/travelDuas";
import { homeDuas } from "../data/homeDuas";
import { jumuahAdhkar } from "../data/jumuahAdhkar";
import { protectionDuas } from "../data/protectionDuas";
import { duaForSick } from "../data/duaForSick";
import { istikharaDua } from "../data/istikharaDua";
import { kidsIslamicDuas } from "../data/kidsIslamicDuas";
import { masjidDuas } from "../data/masjidDuas";
import { adhanIqamahDuas } from "../data/adhanIqamahDuas";
import { shortSurahsForKids } from "../data/shortSurahsForKids";
import { janazahDuas } from "../data/janazahDuas";
import { zakatDuas } from "../data/zakatDuas";
import { taubahDuas } from "../data/taubahDuas";
import { duasForParents } from "../data/duasForParents";
import { rainDuas } from "../data/rainDuas";
import { duasForChildren } from "../data/duasForChildren";
import { sicknessDuas } from "../data/sicknessDuas";
import { duaForSickness } from "../data/duaForSickness";
import { anxietyWorryDuas } from "../data/anxietyWorryDuas";
import { workRizqDuas } from "../data/workRizqDuas";
import { marriageDuas } from "../data/marriageDuas";
import { forgivenessDuas } from "../data/forgivenessDuas";
import { pregnancyDuas } from "../data/pregnancyDuas";
import { knowledgeDuas } from "../data/knowledgeDuas";
import { akhirahDuas } from "../data/akhirahDuas";
import { husbandWifeDuas } from "../data/husbandWifeDuas";
import { elderlyParentsDuas } from "../data/elderlyParentsDuas";
import { windStormDuas } from "../data/windStormDuas";
import { fearPanicDuas } from "../data/fearPanicDuas";
import { examDuas } from "../data/examDuas";
import { hospitalSurgeryDuas } from "../data/hospitalSurgeryDuas";
import { oppressionJusticeDuas } from "../data/oppressionJusticeDuas";
import { newbornDuas } from "../data/newbornDuas";
import { familyUnityDuas } from "../data/familyUnityDuas";
import { griefLossDuas } from "../data/griefLossDuas";
import { innerPeaceDuas } from "../data/innerPeaceDuas";
import { stressReliefDuas } from "../data/stressReliefDuas";
import { badDreamDuas } from "../data/badDreamDuas";
import { angerControlDuas } from "../data/angerControlDuas";
import { protectionFromGossipDuas } from "../data/protectionFromGossipDuas";
import { kidsDailyDuas } from "../data/kidsDailyDuas";
import { kidsLearningDuas } from "../data/kidsLearningDuas";
import { breastfeedingDuas } from "../data/breastfeedingDuas";
import { singleParentDuas } from "../data/singleParentDuas";
import { successMotivationDuas } from "../data/successMotivationDuas";
import { debtReliefDuas } from "../data/debtReliefDuas";
import { houseLandDuas } from "../data/houseLandDuas";
import { businessLossRecoveryDuas } from "../data/businessLossRecoveryDuas";
import { courtCaseDuas } from "../data/courtCaseDuas";
import { nazarBlackMagicProtectionDuas } from "../data/nazarBlackMagicProtectionDuas";

try {
  Sound.setCategory("Playback");
} catch {}

/* --------------------------------
   🔹 Types
---------------------------------*/
type UseDhikrAudioParams = {
  mode: "dhikr" | "manqus" | "bader" | "qaseeda";
  type?: string;
};

type DuaItem = {
  id: number;
  isBox?: boolean;
  isHeading?: boolean;
  text: string;
  malayalam?: string;
  english?: string;
  start?: number;
  end?: number;
};

/* --------------------------------
   🎧 Hook
---------------------------------*/
export const useDhikrAudio = ({ mode, type }: UseDhikrAudioParams) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fontSize, setFontSize] = useState(27);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showPlayer, setShowPlayer] = useState(false);

  const [currentDuaList, setCurrentDuaList] = useState<DuaItem[]>([]);
  const [audioFileName, setAudioFileName] = useState("");
  const [title, setTitle] = useState("");

  const soundRef = useRef<Sound | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  /* --------------------------------
     🔊 Load Data + Audio
  ---------------------------------*/
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        let rows: any[] = [];

        // -------- DATA LOAD --------
        if (mode === "dhikr" && type) {
          if (type === "ramadanAdhkar") rows = ramadanAdhkar;
          else if (type === "adhkarAfterSalah") rows = duaAfterSalah;
          else if (type === "adhkarAfterSalah2") rows = adhkarAfterSalah;
          else if (type === "talqeenMen") rows = talqeenForMen.content;
          else if (type === "salawatulIbrahimiyya") rows = salawatOnProphet.content;
          else if (type === "atTahiyyat") rows = atTahiyyat.content;
          else if (type === "duaUlQunoot") rows = duaUlQunoot.content;
          else if (type === "morningAdhkarComplete") rows = morningAdhkarComplete.content;
          else if (type === "eveningAdhkarComplete") rows = eveningAdhkarComplete.content;
          else if (type === "beforeSleepAdhkar") rows = beforeSleepAdhkar.content;
          else if (type === "wakeUpAdhkar") rows = wakeUpAdhkar.content;
          else if (type === "foodDuas") rows = foodDuas.content;
          else if (type === "travelDuas") rows = travelDuas.content;
          else if (type === "homeDuas") rows = homeDuas.content;
          else if (type === "jumuahAdhkar") rows = jumuahAdhkar.content;
          else if (type === "protectionDuas") rows = protectionDuas.content;
          else if (type === "duaForSick") rows = duaForSick.content;
          else if (type === "istikharaDua") rows = istikharaDua.content;
          else if (type === "kidsIslamicDuas") rows = kidsIslamicDuas.content;
          else if (type === "masjidDuas") rows = masjidDuas.content;
          else if (type === "adhanIqamahDuas") rows = adhanIqamahDuas.content;
          else if (type === "shortSurahsForKids") rows = shortSurahsForKids.content;
          else if (type === "janazahDuas") rows = janazahDuas.content;
          else if (type === "zakatDuas") rows = zakatDuas.content;
          else if (type === "taubahDuas") rows = taubahDuas.content;
          else if (type === "duasForParents") rows = duasForParents.content;
          else if (type === "rainDuas") rows = rainDuas.content;
          else if (type === "duasForChildren") rows = duasForChildren.content;
          else if (type === "sicknessDuas") rows = sicknessDuas.content;
          else if (type === "anxietyWorryDuas") rows = anxietyWorryDuas.content;
          else if (type === "workRizqDuas") rows = workRizqDuas.content;
          else if (type === "marriageDuas") rows = marriageDuas.content;
          else if (type === "forgivenessDuas") rows = forgivenessDuas.content;
          else if (type === "pregnancyDuas") rows = pregnancyDuas.content;
          else if (type === "knowledgeDuas") rows = knowledgeDuas.content;
          else if (type === "akhirahDuas") rows = akhirahDuas.content;
          else if (type === "husbandWifeDuas") rows = husbandWifeDuas.content;
          else if (type === "elderlyParentsDuas") rows = elderlyParentsDuas.content;
          else if (type === "windStormDuas") rows = windStormDuas.content;
          else if (type === "fearPanicDuas") rows = fearPanicDuas.content;
          else if (type === "examDuas") rows = examDuas.content;
          else if (type === "hospitalSurgeryDuas") rows = hospitalSurgeryDuas.content;
          else if (type === "oppressionJusticeDuas") rows = oppressionJusticeDuas.content;
          else if (type === "newbornDuas") rows = newbornDuas.content;
          else if (type === "familyUnityDuas") rows = familyUnityDuas.content;
          else if (type === "griefLossDuas") rows = griefLossDuas.content;
          else if (type === "innerPeaceDuas") rows = innerPeaceDuas.content;
          else if (type === "stressReliefDuas") rows = stressReliefDuas.content;
          else if (type === "badDreamDuas") rows = badDreamDuas.content;
          else if (type === "angerControlDuas") rows = angerControlDuas.content;
          else if (type === "protectionFromGossipDuas") rows = protectionFromGossipDuas.content;
          else if (type === "kidsDailyDuas") rows = kidsDailyDuas.content;
          else if (type === "kidsLearningDuas") rows = kidsLearningDuas.content;
          else if (type === "breastfeedingDuas") rows = breastfeedingDuas.content;
          else if (type === "singleParentDuas") rows = singleParentDuas.content;
          else if (type === "successMotivationDuas") rows = successMotivationDuas.content;
          else if (type === "debtReliefDuas") rows = debtReliefDuas.content;
          else if (type === "houseLandDuas") rows = houseLandDuas.content;
          else if (type === "businessLossRecoveryDuas") rows = businessLossRecoveryDuas.content;
          else if (type === "courtCaseDuas") rows = courtCaseDuas.content;
          else if (type === "nazarBlackMagicProtectionDuas") rows = nazarBlackMagicProtectionDuas.content;
          else rows = await getDhikrByType(type);
        }

        if (mode === "manqus") rows = await getManqusMoulid();
        if (mode === "bader") rows = await getBaderMoulid();
        if (mode === "qaseeda") rows = qaseedathulBurda;

        if (cancelled) return;

        // -------- MAP DATA --------
        const mapped: DuaItem[] = rows.map(r => {
          if (mode === "dhikr") {
            if (type === "ramadanAdhkar" || type === "adhkarAfterSalah" || type === "adhkarAfterSalah2") {
              return {
                id: r.id,
                isBox: r.isBox,
                isHeading: r.isHeading,
                text: r.text ?? "",
                malayalam: r.malayalam ?? "",
                english: r.english ?? "",
                start: r.start,
                end: r.end,
              };
            }
            return {
              id: r.id,
              isBox: r.isBox === 1 || r.isBox === true,
              isHeading: r.isHeading,
              text: r.text ?? r.arabic ?? "",
              malayalam: r.malayalam ?? "",
              english: r.english ?? "",
              start: r.start,
              end: r.end,
            };
          }

          if (mode === "manqus" || mode === "bader" || mode === "qaseeda") {
            return {
              id: r.id,
              isBox: r.isBox === 1 || r.isBox === true,
              isHeading: r.isHeading,
              text: r.text ?? "",
              malayalam: r.malayalam ?? "",
              english: r.english ?? "",
              start: r.start,
              end: r.end,
            };
          }

          return null;
        }).filter(Boolean) as DuaItem[];

        setCurrentDuaList(mapped);

        // -------- AUDIO + TITLE --------
        if (mode === "dhikr") {
          switch (type) {
            case "duaMarichavark":
              setAudioFileName("dua_marichavark.mp3");
              setTitle("🙏 ദുആ മറിച്ചാർക്ക്");
              break;

            case "duaQabar":
              setAudioFileName("dua_qabar.mp3");
              setTitle("🪦 ഖബർ സിയാറ");
              break;

            case "haddad":
              setAudioFileName("haddad.mp3");
              setTitle("📿 ഹദ്ദാദ് റത്തീബ്");
              break;

            case "asmaulHusna":
              setAudioFileName("asmaul_husna.mp3");
              setTitle("🌟 അസ്മാഉൽ ഹുസ്ന");
              break;

            case "nariyathSwalath":
              setAudioFileName("nariyath_swalath.mp3");
              setTitle("🕌 നാരിയത്ത് സ്വലാത്ത്");
              break;

            case "salawatAlFatih":
              setAudioFileName("salawat_al_fatih.mp3");
              setTitle("💫 സലവാത്തുൽ ഫാത്വിഹ്");
              break;

            case "ramadanAdhkar":
              setAudioFileName("ramadan_adhkar.mp3");
              setTitle("🌙 റമദാൻ അദ്കാർ");
              break;

            case "thajuSwalath":
              setAudioFileName("thaju_swalath.mp3");
              setTitle("🌙 താജു സ്വലാത്ത്");
              break;

            case "adhkarAfterSalah":
              setAudioFileName("");
              setTitle("🕌 നിസ്കാര ശേഷം ദിക്‌ർ");
              break;

            case "adhkarAfterSalah2":
              setAudioFileName("");
              setTitle("🕌 പ്രാർത്ഥനകൾ");
              break;

            case "talqeenMen":
              setAudioFileName("");
              setTitle("🙏 പുരുഷന്മാർക്കുള്ള തൽഖീൻ");
              break;

            case "salawatulIbrahimiyya":
              setAudioFileName("");
              setTitle("🤲 സ്വലാത്തുൽ ഇബ്രാഹീമിയ്യ");
              break;

            case "atTahiyyat":
              setAudioFileName("");
              setTitle("🙏 അത്തഹിയ്യാത്ത് (തഷഹ്‌ഹുദ്)");
              break;

            case "duaUlQunoot":
              setAudioFileName("");
              setTitle("🤲 ദുആ-ഉൽ ഖുനൂത്");
              break;

            case "morningAdhkarComplete":
              setAudioFileName("");
              setTitle("🌅 പ്രഭാത ദിക്റുകാ (പൂർണം)");
              break;

            case "eveningAdhkarComplete":
              setAudioFileName("");
              setTitle("🌆 സന്ധ്യ ദിക്റുകാ (പൂർണ്ണം)");
              break;

            case "beforeSleepAdhkar":
              setAudioFileName("");
              setTitle("🌙 ഉറങ്ങുന്നതിന് മുമ്പുള്ള ദിക്റുകാ");
              break;

            case "wakeUpAdhkar":
              setAudioFileName("");
              setTitle("🌄 ഉണരുമ്പോഴുള്ള ദിക്റുകാ");
              break;

            case "foodDuas":
              setAudioFileName("");
              setTitle("🍽 ഭക്ഷണ ദുആകൾ");
              break;

            case "travelDuas":
              setAudioFileName("");
              setTitle("✈️ യാത്രാ ദുആകൾ");
              break;

            case "homeDuas":
              setAudioFileName("");
              setTitle("🏠 വീട്ടിൽ കയറുമ്പോൾ / ഇറങ്ങുമ്പോൾ ദുആകൾ");
              break;

            case "jumuahAdhkar":
              setAudioFileName("");
              setTitle("🕌 ജുമുഅ ദിവസം പ്രത്യേക്ഷിക്കുന്നു.");
              break;

            case "protectionDuas":
              setAudioFileName("");
              setTitle("🛡️ സംരക്ഷണ ദുആകൾ");
              break;

            case "duaForSick":
              setAudioFileName("");
              setTitle("🏥 രോഗിക്ക് / ബുദ്ധിമുട്ടിൽ ഉള്ളവർക്ക് ദുആകൾ");
              break;

            case "istikharaDua":
              setAudioFileName("");
              setTitle("🤲 ഇസ്തിഖാര ദുആ");
              break;

            case "kidsIslamicDuas":
              setAudioFileName("");
              setTitle("👶 കുട്ടികൾക്കുള്ള ഇസ്‌ലാമിക് ദുആകൾ");
              break;

            case "masjidDuas":
              setAudioFileName("");
              setTitle("🕌 മസ്ജിദ് ദുആകൾ");
              break;

            case "adhanIqamahDuas":
              setAudioFileName("");
              setTitle("📢 അദാൻ & ഇഖാമ ദുആകൾ");
              break;

            case "shortSurahsForKids":
              setAudioFileName("");
              setTitle("📖 കുട്ടികൾക്കുള്ള ചെറിയ സൂറകൾ");
              break;

            case "janazahDuas":
              setAudioFileName("");
              setTitle("⚰️ ജനാസ നമസ്കാര ദുആകൾ");
              break;

            case "zakatDuas":
              setAudioFileName("");
              setTitle("💰 സകാത്ത് ദുആകൾ");
              break;

            case "taubahDuas":
              setAudioFileName("");
              setTitle("🙏 തൗബ (പശ്ചാത്താപ) ദുആകൾ");
              break;

            case "duasForParents":
              setAudioFileName("");
              setTitle("👨‍👩‍👧‍👦 മാതാപിതാക്കൾക്കായുള്ള ദുആകൾ");
              break;

            case "rainDuas":
              setAudioFileName("");
              setTitle("🌧 മഴക്കായുള്ള ദുആകൾ");
              break;

            case "duasForChildren":
              setAudioFileName("");
              setTitle("👶 കുട്ടികൾക്കായുള്ള ദുആകൾ");
              break;

            case "sicknessDuas":
              setAudioFileName("");
              setTitle("🤒 രോഗാവസ്ഥയിൽ ദുആകൾ");
              break;

            case "anxietyWorryDuas":
              setAudioFileName("");
              setTitle("😰 ആകുലതയും ദുഃഖവും മാറാൻ ദുആകൾ");
              break;

            case "workRizqDuas":
              setAudioFileName("");
              setTitle("💼 ജോലിക്കും ഉപജീവനത്തിനും ദുആകൾ");
              break;

            case "marriageDuas":
              setAudioFileName("");
              setTitle("💑 വിവാഹത്തിനായുള്ള ദുആകൾ");
              break;

            case "forgivenessDuas":
              setAudioFileName("");
              setTitle("🙏 ക്ഷമയ്ക്കായുള്ള ദുആകൾ");
              break;

            case "pregnancyDuas":
              setAudioFileName("");
              setTitle("🤰 ഗർഭകാല ദുആകൾ");
              break;

            case "knowledgeDuas":
              setAudioFileName("");
              setTitle("📚 വിദ്യക്കും അറിവിനും വേണ്ട ദുആകൾ");
              break;

            case "akhirahDuas":
              setAudioFileName("");
              setTitle("🌟 ആഖിറത്തിനായുള്ള ദുആകൾ");
              break;

            case "husbandWifeDuas":
              setAudioFileName("");
              setTitle("❤️ ഭർത്താവും ഭാര്യയും തമ്മിലുള്ള ദുആകൾ");
              break;

            case "elderlyParentsDuas":
              setAudioFileName("");
              setTitle("👴 വൃദ്ധ മാതാപിതാക്കാക്കായുള്ള ദുആകൾ");
              break;

            case "windStormDuas":
              setAudioFileName("");
              setTitle("🌪️ കാറ്റ് / കൊടുങ്കാറ്റ് സമയത്തെ ദുആകൾ");
              break;

            case "fearPanicDuas":
              setAudioFileName("");
              setTitle("😨 ഭയവും പാനിക്കും സമയത്തെ ദുആകൾ");
              break;

            case "examDuas":
              setAudioFileName("");
              setTitle("📝 പരീക്ഷയ്ക്കുള്ള ദുആകൾ");
              break;

            case "hospitalSurgeryDuas":
              setAudioFileName("");
              setTitle("🏥� ആശുപത്രി / ശസ്ത്രക്രിയ്ക്കുള്ള ദുആകൾ");
              break;

            case "oppressionJusticeDuas":
              setAudioFileName("");
              setTitle("⚖️ അന്യായവും നീതിയും സംബന്ധിച്ച ദുആകൾ");
              break;

            case "newbornDuas":
              setAudioFileName("");
              setTitle("👶 പുതുജാത ശിശുവിനുള്ള ദുആകൾ");
              break;

            case "familyUnityDuas":
              setAudioFileName("");
              setTitle("👨‍👩‍👧‍👦 കുടുംബ ഐക്യത്തിനായുള്ള ദുആകൾ");
              break;

            case "griefLossDuas":
              setAudioFileName("");
              setTitle("💔 ദുഃഖവും നഷ്ടവും സമ്പത്തെ ദുആകൾ");
              break;

            case "innerPeaceDuas":
              setAudioFileName("");
              setTitle("🧘 ഹൃദയ സമാധാനത്തിനുള്ള ദുആകൾ");
              break;

            case "stressReliefDuas":
              setAudioFileName("");
              setTitle("😌 സമ്മർദ്ദവും മനസ്സിന്റെ ഭാരം മാറാൻ ഉള്ള ദുആകൾ");
              break;

            case "badDreamDuas":
              setAudioFileName("");
              setTitle("😴 ദുഃസ്വപ്നം കണ്ടാൽ ചൊല്ലേണ്ട ദുആകൾ");
              break;

            case "angerControlDuas":
              setAudioFileName("");
              setTitle("😤 കോപം നിയന്ത്രിക്കാൻ ഉള്ള ദുആകൾ");
              break;

            case "protectionFromGossipDuas":
              setAudioFileName("");
              setTitle("🤫 നാവിന്റെ പാപങ്ങളും നിന്ന് സംരക്ഷിക്കാനുള്ള ദുആകൾ");
              break;

            case "kidsDailyDuas":
              setAudioFileName("");
              setTitle("👶 കുട്ടികൾക്കുള്ള ദിവസേന ദുആകൾ");
              break;

            case "kidsLearningDuas":
              setAudioFileName("");
              setTitle("📚 കുട്ടികളുടെ പഠനത്തിനുള്ള ദുആകൾ");
              break;

            case "breastfeedingDuas":
              setAudioFileName("");
              setTitle("🍼 സ്തനപാനം സമയത്തെ ദുആകൾ");
              break;

            case "singleParentDuas":
              setAudioFileName("");
              setTitle("👨‍👩‍👧‍👦 ഒറ്റ രക്ഷിതാവിനുള്ള ദുആകൾ");
              break;

            case "successMotivationDuas":
              setAudioFileName("");
              setTitle("🎯 വിജയത്തിനും ആത്മവിശ്വാസത്തിനുമുള്ള ദുആകൾ");
              break;

            case "debtReliefDuas":
              setAudioFileName("");
              setTitle("💰 കടം തീരാനും സാമ്പത്തിക ബുദ്ധിമുട്ടുകൾ മാറാനും ദുആകൾ");
              break;

            case "businessLossRecoveryDuas":
              setAudioFileName("");
              setTitle("📈 വ്യാപാര നഷ്ടം മാറാനും ബറകത്ത് ലഭിക്കാനുമുള്ള ദുആകൾ");
              break;

            case "houseLandDuas":
              setAudioFileName("");
              setTitle("🏠 വീട് / ഭൂമി ലഭിക്കാൻ ഉള്ള ദുആകൾ");
              break;

            case "courtCaseDuas":
              setAudioFileName("");
              setTitle("⚖️ കോടതി / കേസ് വിഷയങ്ങളിൽ ചൊല്ലേണ്ട ദുആകൾ");
              break;

            case "nazarBlackMagicProtectionDuas":
              setAudioFileName("");
              setTitle("🛡️ കണ്ണേറും മന്ത്രവും നിന്ന് സംരക്ഷിക്കാനുള്ള ദുആകൾ");
              break;
          }
        }

        if (mode === "manqus") {
          setAudioFileName("manqus_moulid.mp3");
          setTitle("📖 മൻഖൂസ് മൗലിദ്");
        }

        if (mode === "bader") {
          setAudioFileName("bader_moulid.mp3");
          setTitle("📜 ബാദർ മൗലിദ്");
        }

        if (mode === "qaseeda") {
          setAudioFileName("qaseedathul_burda.mp3");
          setTitle("📜 ഖസീദത്തുൽ ബുർദ");
        }
      } catch (e) {
        console.error("❌ Data/Audio load error:", e);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [mode, type]);

  /* --------------------------------
     ⏱️ Highlight Sync
  ---------------------------------*/
  const updateTime = useCallback(
    (sound: Sound) => {
      sound.getCurrentTime(seconds => {
        setCurrentTime(seconds);

        const active = currentDuaList.find(
          d =>
            typeof d.start === "number" &&
            typeof d.end === "number" &&
            seconds >= d.start &&
            seconds < d.end
        );

        if (active && active.id !== currentIndex) {
          setCurrentIndex(active.id);
        }
      });
    },
    [currentDuaList, currentIndex]
  );

  /* --------------------------------
     🧹 Cleanup
  ---------------------------------*/
  const cleanupPlayback = useCallback(() => {
    intervalRef.current && clearInterval(intervalRef.current);
    intervalRef.current = null;

    soundRef.current?.stop(() => {
      soundRef.current?.release();
      soundRef.current = null;
    });

    setIsPlaying(false);
    setCurrentTime(0);
    setCurrentIndex(null);
  }, []);

  /* --------------------------------
     ▶️ Play / Pause
  ---------------------------------*/
  const playAudio = useCallback(() => {
    if (!audioFileName) return;

    if (soundRef.current && isPlaying) {
      soundRef.current.pause();
      setIsPlaying(false);
      intervalRef.current && clearInterval(intervalRef.current);
      return;
    }

    if (!soundRef.current) {
      const sound = new Sound(
        audioFileName,
        Platform.OS === "ios" ? Sound.MAIN_BUNDLE : undefined,
        error => {
          if (error) {
            console.log("❌ AUDIO LOAD ERROR:", error);
            return;
          }

          soundRef.current = sound;
          setDuration(sound.getDuration());
          sound.setSpeed(playbackRate);
          setIsPlaying(true);
          sound.play(cleanupPlayback);

          intervalRef.current = setInterval(
            () => updateTime(sound),
            500
          );
        }
      );
    } else {
      soundRef.current.setSpeed(playbackRate);
      setIsPlaying(true);
      soundRef.current.play();

      intervalRef.current = setInterval(
        () => updateTime(soundRef.current!),
        500
      );
    }
  }, [audioFileName, isPlaying, playbackRate, updateTime, cleanupPlayback]);

  /* --------------------------------
     🎚️ Controls
  ---------------------------------*/
  const onSeek = (value: number) => {
    soundRef.current?.setCurrentTime(value);
    setCurrentTime(value);
  };

  const onChangeRate = (rate: number) => {
    setPlaybackRate(rate);
    soundRef.current?.setSpeed(rate);
  };

  useEffect(() => () => cleanupPlayback(), [cleanupPlayback]);

  /* --------------------------------
     ✅ RETURN
  ---------------------------------*/
  return {
    currentIndex,
    currentTime,
    duration,
    fontSize,
    isPlaying,
    playbackRate,
    showPlayer,
    currentDuaList,
    title,
    scrollY,
    setShowPlayer,
    setFontSize,
    playAudio,
    onSeek,
    onChangeRate,
    stopAudio: cleanupPlayback,
  };
};
