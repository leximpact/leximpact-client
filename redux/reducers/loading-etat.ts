type State = "loading"|"computed"|"disabled";

const DEFAULT_STATE: State = "computed";

const loadingEtat = (state: State = DEFAULT_STATE, action): State => {
  switch (action.type) {
  case "onLoadingEtatStart":
    return "loading";
  case "onLoadingEtatComplete":
    return "computed";
  case "onDisabledEtat":
    return "disabled";
  default:
    return state;
  }
};

export default loadingEtat;
