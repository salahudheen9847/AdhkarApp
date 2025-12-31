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

  /* ---------------- DATA ---------------- */
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
  ];

  const moulidItems: HomeItem[] = [
    {
      id: "manqusMoulid",
      title: "Manqus Moulid",
      image: require("../assets/manqus.png"),
      gradient: ["#e0f2fe", "#bae6fd"],
    },
  ];

  const ratibItems: HomeItem[] = [
    {
      id: "haddad",
      title: "Ratib al-Haddad",
      image: require("../assets/haddad_icon.png"),
      gradient: ["#fef9c3", "#fef08a"],
    },
  ];

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

  /* ---------------- RENDER SECTION HELPER ---------------- */
  const renderSection = (
    title: string,
    items: HomeItem[],
    onPress: (id: string) => void,
    keyPrefix: string
  ) => {
    const filtered = filter(items);

    return (
      <>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          {title}
        </Text>

        {filtered.length > 0 ? (
          <View style={styles.innerGrid}>
            {filtered.map((item, index) => (
              <TouchableOpacity
                key={`${keyPrefix}-${item.id}-${index}`}
                activeOpacity={0.9}
                onPress={() => onPress(item.id)}
              >
                <LinearGradient
                  colors={item.gradient}
                  style={styles.card}
                >
                  <Image source={item.image} style={styles.icon} />
                  <Text
                    style={[
                      styles.cardText,
                      { color: colors.text },
                    ]}
                  >
                    {item.title}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <Text style={styles.noResultText}>
            No items found
          </Text>
        )}
      </>
    );
  };

  return (
    <KeyboardAvoidingView
      style={[commonStyles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={[
            commonStyles.container,
            { backgroundColor: colors.background },
          ]}
        >
          <StatusBar
            backgroundColor="#fefce8"
            barStyle="dark-content"
            translucent
          />

          {/* 🔍 Search */}
          <View style={[styles.searchContainer, styles.searchContainerLight]}>
            <Icon
              name="search"
              size={18}
              color="#92400e"
              style={styles.searchIcon}
            />
            <TextInput
              style={[styles.searchInput, { color: colors.text }]}
              placeholder="Search duas or collections..."
              placeholderTextColor="#a16207"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {renderSection("📿 Dua Collection", duaItems, id =>
              navigation.navigate("Dhikr", { type: id }),
              "dua"
            )}

            {renderSection("🌙 Moulid Collection", moulidItems, () =>
              navigation.navigate("ManqusMoulid"),
              "moulid"
            )}

            {renderSection("📖 Ratib Collection", ratibItems, id =>
              navigation.navigate("Dhikr", { type: id }),
              "ratib"
            )}

            {renderSection("🕋 Asmaul Husna Collection", asmaulHusnaItems, id =>
              navigation.navigate("Dhikr", { type: id }),
              "asma"
            )}
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
