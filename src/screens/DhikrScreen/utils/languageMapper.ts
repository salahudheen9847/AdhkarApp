import type { AppLanguage } from "../../../data/labels";
import type { LanguageMode } from "../components/HeaderSection";

export const mapLanguageModeToAppLanguage = (
  mode: LanguageMode
): AppLanguage => {
  switch (mode) {
    case "arabic":
      return "arabic";
    case "arabic_english":
      return "english";
    case "arabic_malayalam":
      return "malayalam";
    default:
      return "arabic";
  }
};