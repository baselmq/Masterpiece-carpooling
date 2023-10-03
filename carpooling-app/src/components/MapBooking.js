import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { usePublishContext } from "../hooks/usePublishCxt";
import { useBookingCxt } from "../hooks/useBookingCxt";
import { PathIcons } from "../utils/PathIcons";
import { PathColor } from "../utils/PathColor";

const MapBooking = ({ route, navigation }) => {
  const GOOGLE_MAP_API_KEY = "AIzaSyDdf6jkuHWroggBhlwZkIhKeToq7zxqT_k";
  const { loc } = route.params;

  const mapRef = useRef(null);

  // -------------------------------------------

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <TouchableOpacity
        style={styles.goBack}
        onPress={() => navigation.goBack()}
      >
        {PathIcons.leftArrow}
      </TouchableOpacity>
      <MapView
        //   ref={mapRef}
        style={{ flex: 1 }}
        mapType="mutedStandard"
        // region={}
        initialRegion={{
          latitude: loc.location.lat,
          longitude: loc.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            latitude: loc.location.lat,
            longitude: loc.location.lng,
          }}
          title="Destination"
          description={loc.description}
          identifier="destination"
        >
          <Image source={PathIcons.marker} style={{ height: 35, width: 35 }} />
        </Marker>
      </MapView>
    </View>
  );
};

export default MapBooking;

const styles = StyleSheet.create({
  goBack: {
    position: "absolute",
    backgroundColor: PathColor.white,
    borderRadius: 50,
    zIndex: 10,
    left: 10,
    top: 10,
    padding: 10,
  },
});
