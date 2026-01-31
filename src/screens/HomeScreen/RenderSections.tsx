import React from "react";
import { View, Text } from "react-native";
import { HomeCard } from "./HomeCard";
import { homeStyles as styles } from "./HomeStyles";
import { SECTIONS_CONFIG } from "./SectionData";

interface Props {
  language: "english" | "malayalam" | "arabic";
  handlePress: (item: any) => void;
}

export const RenderMainSections = ({ language, handlePress }: Props) => {
  const getAdhkarTitle = () => {
    switch (language) {
      case "malayalam":
        return "അദ്‌കാറുകൾ";
      case "arabic":
        return "أذكار";
      default:
        return "Adhkar";
    }
  };

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.headingCard}>
        <Text style={styles.sectionTitle}>
          {getAdhkarTitle()}
        </Text>
      </View>
      
      <View style={styles.innerGrid}>
        {SECTIONS_CONFIG.map((sec) => (
          <HomeCard
            key={sec.id}
            item={{
              id: sec.id,
              originalId: sec.originalId,
              icon: sec.icon,
              gradient: sec.gradient,
            }}
            language={language}
            onPress={handlePress}
            toggleFavourite={() => {}}
          />
        ))}
      </View>
    </View>
  );
};