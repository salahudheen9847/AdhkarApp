import { useNavigation } from "@react-navigation/native";
import { type HomeLabelKey } from "../../../data/labels";

export function usePressHandler(setActiveSection: (section: string | null) => void) {
  const navigation = useNavigation<any>();

  const handlePress = (originalId: string) => {
    // കാറ്റഗറി മാപ്പിംഗ് - ഇവിടെ പുതിയ സെക്ഷനുകൾ ചേർക്കാൻ എളുപ്പമാണ്
    const sectionMap: Record<string, string> = {
      dailyLifeDua: "daily",
      dhikr: "dhikr",
      familyDua: "family",
      healthDua: "health",
      justiceDuas: "justice",
      kidsDua: "kids",
      mentalDua: "mental",
      protectionDuas: "protection",
      rizqDuas: "rizq",
      salahDuas: "salah",
      swalathDuas: "swalath",
      qaseeda: "qaseeda",
      ratib: "ratib",
      ramadan: "ramadan",
      mayyitDuas: "mayyit",
      moulid: "moulid",
    };

    if (sectionMap[originalId]) {
      setActiveSection(sectionMap[originalId]);
    } else {
      // റിയൽ കണ്ടന്റ് ആണെങ്കിൽ ഡീറ്റൈൽ പേജിലേക്ക് പോകുന്നു
      navigation.navigate("Dhikr", {
        mode: "section",
        type: originalId as HomeLabelKey,
      });
    }
  };

  return { handlePress };
}