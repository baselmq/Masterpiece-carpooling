import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import InputCustom from "../../../components/InputCustom";
import BtnCustom from "../../../components/buttons/BtnCustom";
import { PathColor } from "../../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../../utils/PathFonts";
import { useLogin } from "../../../hooks/useLogin";
import { AuthRules } from "../../../utils/AuthRules";
import HeaderScreens from "../../../components/header/HeaderScreens";
import axios from "axios";
import { useAuthContext } from "../../../hooks/useAuthContext";

const FormDriver = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const { user } = useAuthContext();

  const [imageData, setImageData] = useState(null);
  useEffect(() => {
    const getDataMe = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/upload`, {
          headers: { Authorization: `Bearer ${user}` },
        });

        if (response.ok) {
          const json = await response.json();
          setImageData(json.imageData);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    if (user) {
      getDataMe();
    }

    console.log("imageData");
  }, []);

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
      <View style={styles.container}>
        {imageData && (
          <Image
            source={{ uri: `data:image/jpeg;base64,${imageData}` }}
            style={{ width: 50, height: 50 }}
          />
        )}
      </View>
      {/* ----------- input field ----------- */}
      <View style={styles.inputField}>
        <InputCustom
          control={control}
          name="driverAddress"
          label="Your address"
          rules={AuthRules.name}
        />
        <InputCustom
          control={control}
          name="driverWorkplace"
          label="Your workplace's address"
          rules={AuthRules.name}
        />
        <InputCustom
          control={control}
          name="driverOccupation"
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
