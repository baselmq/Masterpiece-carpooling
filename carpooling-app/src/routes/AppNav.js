import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./DrawerNavigator";
import LoadingCustom from "../components/Loading";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUserContext } from "../hooks/useUserContext";
import { PathApi } from "../utils/PathApi";

const AppNav = () => {
  const { user } = useAuthContext();
  const { userData, dispatch } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getDataMe = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${PathApi.endpoint}/user/me`, {
          headers: { Authorization: `Bearer ${user}` },
        });

        if (response.ok) {
          const json = await response.json();
          dispatch({ type: "SET_USER_DATA", payload: json });
          // console.log(json);
        }
      } catch (error) {
        // Handle fetch errors here if needed.
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      getDataMe();
    }
  }, [user, dispatch]);

  return (
    <NavigationContainer>
      {isLoading ? (
        <LoadingCustom />
      ) : user !== null ? (
        <AppStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default AppNav;
