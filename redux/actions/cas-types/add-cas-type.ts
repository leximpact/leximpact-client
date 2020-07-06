// eslint-disable-next-line no-unused-vars
import { CasTypeDescription } from "../../reducers/descriptions/cas-types";

export interface AddCasTypeAction {
  type: "ADD_CAS_TYPE_ACTION";
  description: CasTypeDescription;
}

export function addCasType(description: any): AddCasTypeAction {
  return {
    description,
    type: "ADD_CAS_TYPE_ACTION",
  };
}
