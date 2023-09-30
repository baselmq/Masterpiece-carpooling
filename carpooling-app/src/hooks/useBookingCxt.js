// import { WorkoutsContext } from '../context/WorkoutContext'
import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

export const useBookingCxt = () => {
  const context = useContext(BookingContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an LocationContextProvider"
    );
  }

  return context;
};
