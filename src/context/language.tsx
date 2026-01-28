import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

/* ---------------- TYPES ---------------- */

export type AppLanguage = "malayalam" | "english" | "arabic";

type LanguageContextType = {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
};

/* ---------------- CONTEXT ---------------- */

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

/* ---------------- PROVIDER ---------------- */

type Props = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguageState] =
    useState<AppLanguage>("malayalam");

  /* 🔁 Load saved language */
  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem("app_language");
        if (
          saved === "malayalam" ||
          saved === "english" ||
          saved === "arabic"
        ) {
          setLanguageState(saved);
        }
      } catch (e) {
        console.warn("❌ Failed to load language", e);
      }
    })();
  }, []);

  /* 🌐 Change language */
  const setLanguage = async (lang: AppLanguage) => {
    setLanguageState(lang);
    try {
      await AsyncStorage.setItem("app_language", lang);
    } catch (e) {
      console.warn("❌ Failed to save language", e);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

/* ---------------- HOOK ---------------- */

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);

  if (!ctx) {
    console.warn(
      "⚠️ useLanguage must be used inside <LanguageProvider>"
    );
    return {
      language: "malayalam" as AppLanguage,
      setLanguage: () => {},
    };
  }

  return ctx;
};