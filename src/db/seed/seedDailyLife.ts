import { seedDuaCategory } from "./seedDuaCategory";

import { homeDuas } from "../../data/daily-life-dua/homeDuas/content";
import { TravelDuas } from "../../data/daily-life-dua/TravelDuas/content";
import { clothingDuas } from "../../data/daily-life-dua/clothingDuas/content";
import { foodDuas } from "../../data/daily-life-dua/foodDuas/content";
import { MasjidDuas } from "../../data/daily-life-dua/MasjidDuas/content";
import { RainDuas } from "../../data/daily-life-dua/RainDuas/content";

export const seedDailyLife = (tx: any) => {
  seedDuaCategory(tx, "homeDuas", homeDuas);
  seedDuaCategory(tx, "TravelDuas", TravelDuas);
  seedDuaCategory(tx, "clothingDuas", clothingDuas);
  seedDuaCategory(tx, "foodDuas", foodDuas);
  seedDuaCategory(tx, "MasjidDuas", MasjidDuas);
  seedDuaCategory(tx, "RainDuas", RainDuas);
};
