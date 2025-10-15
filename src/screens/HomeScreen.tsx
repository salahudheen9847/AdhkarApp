import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>📿 Dhikr Collection</Text>

      <View style={styles.grid}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Dhikr", { type: "adhkar" })}
        >
          <Image
            source={require("../assets/adhkar_icon.png")}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Dua Marichavark</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Dhikr", { type: "haddad" })}
        >
          <Image
            source={require("../assets/haddad_icon.png")}
            style={styles.icon}
          />
          <Text style={styles.cardText}>Ratib al-Haddad</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff7ed", alignItems: "center" },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#b45309",
    marginVertical: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
  card: {
    backgroundColor: "#fef3c7",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    width: 150,
    elevation: 3,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: "contain",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#78350f",
    textAlign: "center",
  },
});
