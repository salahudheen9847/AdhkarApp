import { useMemo } from "react";
import { HOME_META_LIST } from "../../../data/homeMeta";
import { getHomeLabelText, type HomeLabelKey, type AppLanguage } from "../../../data/labels";
import { SECTION_CARD_CONFIG } from "../../../data/homeCardConfig";

export function useSearchFilter(query: string, language: AppLanguage, isFavourite: (id: HomeLabelKey) => boolean) {
  
  const filteredMeta = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return HOME_META_LIST;

    return HOME_META_LIST.filter(item => {
      // എല്ലാ ഭാഷകളിലുമുള്ള ടൈറ്റിൽ എടുക്കുന്നു
      const titleEn = getHomeLabelText(item.id as HomeLabelKey, "english").toLowerCase();
      const titleMl = getHomeLabelText(item.id as HomeLabelKey, "malayalam").toLowerCase();
      const titleAr = getHomeLabelText(item.id as HomeLabelKey, "arabic" as any).toLowerCase();

      // ഇതിൽ ഏതെങ്കിലും ഒന്നിൽ സെർച്ച് ചെയ്യുന്ന അക്ഷരം ഉണ്ടോ എന്ന് നോക്കുന്നു
      return titleEn.includes(q) || titleMl.includes(q) || titleAr.includes(q);
    });
  }, [query]);

  const mapToHomeItems = (metaList: typeof HOME_META_LIST) =>
    metaList.map((item, index) => {
      const config = SECTION_CARD_CONFIG[item.section ?? "daily"];
      return {
        id: `${item.id}-${index}`,
        originalId: item.id,
        icon: config.icon,
        gradient: config.gradient,
        isFavourite: isFavourite(item.id as HomeLabelKey),
      };
    });

  return { filteredMeta, mapToHomeItems };
}