import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import { RadioButton } from "react-native-paper";
import { PathColor } from "../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";

const RadioButtonCustom = ({ control, name, rules = {} }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View>
          {/* <Text style={styles.title}>Gender</Text> */}
          <RadioButton.Group
            onValueChange={(newValue) => onChange(newValue)}
            value={value}
          >
            <View style={styles.container}>
              <View style={styles.radio}>
                <RadioButton
                  value="male"
                  color={PathColor.primary[500]}
                  uncheckedColor={
                    error ? PathColor.red[500] : PathColor.gray[500]
                  }
                />
                <Text style={styles.text}>Male</Text>
              </View>
              <View style={styles.radio}>
                <RadioButton
                  value="female"
                  color={PathColor.primary[500]}
                  uncheckedColor={
                    error ? PathColor.red[500] : PathColor.gray[500]
                  }
                />
                <Text style={styles.text}>Female</Text>
              </View>
            </View>
          </RadioButton.Group>
          {error && <Text style={styles.error}>{error?.message}</Text>}
        </View>
      )}
    />
  );
};

export default RadioButtonCustom;

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 60 },
  radio: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s14,
  },
  text: {
    fontFamily: PathFonts.PoppinsRegular,
    fontSize: PathFontsSize.s14,
    marginTop: 1,
  },
  error: {
    color: PathColor.red[500],
    fontFamily: PathFonts.PoppinsRegular,
    fontSize: PathFontsSize.s12,
    marginTop: 2,
    marginLeft: 2,
  },
});
