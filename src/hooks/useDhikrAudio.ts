import { useState, useRef, useEffect, useCallback } from "react";
import { Animated, Platform } from "react-native";
import Sound from "react-native-sound";

import {
  getDhikrByType,
  getManqusMoulid,
  getBaderMoulid,
} from "../db/queries";
import { ramadanAdhkar } from "../data/ramadan/ramadanAdhkar";

try {
  Sound.setCategory("Playback");
} catch { }

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
     🔊 Load DB data
  ---------------------------------*/
  useEffect(() => {
    let mounted = true;

    (async () => {
      let rows: any[] = [];

      if (mode === "dhikr" && type) {
        if (type === "ramadanAdhkar") {
          // Use ramadanAdhkar from TypeScript file
          rows = ramadanAdhkar;
        } else {
          rows = await getDhikrByType(type);
        }
      }

      if (mode === "manqus") {
        rows = await getManqusMoulid();
      }

      if (mode === "bader") {
        rows = await getBaderMoulid();
      }

      if (!mounted) return;

      const mapped: DuaItem[] = rows
        .map(r => {
          if (mode === "dhikr") {
            if (type === "ramadanAdhkar") {
              // ramadanAdhkar already has correct structure
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
            } else {
              return {
                id: r.id,
                isBox: false,
                text: r.arabic ?? "",
                malayalam: r.malayalam ?? "",
                english: r.english ?? "",
                start: r.start,
                end: r.end,
              };
            }
          }

          if (mode === "manqus" || mode === "bader") {
            return {
              id: r.id,
              isBox: r.isBox === 1 || r.isBox === true,
              text: r.text ?? "",
              malayalam: r.malayalam ?? "",
              english: r.english ?? "",
              start: r.start,
              end: r.end,
            };
          }

          return null;
        })
        .filter(Boolean) as DuaItem[];

      setCurrentDuaList(mapped);

      /* 🎧 Audio + Title */
      if (mode === "dhikr") {
        switch (type) {
          case "duaMarichavark":
            setAudioFileName("dua_marichavark.mp3");
            setTitle("📿 ദുഅ മരിച്ചവർക്കായി");
            break;

          case "duaQabar":
            setAudioFileName("dua_qabar_full.mp3");
            setTitle("🕋 ദുഅ കബറിന്");
            break;

          case "haddad":
            setAudioFileName("haddad_full.mp3");
            setTitle("📖 റാതിബ് അൽ ഹദ്ദാദ്");
            break;

          case "asmaulHusna":
            setAudioFileName("asmaul_husna.mp3");
            setTitle("🕋 അസ്മൗൽ ഹുസ്ന");
            break;

          /* 🌸 NARIYATH SWALATH */
          case "nariyathSwalath":
            setAudioFileName("nariyath_swalath.mp3");
            setTitle("🤍 നിര്യത്ത് സ്വലാത്ത്");
            break;

          /* 🤍 THAJU SWALATH (no audio asset yet) */
          case "thajuSwalath":
            setAudioFileName("");
            setTitle("🤍 താജു സ്വലാത്ത്");
            break;

          /* 🌙 RAMADAN ADHKAR (no audio asset yet) */
          case "ramadanAdhkar":
            setAudioFileName("");
            setTitle("🌙 റമദാൻ അദ്കാർ");
            break;

          /* 🌟 SALAWAT AL-FATIH */
          case "salawatAlFatih":
            setAudioFileName("salawat_al_fatih.mp3");
            setTitle("🤍 സലവാത്ത് അൽ ഫാത്തിഹ്");
            break;
        }
      }

      if (mode === "manqus") {
        setAudioFileName("manqus_moulid.mp3");
        setTitle("📖 മൻഖൂസ് മൗലിദ്");
      }

      if (mode === "bader") {
        setAudioFileName("bader_moulid.mp3");
        setTitle("🌙 അഹ്‌ലുൽ ബദർ മൗലിദ്");
      }
    })();

    return () => {
      mounted = false;
    };
  }, [mode, type]);

  /* --------------------------------
     ⏱️ Highlight logic
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
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

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

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
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
  }, [
    audioFileName,
    isPlaying,
    playbackRate,
    updateTime,
    cleanupPlayback,
  ]);

  /* --------------------------------
     🎚️ Seek / Speed
  ---------------------------------*/
  const onSeek = (value: number) => {
    soundRef.current?.setCurrentTime(value);
    setCurrentTime(value);
  };

  const onChangeRate = (rate: number) => {
    setPlaybackRate(rate);
    soundRef.current?.setSpeed(rate);
  };

  /* --------------------------------
     🔚 Unmount cleanup
  ---------------------------------*/
  useEffect(() => {
    return () => cleanupPlayback();
  }, [cleanupPlayback]);

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
