import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { PathColor } from "../../utils/PathColor";
import InputCustom from "../../components/InputCustom";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import BtnCustom from "../../components/buttons/BtnCustom";
import { useForm } from "react-hook-form";
import { AuthCxt } from "../../context/Auth";
import { useLogin } from "../../hooks/useLogin";

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { control, handleSubmit } = useForm();

  const { login, error, isLoading } = useLogin();

  const onSubmit = async (data) => {
    await login(data.phone, data.password);
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
    password: {
      required: {
        value: true,
        message: "Password is required",
      },
    },
  };
  return (
    <View style={styles.container}>
      {/* ----------- title ----------- */}
      <Text style={styles.title}>Sign in with your email or phone number</Text>

      {/* ----------- input field ----------- */}
      <View style={styles.inputField}>
        <InputCustom
          control={control}
          name="phone"
          label="Email or Phone"
          rules={rules.email}
        />
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
        {error && <Text style={styles.error}>{error}</Text>}

        <Text
          style={styles.forgetPass}
          onPress={() => navigation.navigate("ForgetPassword")}
        >
          Forget Password?
        </Text>
      </View>

      {/* ----------- button sign in ----------- */}
      <BtnCustom
        isLoading={isLoading}
        title={"Sign In"}
        onPress={handleSubmit(onSubmit)}
      />

      {/* ----------- button sign up ----------- */}
      <View style={styles.signup}>
        <Text style={styles.textSignup}>Don’t have an account?</Text>
        <Text
          style={[styles.textSignup, { color: PathColor.primary[500] }]}
          onPress={() => navigation.navigate("Register")}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

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
    marginTop: 20,
    marginBottom: 40,
  },
  inputField: {
    gap: 15,
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
  error: {
    color: PathColor.red[500],
    fontFamily: PathFonts.PoppinsRegular,
    fontSize: PathFontsSize.s12,
    marginTop: 2,
    marginLeft: 2,
  },
});
