import { MOULID_LABEL } from "./label";

// 👉 bader moulid
import { baderMoulid } from "./baderMoulid/content";
import { BADER_MOULID_META } from "./baderMoulid/meta";

// 👉 manqus moulid
import { manqusMoulid } from "./manqusMoulid/content";
import { MANQUS_MOULID_META } from "./manqusMoulid/meta";

// 👉 HomeScreen → card click → detail mapping
export const MOULID_CONTENT = [
  baderMoulid,
  manqusMoulid,
];

// 👉 HomeScreen → cards (subtitle / title)
export const MOULID_META = [
  BADER_MOULID_META,
  MANQUS_MOULID_META,
];

export {
  MOULID_LABEL,
};
