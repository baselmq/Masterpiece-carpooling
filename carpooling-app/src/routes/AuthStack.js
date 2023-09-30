import React, { useContext, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Onboarding from "../screens/Onboarding/Onboarding";
import SearchScreen from "../screens/SearchScreen/SearchLocation";
import LoginScreen from "../screens/Auth/LoginScreen";
import WelcomeScreen from "../screens/Auth/WelcomeScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import NewPassword from "../screens/Auth/NewPassword";
import ForgetPassword from "../screens/Auth/ForgetPassword";
import { AuthCxt } from "../context/AuthContext";
import LoadingCustom from "../components/Loading";
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Wrapper" component={Wrapper} />
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

export const Wrapper = ({ navigation }) => {
  const { viewOnboarding } = useContext(AuthCxt);
  const checkOnBoarding = () => {
    {
      viewOnboarding
        ? navigation.replace("Login")
        : navigation.replace("Onboarding");
    }
  };
  useEffect(() => {
    checkOnBoarding();
  }, []);
  return <LoadingCustom />;
};
