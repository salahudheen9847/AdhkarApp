import React from "react";
import { StatusBar, ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    paddingBottom: 16,
  },
  searchContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#171717",
    marginBottom: 16,
    marginTop: 24,
    marginLeft: 20,
  },
  card: {
    width: 140,
    height: 150,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 5,
  },
  emoji: {
    fontSize: 40,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#262626",
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  appTitle: {
    fontSize: 16,
    color: '#666',
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
    id: "swalath",
    title: "സ്വലാത്ത്",
    emoji: "🙏",
  },
  {
    id: "asmaul",
    title: "അസ്മാഉൽ ഹുസ്ന",
    emoji: "✨",
  },
];

export default function HomeScreenWithEmoji() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <Text style={styles.appTitle}>AdhkarApp</Text>
          </View>
          <ShareButton />
        </View>
        
        <Text style={styles.sectionTitle}>പ്രാർത്ഥനകൾ</Text>
        
        <View style={styles.grid}>
          {sampleItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              onPress={() => console.log("Pressed:", item.id)}
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
