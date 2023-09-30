// import { WorkoutsContext } from '../context/WorkoutContext'
import { useContext } from "react";
import { LocationContext } from "../context/LocationContext";

export const useLocationContext = () => {
  const context = useContext(LocationContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an LocationContextProvider"
    );
  }

  return context;
};
