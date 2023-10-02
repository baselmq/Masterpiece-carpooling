import React from "react";
import { useForm } from "react-hook-form";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import InputCustom from "../../../components/InputCustom";
import BtnCustom from "../../../components/buttons/BtnCustom";
import { PathColor } from "../../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../../utils/PathFonts";
import { useLogin } from "../../../hooks/useLogin";
import { AuthRules } from "../../../utils/AuthRules";
import HeaderScreens from "../../../components/header/HeaderScreens";

const FormDriver = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    navigation.navigate("FormCar", {
      dataDriver: data,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderScreens title={""} navigation={navigation} />
      {/* ----------- title ----------- */}
      <Text style={styles.title}>Personal Information</Text>

      {/* ----------- input field ----------- */}
      <View style={styles.inputField}>
        <InputCustom
          control={control}
          name="driver_address"
          label="Your address"
          rules={AuthRules.name}
        />
        <InputCustom
          control={control}
          name="driver_workplace"
          label="Your workplace's address"
          rules={AuthRules.name}
        />
        <InputCustom
          control={control}
          name="driver_occupation"
          label="What is your occupation?"
          rules={AuthRules.name}
        />
      </View>

      {/* ----------- button sign in ----------- */}
      <BtnCustom title={"Continue"} onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
};

export default FormDriver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: PathColor.white,
    paddingTop: 30,
  },
  title: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s24,
    textAlign: "center",
    marginBottom: 40,
  },
  inputField: {
    gap: 15,
    marginTop: 20,
    marginBottom: 80,
  },
  forgetPass: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s14,
    color: PathColor.primary[500],
    marginTop: 5,
    textAlign: "right",
  },
  signup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginTop: 20,
  },
  textSignup: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s14,
  },
});
