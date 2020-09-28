import { Fragment, PureComponent } from "react";

import { ParameterValues } from "../../../common";

export class Alinea4a extends PureComponent {
  render() {
    return (
      <Fragment>
        4. a. Le montant de l&apos;impôt résultant de l&apos;application des
        dispositions précédentes est diminué, dans la limite de son montant,
        de la différence entre
        {" "}
        <ParameterValues
          editable
          path="impot_revenu.decote.seuil_celib"
        />
        {" "}
        € et
        {" "}
        <ParameterValues
          editable
          path="impot_revenu.decote.taux"
        />
        {" "}
        % de son montant pour les contribuables célibataires, divorcés ou
        veufs et de la différence entre
        {" "}
        <ParameterValues
          editable
          path="impot_revenu.decote.seuil_couple"
        />
        {" "}
        € et
        {" "}
        <ParameterValues
          path="impot_revenu.decote.taux"
        />
        {" "}
        % de son montant pour les contribuables soumis à imposition
        commune.
      </Fragment>
    );
  }
}
