import { createGenerateClassName } from "@material-ui/core/styles";

import theme from "../styles/theme";

function createPageContext() {
  return {
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
    theme,
  };
}

export default createPageContext;
