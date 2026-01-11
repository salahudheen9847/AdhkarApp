import { ramadanAdhkar } from "../../data/ramadan/ramadanAdhkar";

import { duaAfterSalah } from "../../data/salah/duaAfterSalah";
import { adhkarAfterSalah } from "../../data/salah/adhkarAfterSalah";

import { qaseedathulBurda } from "../../data/qaseeda/qaseedathulBurda";

import { duaMarichavarkData } from "../../data/duaMarichavark/duaMarichavarkData";
import { duaQabarData } from "../../data/duaQabar/duaQabarData";
import { haddadData } from "../../data/haddad/haddadData";
import { asmaulHusnaData } from "../../data/asmaulHusna/asmaulHusnaData";

import { nariyathSwalath } from "../../data/swalath/nariyathSwalath";
import { salawatAlFatih } from "../../data/swalath/salawatAlFatih";
import { thajuSwalath } from "../../data/swalath/thajuSwalath";

import { talqeenForMen } from "../../data/TalqeenMen";
import { baderMoulidData } from "../../data/BaderMoulid/baderMoulidData";
import { ManqusMoulidData } from "../../data/ManqusMoulid/manqusMoulidData";

/* 🔐 SAFE NORMALIZE (talqeen content issue avoid cheyyan) */
const talqeenMenData = Array.isArray(talqeenForMen)
  ? talqeenForMen
  : talqeenForMen?.content ?? [];

/* ✅ MAIN REGISTRY */
export const DHIKR_REGISTRY: Record<string, any[]> = {
  /* Duas */
  duaMarichavark: duaMarichavarkData,
  duaQabar: duaQabarData,

  /* Ratheeb / Dhikr */
  haddad: haddadData,
  asmaulHusna: asmaulHusnaData,

  /* Swalath */
  nariyathSwalath,
  salawatAlFatih,
  thajuSwalath,

  /* Talqeen */
  talqeenMen: talqeenMenData,

  /* Moulid */
  baderMoulidData,
  ManqusMoulidData,

  /* Ramadan */
  ramadanAdhkar,

  /* Salah */
  adhkarAfterSalah,
  duaAfterSalah,

  /* Qaseeda */
  qaseedathulBurda,
};
