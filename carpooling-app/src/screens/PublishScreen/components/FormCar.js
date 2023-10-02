import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import InputCustom from "../../../components/InputCustom";
import BtnCustom from "../../../components/buttons/BtnCustom";
import { PathColor } from "../../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../../utils/PathFonts";
import { useLogin } from "../../../hooks/useLogin";
import { AuthRules } from "../../../utils/AuthRules";
import HeaderScreens from "../../../components/header/HeaderScreens";
import { useRegisterDriver } from "../../../hooks/useRegisterDriver";

const FormCar = ({ route, navigation }) => {
  const { control, handleSubmit } = useForm();
  const { dataDriver } = route.params;

  const { registerDriver, error, isLoading } = useRegisterDriver();

  const onSubmit = async (data) => {
    const NewData = { ...data, ...dataDriver, verified: "pending" };
    await registerDriver(NewData);
    navigation.push("Publish");
  };

  return (
    <View style={styles.container}>
      <HeaderScreens title={""} navigation={navigation} />
      {/* ----------- title ----------- */}
      <Text style={styles.title}>Car Information</Text>

      {/* ----------- input field ----------- */}
      <View style={styles.inputField}>
        <InputCustom
          control={control}
          name="car_model"
          label="Model Car"
          rules={AuthRules.name}
        />
        <InputCustom
          control={control}
          name="car_number"
          label="Number Car"
          rules={AuthRules.name}
        />
        <InputCustom
          control={control}
          name="car_color"
          label="Color Car"
          rules={AuthRules.name}
        />
        {error && <Text>{error}</Text>}
      </View>

      {/* ----------- button sign in ----------- */}
      <BtnCustom title={"Resister Now"} onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default FormCar;

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
    marginBottom: 40,
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
