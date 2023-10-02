import React, { useEffect } from "react";

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

const PublishScreen = () => {
  const { dispatch } = usePublishContext();
  const dateNow = checkDateformat(Date());

  useEffect(() => {
    dispatch({
      type: "SET_DATE",
      payload: dateNow,
    });
  }, []);
  return <JoinNow />;
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
