import { StyleSheet, View } from "react-native";
import React from "react";
import { PathColor } from "../../../utils/PathColor";
import { useNavigation } from "@react-navigation/native";
import SearchPlaces from "./SearchPlaces";
import { usePublishContext } from "../../../hooks/usePublishCxt";
import HeaderScreens from "../../../components/header/HeaderScreens";
import { useBookingCxt } from "../../../hooks/useBookingCxt";

export const SetFromLocHome = () => {
  return <LocationScreen type="origin" title="Where From" next="Home" />;
};

export const SetToLocHome = () => {
  return <LocationScreen type="destination" title="Where To" next="Home" />;
};

export const SetFromLocPublish = () => {
  return (
    <LocationScreen type="origin" title="Where From" next="SetToLocPublish" />
  );
};
export const SetToLocPublish = () => {
  return (
    <LocationScreen type="destination" title="Where To" next="MapScreen" />
  );
};

const LocationScreen = ({ type, title, next }) => {
  const navigation = useNavigation();
  const { dispatch: homeDispatch } = useBookingCxt();
  const { dispatch: publishDispatch } = usePublishContext();
  const dispatch = next === "Home" ? homeDispatch : publishDispatch;
  return (
    <View style={styles.body}>
      <HeaderScreens title={title} navigation={navigation} />
      <SearchPlaces type={type} dispatch={dispatch} next={next} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: PathColor.white,
    height: "100%",
    padding: 20,
  },
});

// export default LocationScreen;

// import { StyleSheet, View } from "react-native";
// import React from "react";
// import { PathColor } from "../../../utils/PathColor";

// import { useLocationContext } from "../../../hooks/useLocationCxt";
// import { useNavigation } from "@react-navigation/native";
// import SearchPlaces from "./SearchPlaces";
// import { usePublishContext } from "../../../hooks/usePublishCxt";
// import HeaderScreens from "../../../components/HeaderScreens";

// export const SetFromLocHome = () => {
//   return <LocationScreen type="origin" title="Where From" next="Home" />;
// };

// export const SetToLocHome = () => {
//   return <LocationScreen type="destination" title="Where To" next="Home" />;
// };

// export const SetFromLocPublish = () => {
//   return (
//     <LocationScreen type="origin" title="Where From" next="SetToLocPublish" />
//   );
// };
// export const SetToLocPublish = () => {
//   return (
//     <LocationScreen
//       type="destination"
//       title="Where To"
//       next="CalendarPublish"
//     />
//   );
// };

// const LocationScreen = ({ type, title, next }) => {
//   const navigation = useNavigation();
//   const { dispatch: homeDispatch } = useLocationContext();
//   const { dispatch: publishDispatch } = usePublishContext();
//   const dispatch = next === "Home" ? homeDispatch : publishDispatch;
//   return (
//     <View style={styles.body}>
//       <HeaderScreens title={title} navigation={navigation} />
//       <SearchPlaces type={type} dispatch={dispatch} next={next} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   body: {
//     backgroundColor: PathColor.white,
//     height: "100%",
//     padding: 20,
//   },
// });

// // export default LocationScreen;
