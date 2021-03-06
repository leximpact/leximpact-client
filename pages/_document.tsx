import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

import createPageContext from "../lib/createPageContext";
import getPageContext from "../lib/getPageContext";

interface Props {
  pageContext: any;
}

class MyDocument extends Document<Props> {
  static getInitialProps(ctx) {
    // Resolution order
    //
    // On the server:
    // 1. page.getInitialProps
    // 2. document.getInitialProps
    // 3. page.render
    // 4. document.render
    //
    // On the server with error:
    // 2. document.getInitialProps
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. page.getInitialProps
    // 3. page.render

    // Get the context of the page to collected side effects.
    const pageContext = getPageContext(process.browser, createPageContext);
    const page = ctx.renderPage(Component => props => (
      <Component pageContext={pageContext} {...props} />
    ));
    return {
      ...page,
      pageContext,
    };
  }

  render() {
    const { pageContext } = this.props;

    return (
      <html dir="ltr" lang="fr">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            content={`user-scalable=0, initial-scale=1,
                             minimum-scale=1, width=device-width, height=device-height`}
            name="viewport"
          />
          {/* PWA primary color */}
          <meta
            content={pageContext.theme.palette.primary[500]}
            name="theme-color"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Lora"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
