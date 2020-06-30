import { SIMULATE_CAS_TYPES_REQUEST, SIMULATE_CAS_TYPES_SUCCESS } from "../../actions";
// eslint-disable-next-line no-unused-vars
import { AsyncItems } from "../async-items.interface";

type State = AsyncItems<any>;

const apres = [0, -1336, -1068, 0, -1723, -820];
const avant = [0, -1336, -1068, 0, -1723, -820];

// Create a map of objects which key is the index of the array.
const toIndexedObject = arr => arr.reduce((acc, v, i) => ({ ...acc, [i]: v }), {});

const initialState: State = {
  isFetching: false,
  items: {
    apres: toIndexedObject(apres),
    avant: toIndexedObject(avant),
  },
};

function casTypes(state: State = initialState, action): State {
  switch (action.type) {
  case SIMULATE_CAS_TYPES_REQUEST:
    return {
      ...state,
      isFetching: true,
    };
  case SIMULATE_CAS_TYPES_SUCCESS:
    return {
      ...state,
      isFetching: false,
      items: action.data,
    };
  case "onCreateCasType":
    const nextKey = Object.keys(state.items.avant).length;
    return {
      ...state,
      items: {
        apres: { ...state.items.apres, [nextKey]: 0 },
        avant: { ...state.items.avant, [nextKey]: 0 },
        plf: state.items.plf ? { ...state.items.plf, [nextKey]: 0 } : null,
      },
    };
  default:
    return state;
  }
}

export default casTypes;
