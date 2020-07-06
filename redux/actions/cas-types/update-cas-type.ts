// eslint-disable-next-line no-unused-vars
import { CasTypeDescription } from "../../reducers/descriptions/cas-types";

export interface UpdateCasTypeAction {
  type: "UPDATE_CAS_TYPE_ACTION";
  id: number;
  description: CasTypeDescription;
}

export function updateCasType(id: number, description: any): UpdateCasTypeAction {
  return {
    description,
    id,
    type: "UPDATE_CAS_TYPE_ACTION",
  };
}
