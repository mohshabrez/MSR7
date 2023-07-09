import { TripData } from "../Data/TripData";


export const initialState = {
  TripData: TripData,
};

export const ACTIONS = {

};

export const TripReducer = (state, action) => {
  switch (action.type) {
    
    default: {
      throw new Error("Unknown action " + action.type);
    }
  }
};
