import { createContext, useReducer } from "react";

export const BookingContext = createContext();

export const locationReducer = (state, action) => {
  switch (action.type) {
    case "SET_ORIGIN":
      return {
        ...state,
        origin: action.payload,
      };
    case "SET_DESTINATION":
      return {
        ...state,
        destination: action.payload,
      };
    case "SET_DATE":
      return {
        ...state,
        date: action.payload,
      };
    case "SET_NUMBER_OF_SEATS":
      return {
        ...state,
        numberOfSeats: action.payload,
      };
    case "DELETE_ORIGIN":
      return {
        origin: null,
      };
    case "DELETE_DESTINATION":
      return {
        destination: null,
      };

    default:
      return state;
  }
};

export const BookingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, {
    origin: null,
    destination: null,
    date: null,
    numberOfSeats: 1,
  });
  // console.log("BookingContext state", state);
  return (
    <BookingContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};
