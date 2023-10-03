import { createContext, useReducer } from "react";

export const UserBookingContext = createContext();

export const userBookingReducer = (state, action) => {
  switch (action.type) {
    case "SET_BOOKING":
      return {
        booking: action.payload,
      };
    case "ADD_BOOKING":
      return {
        booking: [action.payload, ...state.booking],
      };
    case "DELETE_BOOKING":
      return {
        booking: state.booking.filter((w) => w._id !== action.payload._id),
      };
    case "DELETE_ALL_BOOKING":
      return {
        booking: [],
      };
    default:
      return state;
  }
};

export const UserBookingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userBookingReducer, {
    booking: [],
  });
  // console.log("TripsContextProvider state", state);

  return (
    <UserBookingContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserBookingContext.Provider>
  );
};
