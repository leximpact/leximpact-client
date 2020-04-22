import { cloneDeep } from "lodash";

import { SIMULATE_CAS_TYPES_SUCCESS } from "../actions";

const wprm = [1, 1, 1, 1, 1, 1];
const apres = [0, -1336, -1068, 0, -1723, -820];
const avant = [0, -1336, -1068, 0, -1723, -820];

// cree une map d'objet
// dont la cle est l'index dans un array
const toIndexedObject = arr => arr.reduce((acc, v, i) => ({ ...acc, [i]: v }), {});

const DEFAULT_STATE = {
  apres: toIndexedObject(apres),
  avant: toIndexedObject(avant),
  wprm: toIndexedObject(wprm),
};

const getNextStateKey = (state) => {
  const nextKey = Object.keys(state.wprm).length;
  return nextKey;
};

const resBrut = (state = DEFAULT_STATE, action) => {
  let nextKey = null;
  let nextState = null;
  switch (action.type) {
  case SIMULATE_CAS_TYPES_SUCCESS:
    return cloneDeep(action.data);
  case "onCreateCasType":
    nextKey = getNextStateKey(state);
    nextState = {
      apres: { ...state.apres, [nextKey]: 0 },
      avant: { ...state.avant, [nextKey]: 0 },
      plf: { ...state.plf, [nextKey]: 0 },
      wprm: { ...state.wprm, [nextKey]: 1 },
    };
    return nextState;
  default:
    return state;
  }
};

export default resBrut;
