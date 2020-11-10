import Grid from "@material-ui/core/Grid";
import Head from "next/head";
import { Fragment, PureComponent } from "react";

import { AppHeader } from "../components/common";
import withRoot from "../lib/withRoot";
import styles from "./recrutement.module.scss";


class RecrutementPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Recrutement</title>
        </Head>
        <AppHeader showLoginButton={false} />
        <h2>L&apos;équipe LexImpact recrute !</h2>
        <p>LexImpact est une équipe au sein de l'Assemblée nationale</p>
        <Grid
          container
          alignItems="flex-start"
          className={styles.gridSection}
          direction="row"
          justify="space-between">

          <Grid item className={styles.griditemOpen} xs={6}>
            <h3>Un·e développeu·r·se fullstack</h3>
            <div>
              En savoir plus ?
              <a
                download="LexImpact_fiche-de-poste-Developpeur-Developpeuse-.pdf"
                href="./public/files/LexImpact_fiche-de-poste-Developpeur-Developpeuse-.pdf">
                Télécharger l&apos;offre (en PDF).
              </a>
            </div>
          </Grid>

          <Grid item className={styles.griditemPop} xs={6}>
            <h3>Un·e datascientist</h3>
            <div>
              En savoir plus ?
              <a
                download="LexImpact_fiche-de-poste-Datascientist-.pdf"
                href="./public/files/LexImpact_fiche-de-poste-Datascientist-.pdf">
                Télécharger l&apos;offre (en PDF)
              </a>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withRoot(RecrutementPage);
