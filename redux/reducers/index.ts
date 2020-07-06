import { combineReducers } from "redux";

import casTypes from "./cas-types";
import display from "./display";
import loadingEtat from "./loading-etat";
import { parameters } from "./parameters";
import results from "./results";
import token from "./token";

const rootReducer = combineReducers({
  casTypes,
  display,
  loadingEtat,
  parameters,
  results,
  token,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;