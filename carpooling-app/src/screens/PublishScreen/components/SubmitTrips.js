import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BtnCustom from "../../../components/buttons/BtnCustom";
import { useRegisterDriver } from "../../../hooks/useRegisterDriver";
import { useTripsCxt } from "../../../hooks/useTripsCxt";
import { useDriverCxt } from "../../../hooks/useDriverCxt";
import { usePublishContext } from "../../../hooks/usePublishCxt";
import { useUploadData } from "../../../hooks/useUploadData";

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
  };
  return (
    <View>
      <Text>SubmitTrips</Text>
      <BtnCustom title={"Submit"} onPress={submitData} />
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default SubmitTrips;
