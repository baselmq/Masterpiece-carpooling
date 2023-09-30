import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./DrawerNavigator";
import { AuthCxt } from "../context/AuthContext";
import LoadingCustom from "../components/Loading";
import { useAuthContext } from "../hooks/useAuthContext";
const AppNav = () => {
  // const { isLoading, userToken } = useContext(AuthCxt);
  const { user } = useAuthContext();
  // if (isLoading) {
  //   return <LoadingCustom />;
  // }
  return (
    <NavigationContainer>
      {user !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;

const styles = StyleSheet.create({});
