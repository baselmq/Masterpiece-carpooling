import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BtnCustom from "../../../components/buttons/BtnCustom";
import { useRegisterDriver } from "../../../hooks/useRegisterDriver";
import { useTripsCxt } from "../../../hooks/useTripsCxt";
import { useDriverCxt } from "../../../hooks/useDriverCxt";
import { usePublishContext } from "../../../hooks/usePublishCxt";
import { useUploadData } from "../../../hooks/useUploadData";
import HeaderScreens from "../../../components/header/HeaderScreens";
import { PathColor } from "../../../utils/PathColor";
import { PathImages } from "../../../utils/PathImages";
import { PathFonts, PathFontsSize } from "../../../utils/PathFonts";
import BtnOutlineCustom from "../../../components/buttons/BtnOutlineCustom";

const SubmitTrips = ({ navigation }) => {
  const { dispatch } = useTripsCxt();
  const { data: dataDriver } = useDriverCxt();
  const { origin, destination, date, time, numberOfSeats, travelTime, price } =
    usePublishContext();

  const type = "ADD_TRIPS";
  const path = "trips";

  const { uploadData, isLoading, error } = useUploadData(dispatch, type, path);
  const driverId = dataDriver?.data?.[0]?._id;
  const dataTrips = {
    driver_id: driverId, // Use the safely accessed driverId
    date,
    time,
    price,
    seats: numberOfSeats,
    origin,
    destination,
    travel_time: travelTime,
  };
  const submitData = async () => {
    await uploadData(dataTrips);

    if (!isLoading && !error) {
      navigation.navigate("Home2");
    }
  };
  return (
    <View style={styles.container}>
      <HeaderScreens navigation={navigation} />
      <Text style={styles.title}>Post Your Trip</Text>
      <View style={styles.image}>{PathImages.submitPublish}</View>
      <View style={styles.button}>
        <BtnOutlineCustom
          flexBtn={true}
          title={"Cancel"}
          onPress={() => navigation.navigate("Home2")}
        />
        <BtnCustom
          flexBtn={true}
          title={"Post"}
          isLoading={isLoading}
          onPress={submitData}
        />
      </View>
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
  title: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s22,
    textAlign: "center",
    marginBottom: 50,
  },
  image: { justifyContent: "center", alignItems: "center", marginBottom: 80 },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  error: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s16,
    color: PathColor.red[500],
    marginTop: 35,
    textAlign: "center",
  },
});
export default SubmitTrips;
