import { createContext, useReducer } from "react";

// Define action types as constants
const SET_BOOKING = "SET_BOOKING";
const ADD_BOOKING = "ADD_BOOKING";
const DELETE_BOOKING = "DELETE_BOOKING";
const DELETE_ALL_BOOKING = "DELETE_ALL_BOOKING";

export const UserBookingContext = createContext();

// Define a reducer function outside of the component
const userBookingReducer = (state, action) => {
  switch (action.type) {
    case SET_BOOKING:
      return { userBooking: action.payload };
    case ADD_BOOKING:
      return { userBooking: [action.payload, ...state.userBooking] };
    case DELETE_BOOKING:
      return {
        userBooking: state.userBooking.filter(
          (w) => w._id !== action.payload._id
        ),
      };
    case DELETE_ALL_BOOKING:
      return { userBooking: [] };
    default:
      return state;
  }
};

export const UserBookingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userBookingReducer, {
    userBooking: [],
  });
  console.log("UserBookingContextProvider state", state);

  return (
    <UserBookingContext.Provider value={{ state, dispatch }}>
      {children}
    </UserBookingContext.Provider>
  );
};
