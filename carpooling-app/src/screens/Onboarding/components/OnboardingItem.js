import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      {item.image}
      {/* <Image
        source={item.image}
        style={[styles.image, { width: width - 20, resizeMode: "contain" }]}
      /> */}

      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 10,
  },
  image: { flex: 0.4, justifyContent: "center" },
  title: {
    fontSize: 22,
    marginTop: 50,
    marginBottom: 10,
    color: "#414141",
    fontFamily: "Poppins-Medium",
    textAlign: "center",
  },

  description: {
    textAlign: "center",
    color: "#A0A0A0",
    paddingHorizontal: 30,
    fontFamily: "Poppins-Medium",
  },
});
