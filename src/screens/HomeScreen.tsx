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

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [searchQuery, setSearchQuery] = useState("");

  const colors = {
    background: "#fefce8",
    text: "#1e293b",
  };

  const duaItems = [
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
  ];

  const ratibItems = [
    {
      id: "haddad",
      title: "Ratib al-Haddad",
      image: require("../assets/haddad_icon.png"),
      gradient: ["#fef9c3", "#fef08a"],
    },
  ];
  const asmaulHusnaItems = [
  {
    id: "asmaulHusna",
    title: "Asmaul Husna",
    image: require("../assets/asmaulhusna_icon.png"),
    gradient: ["#fff7ed", "#ffedd5"],
  },
];


  const filteredDuas = duaItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredRatibs = ratibItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredAsmaulHusna = asmaulHusnaItems.filter((item) =>
  item.title.toLowerCase().includes(searchQuery.toLowerCase())
);


  return (
    <KeyboardAvoidingView
      style={[commonStyles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={[commonStyles.container, { backgroundColor: colors.background }]}
        >
          <StatusBar backgroundColor="#fefce8" barStyle="dark-content" translucent />

          {/* 🔍 Search Bar */}
          <View style={[styles.searchContainer, styles.searchContainerLight]}>

            <Icon name="search" size={18} color="#92400e" style={styles.searchIcon} />
            <TextInput
              style={[styles.searchInput, { color: colors.text }]}
              placeholder="Search duas or ratib..."
              placeholderTextColor="#a16207"
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="done"
            />
          </View>

          {/* 🔽 Scroll Content */}
          <ScrollView
            contentContainerStyle={[styles.scrollContent]}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
          >
            {/* 📿 Dua Section */}
            {filteredDuas.length > 0 && (
              <>
                <Text style={[styles.sectionTitle, { color: colors.text }]}>
                  📿 Dua Collection
                </Text>
                <View style={styles.innerGrid}>
                  {filteredDuas.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      activeOpacity={0.9}
                      onPress={() => navigation.navigate("Dhikr", { type: item.id })}
                    >
                      <LinearGradient
                        colors={item.gradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.card}
                      >
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

            {/* 📖 Ratib Section */}
            {filteredRatibs.length > 0 && (
              <>
                <Text style={[styles.sectionTitle, { color: colors.text }]}>
                  📖 Ratib Collection
                </Text>
                <View style={styles.innerGrid}>
                  {filteredRatibs.map((item) => (
                    <TouchableOpacity
                      key={item.id}
                      activeOpacity={0.9}
                      onPress={() => navigation.navigate("Dhikr", { type: item.id })}
                    >
                      <LinearGradient
                        colors={item.gradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.card}
                      >
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
            {/* 🕋 Asmaul Husna Section */}
{filteredAsmaulHusna.length > 0 && (
  <>
    <Text style={[styles.sectionTitle, { color: colors.text }]}>
      🕋 Asmaul Husna Collection
    </Text>
    <View style={styles.innerGrid}>
      {filteredAsmaulHusna.map((item) => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.9}
          onPress={() => navigation.navigate("Dhikr", { type: item.id })}
        >
          <LinearGradient
            colors={item.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.card}
          >
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
   {filteredDuas.length === 0 &&
 filteredRatibs.length === 0 &&
 filteredAsmaulHusna.length === 0 && (
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
