import type { Transaction } from "react-native-sqlite-storage";
import { seedDuaCategory } from "./seedDuaCategory";

/* 🔹 IMPORT ALL QASEEDA CONTENTS */
import { qaseedathulBurda } from "../../data/qaseeda/qaseedathulBurda/content";
import { ashraqaBaithFull } from "../../data/qaseeda/ashraqaBaithFull/content";
import { salamBaithFull } from "../../data/qaseeda/salamBaithFull/content";

/* 🔹 ONE PLACE MAP */
const QASEEDA_MAP = {
  qaseedathulBurda: qaseedathulBurda.content,
  ashraqaBaithFull: ashraqaBaithFull.content,
  salamBaithFull: salamBaithFull.content,
} as const;

export const seedQaseeda = (tx: Transaction) => {
  Object.entries(QASEEDA_MAP).forEach(([key, list]) => {
    if (Array.isArray(list) && list.length > 0) {
      seedDuaCategory(tx, key, list);
    }
  });
};