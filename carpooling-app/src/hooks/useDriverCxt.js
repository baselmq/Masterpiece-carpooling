// import { WorkoutsContext } from '../context/WorkoutContext'
import { useContext } from "react";
import { DriverContext } from "../context/DriverContext";

export const useDriverCxt = () => {
  const context = useContext(DriverContext);

  if (!context) {
    throw Error("useDriverCxt must be used inside an AuthContextProvider");
  }

  return context;
};
