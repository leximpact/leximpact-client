import downArrow from "@iconify/icons-twemoji/down-arrow";
import { Icon } from "@iconify/react";
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
        <section className={styles.sectionText}>
          <h2>L&apos;équipe LexImpact recrute !</h2>
          <p>
            LexImpact est une équipe de l&apos;Assemblée nationale
            qui a pour vocation d&apos;aider les parlementaires au chiffrage
            de leurs propositions de lois avant vote.
          </p>
          <p>
            Elle travaille en amélioration continue dans un environnement opensource.
            Elle répond aux besoins des usagers en associant des données représentatives
            aux règlementations.
          </p>
          <p>
            Pour 2021, l&apos;équipe recrute un·e datascientist et un·e développeu·r·se !
          </p>
          <p>
            Cela vous intéresse ? Découvrez les offres et modalités de candidature
            dans les documents ci-dessous. Et n&apos;hésitez pas à nous contacter
            pour tout besoin d&apos;information complémentaire.
          </p>
          <Grid
            container
            alignItems="flex-start"
            className={styles.gridSection}
            direction="row"
            justify="space-between">

            <Grid item className={styles.griditemOpen} xs={6}>
              <h3>Un·e développeu·r·se fullstack</h3>
              <section>
                <p>
                  CDD d&apos;un an en temps plein ou temps partiel.
                </p>
                <p>
                  En tant que développeu·r·se, vous :
                  <ul>
                    <li>
                      participerez au développement et au maintien
                      des simulateurs et outils LexImpact ;
                    </li>
                    <li>
                      travaillerez en collaboration avec un·e autre développeu·r·se,
                      un·e datascientist et une designeuse.
                    </li>
                  </ul>
                </p>
                Pour en savoir plus, télécharger le descriptif de l&apos;offre en PDF :
                <div className={styles.divJob}>
                  <Icon height="20" icon={downArrow} width="20" />
                  &nbsp;&nbsp;
                  <a
                    download="LexImpact_fiche-de-poste-Developpeur-Developpeuse-.pdf"
                    href="./files/LexImpact_fiche-de-poste-Developpeur-Developpeuse-.pdf">
                    offre développement
                  </a>
                </div>
              </section>
            </Grid>

            <Grid item className={styles.griditemPop} xs={6}>
              <h3>Un·e datascientist</h3>
              <section>
                <p>
                  CDD d&apos;un an en temps plein ou temps partiel.
                </p>
                <p>
                  En tant que datascientist vous :
                  <ul>
                    <li>
                      étudierez et traiterez des données fiscales
                      de plusieurs centaines de gigaoctets ;
                    </li>
                    <li>
                      créerez des modèles mathématiques pour répondre aux défis
                      d&apos;anonymisation des données et de vitesse de calcul ;
                    </li>
                    <li>
                      dénicherez des sources de données complémentaires
                      si elles s&apos;avéraient nécessaires au développement des produits.
                    </li>
                  </ul>
                </p>

                Pour en savoir plus, télécharger le descriptif de l&apos;offre en PDF :
                <div className={styles.divJob}>
                  <Icon height="20" icon={downArrow} width="20" />
                  &nbsp;&nbsp;
                  <a
                    download="LexImpact_fiche-de-poste-Datascientist-.pdf"
                    href="./public/files/LexImpact_fiche-de-poste-Datascientist-.pdf">
                    offre datascience
                  </a>
                </div>
              </section>
            </Grid>
          </Grid>
        </section>
      </Fragment>
    );
  }
}

export default withRoot(RecrutementPage);
