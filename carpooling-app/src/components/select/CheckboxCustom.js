import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import { Checkbox } from "react-native-paper";
import { PathColor } from "../../utils/PathColor";

const CheckboxCustom = ({ control, name, rules = {} }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <Checkbox
          status={value ? "checked" : "unchecked"}
          onPress={() => onChange(!value)}
          color={PathColor.primary[500]}
          uncheckedColor={error ? PathColor.red[500] : PathColor.gray[400]}
        />
      )}
    />
  );
};

export default CheckboxCustom;

const styles = StyleSheet.create({});
