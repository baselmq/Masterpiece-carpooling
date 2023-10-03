import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { PathApi } from "../utils/PathApi.js";

export const useSearchTrips = (dispatch, type, path) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { user } = useAuthContext();

  const searchTrip = async (date, origin, destination) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      `${PathApi.endpoint}/${path}search?date=${date}&origin=${origin}&destination=${destination}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // update the auth context
      dispatch({ type, payload: json.data });
      setIsLoading(false);
      setError(null);
    }
  };

  return { searchTrip, isLoading, error };
};
