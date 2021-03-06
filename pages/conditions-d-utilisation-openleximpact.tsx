import Head from "next/head";
import { Fragment, PureComponent } from "react";

import { AppHeader } from "../components/common";
import TexteCguOpenLexImpact from "../components/presentation-cgu/cgu-open-leximpact/texte-cgu-open-leximpact";
import withRoot from "../lib/withRoot";

class PageCGULexOpenImpact extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title>LexImpact</title>
        </Head>
        <AppHeader showLoginButton={false} />
        <TexteCguOpenLexImpact />
      </Fragment>
    );
  }
}

export default withRoot(PageCGULexOpenImpact);
