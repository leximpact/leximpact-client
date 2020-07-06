import { Fragment, PureComponent } from "react";

import { Card } from "../../../card";
import styles from "./CommuneType.module.scss";
import { DotationParHab } from "./dotation-par-hab";
import { Eligibilite } from "./eligibilite";
import { HabitantLabel } from "./habitant-label";
import { PotentielFinancier } from "./potentiel-financier";

interface Commune {
  name: string;
  departement: string;
  habitants: number;
  potentielFinancier: number;
  eligible: boolean;
  dotationParHab: number;
}

export class CommuneType extends PureComponent<Commune> {
  render() {
    const {
      departement, dotationParHab, eligible, habitants, name, potentielFinancier,
    } = this.props;
    return (
      <Card
        content1={(
          <Fragment>
            <div className={styles.habitants}>
              <HabitantLabel habitants={habitants} />
            </div>
            <PotentielFinancier
              potentielFinancier={potentielFinancier}
            />
          </Fragment>
        )}
        content2={(
          <Fragment>
            <div className={styles.resultCaption}>
              Eligibilité et montant de la DSR
            </div>
            <div className={styles.eligibilite}>
              <Eligibilite eligible={eligible} />
            </div>
            <DotationParHab dotationParHab={dotationParHab} />
          </Fragment>
        )}
        subTitle={departement}
        title={name}
        onClose={() => { }}
        onEdit={() => { }}
      />
    );
  }
}