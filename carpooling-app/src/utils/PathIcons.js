import Calender from "../assets/icons/calender.svg";
import LeftArrow from "../assets/icons/left-arrow.svg";
import RightArrow from "../assets/icons/right-arrow.svg";
import MyLocation from "../assets/icons/my-location.svg";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

export class PathIcons {
  // svg
  static calender = (<Calender style={{ color: "#fff" }} />);
  static leftArrow = (<LeftArrow />);
  static rightArrow = (<RightArrow />);
  static currentLocation = require("../assets/icons/current-location.png");
  static marker = require("../assets/icons/marker.png");
  static myLocation = (<MyLocation width={20} height={20} />);
  // static downArrow = (<DownArrow />);
  static menu = (<Feather name="menu" size={28} color="black" />);

  //   react icon
  static getHome = (size, color) => (
    <AntDesign name="home" size={size} color={color} />
  );
  static getProfile = (size, color) => (
    <Ionicons name="person-outline" size={size} color={color} />
  );
  static getSetting = (size, color) => (
    <Ionicons name="settings-outline" size={size} color={color} />
  );
  static getHistory = (size, color) => (
    <MaterialIcons name="history" size={size} color={color} />
  );
  static getAbout = (size, color) => (
    <MaterialIcons name="info-outline" size={size} color={color} />
  );
  static getSignOut = (size, color) => (
    <AntDesign name="logout" size={size} color={color} />
  );

  static getPublish = (size, color) => (
    <AntDesign name="pluscircleo" size={size} color={color} />
  );
  static getYourRides = (size, color) => (
    <Feather name="calendar" size={size} color={color} />
  );
  static getArrowMap = (size, color) => (
    <Feather name="arrow-right" size={size} color={color} />
  );
  static getPlus = (size, color) => (
    <SimpleLineIcons name="plus" size={size} color={color} />
  );
  static getMinus = (size, color) => (
    <SimpleLineIcons name="minus" size={size} color={color} />
  );
  static arrowDown = (size, color) => (
    <MaterialIcons name="keyboard-arrow-down" size={size} color={color} />
  );
}
