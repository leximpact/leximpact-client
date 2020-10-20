import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FaceIcon from "@material-ui/icons/Face";
import { flow } from "lodash";
import Head from "next/head";
import { withRouter } from "next/router";
import { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { Matomo, SimulationPage } from "../components/common";
import { trackEvent } from "../components/common";
import { Articles, CartesImpact as ImpactCards } from "../components/ir";
import PopinManager from "../components/PopinManager";
import withRoot from "../lib/withRoot";
import {
  disabledEtat, fetchMetadataCasTypes,
  fetchSimPop, showAddCasTypesPopin, simulateCasTypes,
} from "../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../redux/reducers";

const mapStateToProps = ({ token }: RootState) => ({
  isUserLogged: !!token,
});

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(fetchMetadataCasTypes()).then(() => dispatch(simulateCasTypes())),
  showAddCasTypesPopin: () => dispatch(showAddCasTypesPopin()),
  simulateCasTypes: () => {
    dispatch(simulateCasTypes());
    dispatch(disabledEtat());
    trackEvent("ir", "click estimer", "simule avec cas types");
  },
  simulatePopulation: () => {
    dispatch(fetchSimPop());
    dispatch(simulateCasTypes());
    trackEvent("ir", "click estimer", "simule avec cas types et population");
  },
});

const populationIcon = (
  <Fragment>
    <AccountBalanceIcon />
    <FaceIcon />
  </Fragment>
);

const casTypesIcon = <FaceIcon />;

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {

}

class IRPage extends PureComponent<Props> {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  render() {
    const {
      // eslint-disable-next-line no-shadow
      isUserLogged, showAddCasTypesPopin, simulateCasTypes, simulatePopulation,
    } = this.props;

    const primaryButtons = [
      {
        caption: "ESTIMER ~5''",
        icon: casTypesIcon,
        mobileCaption: "ESTIMER",
        mobileIcon: casTypesIcon,
        onClick: simulateCasTypes,
      },
    ];

    if (isUserLogged) {
      primaryButtons.push({
        caption: "ESTIMER ~60''",
        icon: populationIcon,
        mobileCaption: "ESTIMER",
        mobileIcon: populationIcon,
        onClick: simulatePopulation,
      });
    }

    return (
      <Fragment>
        <Head>
          <title>LexImpact - Impôt sur le revenu</title>
          <Matomo />
        </Head>
        <SimulationPage
          showLoginButton
          parameters={<Articles />}
          primaryButtons={primaryButtons}
          results={<ImpactCards />}
          secondaryButtons={[
            {
              caption: "Ajouter un cas type",
              mobileCaption: "Cas type",
              mobileIcon: <AddCircleOutlineIcon />,
              onClick: showAddCasTypesPopin,
            },
          ]}
          subTitle1="IMPÔT SUR"
          subTitle2="LE REVENU"
          title="IR"
          topic="impot_revenu"
        />
        <PopinManager />
      </Fragment>
    );
  }
}

export default flow(
  withRouter,
  withRoot,
  connector,
)(IRPage);
