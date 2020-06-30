import {
  // eslint-disable-next-line no-unused-vars
  CreateCasTypeAction,
  // eslint-disable-next-line no-unused-vars
  SimulateCasTypesRequestAction,
  // eslint-disable-next-line no-unused-vars
  SimulateCasTypesSuccessAction,
} from "../../actions";
// eslint-disable-next-line no-unused-vars
import { AsyncItems } from "../async-items.interface";

export interface CasTypeResult {
  ir: {
    amendement: number;
    base: number;
    plf?: number;
  },
  nbreParts: {
    amendement: number;
    base: number;
    plf?: number;
  },
}

type State = AsyncItems<CasTypeResult[]>;

type CasTypeResultAction =
  SimulateCasTypesRequestAction |
  SimulateCasTypesSuccessAction |
  CreateCasTypeAction;

const initialState: State = {
  isFetching: false,
  items: [
    {
      ir: { amendement: 0, base: 0 },
      nbreParts: { amendement: 0, base: 0 },
    },
    {
      ir: { amendement: 1336, base: 1336 },
      nbreParts: { amendement: 0, base: 0 },
    },
    {
      ir: { amendement: 1068, base: 1068 },
      nbreParts: { amendement: 0, base: 0 },
    },
    {
      ir: { amendement: 0, base: 0 },
      nbreParts: { amendement: 0, base: 0 },
    },
    {
      ir: { amendement: 1723, base: 1723 },
      nbreParts: { amendement: 0, base: 0 },
    },
    {
      ir: { amendement: 820, base: 820 },
      nbreParts: { amendement: 0, base: 0 },
    },
  ],
};

function casTypes(state: State = initialState, action: CasTypeResultAction): State {
  switch (action.type) {
  case "SIMULATE_CAS_TYPES_REQUEST":
    return {
      ...state,
      isFetching: true,
    };
  case "SIMULATE_CAS_TYPES_SUCCESS":
    return {
      ...state,
      isFetching: false,
      items: action.data,
    };
  case "onCreateCasType":
    return {
      ...state,
      items: [
        ...state.items,
        {
          ir: {
            amendement: 0,
            base: 0,
            plf: 0,
          },
          nbreParts: {
            amendement: 0,
            base: 0,
            plf: 0,
          },
        },
      ],
    };
  default:
    return state;
  }
}

export default casTypes;
