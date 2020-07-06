import Cookies from "js-cookie";

import { TOKEN_NAME } from "../../make-application-state";

export const logOut = () => {
  Cookies.remove(TOKEN_NAME);
  document.location.reload();
};
