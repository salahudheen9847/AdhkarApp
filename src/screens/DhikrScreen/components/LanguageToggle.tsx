import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { langStyles } from "../../../styles/languageStyles";

import type { LanguageMode } from "../types";

type Props = {
  languageMode: LanguageMode;
  setLanguageMode: React.Dispatch<
    React.SetStateAction<LanguageMode>
  >;
};

export const LanguageToggle: React.FC<Props> = ({
  languageMode,
  setLanguageMode,
}) => {
  return (
    <View style={langStyles.pillRow}>
      <TouchableOpacity
        style={[
          langStyles.pill,
          languageMode === "arabic" && langStyles.pillActive,
        ]}
        onPress={() => setLanguageMode("arabic")}
      >
        <Text
          style={[
            langStyles.pillText,
            languageMode === "arabic" &&
              langStyles.pillTextActive,
          ]}
        >
          Arabic
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          langStyles.pill,
          languageMode === "arabic_malayalam" &&
            langStyles.pillActive,
        ]}
        onPress={() => setLanguageMode("arabic_malayalam")}
      >
        <Text
          style={[
            langStyles.pillText,
            languageMode === "arabic_malayalam" &&
              langStyles.pillTextActive,
          ]}
        >
          Malayalam
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          langStyles.pill,
          languageMode === "arabic_english" &&
            langStyles.pillActive,
        ]}
        onPress={() => setLanguageMode("arabic_english")}
      >
        <Text
          style={[
            langStyles.pillText,
            languageMode === "arabic_english" &&
              langStyles.pillTextActive,
          ]}
        >
          English
        </Text>
      </TouchableOpacity>
    </View>
  );
};