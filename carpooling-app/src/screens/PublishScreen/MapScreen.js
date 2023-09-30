import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { PathColor } from "../../utils/PathColor";
import { PathIcons } from "../../utils/PathIcons";
import Map from "../../components/Map";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import { usePublishContext } from "../../hooks/usePublishCxt";
import BtnNext from "../../components/buttons/BtnNext";
import axios from "axios";
// import { GOOGLE_MAP_APIKEY } from "@env";

const MapScreen = ({ navigation }) => {
  const GOOGLE_MAP_API_KEY = "AIzaSyDdf6jkuHWroggBhlwZkIhKeToq7zxqT_k";
  const { origin, destination, travelTime, dispatch } = usePublishContext();
  useEffect(() => {
    if (!origin || !destination) return;
    const getTravelTime = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination.description}&origins=${origin.description}&units=imperial&key=${GOOGLE_MAP_API_KEY}`
        );
        dispatch({
          type: "SET_TRAVEL_TIME",
          payload: response.data.rows[0].elements[0],
        });
      } catch (error) {
        console.error(error);
      }
    };
    getTravelTime();
  }, [origin, destination, GOOGLE_MAP_API_KEY]);

  return (
    <View style={{ flex: 1, backgroundColor: PathColor.white }}>
      <TouchableOpacity
        style={styles.goBack}
        onPress={() => navigation.goBack()}
      >
        {PathIcons.leftArrow}
      </TouchableOpacity>

      <Map name={"CalendarPublish"} />

      <View style={styles.bottom}>
        <Text style={styles.title}>
          {travelTime?.duration?.text} Travel Time
        </Text>
        <Text style={styles.title}>
          {travelTime?.distance?.text} Travel Distance
        </Text>
      </View>

      <BtnNext onPress={() => navigation.navigate("CalendarPublish")} />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  buttonCallout: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    right: 20,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: PathColor.primary[500],
    color: PathColor.white,
    borderRadius: 50,
    padding: 20,
  },
  body: {
    backgroundColor: PathColor.white,
    height: "100%",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  goBack: {
    position: "absolute",
    backgroundColor: PathColor.white,
    borderRadius: 50,
    zIndex: 10,
    left: 10,
    top: 10,
    padding: 10,
  },
  title: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s16,
    color: PathColor.gray[900],
  },
  bottom: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    gap: 3,
  },
});
// import { StyleSheet, TouchableOpacity, View } from "react-native";
// import React from "react";
// import { PathColor } from "../../utils/PathColor";
// import { useLocationContext } from "../../hooks/useLocationCxt";
// import { PathIcons } from "../../utils/PathIcons";
// import Map from "../../components/Map";
// import { PathFonts, PathFontsSize } from "../../utils/PathFonts";

// import { useBookingCxt } from "../../hooks/useBookingCxt";
// import HeaderScreensMap from "../../components/HeaderScreensMap";
// // import { GOOGLE_MAP_APIKEY } from "@env";

// const MapScreen = ({ route, navigation }) => {
//   const { navigateTo, typeTo, titleHeader } = route.params;
//   const { origin, destination } = useLocationContext();
//   const { dispatch } = useBookingCxt();
//   const title = typeTo === "origin" ? "Where from" : "Where to";

//   const pushDataToHome = () => {
//     const data = typeTo === "origin" ? origin : destination;
//     const actionType = typeTo === "origin" ? "SET_ORIGIN" : "SET_DESTINATION";

//     dispatch({
//       type: actionType,
//       payload: {
//         location: data.location,
//         description: data.description,
//       },
//     });
//   };
//   return (
//     <View style={{ flex: 1 }}>
//       <HeaderScreensMap title={titleHeader} navigation={navigation} />
//       <Map name={navigateTo} />
//       <TouchableOpacity
//         onPress={() => {
//           navigateTo === "Home" ? pushDataToHome() : "";

//           navigation.navigate(navigateTo);
//         }}
//         style={styles.buttonCallout}
//       >
//         {PathIcons.getArrowMap((size = 28), (color = "white"))}
//       </TouchableOpacity>
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
