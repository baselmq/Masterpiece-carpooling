import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import HeaderScreens from "../header/HeaderScreens";
import { PathColor } from "../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import { PathIcons } from "../../utils/PathIcons";
import BtnNext from "../buttons/BtnNext";
import { usePublishContext } from "../../hooks/usePublishCxt";
import { useBookingCxt } from "../../hooks/useBookingCxt";

export const NumberOfSeatsHome = ({ navigation }) => {
  const { numberOfSeats, dispatch } = useBookingCxt();

  return (
    <NumberOfSeats
      navigation={navigation}
      title={"Number of seats to book"}
      numberSeats={numberOfSeats}
      dispatch={dispatch}
      next={"Home"}
    />
  );
};
export const NumberOfSeatsPublish = ({ navigation }) => {
  const { numberOfSeats, dispatch } = usePublishContext();

  return (
    <NumberOfSeats
      navigation={navigation}
      title={"So how many WaselRide passengers can you take?"}
      numberSeats={numberOfSeats}
      dispatch={dispatch}
      next={"PricePerSeat"}
    />
  );
};

const NumberOfSeats = ({ navigation, title, numberSeats, dispatch, next }) => {
  const [number, setNumber] = useState(numberSeats);

  const incrementNumber = () => {
    if (number < 4) setNumber(number + 1);
  };

  const decrementNumber = () => {
    if (number > 1) setNumber(number - 1);
  };

  return (
    <View style={styles.container}>
      <HeaderScreens title={""} navigation={navigation} />

      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.add}>
          <TouchableOpacity onPress={decrementNumber}>
            {PathIcons.getMinus(
              (size = 40),
              (color =
                number == 1 ? PathColor.gray[200] : PathColor.primary[500])
            )}
          </TouchableOpacity>

          <Text style={styles.num}>{number}</Text>

          <TouchableOpacity onPress={incrementNumber}>
            {PathIcons.getPlus(
              (size = 40),
              (color =
                number == 4 ? PathColor.gray[200] : PathColor.primary[500])
            )}
          </TouchableOpacity>
        </View>
      </View>
      <BtnNext
        onPress={() => {
          dispatch({
            type: "SET_NUMBER_OF_SEATS",
            payload: number,
          });
          navigation.navigate(next);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PathColor.white,
    padding: 20,
  },
  body: {
    marginTop: 10,
  },
  title: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s24,
    textAlign: "center",
    color: PathColor.black,
  },
  add: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    padding: 15,
  },
  num: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: 50,
  },
});
