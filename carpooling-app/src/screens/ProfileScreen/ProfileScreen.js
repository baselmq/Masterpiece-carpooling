import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { PathImages } from "../../utils/PathImages";
import { PathColor } from "../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import UserImage from "../../components/UserImage";
import InputCustom from "../../components/InputCustom";
import { useForm } from "react-hook-form";
import BtnOutlineCustom from "../../components/buttons/BtnOutlineCustom";
import DropDownCustom from "../../components/select/DropDownCustom";
import { PathIcons } from "../../utils/PathIcons";
import { useUserContext } from "../../hooks/useUserContext";
const HomeScreen = ({ navigation }) => {
  const { userData } = useUserContext();

  const { control } = useForm({
    defaultValues: {
      email: userData.data.email,
      gender: "male",
      phone: userData.data.phone,
    },
  });
  return (
    <View style={styles.continuer}>
      {/* ---------------- header ----------------*/}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.drawer}
          onPress={() => navigation.openDrawer()}
        >
          {PathIcons.menu}
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
      </View>

      {/* ---------------- body ----------------*/}
      <View style={styles.body}>
        <View style={{ alignItems: "center", gap: 20 }}>
          <UserImage source={PathImages.user} size={120} />
          <Text style={styles.username}>{userData.data.username}</Text>
        </View>

        {/* ---------------- form ----------------*/}
        <View style={styles.form}>
          <InputCustom control={control} name={"email"} label={"Email"} />
          <InputCustom control={control} name={"phone"} label={"Phone"} />
          {/* <InputCustom control={control} name={"gender"} label={"Gender"} /> */}

          <DropDownCustom
            control={control}
            name={"gender"}
            valueOne={"Male"}
            valueTwo={"female"}
          />
          <View style={{ marginTop: 30 }}>
            <BtnOutlineCustom title={"Logout"} onPress={() => {}} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  continuer: {
    flex: 1,
    backgroundColor: PathColor.white,
    padding: 20,
  },
  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
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
  body: {
    marginTop: 30,
    gap: 20,
  },
  username: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s22,
  },
  form: {
    marginTop: 20,
    gap: 15,
  },
});
