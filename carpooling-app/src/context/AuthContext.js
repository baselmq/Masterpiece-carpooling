import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export const AuthCxt = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [viewOnboarding, setViewOnboarding] = useState(false);

  //   AsyncStorage.removeItem("@viewedOnboarding");

  const login = () => {
    setIsLoading(true);
    setUserToken("fdlfdltr5");
    AsyncStorage.setItem("userToken", "fdlfdltr5");
    setIsLoading(false);
  };
  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken);
      setIsLoading(false);
    } catch (error) {
      console.log(`isLoggedIn in error ${error}`);
    }
  };

  const checkOnboarding = async () => {
    try {
      setIsLoading(true);
      const value = await AsyncStorage.getItem("@viewedOnboarding");
      if (value !== null) {
        setViewOnboarding(true);
      }
    } catch (error) {
      console.log("Error @checkOnboarding: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    checkOnboarding();
    isLoggedIn();
  }, []);
  const values = { login, logout, isLoading, userToken, viewOnboarding };
  return <AuthCxt.Provider value={values}>{children}</AuthCxt.Provider>;
};
