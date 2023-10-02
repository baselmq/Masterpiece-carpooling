import { createContext, useReducer } from "react";

export const TripsContext = createContext();

export const tripsReducer = (state, action) => {
  switch (action.type) {
    case "SET_TRIPS":
      return {
        trips: action.payload,
      };
    case "ADD_TRIPS":
      return {
        trips: [action.payload, ...state.posts],
      };
    case "DELETE_TRIPS":
      return {
        trips: state.trips.filter((w) => w._id !== action.payload._id),
      };
    case "DELETE_ALL_TRIPS":
      return {
        trips: [],
      };
    default:
      return state;
  }
};

export const TripsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tripsReducer, {
    trips: [],
  });
  // console.log("TripsContextProvider state", state);

  return (
    <TripsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TripsContext.Provider>
  );
};
