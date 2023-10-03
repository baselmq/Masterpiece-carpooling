import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PathIcons } from "../../utils/PathIcons";
import { useAuthContext } from "../../hooks/useAuthContext";
import { PathApi } from "../../utils/PathApi";
import { useBookingCxt } from "../../hooks/useBookingCxt";
import CardResult from "./components/CardResult";
import { PathColor } from "../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import { PathImages } from "../../utils/PathImages";
import LoadingCustom from "../../components/Loading";
import BtnOutlineCustom from "../../components/buttons/BtnOutlineCustom";

const SearchScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuthContext();
  const { origin, destination, date } = useBookingCxt();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataSearch, setDataSearch] = useState([]);
  useEffect(() => {
    const searchTrip = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${PathApi.endpoint}/trips/search?date=${date}&origin=${origin.description}&destination=${destination.description}`,
          {
            headers: {
              Authorization: `Bearer ${user}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching data");
        }

        const json = await response.json();
        setDataSearch(json.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    searchTrip();
  }, [origin, destination, date]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.drawer}
          onPress={() => navigation.goBack()}
        >
          {PathIcons.leftArrow}
        </TouchableOpacity>
        <Text style={styles.title}>Trips</Text>
      </View>
      {isLoading ? ( // Display loading indicator if isLoading is true
        <LoadingCustom />
      ) : error ? ( // Display error message if an error occurred
        <Text style={styles.errorText}>{error}</Text>
      ) : dataSearch && dataSearch.length > 0 ? (
        <FlatList
          data={dataSearch}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DetailsSearch", { selectedItem: item });
              }}
            >
              <View style={styles.cardContainer}>
                <CardResult {...item} />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id}
          contentContainerStyle={styles.flatListContent}
        />
      ) : (
        <View style={{ padding: 20, alignItems: "center" }}>
          <Text style={styles.textNotFound}>
            Sorry, there are no cars available at the moment
          </Text>
          {PathImages.notFoundCar}

          <View style={{ marginTop: 80, width: "70%" }}>
            <BtnOutlineCustom
              title={"Back"}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default SearchScreen;
