import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { langStyles } from "../../styles/languageStyles";

// ✅ SAME MODE USED EVERYWHERE
export type LanguageMode =
  | "arabic"
  | "arabic_malayalam"
  | "arabic_english";

type Props = {
  languageMode: LanguageMode;
  setLanguageMode: React.Dispatch<React.SetStateAction<LanguageMode>>;
};

export const LanguageToggle: React.FC<Props> = ({
  languageMode,
  setLanguageMode,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isArabicOnly = languageMode === "arabic";
  const isMalayalam = languageMode === "arabic_malayalam";
  const isEnglish = languageMode === "arabic_english";

  return (
    <View style={langStyles.toggleColumn}>
      {/* ☑ Arabic (Main Toggle) */}
      <TouchableOpacity
        onPress={() => {
          setIsExpanded(prev => !prev);
          setLanguageMode("arabic");
        }}
        style={langStyles.toggleItem}
      >
        <Text
          style={[
            langStyles.toggleText,
            isArabicOnly
              ? langStyles.activeText
              : langStyles.inactiveText,
          ]}
        >
          ☑ Arabic {isExpanded ? "▼" : "▶"}
        </Text>
      </TouchableOpacity>

      {/* 🔽 Sub Options */}
      {isExpanded && (
        <>
          {/* Arabic + Malayalam */}
          <TouchableOpacity
            onPress={() => setLanguageMode("arabic_malayalam")}
            style={[langStyles.toggleItem, langStyles.toggleItemIndented]}
          >
            <Text
              style={[
                langStyles.toggleText,
                isMalayalam
                  ? langStyles.activeText
                  : langStyles.inactiveText,
              ]}
            >
              Arabic + Malayalam
            </Text>
          </TouchableOpacity>

          {/* Arabic + English */}
          <TouchableOpacity
            onPress={() => setLanguageMode("arabic_english")}
            style={[langStyles.toggleItem, langStyles.toggleItemIndented]}
          >
            <Text
              style={[
                langStyles.toggleText,
                isEnglish
                  ? langStyles.activeText
                  : langStyles.inactiveText,
              ]}
            >
              Arabic + English
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
