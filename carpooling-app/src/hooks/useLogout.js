import { useAuthContext } from "./useAuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from storage
    AsyncStorage.removeItem("userToken");

    //dispatch logout action
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
