import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Sound from "react-native-sound";
import { adhkar } from "../../data/adhkar";
import { haddad } from "../../data/haddad";
import { duaQabar } from "../../data/duaQabar";
import { Animated } from "react-native";

Sound.setCategory("Playback");

export const useDhikrAudio = (type: string) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fontSize, setFontSize] = useState(20);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showPlayer, setShowPlayer] = useState(false);

  const soundRef = useRef<Sound | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const { currentDuaList, audioFileName, title } = useMemo(() => {
    switch (type) {
      case "adhkar":
        return { currentDuaList: adhkar, audioFileName: "adhkar_full.mp3", title: "📿 الدعاء للميت" };
      case "haddad":
        return { currentDuaList: haddad, audioFileName: "haddad_full.mp3", title: "📖 راتب الحداد" };
      default:
        return { currentDuaList: duaQabar, audioFileName: "dua_qabar_full.mp3", title: "🕋 دعاء القبر" };
    }
  }, [type]);

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

  const cleanupPlayback = useCallback(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setCurrentIndex(null);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const playAudio = useCallback(() => {
    if (soundRef.current && isPlaying) {
      soundRef.current.pause();
      setIsPlaying(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    if (!soundRef.current) {
      const sound = new Sound(audioFileName, Sound.MAIN_BUNDLE, (error) => {
        if (error) return console.log("❌ Load error:", error);
        setDuration(sound.getDuration());
        sound.setSpeed(playbackRate);
        soundRef.current = sound;
        setIsPlaying(true);
        sound.play(() => cleanupPlayback());
        intervalRef.current = setInterval(() => updateTime(sound), 500);
      });
    } else {
      const sound = soundRef.current;
      sound.setSpeed(playbackRate);
      sound.play(() => cleanupPlayback());
      setIsPlaying(true);
      intervalRef.current = setInterval(() => updateTime(sound), 500);
    }
  }, [audioFileName, isPlaying, playbackRate, updateTime, cleanupPlayback]);

  const onSeek = (value: number) => {
    soundRef.current?.setCurrentTime(value);
    setCurrentTime(value);
  };

  const onChangeRate = (rate: number) => {
    setPlaybackRate(rate);
    const sound = soundRef.current;
    if (!sound) return;
    const wasPlaying = isPlaying;
    sound.pause();
    sound.setSpeed(rate);
    if (wasPlaying) sound.play();
  };

  useEffect(() => {
    return () => {
      soundRef.current?.stop(() => soundRef.current?.release());
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

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
  };
};
