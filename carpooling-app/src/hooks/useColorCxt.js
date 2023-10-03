// import { WorkoutsContext } from '../context/WorkoutContext'
import { useContext } from "react";
import { ColorContext } from "../context/ColorContext";

export const useColorCxt = () => {
  const context = useContext(ColorContext);

  if (!context) {
    throw Error("ColorContext must be used inside an AuthContextProvider");
  }

  return context;
};
