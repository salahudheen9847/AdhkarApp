import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { langStyles } from "../../styles/languageStyles";

type Props = {
  languageMode: "arabic" | "malayalam" | "expanded";
  setLanguageMode: React.Dispatch<
    React.SetStateAction<"arabic" | "malayalam" | "expanded">
  >;
};

export const LanguageToggle: React.FC<Props> = ({
  languageMode,
  setLanguageMode,
}) => {
  return (
    <View style={langStyles.toggleColumn}>
      <TouchableOpacity
        onPress={() =>
          setLanguageMode((prev) =>
            prev === "expanded"
              ? "arabic"
              : prev === "malayalam"
              ? "arabic"
              : "expanded"
          )
        }
        style={langStyles.toggleItem}
      >
        <Text
          style={[
            langStyles.toggleText,
            languageMode === "arabic"
              ? langStyles.activeText
              : langStyles.inactiveText,
          ]}
        >
          {languageMode === "malayalam" ? "✅ Malayalam" : "☑ Arabic ▼"}
        </Text>
      </TouchableOpacity>

      {languageMode === "expanded" && (
        <TouchableOpacity
          onPress={() => setLanguageMode("malayalam")}
          style={[langStyles.toggleItem, langStyles.toggleItemIndented]}
        >
          <Text style={[langStyles.toggleText, langStyles.activeText]}>
            Malayalam
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
