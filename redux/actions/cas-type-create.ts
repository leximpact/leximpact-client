export interface CreateCasTypeAction {
  data: any;
  type: "onCreateCasType";
}

export function createCasType(data: any): CreateCasTypeAction {
  return ({
    data,
    type: "onCreateCasType",
  });
}
