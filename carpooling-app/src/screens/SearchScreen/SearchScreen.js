import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import CardResult from "./components/CardResult";
import { PathColor } from "../../utils/PathColor";
import { FlatList } from "react-native-gesture-handler";
import { ridesData } from "../../data/FakeData";
import { useNavigation } from "@react-navigation/native";
import { PathIcons } from "../../utils/PathIcons";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import { useAuthContext } from "../../hooks/useAuthContext";
import { PathApi } from "../../utils/PathApi";

const SearchScreen = ({ navigation }) => {
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getDriver = async () => {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`${PathApi.endpoint}/trips`, {
        headers: { Authorization: `Bearer ${user}` },
      });

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }

      if (response.ok) {
        dispatch({ type: "SET_DATA", payload: json.data });
        setIsLoading(false);
        setError(null);
      }
    };

    if (user) {
      getDriver();
    }
  }, [user, dispatch, setIsLoading, setError]);
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
      <FlatList
        data={ridesData}
        showsVerticalScrollIndicator={false}
        // ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DetailsSearch", { selectedItem: item });
            }}
          >
            <View
              style={{
                paddingHorizontal: 20,
                marginTop: index === 0 ? 5 : 0,
                marginBottom: index === ridesData.length - 1 ? 20 : 20,
              }}
            >
              <CardResult
                leavingFrom={item.leavingFrom}
                leavingTime={item.leavingTime}
                goingTo={item.goingTo}
                goingTime={item.goingTime}
                price={item.price}
                driverName={item.driverName}
                driverImage={item.driverImage}
                rating={item.rating}
                carType={item.carType}
                carColor={item.carColor}
                carNumber={item.carNumber}
              />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SearchScreen;

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
});
