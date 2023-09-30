import React, { useEffect } from "react";

import { SetFromLocPublish } from "./components/LocationScreen";
import { checkDateformat } from "../../components/date_time/CalendarCustom";
import { usePublishContext } from "../../hooks/usePublishCxt";

const PublishScreen = () => {
  const { dispatch } = usePublishContext();
  const dateNow = checkDateformat(Date());

  useEffect(() => {
    dispatch({
      type: "SET_DATE",
      payload: dateNow,
    });
  }, []);
  return <SetFromLocPublish />;
};

export default PublishScreen;
// import { StyleSheet, Text, Touchable, View } from "react-native";
// import React, { useEffect } from "react";
// import Map from "../../components/Map";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { PathColor } from "../../utils/PathColor";
// import { PathIcons } from "../../utils/PathIcons";
// import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
// import { useLocationContext } from "../../hooks/useLocationCxt";
// import { useNavigation } from "@react-navigation/native";
// import SearchGooglePlaces from "./components/SearchPlaces";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import SearchResultItem from "../SearchScreen/components/SearchResultItem";

// const MapScreen = () => {
//   const navigation = useNavigation();
//   const { origin, destination, dispatch } = useLocationContext();
//   // console.log(destination);
//   // useEffect(() => {
//   //   if (origin && destination) {
//   //     navigation.navigate("Map");
//   //   }
//   // }, [origin, destination, navigation]);

//   return (
//     <View style={styles.body}>
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.goBack}
//           onPress={() => navigation.goBack()}
//         >
//           {PathIcons.leftArrow}
//         </TouchableOpacity>
//         <Text style={styles.title}>Set Location</Text>
//       </View>

//       <GooglePlacesAutocomplete
//         nearbyPlacesAPI="GooglePlacesSearch"
//         debounce={400}
//         listViewDisplayed={"auto"}
//         minLength={2}
//         enablePoweredByContainer={false}
//         // keepResultsAfterBlur={true}
//         fetchDetails={true}
//         returnKeyType={"search"}
//         styles={googlePlaces}
//         renderRow={(data, index) => (
//           <SearchResultItem data={data} index={index} />
//         )}
//         query={{
//           key: "AIzaSyDdf6jkuHWroggBhlwZkIhKeToq7zxqT_k",
//           language: "en",
//         }}
//         placeholder="Where from"
//         onPress={(data, details = null) => {
//           dispatch({
//             type: "SET_ORIGIN",
//             payload: {
//               location: details.geometry.location,
//               description: data.description,
//             },
//           });
//           navigation.navigate("Map");
//         }}
//       />
//     </View>
//   );
// };

// export default MapScreen;

// const styles = StyleSheet.create({
//   buttonCallout: {
//     flex: 1,
//     flexDirection: "row",
//     position: "absolute",
//     bottom: 20,
//     right: 20,
//     alignSelf: "center",
//     justifyContent: "center",
//     backgroundColor: PathColor.primary[500],
//     color: PathColor.white,
//     borderRadius: 50,
//     padding: 20,
//   },
//   body: {
//     backgroundColor: PathColor.white,
//     height: "100%",
//     padding: 20,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   goBack: {
//     position: "absolute",
//     zIndex: 10,
//   },
//   title: {
//     flex: 1,
//     fontFamily: PathFonts.PoppinsMedium,
//     fontSize: PathFontsSize.s20,
//     textAlign: "center",
//   },
// });

// const googlePlaces = StyleSheet.create({
//   container: {
//     flex: 0,
//     paddingVertical: 10,
//     backgroundColor: "transparent",
//   },
//   row: { padding: 10 },
//   textInput: {
//     backgroundColor: PathColor.gray[100],
//     borderRadius: 15,
//     fontFamily: PathFonts.PoppinsRegular,
//     fontSize: PathFontsSize.s16,
//     marginTop: 5,
//   },
//   textInputContainer: {
//     alignItems: "center",
//     backgroundColor: PathColor.gray[100],
//     borderRadius: 15,
//     paddingHorizontal: 7,
//   },
// });
