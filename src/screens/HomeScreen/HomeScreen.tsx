import React, { useState, useMemo } from "react";
import {
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { SimpleSearchBar } from "./SimpleSearchBar";
import { ShareButton } from "../../components/ShareButton";

import { HOME_LABELS } from "./data/HomeData";
import { HOME_ORDER } from "./data/homeOrder";

// ✅ IMPORT STYLES (NO CONFLICT)
import { homeStyles as styles } from "./HomeStyles";

/* ---------------- TYPES ---------------- */

type Language = "malayalam" | "english" | "arabic";

/* ---------------- HELPERS ---------------- */

// 🔑 universal normalize (Malayalam / Manglish / English / Arabic safe)
const normalize = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "")
    .normalize("NFKD");

/* ---------------- SCREEN ---------------- */

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  const [language, setLanguage] = useState<Language>("malayalam");
  const [query, setQuery] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  /* ---------------- SEARCH (FIXED) ---------------- */

  const filteredItems = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return HOME_ORDER;

    return HOME_ORDER.filter(item => {
      const label = HOME_LABELS[item.key];

      return (
        normalize(label.malayalam).includes(q) || // Malayalam
        normalize(label.manglish).includes(q) ||  // ✅ Manglish
        normalize(label.english).includes(q) ||   // English
        normalize(label.arabic).includes(q)       // Arabic
      );
    });
  }, [query]);

  /* ---------------- UI ---------------- */

  return (
    <SafeAreaView style={styles.flexContainer}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.appTitle}>AdhkarApp</Text>

          <View style={styles.headerOptions}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => setIsDarkTheme(!isDarkTheme)}
            >
              <Text>{isDarkTheme ? "🌙" : "☀️"}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => navigation.navigate("Settings")}
            >
              <Text>⚙️</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => navigation.navigate("About")}
            >
              <Text>ℹ️</Text>
            </TouchableOpacity>
          </View>

          <ShareButton />
        </View>

        {/* LANGUAGE SWITCH */}
        <View style={styles.languageSwitch}>
          {(["malayalam", "english", "arabic"] as const).map(lang => {
            const isActive = language === lang;

            return (
              <TouchableOpacity
                key={lang}
                style={[
                  styles.langButton,
                  isActive && styles.langActive,
                ]}
                onPress={() => setLanguage(lang)}
              >
                <Text
                  style={[
                    styles.langText,
                    isActive && styles.langTextActive,
                  ]}
                >
                  {lang === "malayalam"
                    ? "മല"
                    : lang === "english"
                    ? "En"
                    : "ع"}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* SEARCH */}
        <SimpleSearchBar
          value={query}
          onChange={setQuery}
          placeholder={
            language === "malayalam"
              ? "ദുആ / സ്വലാത്ത് തിരയൂ..."
              : language === "english"
              ? "Search dua, swalath..."
              : "ابحث عن دعاء"
          }
        />

        {/* GRID */}
        <View style={styles.innerGrid}>
          {filteredItems.map(item => {
            const label = HOME_LABELS[item.key];

            return (
              <TouchableOpacity
                key={item.key}
                style={styles.card}
                onPress={() =>
                  navigation.navigate("Dhikr", { type: item.key })
                }
              >
                <Text style={styles.emoji}>{item.emoji}</Text>

                <Text style={styles.cardText}>
                  {label[language]}
                </Text>
              </TouchableOpacity>
            );
          })}

          {filteredItems.length === 0 && (
            <Text style={styles.noResultText}>
              ഫലം കണ്ടെത്തിയില്ല
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
