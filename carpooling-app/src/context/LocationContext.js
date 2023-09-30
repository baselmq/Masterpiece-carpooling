import { createContext, useReducer } from "react";

export const LocationContext = createContext();

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

export const LocationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, {
    origin: null,
    destination: null,
  });
  // console.log("LocationContext state", state);
  return (
    <LocationContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LocationContext.Provider>
  );
};

// import { createContext, useReducer } from "react";

// export const LocationContext = createContext();

// export const locationReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_LOCATION":
//       return {
//         location: action.payload,
//       };
//     case "ADD_LOCATION":
//       return {
//         location: [action.payload, ...state.location],
//       };
//     default:
//       return state;
//   }
// };

// export const LocationContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(locationReducer, {
//     location: [],
//   });
//   //   console.log("LocationContext state", state);

//   return (
//     <LocationContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </LocationContext.Provider>
//   );
// };
