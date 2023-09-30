import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "./components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { PathColor } from "../../utils/PathColor";
import SearchResultItem from "../../components/SearchResultItem";

const SearchLocation = ({ navigation }) => {
  const data = [
    { city: "Amman", region: "Abdali" },
    { city: "Irbid", region: "Downtown" },
    { city: "Aqaba", region: "Al-Sharif Hussein Street" },
    { city: "Zarqa", region: "Al-Balqa Street" },
    { city: "Madaba", region: "Al-Ma'rad Street" },
    { city: "Karak", region: "Al-Hussein Street" },
    { city: "Salt", region: "Al-Hashemi Street" },
    { city: "Mafraq", region: "Al-Mamlakah Street" },
    { city: "Jerash", region: "Al-Kawthar Street" },
    { city: "Tafilah", region: "Al-Amir Talal Street" },
  ];
  return (
    <View style={styles.body}>
      <SearchBar />
      <ScrollView>
        {data.map((item, index) => (
          <SearchResultItem
            key={index}
            city={item.city}
            region={item.region}
            isLast={index === data.length - 1}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchLocation;

const styles = StyleSheet.create({
  body: {
    padding: 20,
    backgroundColor: PathColor.white,
    height: "100%",
  },
});
