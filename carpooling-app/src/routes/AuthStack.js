import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding/Onboarding";
import LoginScreen from "../screens/Auth/LoginScreen";
import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import NewPassword from "../screens/Auth/NewPassword";
import ForgetPassword from "../screens/Auth/ForgetPassword";
import LoadingCustom from "../components/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WrapperAuth" component={WrapperAuth} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;

export const WrapperAuth = ({ navigation }) => {
  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");
      value !== null
        ? navigation.replace("Login")
        : navigation.replace("Onboarding");
    } catch (error) {
      console.log("Error checking onboarding:", error);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);
  return <LoadingCustom />;
};
