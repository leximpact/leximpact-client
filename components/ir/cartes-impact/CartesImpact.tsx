import Grid from "@material-ui/core/Grid";
import { PureComponent } from "react";

// eslint-disable-next-line no-unused-vars
import { CasType } from "../../../redux/reducers/descriptions/ir";
import { InformationPanel } from "../../common";
import { CarteEtat } from "./carte-etat";
import styles from "./CartesImpact.module.scss";
import { GagnantsPerdantsCard } from "./gagnants-perdants";
import SimpleCard from "./simple-card";

export const INFORMATION_PANEL_NAME = "ir";

interface Props {
  casTypes: CasType[];
  isInformationPanelVisible: boolean;
  isUserLogged: boolean;
}

export class CartesImpact extends PureComponent<Props> {
  render() {
    const { casTypes, isInformationPanelVisible, isUserLogged } = this.props;
    return (
      <div className={styles.container}>
        <Grid container spacing={3}>
          {isInformationPanelVisible && isUserLogged && (
            <Grid item lg={8} md={12} sm={12} xl={9} xs={12}>
              <InformationPanel name={INFORMATION_PANEL_NAME} title="Incidence de la crise sanitaire sur les résultats">
                L&apos;épidémie actuelle affectant l&apos;économie dans une mesure qui
                est à ce jour difficile à prévoir, les résultats que nous affichons sont
                très probablement surestimés. Les estimations de Leximpact des effets sur
                le budget de l&apos;État sont calculées à partir de données recalibrées
                s&apos;appuyant sur des enquêtes d&apos;années passées.
              </InformationPanel>
            </Grid>
          )}
          {isUserLogged && (
            <Grid item lg={8} md={12} sm={6} xl={6} xs={12}>
              <CarteEtat />
            </Grid>
          )}
          {isUserLogged && (
            <Grid item lg={4} md={6} sm={6} xl={3} xs={12}>
              <GagnantsPerdantsCard />
            </Grid>
          )}
        </Grid>
        <Grid container spacing={3}>
          {casTypes.map((casType, index) => {
            const itemKey = `react::simple-card-key-index::${index}`;
            return (
              <Grid key={itemKey} item lg={4} md={6} sm={6} xl={3} xs={12}>
                <SimpleCard index={index} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}
