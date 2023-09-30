import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, FlatList, Animated } from "react-native";
import slides from "./data/slides";
import OnboardingItem from "./components/OnboardingItem";
import Paginator from "./components/Paginator";
import NextButton from "./components/NextButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PathColor } from "../../utils/PathColor";

export default function Onboarding({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  });

  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      sliderRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        await AsyncStorage.setItem("@viewedOnboarding", "true");
        navigation.replace("Welcome");
      } catch (error) {
        console.log("Error @setItem: ", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id.toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
          onViewableItemsChanged={onViewableItemsChanged.current}
          ref={sliderRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slides.length)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: PathColor.white,
  },
});
