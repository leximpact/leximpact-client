import {
  // eslint-disable-next-line no-unused-vars
  Action,
} from "../../../actions";
import { convertCasTypes } from "../common";
// eslint-disable-next-line no-unused-vars
import { AsyncState, IRState } from "../interfaces";

const DEFAULT_STATE: AsyncState<IRState> = {
  isFetching: false,
  state: null,
};

export function ir(
  state: AsyncState<IRState> = DEFAULT_STATE, action: Action,
): AsyncState<IRState> {
  switch (action.type) {
  case "SIMULATE_CAS_TYPES_FAILURE":
    return {
      isFetching: false,
      state: null,
    };
  case "SIMULATE_CAS_TYPES_REQUEST":
    return {
      isFetching: true,
      state: null,
    };
  case "SIMULATE_CAS_TYPES_SUCCESS":
    return {
      isFetching: false,
      state: {
        casTypes: convertCasTypes(action.data, "apres"),
      },
    };
  case "REMOVE_CAS_TYPE":
    if (state.state === null) {
      return state;
    }
    const casTypes = [...state.state.casTypes];
    casTypes.splice(action.index, 1);
    return {
      isFetching: false,
      state: {
        casTypes,
      },
    };
  default:
    return state;
  }
}
