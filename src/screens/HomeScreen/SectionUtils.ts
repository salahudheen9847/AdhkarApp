import { HomeItem } from "./HomeCard";

export const shouldHideTitle = (items: HomeItem[]) => {
  if (!items || items.length !== 1) return false;
  
  const mainCategories = [
    "dailyLifeDua", "dhikr", "familyDua", "healthDua", "justiceDuas",
    "kidsDua", "mentalDua", "protectionDuas", "rizqDuas", "salahDuas",
    "swalathDuas", "qaseeda", "ratib", "ramadan", "mayyitDuas", "moulid"
  ];

  return mainCategories.includes(items[0].originalId);
};