import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import { PathIcons } from "../../utils/PathIcons";

const HeaderScreens = ({ navigation, title }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.goBack}
        onPress={() => navigation.goBack()}
      >
        {PathIcons.leftArrow}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderScreens;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
    marginBottom: 15,
  },
  title: {
    flex: 1,
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s20,
    textAlign: "center",
  },
});
