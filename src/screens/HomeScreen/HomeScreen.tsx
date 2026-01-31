import React from "react";
import { StatusBar, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { homeStyles as styles } from "./HomeStyles";
import { SimpleSearchBar } from "./SimpleSearchBar";
import { LanguageSwitch } from "./components/LanguageSwitch";
import { HomeSection } from "./HomeSectionEnhanced";

import { getHomeLabelText } from "../../data/labels";
import { useHomeScreen } from "./hooks/useHomeScreen";

export default function HomeScreen() {
  const {
    language,
    query,
    setQuery,
    getSectionItems,
    getFavouriteItems,
    handlePress,
    toggleFavourite,
    activeSection,
    setActiveSection, // 🔑 REQUIRED FOR BACK BUTTON
  } = useHomeScreen();

  const renderSection = (labelKey: any, section: string) => (
    <>
      <View style={styles.sectionContainer}>
        <HomeSection
          title={getHomeLabelText(labelKey, language)}
          items={getSectionItems(section) as any}
          language={language}
          colors={{ text: "#0f172a" }}
          onPress={handlePress}
          toggleFavourite={toggleFavourite}
        />
      </View>
      <View style={styles.sectionDivider} />
    </>
  );

  return (
    <SafeAreaView style={styles.flexContainer}>
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 🔙 BACK BUTTON + 🌐 LANGUAGE SWITCH */}
        <LanguageSwitch
          activeSection={activeSection}
          onBack={() => setActiveSection(null)}
        />

        <SimpleSearchBar
          value={query}
          onChange={setQuery}
          language={language}
        />

        {/* ⭐ FAVOURITES */}
        {!activeSection && getFavouriteItems().length > 0 && (
          <>
            <View style={styles.sectionContainer}>
              <HomeSection
                title="⭐ Favourite Duas"
                items={getFavouriteItems() as any}
                language={language}
                colors={{ text: "#f59e0b" }}
                onPress={handlePress}
                toggleFavourite={toggleFavourite}
              />
            </View>
            <View style={styles.sectionDivider} />
          </>
        )}

        {/* 🟢 MAIN HOME */}
        {!activeSection && (
          <>
            {/* Daily Life = MAIN CARD */}
            <View style={styles.sectionContainer}>
              <HomeSection
                title={
                  language === "malayalam"
                    ? "ദൈനംദിന ജീവിത ദുആകൾ"
                    : "Daily Life Duas"
                }
                items={[
                  {
                    id: "dailyLifeDua",
                    originalId: "dailyLifeDua",
                    icon: "calendar-outline",
                    gradient: ["#fde68a", "#facc15"],
                  },
                ]}
                language={language}
                colors={{ text: "#0f172a" }}
                onPress={handlePress}
                toggleFavourite={() => {}}
              />
            </View>
            <View style={styles.sectionDivider} />

            {renderSection("dhikr", "dhikr")}
            {renderSection("familyDua", "family")}
            {renderSection("healthDua", "health")}
            {renderSection("justiceDuas", "justice")}
            {renderSection("kidsDua", "kids")}
            {renderSection("mentalDua", "mental")}
            {renderSection("protectionDuas", "protection")}
            {renderSection("rizqDuas", "rizq")}
            {renderSection("salahDuas", "salah")}
            {renderSection("swalathDuas", "swalath")}
            {renderSection("qaseeda", "qaseeda")}
            {renderSection("ratib", "ratib")}
            {renderSection("ramadan", "ramadan")}
            {renderSection("mayyitDuas", "mayyit")}
            {renderSection("moulid", "moulid")}
          </>
        )}

        {/* 🔵 DAILY LIFE INNER */}
        {activeSection === "daily" && (
          <View style={styles.sectionContainer}>
            <HomeSection
              title={
                language === "malayalam"
                  ? "ദൈനംദിന ജീവിത ദുആകൾ"
                  : "Daily Life Duas"
              }
              items={getSectionItems("daily") as any}
              language={language}
              colors={{ text: "#0f172a" }}
              onPress={handlePress}
              toggleFavourite={toggleFavourite}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
