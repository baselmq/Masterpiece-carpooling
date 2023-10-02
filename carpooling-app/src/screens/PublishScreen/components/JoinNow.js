import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderScreens from "../../../components/header/HeaderScreens";
import BtnCustom from "../../../components/buttons/BtnCustom";
import { PathColor } from "../../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../../utils/PathFonts";
import { PathImages } from "../../../utils/PathImages";
import { useNavigation } from "@react-navigation/native";

const JoinNow = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.continuer}>
      <HeaderScreens navigation={navigation} />
      <View style={styles.body}>
        <Text style={styles.title}>Become a WaselRide driver</Text>
        <View style={{ marginRight: 10 }}>{PathImages.publish}</View>
        <Text style={styles.description}>
          Join the WaselRide community and start earning money while helping
          others.
        </Text>
      </View>
      <BtnCustom
        title={"Join Now"}
        onPress={() => {
          navigation.navigate("FormDriver");
        }}
      />
    </View>
  );
};

export default JoinNow;

const styles = StyleSheet.create({
  continuer: {
    flex: 1,
    padding: 20,
    backgroundColor: PathColor.white,
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  title: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s24,
    color: PathColor.black,
    marginBottom: 10,
    textAlign: "center",
  },

  description: {
    fontFamily: PathFonts.PoppinsMedium,
    color: PathColor.gray[500],
    textAlign: "center",
    paddingHorizontal: 15,
    marginTop: 20,
  },
});
