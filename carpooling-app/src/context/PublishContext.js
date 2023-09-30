import { createContext, useReducer } from "react";

export const PublishCxt = createContext();

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
    case "SET_TIME":
      return {
        ...state,
        time: action.payload,
      };
    case "SET_NUMBER_OF_SEATS":
      return {
        ...state,
        numberOfSeats: action.payload,
      };
    case "SET_TRAVEL_TIME":
      return {
        ...state,
        travelTime: action.payload,
      };
    case "SET_PRICE":
      return {
        ...state,
        price: action.payload,
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

export const PublishContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, {
    origin: null,
    destination: null,
    date: null,
    time: null,
    numberOfSeats: 1,
    travelTime: null,
    price: 0,
  });
  // console.log("LocationContextHome state", state);
  return (
    <PublishCxt.Provider value={{ ...state, dispatch }}>
      {children}
    </PublishCxt.Provider>
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
