import { seedDuaCategory } from "./seedDuaCategory";

import { homeDuas } from "../../data/daily-life-dua/home-duas/content";
import { TravelDuas } from "../../data/daily-life-dua/travel-duas/content";
import { clothingDuas } from "../../data/daily-life-dua/clothing-duas/content";
import { foodDuas } from "../../data/daily-life-dua/food-duas/content";
import { MasjidDuas } from "../../data/daily-life-dua/masjid-duas/content";
import { RainDuas } from "../../data/daily-life-dua/rain-duas/content";
import { sleepDuas } from "../../data/daily-life-dua/sleep-duas/content";
import { toiletDuas } from "../../data/daily-life-dua/toilet-duas/content";

export const seedDailyLife = (tx: any) => {
  seedDuaCategory(tx, "homeDuas", homeDuas);
  seedDuaCategory(tx, "TravelDuas", TravelDuas);
  seedDuaCategory(tx, "clothingDuas", clothingDuas);
  seedDuaCategory(tx, "foodDuas", foodDuas);
  seedDuaCategory(tx, "MasjidDuas", MasjidDuas);
  seedDuaCategory(tx, "RainDuas", RainDuas);
  seedDuaCategory(tx, "sleepDuas", sleepDuas);
  seedDuaCategory(tx, "toiletDuas", toiletDuas);
};
