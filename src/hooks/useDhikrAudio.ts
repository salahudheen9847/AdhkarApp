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

try {
  Sound.setCategory("Playback");
} catch {}

/* --------------------------------
   🔹 Types
---------------------------------*/
type UseDhikrAudioParams = {
  mode: "dhikr" | "manqus" | "bader";
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
          else rows = await getDhikrByType(type);
        }

        if (mode === "manqus") rows = await getManqusMoulid();
        if (mode === "bader") rows = await getBaderMoulid();

        if (cancelled) return;

        // -------- MAP DATA --------
        const mapped: DuaItem[] = rows.map(r => ({
          id: r.id,
          isBox: r.isBox === 1 || r.isBox === true,
          isHeading: r.isHeading,
          text: r.text ?? r.arabic ?? "",
          malayalam: r.malayalam ?? "",
          english: r.english ?? "",
          start: r.start,
          end: r.end,
        }));

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
