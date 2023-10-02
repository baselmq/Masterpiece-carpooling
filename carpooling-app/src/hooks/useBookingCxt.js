// import { WorkoutsContext } from '../context/WorkoutContext'
import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

export const useBookingCxt = () => {
  const context = useContext(BookingContext);

  if (!context) {
    throw Error("useBookingCxt must be used inside an AuthContextProvider");
  }

  return context;
};
