import React, { useState } from "react";
import { StatusBar, ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { ShareButton } from "../../components/ShareButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafaf9",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#171717",
    marginBottom: 12,
    marginTop: 16,
    marginLeft: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  card: {
    width: 160,
    height: 160,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  emoji: {
    fontSize: 36,
    marginBottom: 8,
    textAlign: "center",
  },
  cardText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#262626",
    textAlign: "center",
    paddingHorizontal: 4,
    lineHeight: 16,
  },
  languageToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
    gap: 8,
  },
  langButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  langButtonActive: {
    backgroundColor: '#22c55e',
  },
  langText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666',
  },
  langTextActive: {
    color: '#fff',
  },
  appTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#171717',
  },
});

const sampleItems = [
  {
    id: "duaMarichavark",
    title: "മരിച്ചവർക്കുള്ള ദുആ",
    emoji: "🕌",
  },
  {
    id: "duaQabar", 
    title: "ഖബറിലെ ദുആ",
    emoji: "🪦",
  },
  {
    id: "manqusMoulid",
    title: "മൻഖസ് മൗലിദ്",
    emoji: "📖",
  },
  {
    id: "baderMoulid",
    title: "ബാദർ മൗലിദ്",
    emoji: "📿",
  },
  {
    id: "qaseeda",
    title: "ഖസീദ",
    emoji: "🎵",
  },
  {
    id: "haddad",
    title: "ഹദ്ദാദ്",
    emoji: "📜",
  },
  {
    id: "nariyathSwalath",
    title: "നാരിയത്ത് സ്വലാത്ത്",
    emoji: "🙏",
  },
  {
    id: "thajuSwalath",
    title: "താജു സ്വലാത്ത്",
    emoji: "🙏",
  },
  {
    id: "salawatAlFatih",
    title: "സ്വലാത്ത് അൽ ഫാത്തി",
    emoji: "🙏",
  },
  {
    id: "asmaul",
    title: "അസ്മാഉൽ ഹുസ്ന",
    emoji: "✨",
  },
];

export default function HomeScreenBalanced() {
  const navigation = useNavigation();
  const [language, setLanguage] = useState('malayalam');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fafaf9" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <Text style={styles.appTitle}>AdhkarApp</Text>
          </View>
          <ShareButton />
        </View>

        <View style={styles.languageToggle}>
          {(['malayalam', 'english', 'arabic'] as const).map((lang: string) => (
            <TouchableOpacity
              key={lang}
              style={[
                styles.langButton,
                language === lang && styles.langButtonActive
              ]}
              onPress={() => setLanguage(lang)}
            >
              <Text style={[
                styles.langText,
                language === lang && styles.langTextActive
              ]}>
                {lang === 'malayalam' ? 'മല' : lang === 'english' ? 'En' : 'ع'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <Text style={styles.sectionTitle}>
          {language === 'malayalam' ? 'പ്രാർത്ഥനകൾ' : 
           language === 'english' ? 'Supplications' : 'الأدعية'}
        </Text>
        
        <View style={styles.grid}>
          {sampleItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() => (navigation as any).navigate("Dhikr", { type: item.id })}
            >
              <Text style={styles.emoji}>{item.emoji}</Text>
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
