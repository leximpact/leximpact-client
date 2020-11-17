import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { PureComponent } from "react";

import styles from "./EnSavoirPlus.module.scss";

class EnSavoirPlus extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Grid
          container
          alignItems="flex-start"
          direction="row"
          justify="space-between">
          <Grid item className={styles.gridItemText} xs={6}>
            <Typography>
              <span className={styles.spanTitreIntro}>
                LexImpact, c&apos;est quoi ?
              </span>
            </Typography>
            <p className={styles.paragraph}>
              LexImpact IR est une interface qui permet de
              {" "}
              <b>
              simuler, de façon rapide, l&apos;impact des réformes paramétriques de
              l&apos;impôt sur le revenu.
              </b>
              {" "}
              L&apos;estimation des impacts sur des foyers fiscaux types est accessible à
              tous ; les mesures d&apos;impacts sur la population
              française et les recettes de l&apos;État sont disponibles en accès restreint.
            </p>
            <Link href="/presentation-et-cgu">
              en savoir plus
            </Link>
          </Grid>
          <Grid item className={styles.gridItemButtons} xs={6}>
            <div>
              <div className={styles.divButton}>
                <Link href="/presentation-et-cgu">
                  <Button
                    fullWidth
                    color="inherit"
                    size="large"
                    variant="outlined">
                    Présentation et conditions d&apos;utilisation
                  </Button>
                </Link>
              </div>

              <div className={styles.divButton}>
                <Link href="/mentions-legales">
                  <Button
                    fullWidth
                    color="inherit"
                    size="large"
                    variant="outlined">
                    Mentions légales
                  </Button>
                </Link>
              </div>

              <div className={styles.divButton}>
                <Button
                  fullWidth
                  color="inherit"
                  href="mailto:leximpact@an.fr"
                  size="large"
                  variant="outlined">
                  Une question ? Un bug ? Un avis ?
                </Button>
                <p className={styles.pAdresseMail}>
                  Écrivez-nous à leximpact@an.fr !
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default EnSavoirPlus;
