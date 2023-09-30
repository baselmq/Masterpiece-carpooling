import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { PathColor } from "../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";

const BtnOutlineCustom = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BtnOutlineCustom;

const styles = StyleSheet.create({
  btnStyle: {
    borderWidth: 2,
    borderColor: PathColor.primary[500],
    padding: 12,
    borderRadius: 10,
  },
  btnText: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s16,
    textAlign: "center",
    color: PathColor.primary[500],
  },
});
