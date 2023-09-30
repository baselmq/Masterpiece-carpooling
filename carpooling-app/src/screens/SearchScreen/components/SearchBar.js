import * as React from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { PathColor } from "../../../utils/PathColor";
import { MaterialIcons } from "@expo/vector-icons";
import { PathIcons } from "../../../utils/PathIcons";
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const { navigate } = useNavigation();

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.search}
      cursorColor={PathColor.primary[500]}
      icon={() => PathIcons.leftArrow}
      onIconPress={() => navigate("Home")}
    />
  );
};
const styles = StyleSheet.create({
  search: {
    backgroundColor: PathColor.gray[100],
    borderRadius: 15,
  },
});
export default SearchBar;
