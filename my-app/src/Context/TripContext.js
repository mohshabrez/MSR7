import { createContext, useContext, useReducer, useState } from "react";
import { TripReducer, initialState } from "../Reducer/TripReducer";

const TripContext = createContext(null);
const dispatchTripContext = createContext(null);

export function TripProvider({ children }) {
  const [state, dispatch] = useReducer(TripReducer, initialState);

  return (
    <TripContext.Provider value={state}>
      <dispatchTripContext.Provider value={{ dispatch }}>
        {children}
      </dispatchTripContext.Provider>
    </TripContext.Provider>
  );
}

export const useTrip = () => useContext(TripContext);
export const useDispatch = () => useContext(dispatchTripContext);
