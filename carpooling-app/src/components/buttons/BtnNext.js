import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PathIcons } from "../../utils/PathIcons";
import { PathColor } from "../../utils/PathColor";

const BtnNext = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.buttonCallout}>
        {PathIcons.getArrowMap((size = 28), (color = "white"))}
      </TouchableOpacity>
    </View>
  );
};

export default BtnNext;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  // container: {
  //   position: "absolute",
  //   bottom: 30,
  //   right: 30,
  // },

  buttonCallout: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: PathColor.primary[500],
    color: PathColor.white,
    borderRadius: 50,
    padding: 20,
  },
});
