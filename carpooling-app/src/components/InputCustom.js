import React from "react";
import { TextInput } from "react-native-paper";
import { PathColor } from "../utils/PathColor";
import { Controller } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { PathFonts, PathFontsSize } from "../utils/PathFonts";

const InputCustom = ({
  control,
  name,
  label,
  rules = {},
  placeholder,
  secureTextEntry,
  right,
  keyboardType,
  onPressIn,
  onFocus,
  disabled,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View>
          <TextInput
            onPressIn={onPressIn}
            onFocus={onFocus}
            label={label}
            value={value}
            disabled={disabled}
            onChangeText={onChange}
            keyboardType={keyboardType}
            mode="outlined"
            style={{
              backgroundColor: PathColor.white,
              height: 53,
            }}
            outlineColor={error ? PathColor.red[500] : PathColor.gray[400]}
            activeOutlineColor={
              error ? PathColor.red[500] : PathColor.primary[500]
            }
            outlineStyle={{ borderRadius: 10 }}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            right={right}
            //   placeholder="Email or Phone Number"
            // right={<TextInput.Affix text="/100" />}
          />
          {error && <Text style={styles.error}>{error?.message}</Text>}
        </View>
      )}
    />
  );
};

export default InputCustom;
const styles = StyleSheet.create({
  error: {
    color: PathColor.red[500],
    fontFamily: PathFonts.PoppinsRegular,
    fontSize: PathFontsSize.s12,
    marginTop: 2,
    marginLeft: 2,
  },
});
