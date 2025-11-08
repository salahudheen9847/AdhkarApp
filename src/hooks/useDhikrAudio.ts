import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { Animated, Platform } from "react-native";
import Sound from "react-native-sound";
import { duaMarichavark } from "../data/duaMarichavark";
import { haddad } from "../data/haddad";
import { duaQabar } from "../data/duaQabar";
import { asmaulHusna } from "../data/AsmaulHusna";

Sound.setCategory("Playback");

export const useDhikrAudio = (type: string) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fontSize, setFontSize] = useState(27);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showPlayer, setShowPlayer] = useState(false);

  const soundRef = useRef<Sound | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  // 🔊 Select data dynamically
  const { currentDuaList, audioFileName, title } = useMemo(() => {
    switch (type) {
      case "duaMarichavark":
        return {
          currentDuaList: duaMarichavark,
          audioFileName: "dua_marichavark.mp3",
          title: "📿 ദുഅ മരിച്ചവർക്കായി",
        };
      case "duaQabar":
        return {
          currentDuaList: duaQabar,
          audioFileName: "dua_qabar_full.mp3",
          title: "🕋 ദുഅ കബറിന്",
        };
      case "haddad":
        return {
          currentDuaList: haddad,
          audioFileName: "haddad_full.mp3",
          title: "📖 റാതിബ് അൽ ഹദ്ദാദ്",
        };
      case "asmaulHusna":
        return {
          currentDuaList: asmaulHusna,
          audioFileName: "asmaul_husna.mp3",
          title: "🕋 അസ്മൗൽ ഹുസ്ന",
        };
      default:
        return {
          currentDuaList: duaQabar,
          audioFileName: "dua_qabar_full.mp3",
          title: "🕋 ദുഅ കബറിന്",
        };
    }
  }, [type]);

  // ⏱️ Update playback time
  const updateTime = useCallback(
    (sound: Sound) => {
      sound.getCurrentTime((seconds) => {
        setCurrentTime(seconds);
        const currentLine = currentDuaList.find(
          (a) => seconds >= a.start && seconds < a.end
        );
        if (currentLine && currentLine.id !== currentIndex) {
          setCurrentIndex(currentLine.id);
        }
      });
    },
    [currentDuaList, currentIndex]
  );

  // 🧹 Cleanup
  const cleanupPlayback = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (soundRef.current) {
      soundRef.current.stop(() => {
        soundRef.current?.release();
        soundRef.current = null;
      });
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setCurrentIndex(null);
  }, []);

  // ▶️ Play / Pause
  const playAudio = useCallback(() => {
    try {
      if (soundRef.current && isPlaying) {
        soundRef.current.pause();
        setIsPlaying(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
        return;
      }

      if (!soundRef.current) {
        // ✅ Platform-safe loading
        const sound = new Sound(
          audioFileName,
          Platform.OS === "ios" ? Sound.MAIN_BUNDLE : undefined,
          (error) => {
            if (error) {
              console.log("❌ Load error:", error);
              return;
            }

            soundRef.current = sound;
            setDuration(sound.getDuration());
            sound.setSpeed(playbackRate);
            setIsPlaying(true);

            sound.play((success) => {
              if (success) {
                console.log("✅ Playback finished");
              } else {
                console.log("⚠️ Playback failed");
              }
              cleanupPlayback();
            });

            intervalRef.current = setInterval(() => updateTime(sound), 500);
          }
        );
      } else {
        const sound = soundRef.current;
        sound.setSpeed(playbackRate);
        setIsPlaying(true);
        sound.play((success) => {
          if (!success) console.log("⚠️ Resume failed");
          setIsPlaying(false);
        });
        intervalRef.current = setInterval(() => updateTime(sound), 500);
      }
    } catch (err) {
      console.log("🚨 Audio play error:", err);
    }
  }, [audioFileName, isPlaying, playbackRate, updateTime, cleanupPlayback]);

  // ⏹️ Stop
  const stopAudio = useCallback(() => {
    cleanupPlayback();
  }, [cleanupPlayback]);

  // 🎚️ Seek
  const onSeek = (value: number) => {
    soundRef.current?.setCurrentTime(value);
    setCurrentTime(value);
  };

  // ⚡ Speed control
  const onChangeRate = (rate: number) => {
    setPlaybackRate(rate);
    const sound = soundRef.current;
    if (!sound) return;
    const wasPlaying = isPlaying;
    sound.pause();
    sound.setSpeed(rate);
    if (wasPlaying) sound.play();
  };

  // 🧼 Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanupPlayback();
    };
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
    stopAudio,
  };
};
