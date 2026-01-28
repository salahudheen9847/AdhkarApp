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

  /* 🔄 LOAD DATA + META */
  useEffect(() => {
    let cancelled = false;

    // reset on section change
    stopAudio();
    setCurrentIndex(0);
    setShowPlayer(false);

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
  }, [
    mode,
    type,
    stopAudio,
    setCurrentIndex,
    setShowPlayer,
  ]);

  /* ✨ HIGHLIGHT SYNC */
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

  /* 🧹 CLEANUP */
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, [stopAudio]);

  /* ✅ RETURN */
  return {
    currentIndex,
    currentTime,
    duration,
    fontSize,
    setFontSize,
    isPlaying,
    playbackRate,
    showPlayer,
    setShowPlayer,
    currentDuaList,
    title,
    scrollY,
    playAudio,
    onSeek,
    onChangeRate,
    stopAudio,
  };
};
