import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useDriverCxt } from "./useDriverCxt";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PathApi } from "../utils/PathApi.js";

export const useRegisterDriver = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useDriverCxt();
  const { user } = useAuthContext();

  const registerDriver = async (data) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${PathApi.endpoint}/driver`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier: email, password }),
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

  return { registerDriver, isLoading, error };
};
