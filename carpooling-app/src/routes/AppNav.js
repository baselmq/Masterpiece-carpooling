import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./DrawerNavigator";
import { AuthCxt } from "../context/Auth";
import LoadingCustom from "../components/Loading";
import { useAuthContext } from "../hooks/useAuthContext";
const AppNav = () => {
  // const { isLoading, userToken } = useContext(AuthCxt);
  const { user } = useAuthContext();
  if (user !== null) {
    return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    );
  }
  // return (
  //   <NavigationContainer>
  //     {user !== null ? <AppStack /> : <AuthStack />}
  //   </NavigationContainer>
  // );
};

export default AppNav;

const styles = StyleSheet.create({});
