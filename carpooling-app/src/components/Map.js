import { Image, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { usePublishContext } from "../hooks/usePublishCxt";
import { useBookingCxt } from "../hooks/useBookingCxt";
import { PathIcons } from "../utils/PathIcons";

const MapPublish = ({ name }) => {
  // const { origin, destination, dispatch } = useLocationContext();
  const GOOGLE_MAP_API_KEY = "AIzaSyDdf6jkuHWroggBhlwZkIhKeToq7zxqT_k";
  const { origin: HO, destination: HD } = useBookingCxt();
  const { origin: PO, destination: PD, dispatch } = usePublishContext();
  const origin = name == "Home" ? HO : PO;
  const destination = name == "Home" ? HD : PD;
  const mapRef = useRef(null);

  // -------------------------------------------

  useEffect(() => {
    if (!origin || !destination) return;
    setTimeout(() => {
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
      });
    }, 1000);
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={{ flex: 1 }}
      mapType="mutedStandard"
      // region={}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          destination={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          apikey={GOOGLE_MAP_API_KEY}
          strokeWidth={4}
          strokeColor="#00aff5"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        >
          <Image
            source={PathIcons.currentLocation}
            style={{ height: 35, width: 35 }}
          />
        </Marker>
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        >
          <Image source={PathIcons.marker} style={{ height: 35, width: 35 }} />
        </Marker>
      )}
    </MapView>
  );
};

export default MapPublish;

const styles = StyleSheet.create({});
