import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { PathImages } from "../../utils/PathImages";
import { PathColor } from "../../utils/PathColor";
import BtnCustom from "../../components/buttons/BtnCustom";
import BtnOutlineCustom from "../../components/buttons/BtnOutlineCustom";
import { PathFonts } from "../../utils/PathFonts";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation();

  return (
    <View style={[styles.container, { width }]}>
      {PathImages.welcome}
      <View style={{ flex: 0.7 }}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.description}>Have a better sharing experience</Text>
      </View>
      <View style={{ marginHorizontal: 10, gap: 20 }}>
        <BtnCustom
          title={"Create on account"}
          onPress={() => {
            navigate("Register");
          }}
        />
        <BtnOutlineCustom
          title={"Login"}
          onPress={() => {
            navigate("Login");
          }}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 10,
    backgroundColor: PathColor.white,
  },
  image: { flex: 0.4, justifyContent: "center" },
  title: {
    fontSize: 22,
    marginTop: 30,
    marginBottom: 10,
    color: "#414141",
    fontFamily: PathFonts.PoppinsMedium,
    textAlign: "center",
  },

  description: {
    textAlign: "center",
    color: "#A0A0A0",
    paddingHorizontal: 30,
    fontFamily: PathFonts.PoppinsMedium,
  },
});
