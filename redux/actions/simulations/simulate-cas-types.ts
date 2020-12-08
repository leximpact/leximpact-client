import request from "../../../components/common/utils/request";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../reducers";
import { formatReforme } from "../format-reforme";

export interface SimulateCasTypesRequestAction {
  type: "SIMULATE_CAS_TYPES_REQUEST"
}

function simulateCasTypesRequest(): SimulateCasTypesRequestAction {
  return {
    type: "SIMULATE_CAS_TYPES_REQUEST",
  };
}

export interface SimulateCasTypesFailureAction {
  error: any,
  type: "SIMULATE_CAS_TYPES_FAILURE",
}

function simulateCasTypesFailure(error): SimulateCasTypesFailureAction {
  return {
    error,
    type: "SIMULATE_CAS_TYPES_FAILURE",
  };
}

interface ResponseBody {
  nbreParts: {
    apres: {
      [index: number]: number;
    },
    avant: {
      [index: number]: number;
    }
    plf: {
      [index: number]: number;
    },
  },
  // eslint-disable-next-line camelcase
  res_brut: {
    apres: {
      [index: number]: number;
    },
    plf: {
      [index: number]: number;
    },
    avant: {
      [index: number]: number;
    }
  },
  total: {
    apres: number;
    avant: number;
    plf: number;
  }
}

export interface SimulateCasTypesSuccessAction {
  type: "SIMULATE_CAS_TYPES_SUCCESS",
  data: ResponseBody,
}

function simulateCasTypesSuccess(data: ResponseBody): SimulateCasTypesSuccessAction {
  return {
    data,
    type: "SIMULATE_CAS_TYPES_SUCCESS",
  };
}

export const simulateCasTypes = () => (dispatch, getState) => {
  dispatch(simulateCasTypesRequest());

  const { descriptions, parameters } = getState() as RootState;
  const body = {
    description_cas_types: descriptions.ir.casTypes.map(casType => ({
      // No name
      residence: casType.residence,
      revenuImposable: casType.revenuImposable,
      declarants: casType.declarants.map(declarant => ({
        veuf: declarant.veuf,
        retraite: declarant.retraite,
        ancienCombattant: declarant.ancienCombattant,
        invalide: declarant.invalide,
        parentIsole: declarant.parentIsole,
        // No gende
      })),
      personnesACharge: casType.personnesACharge,
    })),
    reforme: formatReforme(parameters.amendement),
  };

  return request
    .post("/calculate/compare", body)
    .then(payload => dispatch(simulateCasTypesSuccess(payload)))
    .catch(err => dispatch(simulateCasTypesFailure(err)));
};
