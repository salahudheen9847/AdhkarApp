import { useEffect, useState, useRef } from "react";
import { Animated } from "react-native";

import type { UseDuaAudioParams, DuaItem } from "./types";
import { resolveRows } from "./dataResolver";
import { mapRows } from "./mapper";
import { resolveTitleAndAudio } from "./titleResolver";
import { useAudioControls } from "./audioControls";

export const useDhikrAudio = ({ type }: UseDuaAudioParams) => {
  /* 📖 DATA */
  const [currentDuaList, setCurrentDuaList] = useState<DuaItem[]>([]);
  const [audioFileName, setAudioFileName] = useState<string>("");

  /* 🎚 SCROLL */
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

  /* 🔄 LOAD DATA + AUDIO (ONLY WHEN TYPE CHANGES) */
  useEffect(() => {
    let cancelled = false;

    // 🔴 reset everything safely
    stopAudio();
    setShowPlayer(false);
    setCurrentIndex(null);
    setCurrentDuaList([]);
    setAudioFileName("");

    (async () => {
      const rows = await resolveRows(type);
      if (cancelled) return;

      setCurrentDuaList(mapRows(rows));

      const meta = resolveTitleAndAudio(type);
      if (meta?.audio) {
        setAudioFileName(meta.audio); // e.g. "clothing_duas_full.mp3"
      } else {
        console.log("❌ NO AUDIO FOUND FOR TYPE:", type);
      }
    })();

    return () => {
      cancelled = true;
    };

    // ⚠️ INTENTIONAL:
    // stopAudio / setShowPlayer / setCurrentIndex are excluded
    // to avoid infinite render loops.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  /* ✨ AUDIO → TEXT HIGHLIGHT */
  useEffect(() => {
    if (!currentDuaList.length) return;

    const active = currentDuaList.find(
      d =>
        typeof d.start === "number" &&
        typeof d.end === "number" &&
        currentTime >= d.start &&
        currentTime < d.end
    );

    if (!active) return;

    setCurrentIndex(prev =>
      prev === active.id ? prev : active.id
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime, currentDuaList]);

  /* ✅ RETURN (PUBLIC API) */
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
    scrollY,

    playAudio,
    onSeek,
    onChangeRate,
    stopAudio,
  };
};