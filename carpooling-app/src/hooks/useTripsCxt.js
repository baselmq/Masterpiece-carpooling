// import { WorkoutsContext } from '../context/WorkoutContext'
import { useContext } from "react";
import { TripsContext } from "../context/TripsContext";

export const useTripsCxt = () => {
  const context = useContext(TripsContext);

  if (!context) {
    throw Error("useTripsCxt must be used inside an AuthContextProvider");
  }

  return context;
};
