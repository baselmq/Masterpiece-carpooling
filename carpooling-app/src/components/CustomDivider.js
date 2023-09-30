import { StyleSheet, View } from "react-native";
import React from "react";
import { PathColor } from "../utils/PathColor";

const CustomDivider = () => {
  return <View style={styles.divider}></View>;
};

export default CustomDivider;

const styles = StyleSheet.create({
  divider: { borderBottomWidth: 1, borderBottomColor: PathColor.gray[200] },
});
