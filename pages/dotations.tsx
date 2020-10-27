import HomeIcon from "@material-ui/icons/Home";
import { flow } from "lodash";
import Head from "next/head";
import { withRouter } from "next/router";
import { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { SimulationPage, Matomo, trackEvent } from "../components/common";
import {
  Articles,
  DfHelpWindow,
  DfMontantHelpWindow,
  DsrHelpWindow,
  DsuHelpWindow,
  MontantsDsrHelpWindow,
  PotentielFinancierHelpWindow,
  Results,
  TrendHelpWindow,
} from "../components/dotations";
import PopinManager from "../components/PopinManager";
import withRoot from "../lib/withRoot";
import { initCommunesTypes, initFakePlf, simulateDotations } from "../redux/actions";

const mapDispatchToProps = dispatch => ({
  addCommunesTypes: () => dispatch(initCommunesTypes()),
  addFakePlf: () => dispatch(initFakePlf()),
  simulate: () => {
    dispatch(simulateDotations());
    trackEvent("dotations", "click estimer", "simule avec communes types et strates");
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class DotationPage extends PureComponent<PropsFromRedux> {
  componentDidMount() {
    const { addCommunesTypes, addFakePlf, simulate } = this.props;
    const url = new URLSearchParams(window.location.search);
    if (url.has("fauxplf")) {
      addFakePlf();
    }
    addCommunesTypes();
    simulate();
  }

  render() {
    const { simulate } = this.props;
    return (
      <Fragment>
        <Head>
          <title>LexImpact - Dotations aux communes</title>
          <Matomo />
        </Head>
        <SimulationPage
          parameters={<Articles />}
          primaryButtons={[
            {
              caption: "Estimer",
              icon: <HomeIcon />,
              mobileCaption: "Estimer",
              mobileIcon: <HomeIcon />,
              onClick: simulate,
            },
          ]}
          results={<Results />}
          secondaryButtons={[]}
          showLoginButton={false}
          subTitle1="Dotations"
          subTitle2="Communes"
          title="DGF"
          topic="dotations"
        />
        <PopinManager />
        <DfHelpWindow />
        <DfMontantHelpWindow />
        <DsrHelpWindow />
        <DsuHelpWindow />
        <MontantsDsrHelpWindow />
        <PotentielFinancierHelpWindow />
        <TrendHelpWindow />
      </Fragment>
    );
  }
}

export default flow(
  withRouter,
  withRoot,
  connector,
)(DotationPage);
