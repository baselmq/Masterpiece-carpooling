import React, { useEffect, useState } from "react";

import { SetFromLocPublish } from "./components/LocationScreen";
import { checkDateformat } from "../../components/date_time/CalendarCustom";
import { usePublishContext } from "../../hooks/usePublishCxt";
import { StyleSheet, Text, View } from "react-native";
import { PathIcons } from "../../utils/PathIcons";
import { PathImages } from "../../utils/PathImages";
import { PathColor } from "../../utils/PathColor";
import { PathFonts, PathFontsSize } from "../../utils/PathFonts";
import HeaderScreens from "../../components/header/HeaderScreens";
import BtnCustom from "../../components/buttons/BtnCustom";
import JoinNow from "./components/JoinNow";
import { useDriverCxt } from "../../hooks/useDriverCxt";
import { useAuthContext } from "../../hooks/useAuthContext";
import { PathApi } from "../../utils/PathApi";
import LoadingCustom from "../../components/Loading";

const PublishScreen = () => {
  const { dispatch: dispatchDate } = usePublishContext();
  const dateNow = checkDateformat(Date());
  const { user } = useAuthContext();
  const { data, dispatch } = useDriverCxt();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    dispatchDate({
      type: "SET_DATE",
      payload: dateNow,
    });
  }, []);

  useEffect(() => {
    const getDriver = async () => {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`${PathApi.endpoint}/driver/me`, {
        headers: { Authorization: `Bearer ${user}` },
      });

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }

      if (response.ok) {
        dispatch({ type: "SET_DATA", payload: json });
        setIsLoading(false);
        setError(null);
      }
    };

    if (user) {
      getDriver();
    }
  }, [user, dispatch, setIsLoading, setError]);

  return isLoading ? (
    <LoadingCustom />
  ) : data !== null && data.data !== null ? (
    <SetFromLocPublish />
  ) : (
    <JoinNow />
  );
};

export default PublishScreen;

const styles = StyleSheet.create({
  continuer: {
    flex: 1,
    padding: 20,
    backgroundColor: PathColor.white,
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  title: {
    fontFamily: PathFonts.PoppinsMedium,
    fontSize: PathFontsSize.s24,
    color: PathColor.black,
    marginBottom: 10,
    textAlign: "center",
  },

  description: {
    fontFamily: PathFonts.PoppinsMedium,
    color: PathColor.gray[500],
    textAlign: "center",
    paddingHorizontal: 15,
    marginTop: 20,
  },
});

// const PublishScreen = () => {
//   const { dispatch } = usePublishContext();
//   const dateNow = checkDateformat(Date());

//   useEffect(() => {
//     dispatch({
//       type: "SET_DATE",
//       payload: dateNow,
//     });
//   }, []);
//   return <SetFromLocPublish />;
// };

// export default PublishScreen;
