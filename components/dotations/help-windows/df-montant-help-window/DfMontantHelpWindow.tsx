import { PureComponent } from "react";

import { HelpWindow } from "../../../common";
import styles from "./DfMontantHelpWindow.module.scss";

export class DfMontantHelpWindow extends PureComponent {
  render() {
    return (
      <HelpWindow name="df-montant" title="Fonctionnement de l'écrêtement de la DF">
        <div className={styles.container}>
          Le montant de la dotation forfaitaire proposé par LexImpact intègre un élément
          qui n’est pas modifiable dans cette interface. Il s’agit de la majoration annuelle
          de la dotations aux EPCI, de 30 millions d’euros (article L.5211-28 du CGCT).
          Cette majoration est financée en écrêtant la dotation forfaitaire. LexImpact
          vous propose donc un résultat directement écrêté de ce montant.
          <br />
          <br />
          <strong>
            Quels sont les éléments pris en compte dans l’écrêtement
            de la dotation forfaitaire ?
          </strong>
          <br />
          <br />
          À l’enveloppe de la dotation forfaitaire, est retiré :
          <ul>
            <li>60% de la majoration de la DSR ;</li>
            <li>60% de la majoration de la DSU ;</li>
            <li>60% des 30 millions d’euros ajoutés chaque année à la dotation aux EPCI.</li>
          </ul>
        </div>
      </HelpWindow>
    );
  }
}
