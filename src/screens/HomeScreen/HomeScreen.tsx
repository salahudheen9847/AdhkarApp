import React from "react";
import { StatusBar, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { homeStyles as styles } from "./HomeStyles";
import { SimpleSearchBar } from "./SimpleSearchBar";
import { LanguageSwitch } from "./components/LanguageSwitch";
import { HomeSection } from "./HomeSectionEnhanced";
import { useHomeScreen } from "./hooks/useHomeScreen";
import { SECTIONS_CONFIG } from "./SectionData";
import { RenderMainSections } from "./RenderSections";

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
    setActiveSection,
    filteredMeta,
    mapToHomeItems,
  } = useHomeScreen();

  const activeSectionData = SECTIONS_CONFIG.find((s) => s.id === activeSection);
  const isSearching = query.trim().length > 0;

  return (
    <SafeAreaView style={styles.flexContainer}>
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Navigation & Search */}
        <LanguageSwitch
          activeSection={activeSection}
          onBack={() => setActiveSection(null)}
        />

        {/* Show search bar only on home screen */}
        {!activeSection && (
          <SimpleSearchBar
            value={query}
            onChange={setQuery}
            language={language}
          />
        )}

        {/* 🔍 SEARCH RESULTS - ടൈപ്പ് ചെയ്യുമ്പോൾ എല്ലാ ഐറ്റവും ഒരുമിച്ച് കാണിക്കും */}
        {isSearching ? (
          <View style={styles.sectionContainer}>
            <HomeSection
              title={language === "malayalam" ? "തിരയൽ ഫലങ്ങൾ" : "Search Results"}
              items={mapToHomeItems(filteredMeta) as any}
              language={language}
              colors={{ text: "#22c55e" }}
              onPress={handlePress}
              toggleFavourite={toggleFavourite}
            />
          </View>
        ) : (
          <>
            {/* 1. ⭐ FAVOURITES */}
            {!activeSection && getFavouriteItems().length > 0 && (
              <>
                <View style={styles.sectionContainer}>
                  <HomeSection
                    title={language === "malayalam" ? "⭐ പ്രിയപ്പെട്ട ദുആകൾ" : language === "arabic" ? "⭐ الأدعية المفضلة" : "⭐ Favourite Duas"}
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

            {/* 2. 🟢 MAIN LIST (Categories) */}
            {!activeSection && (
              <RenderMainSections 
                language={language as any} 
                handlePress={handlePress} 
              />
            )}

            {/* 3. 🔵 INNER LIST (Category Items) */}
            {activeSection && (
              <View style={styles.sectionContainer}>
                <HomeSection
                  title={
                    language === "malayalam"
                      ? activeSectionData?.ml || ""
                      : activeSectionData?.en || ""
                  }
                  items={getSectionItems(activeSection) as any}
                  language={language}
                  colors={{ text: "#0f172a" }}
                  onPress={handlePress}
                  toggleFavourite={toggleFavourite}
                />
              </View>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}