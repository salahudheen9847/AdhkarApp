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
  /* 🎧 core */
  const soundRef = useRef<Sound | null>(null);
  const intervalRef =
    useRef<ReturnType<typeof setInterval> | null>(
      null
    );

  /* ⏱ */
  const [currentTime, setCurrentTime] =
    useState(0);
  const [duration, setDuration] = useState(0);

  /* ▶️ state */
  const [isPlaying, setIsPlaying] =
    useState(false);
  const [playbackRate, setPlaybackRate] =
    useState(1);

  /* 🖍 highlight */
  const [currentIndex, setCurrentIndex] =
    useState<number | null>(null);

  /* 🔠 font */
  const [fontSize, setFontSize] =
    useState(27);

  /* 🎛 player UI */
  const [showPlayer, setShowPlayer] =
    useState(false);

  /* 🧹 cleanup */
  const cleanupPlayback = () => {
    intervalRef.current &&
      clearInterval(intervalRef.current);
    intervalRef.current = null;

    soundRef.current?.stop(() => {
      soundRef.current?.release();
      soundRef.current = null;
    });

    setIsPlaying(false);
    setCurrentTime(0);
    setCurrentIndex(null);
  };

  /* ▶️ play / pause */
  const playAudio = () => {
    if (!audioFileName) return;

    if (soundRef.current && isPlaying) {
      soundRef.current.pause();
      setIsPlaying(false);
      intervalRef.current &&
        clearInterval(intervalRef.current);
      return;
    }

    if (!soundRef.current) {
      const sound = new Sound(
        audioFileName,
        Platform.OS === "ios"
          ? Sound.MAIN_BUNDLE
          : undefined,
        error => {
          if (error) {
            console.log(
              "❌ AUDIO LOAD ERROR",
              error
            );
            return;
          }

          soundRef.current = sound;
          setDuration(sound.getDuration());
          sound.setSpeed(playbackRate);
          setIsPlaying(true);

          sound.play(cleanupPlayback);

          intervalRef.current = setInterval(
            () => {
              sound.getCurrentTime(sec =>
                setCurrentTime(sec)
              );
            },
            500
          );
        }
      );
    } else {
      soundRef.current.setSpeed(
        playbackRate
      );
      setIsPlaying(true);
      soundRef.current.play();

      intervalRef.current = setInterval(
        () => {
          soundRef.current?.getCurrentTime(
            sec => setCurrentTime(sec)
          );
        },
        500
      );
    }
  };

  /* 🎚 controls */
  const onSeek = (value: number) => {
    soundRef.current?.setCurrentTime(
      value
    );
    setCurrentTime(value);
  };

  const onChangeRate = (rate: number) => {
    setPlaybackRate(rate);
    soundRef.current?.setSpeed(rate);
  };

  useEffect(() => {
    return () => cleanupPlayback();
  }, []);

  /* ✅ RETURN (IMPORTANT) */
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
