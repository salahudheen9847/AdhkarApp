import { useState } from "react";

export type ManqusItem = {
  id: number;
  start: number;
  end: number;
};

export const useManqusAudio = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const updateTime = (time: number, list: ManqusItem[]) => {
    const active = list.find(
      item => time >= item.start && time < item.end
    );

    if (active && active.id !== currentIndex) {
      setCurrentIndex(active.id);
    }
  };

  return {
    currentIndex,
    updateTime,
  };
};
