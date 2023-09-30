import { Image, StyleSheet } from "react-native";
import React from "react";

const UserImage = ({ source, size }) => {
  return (
    <Image
      source={source}
      style={{ borderRadius: 40, width: size, height: size }}
    />
  );
};

export default UserImage;

// const styles = StyleSheet.create({
//   image: {},
// });
