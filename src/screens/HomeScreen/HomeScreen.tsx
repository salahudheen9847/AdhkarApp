import React from "react";
import {
  StatusBar,
  ScrollView,
  View,
} from "react-native";
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
  } = useHomeScreen();

  const renderSection = (
    labelKey: any,
    section: string
  ) => (
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
        <LanguageSwitch />

        <SimpleSearchBar
          value={query}
          onChange={setQuery}
          language={language}
        />

        {/* ⭐ TOP MOST – Favourite Section */}
        {getFavouriteItems().length > 0 && (
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

        {renderSection("dailyLifeDua", "daily")}
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
        {renderSection("ramadan","ramadan")}
        {renderSection("mayyitDuas","mayyit")}
        {renderSection("moulid","moulid")}
      </ScrollView>
    </SafeAreaView>
  );
}