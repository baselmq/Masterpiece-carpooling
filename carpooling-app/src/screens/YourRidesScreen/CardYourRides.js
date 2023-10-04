import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PathColor } from "../../utils/PathColor";
import { sumTime } from "../../components/sumTime";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import UserImage from "../../components/UserImage";
import { PathImages } from "../../utils/PathImages";

const CardYourRides = (props) => {
  const timeTrip = sumTime(props.time, props.travel_time.duration.text);
  const indexOfColor = PathColor.colorsCarNames.indexOf(props.car_color);
  const colorCar = PathColor.colorsCar[indexOfColor];
  return (
    <View style={[styles.container, styles.shadowProp]}>
      {/* top */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ gap: 30 }}>
            <Text style={styles.text}>{props.time}</Text>
            <Text style={styles.text}>{timeTrip}</Text>
          </View>
          <View style={{ gap: 30, position: "relative" }}>
            <Text style={styles.line} />
            <View style={styles.dotLine} />
            <View style={styles.dotLine} />
          </View>
          <View style={{ gap: 30 }}>
            <Text style={styles.text}>{props.origin.description}</Text>
            <Text style={styles.text}>{props.destination.description}</Text>
          </View>
        </View>
        <Text style={styles.price}>{props.price} JOD</Text>
      </View>

      {/* bottom */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <UserImage source={PathImages.user} size={50} />
          <View>
            <Text style={styles.text}>{props.username}</Text>
            <Text style={styles.text}>{props.phone}</Text>
          </View>
        </View>
        <View>
          <View style={styles.carColor}>
            <Text style={styles.text}>{props.car_model}</Text>
            <View style={[styles.dots, { backgroundColor: colorCar }]} />
          </View>
          <Text style={styles.text}>{props.car_number}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardYourRides;

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
