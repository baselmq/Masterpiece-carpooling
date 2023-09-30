import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PathIcons } from "../utils/PathIcons";
import { PathFonts, PathFontsSize } from "../utils/PathFonts";
import { Divider } from "react-native-paper";

const SearchResultItem = ({ data, index }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.region}>
          {data.structured_formatting.main_text}
        </Text>
        <Text style={styles.city}>
          {data.structured_formatting.secondary_text}
        </Text>
      </View>

      <View>{PathIcons.rightArrow}</View>
    </View>
  );
};

export default SearchResultItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  region: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s16,
  },
  city: {
    fontFamily: PathFonts.PoppinsRegular,
  },
});
