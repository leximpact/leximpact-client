export interface UpdateCasTypeAction {
  type: "UPDATE_CAS_TYPE_ACTION";
  id: number;
  // TODO: use a proper interface
  description: any;
}

export function updateCasType(id: number, description: any): UpdateCasTypeAction {
  return {
    description,
    id,
    type: "UPDATE_CAS_TYPE_ACTION",
  };
}
