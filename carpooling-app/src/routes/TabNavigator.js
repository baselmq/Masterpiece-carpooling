import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PathIcons } from "../utils/PathIcons";
import { PathColor } from "../utils/PathColor";
import {
  MainStackNavigator,
  ProfileStackNavigator,
  PublishStackNavigator,
  YourRideStackNavigator,
} from "./StackNavigator";
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: PathColor.primary[500],
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Home2"
        component={MainStackNavigator}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) =>
            PathIcons.getHome((size = size), (color = color)),
        }}
      />
      <Tab.Screen
        name="Publish2"
        component={PublishStackNavigator}
        options={{
          title: "Publish",
          tabBarIcon: ({ color, size }) =>
            PathIcons.getPublish((size = size - 3), (color = color)),
        }}
      />
      <Tab.Screen
        name="YourRides2"
        component={YourRideStackNavigator}
        options={{
          //   tabBarBadge: 3,
          title: "Your Rides",
          tabBarIcon: ({ color, size }) =>
            PathIcons.getYourRides((size = size - 3), (color = color)),
        }}
      />
      <Tab.Screen
        name="Profile2"
        component={ProfileStackNavigator}
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) =>
            PathIcons.getProfile((size = size), (color = color)),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "../screens/HomeScreen/HomeScreen";
// import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
// import PublishScreen from "../screens/PublishScreen/PublishScreen";
// import YourRidesScreen from "../screens/YourRidesScreen/YourRidesScreen";
// import { AntDesign } from "@expo/vector-icons";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import { PathIcons } from "../utils/PathIcons";
// import { PathColor } from "../utils/PathColor";
// const Tab = createBottomTabNavigator();
// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: PathColor.primary[500],
//       }}
//     >
//       <Tab.Screen
//         name="Home2"
//         component={HomeScreen}
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color, size }) =>
//             PathIcons.getHome((size = size), (color = color)),
//         }}
//       />
//       <Tab.Screen
//         name="Publish"
//         component={PublishScreen}
//         options={{
//           tabBarIcon: ({ color, size }) =>
//             PathIcons.getPublish((size = size - 3), (color = color)),
//         }}
//       />
//       <Tab.Screen
//         name="YourRides"
//         component={YourRidesScreen}
//         options={{
//           //   tabBarBadge: 3,
//           tabBarIcon: ({ color, size }) =>
//             PathIcons.getYourRides((size = size - 3), (color = color)),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({ color, size }) =>
//             PathIcons.getProfile((size = size), (color = color)),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;

// const styles = StyleSheet.create({});
