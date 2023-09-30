import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { PathColor } from "../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";

const BtnCustom = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BtnCustom;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: PathColor.primary[500],
    padding: 14,
    borderRadius: 10,
  },

  btnText: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s16,
    textAlign: "center",
    color: PathColor.white,
  },
});
