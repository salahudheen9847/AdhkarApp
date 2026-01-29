// hooks/useDuaScreenLogic.ts
import { getHomeLabelText, type HomeLabelKey } from "../../../data/labels";
import { mapLanguageModeToAppLanguage } from "../utils/languageMapper";
import type { LanguageMode } from "../types";

export const useDuaScreenLogic = (
  route: any,
  languageMode: LanguageMode
) => {
  const type = route?.params?.type as HomeLabelKey | undefined;

  const title = type
    ? getHomeLabelText(
        type,
        mapLanguageModeToAppLanguage(languageMode)
      )
    : "";

  return {
    type,       // used for audio + data
    title,      // header title
  };
};