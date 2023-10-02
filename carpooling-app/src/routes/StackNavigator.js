import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import PublishScreen from "../screens/PublishScreen/PublishScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import YourRidesScreen from "../screens/YourRidesScreen/YourRidesScreen";
import SearchLocation from "../screens/SearchScreen/SearchLocation";
import DetailsSearch from "../screens/SearchScreen/DetailsSearch";
import MapScreen from "../screens/PublishScreen/MapScreen";
import {
  SetFromLocHome,
  SetFromLocPublish,
  SetToLocHome,
  SetToLocPublish,
} from "../screens/PublishScreen/components/LocationScreen";
import CalendarCustom, {
  CalendarHome,
  CalendarPublish,
} from "../components/date_time/CalendarCustom";
import NumberOfSeats, {
  NumberOfSeatsHome,
  NumberOfSeatsPublish,
} from "../components/seats/NumberOfSeats";
import TimeCustom from "../components/date_time/TimeCustom";
import PricePerSeat from "../components/seats/PricePerSeat";
import DataWrapper from "../screens/Wrapper/DataWrapper";
import FormDriver from "../screens/PublishScreen/components/FormDriver";
import FormCar from "../screens/PublishScreen/components/FormCar";

const Stack = createNativeStackNavigator();
const screenOptionStyle = {
  //   headerStyle: {
  //     backgroundColor: "#9AC4F8",
  //   },
  //   headerTintColor: "white",
  //   headerBackTitle: "Back",
  headerShown: false,
};
export const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      {/* <Stack.Screen name="DataWrapper" component={DataWrapper} /> */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SearchLocation" component={SearchLocation} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="DetailsSearch" component={DetailsSearch} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="SetFromLocHome" component={SetFromLocHome} />
      <Stack.Screen name="SetToLocHome" component={SetToLocHome} />
      <Stack.Screen name="CalendarHome" component={CalendarHome} />
      <Stack.Screen name="NumberOfSeatsHome" component={NumberOfSeatsHome} />
    </Stack.Navigator>
  );
};

export const PublishStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Publish" component={PublishScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="SetFromLocPublish" component={SetFromLocPublish} />
      <Stack.Screen name="SetToLocPublish" component={SetToLocPublish} />
      <Stack.Screen name="CalendarPublish" component={CalendarPublish} />
      <Stack.Screen name="TimeCustom" component={TimeCustom} />
      <Stack.Screen name="PricePerSeat" component={PricePerSeat} />
      <Stack.Screen name="FormDriver" component={FormDriver} />
      <Stack.Screen name="FormCar" component={FormCar} />
      <Stack.Screen
        name="NumberOfSeatsPublish"
        component={NumberOfSeatsPublish}
      />
    </Stack.Navigator>
  );
};
export const YourRideStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="YourRide" component={YourRidesScreen} />
    </Stack.Navigator>
  );
};
export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
