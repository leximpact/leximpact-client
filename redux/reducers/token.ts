type State = string | null;

// le default state est rempli grace a la lib "redux-cookies-middleware"
// voir le fichier "./reudx/make-application-state.js"
const DEFAULT_STATE: State = null;

const token = (state: State = DEFAULT_STATE, action): State => {
  switch (action.type) {
  case "onConnexionTokenLogout":
    return null;
  case "onConnexionTokenLogin":
    return action.value;
  default:
    return state;
  }
};

export default token;
