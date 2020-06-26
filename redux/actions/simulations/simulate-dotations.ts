import request from "../../../components/utils/request";
import { transformCasTypesToData } from "../../../components/utils/transform-cas-types-to-data";
import { RootState } from "../../../types";
import { ParametersState } from "../../../types/parameters";
import { SimulateDotationsFailureAction, SimulateDotationsRequestAction, SimulateDotationsSuccessAction } from "../../../types/simulations";
import { formatReforme } from "../format-reforme";

function simulateDotationsRequest(): SimulateDotationsRequestAction {
  return {
    type: "SIMULATE_DOTATIONS_REQUEST",
  };
}

function simulateDotationsFailure(error: any): SimulateDotationsFailureAction {
  return {
    error,
    type: "SIMULATE_DOTATIONS_FAILURE",
  };
}

function simulateDotationsSuccess(data: ParametersState["dotations"]): SimulateDotationsSuccessAction {
  return {
    data,
    type: "SIMULATE_DOTATIONS_SUCCESS",
  };
}

export const simulateDotations = () => (dispatch, getState) => {
  dispatch(simulateDotationsRequest());

  const { parameters } = getState() as RootState;
  const body = {
    reforme: formatReforme(parameters.amendement),
  };

  return request
    .post("/calculate/compare", body)
    .then(payload => dispatch(simulateDotationsSuccess(payload)))
    .catch(err => dispatch(simulateDotationsFailure(err)));
};
