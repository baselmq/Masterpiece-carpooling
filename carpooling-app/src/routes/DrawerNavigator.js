import { StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import SettingScreen from "../screens/SettingScreen/SettingScreen";
import HistoryScreen from "../screens/HistoryScreen/HistoryScreen";
import AboutScreen from "../screens/AboutScreen/AboutScreen";
import CustomDrawer from "../components/CustomDrawer";
import { PathFonts, PathFontsSize } from "../utils/PathFonts";
import { PathColor } from "../utils/PathColor";
import TabNavigator from "./TabNavigator";
import { PathIcons } from "../utils/PathIcons";
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerItemStyle: styles.drawerItemStyle,
        drawerStyle: styles.drawerStyle,
        drawerLabelStyle: styles.drawerLabelStyle,
        // drawerActiveBackgroundColor: PathColor.primary[50],
        drawerActiveTintColor: PathColor.primary[500],
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color }) =>
            PathIcons.getHome((size = 24), (color = color)),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) =>
            PathIcons.getProfile((size = 24), (color = color)),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerIcon: ({ color }) =>
            PathIcons.getSetting((size = 24), (color = color)),
        }}
      />
      <Drawer.Screen
        name="History"
        component={HistoryScreen}
        options={{
          drawerIcon: ({ color }) =>
            PathIcons.getHistory((size = 26), (color = color)),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: ({ color }) =>
            PathIcons.getAbout((size = 26), (color = color)),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({
  drawerLabelStyle: {
    marginLeft: -18,
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s14,
    marginTop: 4,
  },
  drawerStyle: {
    width: 240,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  drawerItemStyle: {
    borderRadius: 20,
    paddingHorizontal: 5,
  },
});
