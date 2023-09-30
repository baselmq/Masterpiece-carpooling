import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PathColor } from "../../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../../utils/PathFonts";
import UserImage from "../../../components/UserImage";
import { PathImages } from "../../../utils/PathImages";

const CardResult = (props) => {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      {/* top */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ gap: 30 }}>
            <Text style={styles.text}>{props.leavingTime}</Text>
            <Text style={styles.text}>{props.goingTime}</Text>
          </View>
          <View style={{ gap: 30, position: "relative" }}>
            <Text style={styles.line} />
            <View style={styles.dotLine} />
            <View style={styles.dotLine} />
          </View>
          <View style={{ gap: 30 }}>
            <Text style={styles.text}>{props.leavingFrom}</Text>
            <Text style={styles.text}>{props.goingTo}</Text>
          </View>
        </View>
        <Text style={styles.price}>{props.price}</Text>
      </View>

      {/* bottom */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <UserImage source={PathImages.user} size={50} />
          <View>
            <Text style={styles.text}>{props.driverName}</Text>
            <Text style={styles.text}>{props.rating}</Text>
          </View>
        </View>
        <View>
          <View style={styles.carColor}>
            <Text style={styles.text}>{props.carType}</Text>
            <View style={[styles.dots, { backgroundColor: props.carColor }]} />
          </View>
          <Text style={styles.text}>{props.carNumber}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardResult;

const styles = StyleSheet.create({
  container: {
    backgroundColor: PathColor.white,
    padding: 20,
    borderRadius: 20,
    gap: 30,
  },
  dotLine: {
    backgroundColor: PathColor.black,
    height: 8,
    width: 8,
    borderRadius: 40,
    top: 15,
  },
  line: {
    position: "absolute",
    borderRightColor: PathColor.black,
    borderRightWidth: 2,
    height: 42,
    top: 16,
    left: 3,
  },
  text: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s14,
  },
  price: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s16,
    color: PathColor.primary[500],
  },

  carColor: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 2,
  },
  dots: {
    backgroundColor: PathColor.black,
    height: 12,
    width: 12,
    borderRadius: 40,
  },

  shadowProp: {
    shadowColor: PathColor.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
