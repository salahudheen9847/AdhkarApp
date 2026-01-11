import { HOME_LABELS } from "./HomeData";
import { SECTION_MAPPING } from "./sectionMapping";
import { SECTION_EMOJIS } from "./sectionEmojis";
import { ITEM_EMOJIS } from "./itemEmojis";

export const HOME_ORDER = Object.keys(HOME_LABELS).map(key => {
  const typedKey = key as keyof typeof HOME_LABELS;
  const section = SECTION_MAPPING[typedKey];

  return {
    key: typedKey,
    // ⭐ priority: item emoji → section emoji
    emoji: ITEM_EMOJIS[typedKey] ?? SECTION_EMOJIS[section],
  };
});
