import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { PathApi } from "../utils/PathApi.js";
import { useUserBookingCxt } from "./useBookingCxt";

export const useFetchBookingUser = () => {
  const { user } = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useUserBookingCxt();

  const fetchBooking = async () => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${PathApi.endpoint}/booking/me`, {
      headers: {
        Authorization: `Bearer ${user}`,
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      console.log(json);
      dispatch({ type: "LOGIN", payload: json.data });
      setIsLoading(false);
      setError(null);
    }
  };

  return { fetchBooking, isLoading, error };
};
