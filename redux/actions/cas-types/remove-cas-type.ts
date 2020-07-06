export interface RemoveCasTypeAction {
  type: "REMOVE_CAS_TYPE_ACTION";
  id: number;
}

export function removeCasType(id: number): RemoveCasTypeAction {
  return {
    id,
    type: "REMOVE_CAS_TYPE_ACTION",
  };
}
