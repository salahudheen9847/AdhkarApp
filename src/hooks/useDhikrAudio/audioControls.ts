import { useEffect, useRef, useState } from "react";
import { Platform } from "react-native";
import Sound from "react-native-sound";

type AudioControlsParams = {
  audioFileName: string;
};

try {
  Sound.setCategory("Playback");
} catch {}

export const useAudioControls = ({
  audioFileName,
}: AudioControlsParams) => {
  /* 🎧 refs */
  const soundRef = useRef<Sound | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ⏱ time */
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  /* ▶️ state */
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  /* 🖍 highlight */
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  /* 🔠 font */
  const [fontSize, setFontSize] = useState(27);

  /* 🎛 player UI */
  const [showPlayer, setShowPlayer] = useState(false);

  /* 🧹 cleanup (STABLE) */
  const cleanupPlayback = () => {
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
    setDuration(0);
    setCurrentIndex(null);
  };

  /* 🔁 PRELOAD audio when filename changes (🔥 IMPORTANT FIX) */
  useEffect(() => {
    if (!audioFileName) return;

    // reset previous sound
    cleanupPlayback();

    const sound = new Sound(
      audioFileName,
      Platform.OS === "ios" ? Sound.MAIN_BUNDLE : undefined,
      error => {
        if (error) {
          console.log("❌ AUDIO LOAD ERROR:", error);
          return;
        }

        soundRef.current = sound;
        const dur = sound.getDuration();
        setDuration(dur);

        console.log("✅ AUDIO LOADED:", audioFileName, "duration:", dur);
      }
    );

    return () => {
      sound.release();
      soundRef.current = null;
    };
  }, [audioFileName]);

  /* ▶️ play / pause */
  const playAudio = () => {
    if (!soundRef.current) {
      console.log("⏳ Audio not ready yet");
      return;
    }

    // pause
    if (isPlaying) {
      soundRef.current.pause();
      setIsPlaying(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // play
    soundRef.current.setSpeed(playbackRate);
    soundRef.current.play(cleanupPlayback);
    setIsPlaying(true);

    intervalRef.current = setInterval(() => {
      soundRef.current?.getCurrentTime(sec =>
        setCurrentTime(sec)
      );
    }, 500);
  };

  /* 🎚 seek */
  const onSeek = (value: number) => {
    if (!soundRef.current) return;
    soundRef.current.setCurrentTime(value);
    setCurrentTime(value);
  };

  /* ⏩ speed */
  const onChangeRate = (rate: number) => {
    setPlaybackRate(rate);
    soundRef.current?.setSpeed(rate);
  };

  /* 🧽 unmount cleanup */
  useEffect(() => {
    return () => cleanupPlayback();
  }, []);

  /* ✅ RETURN */
  return {
    currentIndex,
    setCurrentIndex,

    currentTime,
    duration,

    fontSize,
    setFontSize,

    isPlaying,
    playbackRate,

    showPlayer,
    setShowPlayer,

    playAudio,
    onSeek,
    onChangeRate,
    stopAudio: cleanupPlayback,
  };
};