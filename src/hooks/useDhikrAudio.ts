import { useState, useRef, useEffect, useCallback } from "react";
import { Animated, Platform } from "react-native";
import Sound from "react-native-sound";

import { getDhikrByType, getManqusMoulid } from "../db/queries";
import { DhikrDBItem } from "../types/DhikrTypes";

try {
  Sound.setCategory("Playback");
} catch {}

type UseDhikrAudioParams = {
  mode: "dhikr" | "manqus";
  type?: string; // dhikr only
};

export const useDhikrAudio = ({ mode, type }: UseDhikrAudioParams) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fontSize, setFontSize] = useState(27);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showPlayer, setShowPlayer] = useState(false);

  const [currentDuaList, setCurrentDuaList] = useState<DhikrDBItem[]>([]);
  const [audioFileName, setAudioFileName] = useState("");
  const [title, setTitle] = useState("");

  const soundRef = useRef<Sound | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  /* --------------------------------
     🔊 Load DB data (Dhikr / Manqus)
  ---------------------------------*/
  useEffect(() => {
    let mounted = true;

    (async () => {
      let rows: any[] = [];

      if (mode === "dhikr" && type) {
        rows = await getDhikrByType(type);
      }

      if (mode === "manqus") {
        rows = await getManqusMoulid();
      }

      if (!mounted) return;

      setCurrentDuaList(
        rows.map(r => ({
          id: r.id,
          text: r.arabic ?? r.text ?? "",
          malayalam: r.malayalam ?? "",
          english: r.english ?? "",
          start: r.start,
          end: r.end,
        }))
      );

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
        }
      }

      if (mode === "manqus") {
        setAudioFileName("manqus_moulid.mp3"); // 🔁 if available
        setTitle("📖 മൻഖൂസ് മൗലിദ്");
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
            d.start !== undefined &&
            d.end !== undefined &&
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

    if (soundRef.current) {
      soundRef.current.stop(() => {
        soundRef.current?.release();
      });
      soundRef.current = null;
    }

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

          sound.play(() => cleanupPlayback());

          intervalRef.current = setInterval(() => {
            updateTime(sound);
          }, 500);
        }
      );
    } else {
      soundRef.current.setSpeed(playbackRate);
      setIsPlaying(true);
      soundRef.current.play();

      intervalRef.current = setInterval(() => {
        updateTime(soundRef.current!);
      }, 500);
    }
  }, [audioFileName, isPlaying, playbackRate, updateTime, cleanupPlayback]);

  /* --------------------------------
     🎚️ Seek / Speed
  ---------------------------------*/
  const onSeek = (value: number) => {
    soundRef.current?.setCurrentTime(value);
    setCurrentTime(value);
  };

  const onChangeRate = (rate: number) => {
    setPlaybackRate(rate);
    if (soundRef.current) {
      soundRef.current.pause();
      soundRef.current.setSpeed(rate);
      soundRef.current.play();
    }
  };

  /* --------------------------------
     🔚 Unmount cleanup
  ---------------------------------*/
  useEffect(() => {
    return () => cleanupPlayback();
  }, [cleanupPlayback]);

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
