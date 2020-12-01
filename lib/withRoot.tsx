import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles/";
import React from "react";

import createPageContext from "./createPageContext";
import getPageContext from "./getPageContext";

function withRoot(Component) {
  let pageContext = null;

  interface Props {
    pageContext: any;
  }

  class WithRoot extends React.Component<Props> {
    constructor(props, context) {
      super(props, context);

      const { pageContext: propsPageContext } = this.props;
      pageContext = propsPageContext || getPageContext(process.browser, createPageContext);
    }

    static getInitialProps = (ctx) => {
      if (Component.getInitialProps) {
        return Component.getInitialProps(ctx);
      }

      return {};
    };

    render() {
      // MuiThemeProvider makes the theme available down the React tree thanks to React
      // context.
      return (
        <MuiThemeProvider
          theme={(pageContext as any).theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to */}
          {/* build upon. */}
          <CssBaseline />
          <Component {...this.props} />
        </MuiThemeProvider>
      );
    }
  }

  return WithRoot;
}

export default withRoot;
