import * as React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
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

const RegisterScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const rules = {
    name: { required: "Name is required" },
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
    phone: { required: "Phone is required" },
    terms: { required: true },
    gender: { required: "Gender is required" },
  };

  // Your data for FlatList
  const data = [
    { id: "1", label: "Name" },
    { id: "2", label: "Email" },
    { id: "3", label: "Phone" },
    // Add more data items as needed
  ];
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Sign up with your email or phone number</Text>
    //   <FlatList
    //     data={data}
    //     keyExtractor={(item) => item.id}
    //     showsVerticalScrollIndicator={false}
    //     renderItem={({ item }) => (
    //       <InputCustom
    //         control={control}
    //         name={item.label.toLowerCase()}
    //         label={item.label}
    //         rules={rules[item.label.toLowerCase()]}
    //       />
    //     )}
    //     ListFooterComponent={
    //       <View>
    //         {/* Radio button or DropDownCustom */}
    //         <DropDownCustom
    //           control={control}
    //           name="gender"
    //           rules={rules.gender}
    //           valueOne="male"
    //           valueTwo="female"
    //         />
    //         {/* Terms and Conditions */}
    //         <View style={styles.terms}>
    //           <CheckboxCustom
    //             control={control}
    //             name="terms"
    //             rules={rules.terms}
    //           />
    //           <Text style={styles.termsText}>
    //             By signing up, you agree to the{" "}
    //             <Text
    //               style={{ color: PathColor.primary[500] }}
    //               onPress={() => navigation.navigate("ForgetPassword")}
    //             >
    //               Terms of service
    //             </Text>{" "}
    //             and{" "}
    //             <Text style={{ color: PathColor.primary[500] }}>
    //               Privacy policy.
    //             </Text>
    //           </Text>
    //         </View>

    //         {/* Sign Up Button */}
    //         <BtnCustom title="Sign Up" onPress={handleSubmit(onSubmit)} />

    //         {/* Sign In Section */}
    //         <View style={styles.signIn}>
    //           <Text style={styles.textSignIn}>Already have an account?</Text>
    //           <Text
    //             style={[styles.textSignIn, { color: PathColor.primary[500] }]}
    //             onPress={() => navigation.navigate("Login")}
    //           >
    //             Sign in
    //           </Text>
    //         </View>
    //       </View>
    //     }
    //   />
    // </View>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* ----------- title ----------- */}
      <Text style={styles.title}>Sign up with your email or phone number</Text>

      {/* ----------- input field ----------- */}
      <View style={styles.inputField}>
        <InputCustom
          control={control}
          name="name"
          label="Name"
          rules={rules.name}
        />
        <InputCustom
          control={control}
          name="email"
          label="Email"
          rules={rules.email}
        />
        <InputCustom
          control={control}
          name="phone"
          label="Phone"
          rules={rules.phone}
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
        <View style={styles.terms}>
          <CheckboxCustom control={control} name="terms" rules={rules.terms} />
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
  );
};

export default RegisterScreen;

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

  signIn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    marginTop: 20,
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
