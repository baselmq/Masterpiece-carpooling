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
import { dateToUserInterface } from "../../components/date_time/CalendarCustom";
import { sumTime } from "../../components/sumTime";
import { useUploadData } from "../../hooks/useUploadData";
import { useUserBookingCxt } from "../../hooks/useBookingCxt";

const DetailsSearch = ({ navigation }) => {
  const route = useRoute();
  const item = route.params.selectedItem;
  const timeTrip = sumTime(item.time, item.travel_time.duration.text);
  const indexOfColor = PathColor.colorsCarNames.indexOf(item.car_color);
  const colorCar = PathColor.colorsCar[indexOfColor];
  const { dispatch } = useUserBookingCxt();
  const type = "ADD_BOOKING";
  const path = "booking";

  const { uploadData, isLoading, error } = useUploadData(dispatch, type, path);

  const handelSubmit = () => {
    const data = {
      trip_id: item._id,
      driver_id: item.driver_id,
    };
    uploadData(data);
  };
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
        <Text style={styles.texts20}>{dateToUserInterface(item.date)}</Text>
        <Text style={[styles.texts20, styles.price]}>{item.price} JOD</Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.line} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("MapBooking", {
              loc: item.origin,
            })
          }
        >
          <RenderInfo
            time={item.time}
            location={item.origin.description}
            city={""}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("MapBooking", {
              loc: item.destination,
            })
          }
        >
          <RenderInfo
            time={timeTrip}
            location={item.destination.description}
            city={""}
          />
        </TouchableOpacity>
      </View>
      <CustomDivider />
      <View style={styles.driverInfo}>
        <View style={{ gap: 10 }}>
          <Text style={styles.texts18}>{item.username}</Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            {/* <Text style={styles.texts16}>{item.rating}</Text> */}
            <Text style={styles.texts16}>{4.5}</Text>
            <Text style={styles.texts16}>(100 rate)</Text>
          </View>
        </View>
        <UserImage source={PathImages.user} size={80} />
      </View>
      <CustomDivider />

      <View style={styles.carInfo}>
        <View style={styles.carItem}>
          <Text style={styles.texts16}>Model</Text>
          <Text style={styles.texts16}>{item.car_model}</Text>
        </View>
        <View style={styles.carItem}>
          <Text style={styles.texts16}>Number</Text>
          <Text style={styles.texts16}>{item.car_number}</Text>
        </View>
        <View style={styles.carItem}>
          <Text style={styles.texts16}>Color</Text>
          <View style={[styles.colorCar, { backgroundColor: colorCar }]} />
        </View>
      </View>

      <BtnCustom
        title={"Booking"}
        isLoading={isLoading}
        onPress={handelSubmit}
      />
      {error && <Text style={styles.error}>{error}</Text>}
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
    left: 75,
  },
  line: {
    position: "absolute",
    borderRightColor: PathColor.black,
    borderRightWidth: 3,
    height: 60,
    top: 15,
    left: 78,
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

  error: {
    color: PathColor.red[500],
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s12,
    marginTop: 10,
  },
});

export default DetailsSearch;
