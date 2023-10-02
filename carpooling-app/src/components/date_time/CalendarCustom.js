import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { PathColor } from "../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import BtnNext from "../buttons/BtnNext";
import HeaderScreens from "../header/HeaderScreens";
import { usePublishContext } from "../../hooks/usePublishCxt";
import { useBookingCxt } from "../../hooks/useBookingCxt";

export const CalendarPublish = ({ navigation }) => {
  const { dispatch, date } = usePublishContext();
  return (
    <CalendarCustom
      dispatch={dispatch}
      date={date}
      next="TimeCustom"
      navigation={navigation}
    />
  );
};
export const CalendarHome = ({ navigation }) => {
  const { dispatch, date } = useBookingCxt();
  return (
    <CalendarCustom
      dispatch={dispatch}
      date={date}
      next="Home"
      navigation={navigation}
    />
  );
};

const CalendarCustom = ({ navigation, dispatch, date, next }) => {
  const [selected, setSelected] = useState(date);
  return (
    <View style={styles.container}>
      <HeaderScreens title={""} navigation={navigation} />

      <View>
        <Text style={styles.title}>When are you going?</Text>
        {/* Calender */}
        <Calendar
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: "orange",
            },
          }}
          theme={{
            textSectionTitleColor: PathColor.primary[500],
            selectedDayBackgroundColor: PathColor.primary[500],
            todayTextColor: PathColor.primary[500],
            arrowColor: PathColor.primary[500],
          }}
        />
      </View>
      <BtnNext
        onPress={() => {
          // console.log(dateToUserInterface(selected));
          // console.log(selected);
          dispatch({
            type: "SET_DATE",
            payload: selected,
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
  title: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s24,
    textAlign: "center",
    color: PathColor.black,
    marginBottom: 30,
  },
  error: {
    color: PathColor.red[500],
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s14,
    textAlign: "center",
    marginTop: 2,
    marginLeft: 2,
  },
});

export const checkDateformat = (date) => {
  const inputDate = new Date(date);
  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, "0");
  const day = String(inputDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
export const dateToUserInterface = (date) => {
  const inputDate = new Date(date);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayOfWeek = inputDate.getDay();
  const dayOfMonth = inputDate.getDate();
  const monthName = monthNames[inputDate.getMonth()];
  const formattedDate = `${
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek]
  } ${dayOfMonth} ${monthName}`;

  return formattedDate;
};

// import { StyleSheet, Text, View } from "react-native";
// import React, { useState } from "react";
// import { Calendar } from "react-native-calendars";
// import { PathColor } from "../utils/PathColor";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { PathIcons } from "../utils/PathIcons";
// import { useNavigation } from "@react-navigation/native";
// import { PathFonts, PathFontsSize } from "../utils/PathFonts";
// import BtnNext from "./BtnNext";
// import TimeCustom from "./TimeCustom";

// const CalendarCustom = () => {
//   const [selected, setSelected] = useState(null);
//   const [time, setTime] = useState(null);
//   const [firstClick, setFirstClick] = useState(false);

//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.goBack}
//           onPress={() => navigation.goBack()}
//         >
//           {PathIcons.leftArrow}
//         </TouchableOpacity>
//         <Text style={styles.title}>Set Date & Time</Text>
//       </View>

//       {/* Calender */}
//       <Calendar
//         onDayPress={(day) => {
//           setSelected(day.dateString);
//         }}
//         markedDates={{
//           [selected]: {
//             selected: true,
//             disableTouchEvent: true,
//             selectedDotColor: "orange",
//           },
//         }}
//         theme={{
//           textSectionTitleColor: PathColor.primary[500],
//           selectedDayBackgroundColor: PathColor.primary[500],
//           todayTextColor: PathColor.primary[500],
//           arrowColor: PathColor.primary[500],
//         }}
//       />
//       <BtnNext
//         onPress={() => {
//           setFirstClick(true);

//           firstClick && navigation.navigate("Publish");
//         }}
//       />

//       <View style={{ marginTop: 60 }}>
//         <TimeCustom time={time} setTime={setTime} />
//       </View>

//       {firstClick && (
//         <View style={{ marginTop: 20 }}>
//           {!selected && !time && (
//             <Text style={styles.error}>Please select Date & Time</Text>
//           )}
//           {!selected && time && (
//             <Text style={styles.error}>Please select Date</Text>
//           )}
//           {selected && !time && (
//             <Text style={styles.error}>Please select Time</Text>
//           )}
//         </View>
//       )}
//     </View>
//   );
// };

// export default CalendarCustom;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: PathColor.white,
//     padding: 20,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginRight: 20,
//     marginBottom: 30,
//   },
//   title: {
//     flex: 1,
//     fontFamily: PathFonts.PoppinsMedium,
//     fontSize: PathFontsSize.s20,
//     textAlign: "center",
//   },
//   error: {
//     color: PathColor.red[500],
//     fontFamily: PathFonts.PoppinsMedium,
//     fontSize: PathFontsSize.s14,
//     textAlign: "center",
//     marginTop: 2,
//     marginLeft: 2,
//   },
// });
