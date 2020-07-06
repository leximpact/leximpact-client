import { remove, set } from "immutable";
import Cookies from "js-cookie";

// eslint-disable-next-line no-unused-vars
import { AddCasTypeAction, RemoveCasTypeAction, UpdateCasTypeAction } from "../../actions";
import { defaultState } from "./cas-types.default-state";

export type CasTypeDescription = {
  lieuResidence: number;
  name: string;
  nbCouple: number;
  nbEnfants: number;
  persons: {
    childs: {
      ancienCombattant: number;
      chargePartagee: number;
      gender: number;
      invalide: number;
      isChild: number;
      parentIsole: number;
      plus65ans: number;
      veufVeuve: number;
    }[];
    parents: {
      ancienCombattant: number;
      chargePartagee: number;
      gender: number;
      invalide: number;
      isChild: number;
      parentIsole: number;
      plus65ans: number;
      veufVeuve: number;
    }[];
  };
  revenusNetMensuel: number;
};

export type State = CasTypeDescription[];

const initialState: State = Cookies.get("descriptions.casTypes") ? JSON.parse(Cookies.get("descriptions.casTypes")) : defaultState;

type CasTypesAction = AddCasTypeAction | UpdateCasTypeAction | RemoveCasTypeAction;

export function casTypes(
  state: State = initialState, action: CasTypesAction,
): State {
  let newState: State;
  switch (action.type) {
  case "ADD_CAS_TYPE_ACTION":
    newState = state.concat(action.description);
    Cookies.set("cas_type_descriptions", JSON.stringify(newState));
    return newState;
  case "UPDATE_CAS_TYPE_ACTION":
    newState = set(state, action.id, action.description);
    Cookies.set("cas_type_descriptions", JSON.stringify(newState));
    return newState;
  case "REMOVE_CAS_TYPE_ACTION":
    newState = remove(state, action.id);
    Cookies.set("cas_type_descriptions", JSON.stringify(newState));
    return newState;
  default:
    return state;
  }
}
