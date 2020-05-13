import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import PropTypes from "prop-types";
import { PureComponent } from "react";
import SwipeableViews from "react-swipeable-views";

import Articles from "../articles";
import ImpactCards from "../cartes-impact";
import InformationPanel from "../information-panel";
import SimulationMenuBar from "../simulation-menu";
import styles from "./reformeur-component.module.scss";

class ReformeurComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { indextab: 0 };
  }

  componentDidMount() {
    const { initializeAppllicationStoreFromAPI } = this.props;
    initializeAppllicationStoreFromAPI();
  }

  handleOnChangeIndex = (event, indextab) => {
    this.setState({ indextab });
  };

  renderDesktopView = () => {
    const { isInformationPanelVisible } = this.props;
    return (
      <div className={styles.container}>
        <Paper square className={styles.parameters}>
          <Articles />
        </Paper>
        <div className={styles.results}>
          <SimulationMenuBar />
          {isInformationPanelVisible && <InformationPanel />}
          <ImpactCards />
        </div>
      </div>
    );
  };

  renderMobileView = () => {
    const { indextab } = this.state;
    const { isInformationPanelVisible } = this.props;
    return (
      <div>
        <AppBar color="default" position="static">
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            value={indextab}
            variant="fullWidth"
            onChange={this.handleOnChangeIndex}>
            <Tab label="Loi" />
            <Tab label="Impacts" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis="x"
          index={indextab}
          onChangeIndex={this.handleOnChangeIndex}>
          <div style={{ padding: 24 }}>
            <Paper>
              <Articles />
            </Paper>
          </div>
          <div style={{ padding: 24 }}>
            <SimulationMenuBar />
            {isInformationPanelVisible && <InformationPanel />}
            <ImpactCards />
          </div>
        </SwipeableViews>
      </div>
    );
  };

  render() {
    const { useMobileView } = this.props;
    if (useMobileView) {
      return this.renderMobileView();
    }
    return this.renderDesktopView();
  }
}

ReformeurComponent.propTypes = {
  initializeAppllicationStoreFromAPI: PropTypes.func.isRequired,
  isInformationPanelVisible: PropTypes.bool.isRequired,
  useMobileView: PropTypes.bool.isRequired,
};

export default ReformeurComponent;
