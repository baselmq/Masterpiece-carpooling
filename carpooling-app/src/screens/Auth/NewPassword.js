import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { PathColor } from "../../utils/PathColor";
import InputCustom from "../../components/InputCustom";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import BtnCustom from "../../components/buttons/BtnCustom";
import { useForm } from "react-hook-form";

const NewPassword = ({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");
  const onSubmit = (data) => {
    console.log(data);
  };
  const rules = {
    password: {
      required: {
        value: true,
        message: "Password is required",
      },
      pattern: {
        value:
          /^(?=.*[A-Za-z0-9@$!%*#?&\u0600-\u06FF])[A-Za-z0-9@$!%*#?&\u0600-\u06FF]{8,}$/,
        message:
          "Please enter a password with at least 8 characters, including numbers and symbols",
      },
    },
    confirmPassword: {
      required: {
        value: true,
        message: "Confirm Password is required",
      },
      validate: (value) => value === pwd || "Password does not match",
    },
  };
  return (
    <View style={styles.container}>
      {/* ----------- title ----------- */}
      <Text style={styles.title}>Set New password</Text>
      <Text style={styles.subtitle}>Set your new password</Text>

      {/* ----------- input field ----------- */}
      <View style={styles.inputField}>
        <InputCustom
          control={control}
          name="password"
          label="Password"
          rules={rules.password}
          secureTextEntry={showPassword ? false : true}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye" : "eye-off"}
              style={{ marginTop: 13 }}
              color={PathColor.gray[600]}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <InputCustom
          control={control}
          name="confirmPassword"
          label="Confirm Password"
          rules={rules.confirmPassword}
          secureTextEntry={showConfirmPassword ? false : true}
          right={
            <TextInput.Icon
              icon={showConfirmPassword ? "eye" : "eye-off"}
              style={{ marginTop: 13 }}
              color={PathColor.gray[600]}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          }
        />
      </View>

      {/* ----------- button Register ----------- */}
      <BtnCustom title={"Change Password"} onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: PathColor.white,
    paddingTop: 30,
  },
  title: {
    fontFamily: PathFonts.PoppinsRegular,
    fontSize: PathFontsSize.s24,
    color: PathColor.black,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: PathFonts.PoppinsRegular,
    fontSize: PathFontsSize.s16,
    color: PathColor.gray[500],
    textAlign: "center",
    marginBottom: 40,
  },
  inputField: {
    gap: 15,
    marginBottom: 60,
  },
});
