import { createContext, useReducer } from "react";

export const DriverContext = createContext();

export const locationReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        data: action.payload,
      };
    case "DELETE_DATA":
      return {
        data: null,
      };

    default:
      return state;
  }
};

export const DriverContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, {
    data: null,
  });
  // console.log("LocationContextHome state", state);
  return (
    <DriverContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DriverContext.Provider>
  );
};
