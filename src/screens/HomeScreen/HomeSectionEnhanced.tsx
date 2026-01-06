// HomeScreen/HomeSectionEnhanced.tsx
// Enhanced version with smooth animations

import React from "react";
import { View, Text, TouchableOpacity, Image, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { homeStyles as styles } from "../../styles/homeStyles";

import {
    HOME_LABELS,
    AppLanguage,
    HomeLabelKey,
} from "./HomeData";

type HomeItem = {
    id: HomeLabelKey;
    image: any;
    gradient: string[];
};

type Props = {
    title: string;
    items: HomeItem[];
    language: AppLanguage;
    colors: {
        text: string;
    };
    onPress: (id: HomeLabelKey) => void;
};

// Animated Card Component with Scale Effect
function AnimatedCard({ item, language, colors, onPress }: {
    item: HomeItem;
    language: AppLanguage;
    colors: { text: string };
    onPress: (id: HomeLabelKey) => void;
}) {
    const scaleAnim = React.useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 0.95,
            useNativeDriver: true,
            speed: 50,
            bounciness: 4,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
            speed: 50,
            bounciness: 8,
        }).start();
    };

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => onPress(item.id)}
        >
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <LinearGradient colors={item.gradient} style={styles.card}>
                    <Image source={item.image} style={styles.icon} />
                    <Text style={[styles.cardText, { color: colors.text }]}>
                        {HOME_LABELS[item.id][language]}
                    </Text>
                </LinearGradient>
            </Animated.View>
        </TouchableOpacity>
    );
}

export function HomeSection({
    title,
    items,
    language,
    colors,
    onPress,
}: Props) {
    if (items.length === 0) return null;

    return (
        <>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
                {title}
            </Text>

            <View style={styles.innerGrid}>
                {items.map(item => (
                    <AnimatedCard
                        key={item.id}
                        item={item}
                        language={language}
                        colors={colors}
                        onPress={onPress}
                    />
                ))}
            </View>
        </>
    );
}
