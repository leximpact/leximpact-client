import Grid from "@material-ui/core/Grid";
import Head from "next/head";
import { Fragment, PureComponent } from "react";

import { AppHeader } from "../components/common";
import TextePresentationGenerale from "../components/presentation-cgu/texte-presentation-generale";
import TextePresentationLeximpactPop from "../components/presentation-cgu/texte-presentation-leximpact-pop";
import TextePresentationOpenLeximpact from "../components/presentation-cgu/texte-presentation-open-leximpact";
import withRoot from "../lib/withRoot";
import styles from "./presentation-et-cgu.module.scss";

class ExamplePage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title>LexImpact</title>
        </Head>
        <AppHeader showLoginButton={false} />
        <TextePresentationGenerale />
        <Grid
          container
          alignItems="flex-start"
          className={styles.gridSection}
          direction="row"
          justify="space-between">
          <Grid item className={styles.griditemOpen} xs={6}>
            <TextePresentationOpenLeximpact />
          </Grid>

          <Grid item className={styles.griditemPop} xs={6}>
            <TextePresentationLeximpactPop />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withRoot(ExamplePage);
