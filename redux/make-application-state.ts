import { applyMiddleware, createStore } from "redux";
import reduxCookiesMiddleware, {
  getStateFromCookies,
} from "redux-cookies-middleware";
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "./reducers";
import { CAS_TYPES_NAME, setAuthCookie, TOKEN_NAME } from "./set-auth-cookie";

// enregistre et lit les cookies du navigateur
// state to persist in cookies
const paths = {
  "descriptions.ir.casTypes": { name: CAS_TYPES_NAME },
  token: { name: TOKEN_NAME },
};

const apiEndpoint = process.env.API_URL;
const thunkMiddleWare = thunk.withExtraArgument({ apiEndpoint });
const cookiesMiddleware = reduxCookiesMiddleware(paths, {
  setCookie: setAuthCookie,
});

const makeApplicationState = (initialState) => {
  const nextState = getStateFromCookies(initialState, paths);
  const middlewares = [thunkMiddleWare, cookiesMiddleware];
  let enhancer = applyMiddleware(...middlewares);
  if (process.env.NODE_ENV === "development") {
    enhancer = composeWithDevTools(enhancer);
  }

  if (
    nextState.descriptions &&
    nextState.descriptions.ir &&
    nextState.descriptions.ir.casTypes &&
    nextState.descriptions.ir.casTypes.length > 0 && 
    nextState.descriptions.ir.casTypes[0].hasOwnProperty('revenusNetMensuel')
  ) {
    // State stored in cookie uses an old format.
    nextState.descriptions.ir.casTypes = [];
  }

  console.log(JSON.stringify(nextState.descriptions, null, 2))
  const store = createStore(reducers, nextState, enhancer);
  return store;
};

export default makeApplicationState;
