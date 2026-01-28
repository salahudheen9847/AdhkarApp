import { db } from "../db";
import type { SQLiteDatabase, Transaction } from "react-native-sqlite-storage";

// ---------------- SEED FUNCTIONS ----------------
import { seedDailyLife } from "./seedDailyLife";
import { seedDhikr } from "./seedDhikr";
import { seedFamily } from "./seedFamily";
import { seedHaddad } from "./seedHaddad";
import { seedHealth } from "./seedHealth";
import { seedJustice } from "./seedJustice";
import { seedKids } from "./seedKids";
import { seedMental } from "./seedMental";
import { seedMoulid } from "./seedMoulid";
import { seedProtection } from "./seedProtection";
import { seedQaseeda } from "./seedQaseeda";
import { seedRamadan } from "./seedRamadan";
import { seedRizq } from "./seedRizq";
import { seedSalah } from "./seedSalah";
import { seedSwalath } from "./seedSwalath";
import { seedMayyit } from "./seedMayyit";

// ---------------- MAIN SEED ----------------
export const seedAll = async (): Promise<void> => {
  const database: SQLiteDatabase = await db;

  return new Promise<void>((resolve, reject) => {
    database.transaction(
      (tx: Transaction) => {
        seedDailyLife(tx);
        seedDhikr(tx);
        seedFamily(tx);
        seedHaddad(tx);
        seedHealth(tx);
        seedJustice(tx);
        seedKids(tx);
        seedMental(tx);
        seedMoulid(tx);
        seedProtection(tx);
        seedQaseeda(tx);
        seedRamadan(tx);
        seedRizq(tx);
        seedSalah(tx);
        seedSwalath(tx);
        seedMayyit(tx);
      },
      (error) => {
        console.error("❌ DB SEED FAILED", error);
        reject(error);
      },
      () => {
        console.log("✅ DB SEED SUCCESS");
        resolve();
      }
    );
  });
};
