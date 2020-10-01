import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import { PureComponent } from "react";

import { HelpWindow } from "../../../common";
import styles from "./DfHelpWindow.module.scss";

export class DfHelpWindow extends PureComponent {
  render() {
    return (
      <HelpWindow name="df" title="Qu’est-ce que la dotation forfaitaire ?">
        <div className={styles.container}>
          La dotation forfaitaire, estimée dans ce simulateur, reconnaissable
          sous le cigle “DF” ou le symbole
          {" "}
          <BusinessCenterIcon />
          {" "}
          , est une part de la dotation globale de fonctionnement des communes.
          <br />
          <br />
          Aussi parfois appelée “dotation de base”, toutes les communes de France en bénéficient.
          <h4>Estimer l’écrêtement de la DF</h4>
          Lorsque le législateur augmente les montants de la DSR ou de la DSU,
          sans majorer le montant total de la dotation globale de fonctionnement,
          la dotation forfaitaire est alors écrêtée (c’est-à-dire minorée) de 60 %
          de ces majorations. Par ailleurs, 60% de la majoration de la dotation aux EPCI,
          de 30 millions d’euros par an, est également retiré du montant de la DF.
          <br />
          <br />
          LexImpact vous permet d’avoir une estimation du montant de la dotation forfaitaire
          par commune ou strate de communes, et d’agir sur les critères déterminant
          le périmètre des communes concernées par l’écrêtement.
          <br />
          <br />
          <img alt="DF" src="/static/images/df.jpg" />
        </div>
      </HelpWindow>
    );
  }
}
