import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PathIcons } from "../../utils/PathIcons";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import { PathColor } from "../../utils/PathColor";

const HeaderScreensMap = ({ navigation, title }) => {
  return (
    <View style={[styles.header, styles.shadowProp]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderScreensMap;

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 20,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: PathColor.gray[100],
    borderRadius: 15,
    paddingVertical: 13,
    paddingHorizontal: 16,
    width: "90%",
    zIndex: 200,
  },
  goBack: {
    backgroundColor: PathColor.gray[100],
    borderRadius: 15,
    paddingVertical: 13,
    paddingHorizontal: 16,
  },

  title: {
    fontFamily: PathFonts.PoppinsRegular,
    fontSize: PathFontsSize.s16,
  },
  shadowProp: {
    shadowColor: PathColor.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
});
