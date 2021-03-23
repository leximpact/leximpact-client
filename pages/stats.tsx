import Head from "next/head";
import { Fragment, PureComponent } from "react";

import { AppHeader } from "../components/common";
import { Matomo } from "../components/common";
import withRoot from "../lib/withRoot";

class StatsPage extends PureComponent {
    render() {
        return (
            <Fragment>
                <Head>
                  <title>LexImpact - Statistiques d'usage</title>
                  <Matomo />
                </Head>
                <AppHeader showLoginButton={false} />
            </Fragment>
        )
    }
}

export default withRoot(StatsPage);
