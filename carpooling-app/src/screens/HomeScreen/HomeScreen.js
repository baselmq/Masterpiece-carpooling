import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";
import { PathImages } from "../../utils/PathImages";
import { PathColor } from "../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  checkDateformat,
  dateToUserInterface,
} from "../../components/date_time/CalendarCustom";
import { useBookingCxt } from "../../hooks/useBookingCxt";

const HomeScreen = ({ navigation, route }) => {
  const { origin, destination, date, numberOfSeats, dispatch } =
    useBookingCxt();
  const dateNow = checkDateformat(Date());

  useEffect(() => {
    dispatch({
      type: "SET_DATE",
      payload: dateNow,
    });
  }, []);
  return (
    <View style={styles.body}>
      {/* background image */}
      {PathImages.bgHome}
      <View style={styles.continuer}>
        {/* ---------------- header ----------------*/}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={28} color="black" />
          </TouchableOpacity>
          <ImageBackground
            source={PathImages.user}
            style={{ width: 35, height: 35 }}
            imageStyle={{ borderRadius: 25 }}
          />
        </View>
        {/* ---------------- title and image ----------------*/}
        <View style={styles.titleImage}>
          <Text style={styles.title}>Your Pick of rides at low prices</Text>
          {PathImages.home}
        </View>

        {/* ---------------- form ----------------*/}
        <View style={[styles.containerSearch, styles.shadowProp]}>
          <View style={{ paddingHorizontal: 20 }}>
            {/* ------------ Leaving from ------------ */}
            <TouchableOpacity
              style={[styles.setLocation, { marginTop: 5 }]}
              onPress={() => navigation.push("SetFromLocHome")}
            >
              {PathImages.circle}
              <Text style={styles.textSearch}>
                {origin ? (
                  <Text style={styles.textActive}>{origin.description}</Text>
                ) : (
                  "Leaving from"
                )}
              </Text>
            </TouchableOpacity>
            {/* ------------ Going to ------------ */}
            <TouchableOpacity
              style={styles.setLocation}
              onPress={() => navigation.push("SetToLocHome")}
            >
              {PathImages.circle}
              <Text style={styles.textSearch}>
                {destination ? (
                  <Text style={styles.textActive}>
                    {destination.description}
                  </Text>
                ) : (
                  "Going to"
                )}
              </Text>
            </TouchableOpacity>
            {/* calender and number Of Seats*/}
            <View style={{ flexDirection: "row" }}>
              {/* ------------ calender ------------ */}
              <TouchableOpacity
                style={styles.calender}
                uppercase={false}
                onPress={() => navigation.push("CalendarHome")}
              >
                {/* {PathIcons.calender} */}
                <Ionicons
                  name="calendar"
                  size={22}
                  color={PathColor.gray[600]}
                />
                <Text style={styles.textActive}>
                  {dateNow === date ? "Today" : dateToUserInterface(date)}
                </Text>
              </TouchableOpacity>

              {/* ------------ numberOfSeats ------------ */}
              <TouchableOpacity
                onPress={() => navigation.push("NumberOfSeatsHome")}
                style={styles.numberOfSeats}
              >
                {/* {PathIcons.calender} */}
                <MaterialIcons
                  name="supervised-user-circle"
                  size={25}
                  color={PathColor.gray[600]}
                />
                <Text style={styles.textActive}>{numberOfSeats}</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* ------------ button Search ------------ */}
          <TouchableHighlight
            style={styles.btnSearch}
            onPress={() => {
              if (origin && destination) {
                navigation.push("Search");
              }
            }}
          >
            <Text
              style={[
                styles.textSearch,
                { color: PathColor.white, textAlign: "center" },
              ]}
            >
              Search
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
    // <View>
    //   <Onboarding1 width={300} height={300} />

    //   <Text>HomeScreen</Text>
    //   <TouchableOpacity onPress={clearOnboarding}>
    //     <Text>Clear Onboarding</Text>
    //   </TouchableOpacity>
    // </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: PathColor.white,
  },
  continuer: {
    padding: 20,
  },
  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleImage: {
    marginTop: 20,
    alignItems: "center",
  },
  title: {
    fontFamily: PathFonts.PoppinsRegular,
    fontSize: PathFontsSize.s24,
    marginBottom: 15,
  },

  // Search
  containerSearch: {
    backgroundColor: PathColor.white,
    marginTop: 30,
    borderRadius: 20,
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  setLocation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomColor: PathColor.gray[300],
    borderBottomWidth: 1,
  },
  textSearch: {
    fontFamily: PathFonts.PoppinsRegular,
    fontSize: PathFontsSize.s16,
    color: PathColor.gray[600],
  },
  textActive: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s16,
    color: PathColor.black,
  },

  // calender
  calender: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRightColor: PathColor.gray[300],
    borderRightWidth: 1,
  },
  // numberOfSeats
  numberOfSeats: {
    flex: 0.3,
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  // btnSearch
  btnSearch: {
    backgroundColor: PathColor.primary[500],
    padding: 15,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
});
