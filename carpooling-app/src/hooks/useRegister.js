import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PathApi } from "../utils/PathApi.js";

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const register = async (data) => {
    const finalData = {
      username: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    };
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${PathApi.endpoint}/user/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalData),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // save the user to local storage
      AsyncStorage.setItem("userToken", json.token);

      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
      setError(null);
    }
  };

  return { register, isLoading, error };
};
