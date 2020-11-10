import Head from "next/head";
import { Fragment, PureComponent } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { AppHeader } from "../components/common";
import withRoot from "../lib/withRoot";

import styles from "./presentation-et-cgu.module.scss";


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
            <Paper>
              <h3>Un·e développeu·r·se fullstack</h3>
              <a
                download="LexImpact_fiche-de-poste-Developpeur-Developpeuse-.pdf"
                href="./public/files/LexImpact_fiche-de-poste-Developpeur-Developpeuse-.pdf">
                Voir l'offre (PDF)
              </a>
            </Paper>
          </Grid>

          <Grid item className={styles.griditemPop} xs={6}>
            <Paper>
              <h3>Un·e datascientist</h3>
              <a
                download="LexImpact_fiche-de-poste-Datascientist-.pdf"
                href="./public/files/LexImpact_fiche-de-poste-Datascientist-.pdf">
                Voir l'offre (PDF)
              </a>
            </Paper>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withRoot(RecrutementPage);
