import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { usePublishContext } from "../../hooks/usePublishCxt";
import HeaderScreens from "../header/HeaderScreens";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PathColor } from "../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import { PathIcons } from "../../utils/PathIcons";
import BtnNext from "../buttons/BtnNext";

const PricePerSeat = ({ navigation }) => {
  const { travelTime, dispatch } = usePublishContext();
  const [number, setNumber] = useState(1);
  const [price, setPrice] = useState(0);

  const maxPrice = price + 2;
  const minPrice = price < 3 ? 1 : price - 2;
  const incrementNumber = () => {
    if (number < price + 2) {
      const num = number + 0.5;
      setNumber(parseFloat(num.toFixed(2)));
    }
  };

  const decrementNumber = () => {
    if (number > 1) {
      const num = number - 0.5;
      setNumber(parseFloat(num.toFixed(2)));
    }
  };

  function roundToTwoDecimalPlaces(num) {
    var number = parseFloat(num.match(/\d+\.\d+/)[0]);
    console.log(parseFloat(number.toFixed(2)));
    var roundedNumber = Math.round(parseFloat(number.toFixed(2)));
    if (roundedNumber < 1) {
      setPrice(1);
      setNumber(1);
    }
    setPrice(roundedNumber);
    setNumber(roundedNumber);
  }
  function calculateExpectedPrice(travelTime) {
    const BASE_PRICE = 1; // Minimum price in dinars
    const SURGE_CHANGE_RATE = 0.5; // Price increase rate per second
    const travelTimeInSeconds = travelTime?.duration?.value || 0;
    const priceIncrease = (travelTimeInSeconds * SURGE_CHANGE_RATE) / 1000;
    const expectedPrice = (BASE_PRICE + priceIncrease) / 1.5;

    return new Intl.NumberFormat("en-JO", {
      style: "currency",
      currency: "JOD",
    }).format(expectedPrice);
  }

  useEffect(() => {
    const formattedValue = calculateExpectedPrice(travelTime);
    roundToTwoDecimalPlaces(formattedValue);
  }, [travelTime]);
  return (
    <View style={styles.container}>
      <HeaderScreens title={""} navigation={navigation} />

      <View style={styles.body}>
        <Text style={styles.title}>{"Set your price per seat"}</Text>

        <View style={styles.add}>
          <TouchableOpacity
            onPress={decrementNumber}
            disabled={number == minPrice}
          >
            {PathIcons.getMinus(
              (size = 40),
              (color =
                number == minPrice
                  ? PathColor.gray[200]
                  : PathColor.primary[500])
            )}
          </TouchableOpacity>

          <Text style={styles.num}>
            {number}
            <Text style={{ fontSize: PathFontsSize.s34 }}> JOD</Text>
          </Text>
          <TouchableOpacity
            onPress={incrementNumber}
            disabled={number == maxPrice}
          >
            {PathIcons.getPlus(
              (size = 40),
              (color =
                number == maxPrice
                  ? PathColor.gray[200]
                  : PathColor.primary[500])
            )}
          </TouchableOpacity>
        </View>
      </View>
      <BtnNext
        onPress={() => {
          dispatch({
            type: "SET_PRICE",
            payload: number,
          });
          navigation.navigate("Publish");
        }}
      />
    </View>
  );
};

export default PricePerSeat;

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
    justifyContent: "center",
    alignItems: "center",
  },
});
