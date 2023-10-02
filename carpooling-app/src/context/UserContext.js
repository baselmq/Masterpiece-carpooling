import { createContext, useReducer, useEffect } from "react";

export const UserContext = createContext();
export const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return { userData: action.payload };
    case "DELETE_USER_DATA":
      return { userData: null };
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    userData: null,
  });

  //   console.log("UserContext state", state);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
