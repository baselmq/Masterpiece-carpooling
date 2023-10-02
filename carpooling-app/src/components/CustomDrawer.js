import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { PathImages } from "../utils/PathImages";
import { PathFonts, PathFontsSize } from "../utils/PathFonts";
import { PathColor } from "../utils/PathColor";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PathIcons } from "../utils/PathIcons";
import { AuthCxt } from "../context/Auth";
import { useLogout } from "../hooks/useLogout";
import { useUserContext } from "../hooks/useUserContext";
const CustomDrawer = (props) => {
  const { logout } = useLogout();
  const { userData } = useUserContext();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ padding: 20 }}>
          <Image source={PathImages.user} style={styles.userImage} />
          <Text style={styles.username}>{userData?.data?.username}</Text>
          <Text style={styles.userEmail}>{userData?.data?.email}</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.bottomDrawer}>
        <TouchableOpacity
          style={{ paddingVertical: 15 }}
          onPress={() => logout()}
        >
          <View style={styles.SignOut}>
            {PathIcons.getSignOut((size = 24), (color = PathColor.gray[600]))}
            <Text style={styles.SignOutText}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s18,
    color: PathColor.gray[900],
  },
  userEmail: {
    fontFamily: PathFonts.PoppinsRegular,
    fontSize: PathFontsSize.s14,
    color: PathColor.gray[900],
  },
  bottomDrawer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: PathColor.gray[300],
  },
  SignOut: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  SignOutText: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s14,
    color: PathColor.gray[600],
  },
});
