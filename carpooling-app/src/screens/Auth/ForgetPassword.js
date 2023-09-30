import * as React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { PathColor } from "../../utils/PathColor";
import InputCustom from "../../components/InputCustom";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import BtnCustom from "../../components/buttons/BtnCustom";
import { useForm } from "react-hook-form";

const ForgetPassword = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const rules = {
    email: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
        message: "Please enter a valid email",
      },
    },
  };
  return (
    <View style={styles.container}>
      {/* ----------- title ----------- */}
      <Text style={styles.title}>Verification email or phone number</Text>

      {/* ----------- input field ----------- */}
      <View style={styles.inputField}>
        <InputCustom
          control={control}
          name="email"
          label="Email"
          rules={rules.email}
        />
      </View>

      {/* ----------- button sign up ----------- */}
      <BtnCustom title={"Send OTP"} onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default ForgetPassword;

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
    marginTop: 20,
    marginBottom: 40,
  },
  inputField: {
    gap: 15,
    marginBottom: 40,
  },
});
