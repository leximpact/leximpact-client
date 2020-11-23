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
          alignItems="center"
          direction="row"
          justify="space-between">
          <Grid item className={styles.gridItemText} xs={6}>
            <Typography>
              <span className={styles.spanTitreIntro}>
                LexImpact, c&apos;est quoi ?
              </span>
            </Typography>
            <p className={styles.paragraph}>
              LexImpact est un service de l&apos;Assemblée nationale qui a pour vocation
              d&apos;aider les parlementaires au chiffrage de leurs amendements et propositions
              de loi sur les champs de la fiscalité, des finances publiques et
              des affaires sociales.
              <br />
              Ce service produit des interfaces permettant de
              {" "}
              <b>
              simuler, de façon rapide, l&apos;impact de réformes paramétriques
              </b>
              {" "}
              sur des textes de loi relatifs à ces champs. Certaines parties de ces
              simulateurs sont accès libre (simulation des dotations aux communes).
              D&apos;autres sont en accès restreint (impact sur le budget de
              l&apos;Etat d&apos;une réforme de l&apos;IR).
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
