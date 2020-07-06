export interface AddCasTypeAction {
  type: "ADD_CAS_TYPE_ACTION";
  // TODO: use a proper interface
  description: any;
}

export function addCasType(description: any): AddCasTypeAction {
  return {
    description,
    type: "ADD_CAS_TYPE_ACTION",
  };
}
