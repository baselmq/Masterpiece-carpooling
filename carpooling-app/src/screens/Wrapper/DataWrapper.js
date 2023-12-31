import React, { useEffect } from "react";
import LoadingCustom from "../../components/Loading";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useUserContext } from "../../hooks/useUserContext";
import { PathApi } from "../../utils/PathApi";

const DataWrapper = ({ navigation }) => {
  const { user } = useAuthContext();
  const { userData, dispatch } = useUserContext();

  useEffect(() => {
    const getDataMe = async () => {
      const response = await fetch(`${PathApi.endpoint}/user/me`, {
        headers: { Authorization: `Bearer ${user}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_USER_DATA", payload: json });
        navigation.replace("Home");
      }
    };
    if (user) {
      getDataMe();
    }

    console.log("DataWrapper");
  }, [dispatch]);

  return <LoadingCustom />;
};

export default DataWrapper;
