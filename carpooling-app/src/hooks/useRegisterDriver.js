import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useDriverCxt } from "./useDriverCxt";
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
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // update the auth context
      dispatch({ type: "SET_DATA", payload: json });
      setIsLoading(false);
      setError(null);
    }
  };

  return { registerDriver, isLoading, error };
};
