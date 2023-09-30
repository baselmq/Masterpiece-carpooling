import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SearchResultItem from "../../../components/SearchResultItem";
import { PathFonts, PathFontsSize } from "../../../utils/PathFonts";
import { PathColor } from "../../../utils/PathColor";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { PathIcons } from "../../../utils/PathIcons";
import { windowWidth } from "../../../utils/Dimensions";

const SearchPlaces = ({ type, dispatch, next }) => {
  const GOOGLE_MAP_API_KEY = "AIzaSyDdf6jkuHWroggBhlwZkIhKeToq7zxqT_k";
  const navigation = useNavigation();

  const placeholderText = type === "origin" ? "Where from" : "Where to";
  const actionType = type === "origin" ? "SET_ORIGIN" : "SET_DESTINATION";

  const handlePress = (data, details = null) => {
    dispatch({
      type: actionType,
      payload: {
        location: details.geometry.location,
        description: data.description,
      },
    });
    navigation.navigate(next);
  };

  const currentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Please grant location permissions");
    }

    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    const reverseGeocodeAddress = await Location.reverseGeocodeAsync({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    });
    console.log(reverseGeocodeAddress);
    dispatch({
      type: actionType,
      payload: {
        location: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
        description: reverseGeocodeAddress[0]?.city,
      },
    });
    navigation.navigate(next);
    console.log(location.coords.latitude, location.coords.longitude);
  };

  // -------------------------------------------
  return (
    <View>
      <GooglePlacesAutocomplete
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        placeholder={placeholderText}
        listViewDisplayed={"auto"}
        minLength={2}
        keepResultsAfterBlur={true}
        enablePoweredByContainer={false}
        fetchDetails={true}
        returnKeyType={"search"}
        styles={googlePlacesStyles}
        renderRow={(data, index) => (
          <SearchResultItem data={data} index={index} />
        )}
        query={{ key: GOOGLE_MAP_API_KEY, language: "en" }}
        onPress={handlePress}
      />
      <TouchableOpacity
        style={styles.currentLocation}
        onPress={currentLocation}
      >
        <View style={styles.container}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View style={{ marginTop: 2 }}>{PathIcons.myLocation}</View>
            <Text style={styles.region}>Use current location</Text>
          </View>

          <View style={styles.rightArrow}>{PathIcons.rightArrow}</View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchPlaces;

const googlePlacesStyles = StyleSheet.create({
  container: {
    flex: 0,
    paddingVertical: 10,
    backgroundColor: "transparent",
  },
  row: { padding: 10 },
  textInput: {
    backgroundColor: PathColor.gray[100],
    borderRadius: 15,
    fontFamily: PathFonts.PoppinsRegular,
    fontSize: PathFontsSize.s16,
    marginTop: 5,
  },
  textInputContainer: {
    alignItems: "center",
    backgroundColor: PathColor.gray[100],
    borderRadius: 15,
    paddingHorizontal: 7,
  },
  listView: {
    marginTop: 70,
    borderTopWidth: 0.7,
    borderTopColor: PathColor.gray[100],
  },
});

const styles = StyleSheet.create({
  currentLocation: {
    position: "absolute",
    flex: 1,
    top: 70,
    width: windowWidth - 40,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingVertical: 18,
    // borderBottomWidth: 0.7,
    // borderBottomColor: PathColor.gray[100],

    //
  },
  region: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s16,
  },
});

// import React from "react";
// import { StyleSheet } from "react-native";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import SearchResultItem from "../../../components/SearchResultItem";
// import { PathFonts, PathFontsSize } from "../../../utils/PathFonts";
// import { PathColor } from "../../../utils/PathColor";
// import { useNavigation } from "@react-navigation/native";

// const SearchPlaces = ({ type, dispatch, next }) => {
//   const navigation = useNavigation();

//   const placeholderText = type === "origin" ? "Where from" : "Where to";

//   const handlePress = (data, details = null) => {
//     const actionType = type === "origin" ? "SET_ORIGIN" : "SET_DESTINATION";

//     dispatch({
//       type: actionType,
//       payload: {
//         location: details.geometry.location,
//         description: data.description,
//       },
//     });
//     navigation.navigate("Map", {
//       navigateTo: next,
//       typeTo: type,
//       titleHeader: data.description,
//     });
//   };

//   return (
//     <GooglePlacesAutocomplete
//       nearbyPlacesAPI="GooglePlacesSearch"
//       debounce={400}
//       placeholder={placeholderText}
//       listViewDisplayed={"auto"}
//       minLength={2}
//       enablePoweredByContainer={false}
//       fetchDetails={true}
//       returnKeyType={"search"}
//       styles={googlePlacesStyles}
//       renderRow={(data, index) => (
//         <SearchResultItem data={data} index={index} />
//       )}
//       query={{
//         key: "AIzaSyDdf6jkuHWroggBhlwZkIhKeToq7zxqT_k",
//         language: "en",
//       }}
//       onPress={handlePress}
//     />
//   );
// };

// export default SearchPlaces;

// const googlePlacesStyles = StyleSheet.create({
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
