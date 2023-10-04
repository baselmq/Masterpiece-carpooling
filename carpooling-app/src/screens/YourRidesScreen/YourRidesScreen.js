import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { PathIcons } from "../../utils/PathIcons";
import { PathColor } from "../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import { useAuthContext } from "../../hooks/useAuthContext";
import { PathApi } from "../../utils/PathApi";
import LoadingCustom from "../../components/Loading";
import { PathImages } from "../../utils/PathImages";
import { useUserBookingCxt } from "../../hooks/useBookingCxt";
import BtnOutlineCustom from "../../components/buttons/BtnOutlineCustom";
import CardYourRides from "./CardYourRides";
import { useFocusEffect } from "@react-navigation/native";

const YourRidesScreen = ({ navigation }) => {
  const { user } = useAuthContext();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataBooking, setDataBooking] = useState([]);
  const { userBooking, dispatch } = useUserBookingCxt();

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${PathApi.endpoint}/booking/me`, {
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error fetching data");
      }

      const json = await response.json();
      setDataBooking(json.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);

  // Use useFocusEffect to fetch data whenever the screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.drawer}
          onPress={() => navigation.openDrawer()}
        >
          {PathIcons.menu}
        </TouchableOpacity>
        <Text style={styles.title}>Your Rides</Text>
      </View>
      {isLoading ? ( // Display loading indicator if isLoading is true
        <LoadingCustom />
      ) : error ? ( // Display error message if an error occurred
        <View
          style={{ flex: 0.9, alignItems: "center", justifyContent: "center" }}
        >
          {PathImages.Error404}
          <View style={{ marginTop: 80, width: "70%" }}>
            <BtnOutlineCustom
              title={"Back"}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      ) : dataBooking && dataBooking.length > 0 ? (
        <FlatList
          data={dataBooking}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <CardYourRides {...item} />
            </View>
          )}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.flatListContent}
        />
      ) : (
        <View style={{ padding: 20, alignItems: "center" }}>
          <Text style={styles.textNotFound}>
            You do not have any reservations
          </Text>
          {PathImages.calender}

          <View style={{ marginTop: 80, width: "70%" }}>
            <BtnOutlineCustom
              title={"Home"}
              onPress={() => navigation.navigate("Home2")}
            />
          </View>
        </View>
      )}
    </View>
    // <View style={styles.continuer}>
    //   {/* ---------------- header ----------------*/}
    //   <View style={styles.header}>
    //     <TouchableOpacity
    //       style={styles.drawer}
    //       onPress={() => navigation.openDrawer()}
    //     >
    //       {PathIcons.menu}
    //     </TouchableOpacity>
    //     <Text style={styles.title}>Your Rides</Text>
    //   </View>
    // </View>
  );
};

export default YourRidesScreen;

const styles = StyleSheet.create({
  drawer: {
    position: "absolute",
    zIndex: 10,
  },
  title: {
    flex: 1,
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s20,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: PathColor.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  drawer: {
    position: "absolute",
    zIndex: 10,
    left: 20,
  },
  title: {
    flex: 1,
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s20,
    textAlign: "center",
  },
  cardContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  flatListContent: {
    paddingVertical: 5,
  },
  errorText: {
    textAlign: "center",
    color: "red",
    fontSize: 16,
    margin: 20,
  },
  textNotFound: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: 19,
    textAlign: "center",
    marginBottom: 50,
  },
});
