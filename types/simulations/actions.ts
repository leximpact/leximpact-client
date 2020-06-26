import { ParametersState } from "../parameters";

export interface SimulateDotationsRequestAction {
  type: "SIMULATE_DOTATIONS_REQUEST"
}

export interface SimulateDotationsFailureAction {
  error: any;
  type: "SIMULATE_DOTATIONS_FAILURE"
}

export interface SimulateDotationsSuccessAction {
  data: ParametersState["dotations"];
  type: "SIMULATE_DOTATIONS_SUCCESS",
}

export type SimulationAction =
  SimulateDotationsRequestAction |
  SimulateDotationsFailureAction |
  SimulateDotationsSuccessAction;
