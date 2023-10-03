// import { WorkoutsContext } from '../context/WorkoutContext'
import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import { UserBookingContext } from "../context/UserBookingContext";

export const useBookingCxt = () => {
  const context = useContext(BookingContext);

  if (!context) {
    throw Error("useBookingCxt must be used inside an AuthContextProvider");
  }

  return context;
};

export const useUserBookingCxt = () => {
  const context = useContext(UserBookingContext);

  if (!context) {
    throw Error("useUserBookingCxt must be used inside an AuthContextProvider");
  }

  return context;
};
