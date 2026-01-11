import { useEffect, useState, useRef } from "react";
import { Animated } from "react-native";

import { UseDhikrAudioParams, DuaItem } from "./types";
import { resolveRows } from "./dataResolver";
import { mapRows } from "./mapper";
import { resolveTitleAndAudio } from "./titleResolver";
import { useAudioControls } from "./audioControls";

export const useDhikrAudio = ({ mode, type }: UseDhikrAudioParams) => {
  /* 📖 DATA */
  const [currentDuaList, setCurrentDuaList] = useState<DuaItem[]>([]);
  const [audioFileName, setAudioFileName] = useState("");
  const [title, setTitle] = useState("");

  /* 🎚 UI */
  const scrollY = useRef(new Animated.Value(0)).current;

  /* 🔄 LOAD DATA + META */
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const rows = await resolveRows(mode, type);
      if (cancelled) return;

      const mapped = mapRows(rows, mode, type);
      setCurrentDuaList(mapped);

      const meta = resolveTitleAndAudio(mode, type);
      setAudioFileName(meta.audio);
      setTitle(meta.title);
    })();

    return () => {
      cancelled = true;
    };
  }, [mode, type]);

  /* 🎧 AUDIO CONTROLS */
  const {
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
    stopAudio,
  } = useAudioControls({ audioFileName });

  /* ✨ HIGHLIGHT SYNC (ESLint SAFE) */
  useEffect(() => {
    if (!currentDuaList.length) return;

    const active = currentDuaList.find(
      d =>
        typeof d.start === "number" &&
        typeof d.end === "number" &&
        currentTime >= d.start &&
        currentTime < d.end
    );

    if (active && active.id !== currentIndex) {
      setCurrentIndex(active.id);
    }
  }, [currentTime, currentDuaList, currentIndex, setCurrentIndex]);

  /* ✅ RETURN */
  return {
    // 🔹 highlight
    currentIndex,

    // 🔹 time
    currentTime,
    duration,

    // 🔹 font
    fontSize,
    setFontSize,

    // 🔹 player state
    isPlaying,
    playbackRate,
    showPlayer,
    setShowPlayer,

    // 🔹 data
    currentDuaList,
    title,
    scrollY,

    // 🔹 controls
    playAudio,
    onSeek,
    onChangeRate,
    stopAudio,
  };
};
