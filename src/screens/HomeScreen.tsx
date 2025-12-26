import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";
import { homeStyles as styles } from "../styles/homeStyles";
import { commonStyles } from "../styles/common";

type HomeItem = {
  id: string;
  title: string;
  image: any;
  gradient: string[];
};

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [searchQuery, setSearchQuery] = useState("");

  const colors = {
    background: "#fefce8",
    text: "#1e293b",
  };

  /* ---------------- Dua Items ---------------- */
  const duaItems: HomeItem[] = [
    {
      id: "duaMarichavark",
      title: "Dua Marichavark",
      image: require("../assets/adhkar_icon.png"),
      gradient: ["#fff8e1", "#ffedd5"],
    },
    {
      id: "duaQabar",
      title: "Dua Qabar",
      image: require("../assets/duaQabar.png"),
      gradient: ["#fef3c7", "#fde68a"],
    },
    {
      id: "manqusMoulid",
      title: "Manqus Moulid",
      image: require("../assets/manqus.png"),
      gradient: ["#e0f2fe", "#bae6fd"],
    },
  ];

  /* ---------------- Ratib ---------------- */
  const ratibItems: HomeItem[] = [
    {
      id: "haddad",
      title: "Ratib al-Haddad",
      image: require("../assets/haddad_icon.png"),
      gradient: ["#fef9c3", "#fef08a"],
    },
  ];

  /* ---------------- Asmaul Husna ---------------- */
  const asmaulHusnaItems: HomeItem[] = [
    {
      id: "asmaulHusna",
      title: "Asmaul Husna",
      image: require("../assets/asmaulhusna_icon.png"),
      gradient: ["#fff7ed", "#ffedd5"],
    },
  ];

  const filter = (items: HomeItem[]) =>
    items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <KeyboardAvoidingView
      style={[commonStyles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={[commonStyles.container, { backgroundColor: colors.background }]}>
          <StatusBar backgroundColor="#fefce8" barStyle="dark-content" translucent />

          {/* 🔍 Search */}
          <View style={[styles.searchContainer, styles.searchContainerLight]}>
            <Icon name="search" size={18} color="#92400e" style={styles.searchIcon} />
            <TextInput
              style={[styles.searchInput, { color: colors.text }]}
              placeholder="Search duas or ratib..."
              placeholderTextColor="#a16207"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            {/* 📿 Dua */}
            {filter(duaItems).length > 0 && (
              <>
                <Text style={[styles.sectionTitle, { color: colors.text }]}>
                  📿 Dua Collection
                </Text>
                <View style={styles.innerGrid}>
                  {filter(duaItems).map(item => (
                    <TouchableOpacity
                      key={item.id}
                      activeOpacity={0.9}
                      onPress={() =>
                        item.id === "manqusMoulid"
                          ? navigation.navigate("ManqusMoulid")
                          : navigation.navigate("Dhikr", { type: item.id })
                      }
                    >
                      <LinearGradient colors={item.gradient} style={styles.card}>
                        <Image source={item.image} style={styles.icon} />
                        <Text style={[styles.cardText, { color: colors.text }]}>
                          {item.title}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}

            {/* 📖 Ratib */}
            {filter(ratibItems).length > 0 && (
              <>
                <Text style={[styles.sectionTitle, { color: colors.text }]}>
                  📖 Ratib Collection
                </Text>
                <View style={styles.innerGrid}>
                  {filter(ratibItems).map(item => (
                    <TouchableOpacity
                      key={item.id}
                      activeOpacity={0.9}
                      onPress={() => navigation.navigate("Dhikr", { type: item.id })}
                    >
                      <LinearGradient colors={item.gradient} style={styles.card}>
                        <Image source={item.image} style={styles.icon} />
                        <Text style={[styles.cardText, { color: colors.text }]}>
                          {item.title}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}

            {/* 🕋 Asmaul Husna */}
            {filter(asmaulHusnaItems).length > 0 && (
              <>
                <Text style={[styles.sectionTitle, { color: colors.text }]}>
                  🕋 Asmaul Husna Collection
                </Text>
                <View style={styles.innerGrid}>
                  {filter(asmaulHusnaItems).map(item => (
                    <TouchableOpacity
                      key={item.id}
                      activeOpacity={0.9}
                      onPress={() => navigation.navigate("Dhikr", { type: item.id })}
                    >
                      <LinearGradient colors={item.gradient} style={styles.card}>
                        <Image source={item.image} style={styles.icon} />
                        <Text style={[styles.cardText, { color: colors.text }]}>
                          {item.title}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}

            {/* ❌ No Results */}
            {filter(duaItems).length === 0 &&
              filter(ratibItems).length === 0 &&
              filter(asmaulHusnaItems).length === 0 && (
                <Text style={[styles.noResultText, { color: colors.text }]}>
                  No matching items found
                </Text>
              )}
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
