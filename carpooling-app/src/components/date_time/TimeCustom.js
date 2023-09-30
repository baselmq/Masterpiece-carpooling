import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import { PathColor } from "../../utils/PathColor";
import HeaderScreens from "../header/HeaderScreens";
import { PathIcons } from "../../utils/PathIcons";
import BtnNext from "../buttons/BtnNext";
import { usePublishContext } from "../../hooks/usePublishCxt";

const TimeCustom = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [time, setTime] = useState("2023-09-28T05:00:09.350Z");
  const { dispatch } = usePublishContext();

  //   Convert time to 12 Hour
  function formatTimeTo12Hour(timestamp) {
    const date = new Date(timestamp);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";

    const hours12 = hours % 12 || 12; // Handle 0 as 12 for midnight

    // Create a formatted time string
    const formattedTime = `${hours12}:${minutes
      .toString()
      .padStart(2, "0")} ${amOrPm}`;

    return formattedTime;
  }

  const formattedTime = formatTimeTo12Hour(time);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setTime(date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <HeaderScreens title={""} navigation={navigation} />

      <Text style={styles.title}>
        At what time will you pick passengers up?
      </Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <TouchableOpacity onPress={showDatePicker} style={styles.timeBox}>
        <Text style={styles.timeText}>{formattedTime}</Text>
        <View style={styles.arrowDown}>
          {PathIcons.arrowDown((size = 30), (color = PathColor.primary[500]))}
        </View>
      </TouchableOpacity>
      <BtnNext
        onPress={() => {
          console.log(formattedTime);
          dispatch({
            type: "SET_TIME",
            payload: formattedTime,
          });
          navigation.navigate("NumberOfSeatsPublish");
        }}
      />
    </View>
  );
};

export default TimeCustom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PathColor.white,
    padding: 20,
  },
  title: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s24,
    textAlign: "center",
    color: PathColor.black,
    marginBottom: 40,
  },
  timeBox: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: PathColor.gray[200],
    borderWidth: 1,
    borderRadius: 50,
  },
  timeText: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: 40,
    textAlign: "center",
    marginTop: 8,
  },
  arrowDown: {
    position: "absolute",
    right: 30,
  },
});
