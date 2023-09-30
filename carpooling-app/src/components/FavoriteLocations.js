import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const FavoriteLocations = () => {
  const data = [
    { id: 1, location: "Amman", destination: "Zarqa" },
    { id: 2, location: "New York", destination: "Los Angeles" },
    { id: 3, location: "Paris", destination: "London" },
    { id: 4, location: "Tokyo", destination: "Kyoto" },
    { id: 5, location: "Sydney", destination: "Melbourne" },
    { id: 6, location: "Berlin", destination: "Munich" },
    { id: 7, location: "San Francisco", destination: "San Diego" },
    { id: 8, location: "Toronto", destination: "Montreal" },
    { id: 9, location: "Rome", destination: "Florence" },
    { id: 10, location: "Barcelona", destination: "Madrid" },
  ];

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(item) => <FavoriteItem data={item} index={item.id} />}
      />
    </View>
  );
};

export default FavoriteLocations;

const FavoriteItem = ({ data, index }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.region}>{data.location}</Text>
        <Text style={styles.city}>{data.destination}</Text>
      </View>

      <View>{PathIcons.rightArrow}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  region: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s16,
  },
  city: {
    fontFamily: PathFonts.PoppinsRegular,
  },
});
