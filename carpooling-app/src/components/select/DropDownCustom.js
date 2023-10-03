import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { PathColor } from "../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import { Controller } from "react-hook-form";

const DropDownCustom = ({
  control,
  name,
  rules,
  valueOne,
  valueTwo,
  disabled,
}) => {
  const [open, setOpen] = useState(false);

  const labelName = (value = value || "") => {
    return (label = value.charAt(0).toUpperCase() + value.slice(1));
  };
  const labelOne = labelName(valueOne);
  const labelTwo = labelName(valueTwo);

  const [items, setItems] = useState([
    { label: labelOne, value: valueOne },
    { label: labelTwo, value: valueTwo },
  ]);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <View>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            disabled={disabled}
            setOpen={setOpen}
            setValue={onChange}
            setItems={setItems}
            style={styles.dropDown}
            placeholder="Choose gender"
            textStyle={styles.text}
          />
          {error && <Text style={styles.error}>{error?.message}</Text>}
        </View>
      )}
    />
  );
};

export default DropDownCustom;

const styles = StyleSheet.create({
  dropDown: {
    borderColor: PathColor.gray[100],
    borderRadius: 10,
    paddingVertical: 16,
  },
  text: { fontSize: 16, color: PathColor.gray[400] },
  error: {
    color: PathColor.red[500],
    fontFamily: PathFonts.PoppinsRegular,
    fontSize: PathFontsSize.s12,
    marginTop: 2,
    marginLeft: 2,
  },
});
