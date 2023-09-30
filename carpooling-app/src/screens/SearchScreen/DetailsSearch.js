import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { PathIcons } from "../../utils/PathIcons";
import { PathColor } from "../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import UserImage from "../../components/UserImage";
import { PathImages } from "../../utils/PathImages";
import BtnCustom from "../../components/buttons/BtnCustom";
import CustomDivider from "../../components/CustomDivider";

const DetailsSearch = ({ navigation }) => {
  const route = useRoute();
  const item = route.params.selectedItem;

  const RenderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.drawer}
        onPress={() => navigation.goBack()}
      >
        {PathIcons.leftArrow}
      </TouchableOpacity>
      <Text style={[styles.title, styles.texts20]}>Details</Text>
    </View>
  );

  const RenderInfo = ({ time, location, city }) => (
    <View style={styles.infoRow}>
      <View style={styles.timeContainer}>
        <Text style={[styles.texts16, { width: 100 }]}>{time}</Text>
        <View style={styles.dotLine} />
        <View>
          <Text style={styles.texts16}>{location}</Text>
          <Text style={styles.texts12}>{city}</Text>
        </View>
      </View>
      {PathIcons.rightArrow}
    </View>
  );

  return (
    <View style={styles.container}>
      <RenderHeader />
      <View style={styles.infoRow}>
        <Text style={styles.texts20}>{item.date}</Text>
        <Text style={[styles.texts20, styles.price]}>{item.price} JD</Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.line} />
        <RenderInfo
          time={item.leavingTime}
          location={item.leavingFrom}
          city={"amman"}
        />
        <RenderInfo
          time={item.goingTime}
          location={item.goingTo}
          city={"amman"}
        />
      </View>
      <CustomDivider />
      <View style={styles.driverInfo}>
        <View style={{ gap: 10 }}>
          <Text style={styles.texts18}>{item.driverName}</Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Text style={styles.texts16}>{item.rating}</Text>
            <Text style={styles.texts16}>(100 rate)</Text>
          </View>
        </View>
        <UserImage source={PathImages.user} size={80} />
      </View>
      <CustomDivider />

      <View style={styles.carInfo}>
        <View style={styles.carItem}>
          <Text style={styles.texts16}>Model</Text>
          <Text style={styles.texts16}>{item.carType}</Text>
        </View>
        <View style={styles.carItem}>
          <Text style={styles.texts16}>Number</Text>
          <Text style={styles.texts16}>{item.carNumber}</Text>
        </View>
        <View style={styles.carItem}>
          <Text style={styles.texts16}>Color</Text>
          <View style={[styles.colorCar, { backgroundColor: item.carColor }]} />
        </View>
      </View>

      <BtnCustom title={"Booking"} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PathColor.white,
    padding: 20,
  },
  // header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  drawer: { position: "absolute", zIndex: 10 },
  title: { flex: 1, textAlign: "center" },
  infoCard: { marginVertical: 30, gap: 20, position: "relative" },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  texts20: { fontFamily: PathFonts.PoppinsMedium, fontSize: PathFontsSize.s20 },
  texts18: { fontFamily: PathFonts.PoppinsMedium, fontSize: PathFontsSize.s18 },
  texts16: { fontFamily: PathFonts.PoppinsMedium, fontSize: PathFontsSize.s16 },
  texts12: { fontFamily: PathFonts.PoppinsMedium, fontSize: PathFontsSize.s12 },
  price: { color: PathColor.primary[500] },
  timeContainer: { flexDirection: "row" },
  dotLine: {
    position: "absolute",
    backgroundColor: PathColor.black,
    height: 10,
    width: 10,
    borderRadius: 40,
    top: 6,
    left: 66,
  },
  line: {
    position: "absolute",
    borderRightColor: PathColor.black,
    borderRightWidth: 3,
    height: 60,
    top: 15,
    left: 69,
  },

  // Driver Info
  driverInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
  },

  // Car Info
  carInfo: {
    marginVertical: 25,
    marginBottom: 40,
  },
  carItem: {
    flexDirection: "row",
    gap: 20,
    marginVertical: 5,
  },
  colorCar: {
    height: 10,
    borderRadius: 10,
    width: 70,
    alignSelf: "center",
  },
});

export default DetailsSearch;
