// eslint-disable-next-line no-unused-vars
import { Action } from "../../../actions";

export interface CasType {
  // Only for frontend
  name: string;

  residence: "metropole"|"GuyMay"|"GuadMarReu";
  revenuImposable: number;
  declarants: {
    veuf: boolean; // previously named veufVeuve
    retraite: boolean; // previously named plus65ans
    ancienCombattant: boolean;
    invalide: boolean;
    parentIsole: boolean;
    // Only for frontend
    gender: "male"|"female";
  }[];
  personnesACharge: {
    invalide: boolean;
    chargePartagee: boolean;
  }[];
}

// Cet état est initialisé via "redux-cookies-middleware" dans "./pages/_app.jsx".
const DEFAULT_STATE: CasType[] = [];

// TODO: use proper types for Action
export const casTypes = (state: CasType[] = DEFAULT_STATE, action: Action | any): CasType[] => {
  switch (action.type) {
  case "onConnexionTokenLogout":
    return [];
  case "onInitializeCasTypes":
    if (action.token && state.length > 0) return state;
    return action.payload;
  case "ADD_CAS_TYPE":
    return [...state, action.casType];
  case "UPDATE_CAS_TYPE":
    return state.map((casType, index) => (index === action.index ? action.casType : casType));
  case "REMOVE_CAS_TYPE":
    const newState = [...state];
    newState.splice(action.index, 1);
    return newState;
  default:
    return state;
  }
};
