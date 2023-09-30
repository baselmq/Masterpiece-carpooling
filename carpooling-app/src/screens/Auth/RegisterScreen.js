import * as React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { PathColor } from "../../utils/PathColor";
import InputCustom from "../../components/InputCustom";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import BtnCustom from "../../components/buttons/BtnCustom";
import { useForm } from "react-hook-form";
import CheckboxCustom from "../../components/select/CheckboxCustom";
import RadioButtonCustom from "../../components/select/RadioButtonCustom";
import DropDownCustom from "../../components/select/DropDownCustom";
import { useRegister } from "../../hooks/useRegister";
import { TextInput } from "react-native-paper";
import { AuthRules } from "../../utils/AuthRules";

const RegisterScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");
  const { register, error, isLoading } = useRegister();

  const onSubmit = async (data) => {
    await register(data);
    console.log(data);
  };
  const rules = {
    confirmPassword: {
      required: {
        value: true,
        message: "Confirm Password is required",
      },
      validate: (value) => value === pwd || "Password does not match",
    },
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* ----------- title ----------- */}
        <Text style={styles.title}>
          Sign up with your email or phone number
        </Text>

        {/* ----------- input field ----------- */}
        <View style={styles.inputField}>
          <InputCustom
            control={control}
            name="name"
            label="Name"
            rules={AuthRules.name}
          />
          <InputCustom
            control={control}
            name="email"
            label="Email"
            rules={AuthRules.email}
            keyboardType={"email-address"}
          />
          <InputCustom
            control={control}
            name="phone"
            label="Phone"
            rules={AuthRules.phone}
            keyboardType={"numeric"}
          />
          <InputCustom
            control={control}
            name="password"
            label="Password"
            rules={AuthRules.password}
            secureTextEntry={showPassword ? false : true}
            keyboardType={"visible-password"}
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
            keyboardType={"visible-password"}
            right={
              <TextInput.Icon
                icon={showConfirmPassword ? "eye" : "eye-off"}
                style={{ marginTop: 13 }}
                color={PathColor.gray[600]}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            }
          />
          {/* ----------- radio button gender ----------- */}
          {/* <RadioButtonCustom
          control={control}
          name={"gender"}
          rules={rules.gender}
        /> */}
          {/* <DropDownCustom
          control={control}
          name={"gender"}
          rules={rules.gender}
          valueOne={"male"}
          valueTwo={"female"}
        /> */}
          {/* ----------- Terms and Conditions ----------- */}
          {error && <Text>{error}</Text>}
          <View style={styles.terms}>
            <CheckboxCustom
              control={control}
              name="terms"
              rules={AuthRules.terms}
            />
            <Text style={styles.termsText}>
              By signing up. you agree to the{" "}
              <Text
                style={{ color: PathColor.primary[500] }}
                onPress={() => navigation.navigate("ForgetPassword")}
              >
                Terms of service{"\n"}
              </Text>
              and{" "}
              <Text style={{ color: PathColor.primary[500] }}>
                Privacy policy.
              </Text>
            </Text>
          </View>
        </View>

        {/* ----------- button sign up ----------- */}
        <BtnCustom title={"Sign Up"} onPress={handleSubmit(onSubmit)} />

        {/* ----------- button sign in ----------- */}
        <View style={styles.signIn}>
          <Text style={styles.textSignIn}>Already have an account?</Text>
          <Text
            style={[styles.textSignIn, { color: PathColor.primary[500] }]}
            onPress={() => navigation.navigate("Login")}
          >
            Sign in
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: PathColor.white,
    paddingTop: 10,
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

  signIn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginTop: 20,
    paddingBottom: 50,
  },
  textSignIn: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s14,
  },
  terms: {
    flexDirection: "row",
    alignItems: "center",
  },
  termsText: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s12,
    marginTop: 10,
  },
});
