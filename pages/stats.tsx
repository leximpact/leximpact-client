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
                <div>
                    <p>
                    x amendements citent leximpact dans l'exposé des motifs
                    </p>
                    <p>
                    x citations en commissions + verbatim ou lien
                    </p>
                    <p> 
                    nombre de simulations (date)
                    </p>
                    <p>
                    IR cas types et population
                    </p>
                    <p>
                    dotations avec texte explicatif sur la répartition des activités d'évaluation dans les gpes parlementaires
                    </p>
                    <p>
                    entonnoir : 1) visites / index > page IR / dotations > nb simulations > nb amendements
                    </p>
                    <p>
                    périmètre des lois
                    </p>
                    <p>
                    temps d'évaluation 
                    </p>
                </div>
            </Fragment>
        )
    }
}

export default withRoot(StatsPage);
