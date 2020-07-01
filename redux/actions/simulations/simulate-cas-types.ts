import request from "../../../components/utils/request";
import { transformCasTypesToData } from "../../../components/utils/transform-cas-types-to-data";
// eslint-disable-next-line no-unused-vars
import { CasTypeResult } from "../../reducers/results/cas-types";
import { formatReforme } from "../format-reforme";

export interface SimulateCasTypesRequestAction {
  type: "SIMULATE_CAS_TYPES_REQUEST";
}

function simulateCasTypesRequest(): SimulateCasTypesRequestAction {
  return {
    type: "SIMULATE_CAS_TYPES_REQUEST",
  };
}

export interface SimulateCasTypesFailureAction {
  error: any;
  type: "SIMULATE_CAS_TYPES_FAILURE";
}

function simulateCasTypesFailure(error: any): SimulateCasTypesFailureAction {
  return {
    error,
    type: "SIMULATE_CAS_TYPES_FAILURE",
  };
}

export interface SimulateCasTypesSuccessAction {
  data: CasTypeResult[];
  type: "SIMULATE_CAS_TYPES_SUCCESS";
}

function simulateCasTypesSuccess(data: CasTypeResult[]): SimulateCasTypesSuccessAction {
  return {
    data,
    type: "SIMULATE_CAS_TYPES_SUCCESS",
  };
}

export const simulateCasTypes = () => (dispatch, getState) => {
  dispatch(simulateCasTypesRequest());

  const { casTypes, parameters } = getState();
  const body = {
    description_cas_types: transformCasTypesToData(casTypes),
    reforme: formatReforme(parameters.amendement),
  };

  interface Payload {
    // eslint-disable-next-line camelcase
    res_brut: {
      apres: { [name: number]: number },
      avant: { [name: number]: number },
      plf?: { [name: number]: number },
    },
    nbreParts: {
      apres: { [name: number]: number },
      avant: { [name: number]: number },
      plf?: { [name: number]: number },
    },
  }

  return request
    .post("/calculate/compare", body)
    .then((payload: Payload) => {
      // Convert the number arrays into an object that is easier to use.
      const casTypeResults: CasTypeResult[] = Object.keys(payload.res_brut.apres).map(key => ({
        ir: {
          amendement: Math.abs(payload.res_brut.apres[key]),
          base: Math.abs(payload.res_brut.avant[key]),
          plf: payload.res_brut.plf !== undefined ? Math.abs(payload.res_brut.plf[key]) : undefined,
        },
        nbreParts: {
          amendement: payload.nbreParts.apres[key],
          base: payload.nbreParts.avant[key],
          plf: payload.nbreParts.plf !== undefined ? payload.nbreParts.plf[key] : undefined,
        },
      }));
      dispatch(simulateCasTypesSuccess(casTypeResults));
    })
    .catch(err => dispatch(simulateCasTypesFailure(err)));
};
