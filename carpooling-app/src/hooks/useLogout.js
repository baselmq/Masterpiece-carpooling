import { useAuthContext } from "./useAuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { usePublishContext } from "./usePublishCxt";
import { useBookingCxt } from "./useBookingCxt";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: publish } = usePublishContext();
  const { dispatch: booking } = useBookingCxt();

  const logout = () => {
    // remove user from storage
    AsyncStorage.removeItem("userToken");

    //dispatch logout action
    dispatch({ type: "LOGOUT" });
    publish({ type: "DELETE_ORIGIN" });
    publish({ type: "DELETE_DESTINATION" });
    booking({ type: "DELETE_ORIGIN" });
    booking({ type: "DELETE_DESTINATION" });
  };

  return { logout };
};
