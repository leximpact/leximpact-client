import classicalBuilding from "@iconify/icons-twemoji/classical-building";
import warningIcon from "@iconify/icons-twemoji/warning";
import { Icon } from "@iconify/react";
import { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { InformationPanel, ParameterValues } from "../../../common";
import styles from "./Alinea3.module.scss";

const mapStateToProps = ({ token }) => ({
  isUserLogged: Boolean(token),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class Alinea3 extends PureComponent<PropsFromRedux> {
  render() {
    const {
      isUserLogged,
    } = this.props;
    return (
      <Fragment>
        {isUserLogged ? (
          <div className={styles.message}>
            <InformationPanel name="Refaction Outre-Mer" title="Réfaction Outre-Mer">
              <Icon icon={warningIcon} />
              {" "}
              <Icon icon={classicalBuilding} />
              {" "}
              <span>
                La modification des paramètres de la décote outre-mer est
                actuellement uniquement prise en compte pour le calcul de l&apos;impôt des
                foyers fiscaux types.
              </span>
            </InformationPanel>
          </div>
        ) : null}
        3. Le montant de l&apos;impôt résultant de l&apos;application des
        dispositions précédentes est réduit de
        {" "}
        <ParameterValues
          editable
          amendementInputSize="small"
          path="impot_revenu.plafond_qf.abat_dom.taux_GuadMarReu"
        />
        {" "}
        %, dans la limite de
        {" "}
        <ParameterValues
          editable
          path="impot_revenu.plafond_qf.abat_dom.plaf_GuadMarReu"
        />
        {" "}
        € pour les
        contribuables domiciliés dans les départements de la Guadeloupe, de
        la Martinique et de la Réunion ; cette réduction est égale à
        {" "}
        <ParameterValues
          editable
          amendementInputSize="small"
          path="impot_revenu.plafond_qf.abat_dom.taux_GuyMay"
        />
        {" "}
        %, dans la limite de
        {" "}
        <ParameterValues
          editable
          path="impot_revenu.plafond_qf.abat_dom.plaf_GuyMay"
        />
        {" "}
        €, pour les contribuables domiciliés dans les départements de la
        Guyane et de Mayotte ;
      </Fragment>
    );
  }
}

const ConnectedComponent = connector(Alinea3);

export { ConnectedComponent as Alinea3 };
