import { createContext, useReducer } from "react";

export const ColorContext = createContext();

export const colorReducer = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        value: action.payload,
      };
    case "SET_VISIBLE":
      return {
        ...state,
        visible: action.payload,
      };
    default:
      return state;
  }
};

export const ColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(colorReducer, {
    value: 0,
    visible: false,
  });
  // console.log("BookingContext state", state);
  return (
    <ColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
