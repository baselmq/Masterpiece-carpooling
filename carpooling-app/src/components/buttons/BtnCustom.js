import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { PathColor } from "../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import { BtnLoading } from "../Loading";

const BtnCustom = ({ title, onPress, isLoading = false, flexBtn }) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      style={[styles.btnStyle, flexBtn ? { flex: 1 } : {}]}
      onPress={onPress}
    >
      {isLoading ? <BtnLoading /> : <Text style={styles.btnText}>{title}</Text>}
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
