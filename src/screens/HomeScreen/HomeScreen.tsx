import React, { useEffect } from "react";
import { StatusBar, ScrollView, Text, TouchableOpacity, BackHandler, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { SimpleSearchBar } from "./SimpleSearchBar";
import { homeStyles as styles } from "./HomeStyles";

import { useHomeLogic } from "./hooks/useHomeLogic";
import { LanguageSwitch } from "./components/LanguageSwitch";
import { HomeGrid } from "./components/HomeGrid";
import { ShareButton } from "../../components/ShareButton";

export default function HomeScreen() {
  const navigation = useNavigation();
  
  const {
    language,
    setLanguage,
    query,
    setQuery,
    toggleFavourite,
    favouriteItems,
    normalItems,
    filteredItems,
  } = useHomeLogic();

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={styles.flexContainer}>
      <StatusBar barStyle="dark-content" />

      {/* Header with Title and Buttons */}
      <View style={styles.headerContainer}>
        <ShareButton />
        
        <Text style={styles.appTitle}>AdhkarApp</Text>
        
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => BackHandler.exitApp()}
        >
          <Ionicons name="arrow-back" size={24} color="#475569" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <LanguageSwitch
          language={language}
          setLanguage={setLanguage}
        />

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

        {favouriteItems.length > 0 && (
          <>
            <Text style={styles.sectionHeading}>⭐ Favourite</Text>
            <HomeGrid
              items={favouriteItems}
              language={language}
              toggleFavourite={toggleFavourite}
              favourite
            />
          </>
        )}

        <HomeGrid
          items={normalItems}
          language={language}
          toggleFavourite={toggleFavourite}
        />

        {filteredItems.length === 0 && (
          <Text style={styles.noResultText}>
            ഫലം കണ്ടെത്തിയില്ല
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
