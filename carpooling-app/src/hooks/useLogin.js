import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PathApi } from "../utils/PathApi.js";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${PathApi.endpoint}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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

  return { login, isLoading, error };
};
// import { useState } from "react";
// import { useAuthContext } from "./useAuthContext";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import ApiPath from "../api/ApiPath";

// export const useLogin = () => {
//   const endpoint = "https://backend-carpooling.onrender.com/api/v1/user";
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const { dispatch } = useAuthContext();

//   const login = async (email, password) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post(
//         `${endpoint}/login`, // Use the 'endpoint' variable
//         {
//           identifier: email,
//           password,
//         }
//       );

//       // Handle response status
//       if (response.status === 200) {
//         const data = response.data;
//         console.log(data);

//         // Save the user token to local storage
//         AsyncStorage.setItem("userToken", data.token);

//         // Update the auth context
//         dispatch({ type: "LOGIN", payload: data });

//         setIsLoading(false);
//         setError(null);
//       } else {
//         // Handle other response status codes
//         setIsLoading(false);
//         setError("Login failed. Please check your credentials.");
//       }
//     } catch (error) {
//       // Handle network or other errors
//       setIsLoading(false);
//       setError("An error occurred while logging in. Please try again later.");
//       console.error(error);
//     }
//   };

//   return { login, isLoading, error };
// };
