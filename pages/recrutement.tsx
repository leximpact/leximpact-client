import Head from "next/head";
import { Fragment, PureComponent } from "react";

import { AppHeader } from "../components/common";
import withRoot from "../lib/withRoot";


class RecrutementPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Recrutement</title>
        </Head>
        <AppHeader showLoginButton={false} />
        HELLO
      </Fragment>
    );
  }
}

export default withRoot(RecrutementPage);
