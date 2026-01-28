import { getHomeLabelText, type HomeLabelKey } from "../../../data/labels";
import { mapLanguageModeToAppLanguage } from "../utils/languageMapper";
import type { LanguageMode } from "../components/HeaderSection";

export const useDhikrScreenLogic = (
  route: any,
  languageMode: LanguageMode
) => {
  // 👉 Only dhikr mode
  const mode: "dhikr" = "dhikr";

  // 👉 Read type safely from route
  const routeType = route?.params?.type as HomeLabelKey | undefined;

  // 👉 Use route type if available, otherwise undefined
  const headerType: HomeLabelKey | undefined = routeType;

  // 👉 Localized header title (safe)
  const headerTitle = headerType
    ? getHomeLabelText(
        headerType,
        mapLanguageModeToAppLanguage(languageMode)
      )
    : "";

  return {
    mode,
    audioType: headerType,
    headerType,
    headerTitle,
  };
};