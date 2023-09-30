// import { WorkoutsContext } from '../context/WorkoutContext'
import { useContext } from "react";
import { PublishCxt } from "../context/PublishContext";

export const usePublishContext = () => {
  const context = useContext(PublishCxt);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an LocationContextProvider"
    );
  }

  return context;
};
