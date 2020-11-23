import Grid from "@material-ui/core/Grid";
import withWidth from "@material-ui/core/withWidth";
import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";
import { compose } from "redux";

import { Button } from "./button";
import { Legende } from "./legende";
import styles from "./SimulationMenuBar.module.scss";

const mapStateToProps = ({ parameters }, { width }) => {
  const isMobileView = width === "xs" || width === "sm" || width === "md";
  const montrerPLF = !!parameters.plf;
  return {
    isMobileView,
    montrerPLF,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  primaryButtons: {
    onClick: () => void;
    icon?: JSX.Element;
    caption: string;
    mobileCaption: string;
    mobileIcon?: JSX.Element;
  }[],
  secondaryButtons: {
    onClick: () => void;
    icon?: JSX.Element;
    caption: string;
    mobileCaption: string;
    mobileIcon?: JSX.Element;
  }[],
}

class SimulationMenuBar extends PureComponent<Props> {
  render() {
    const {
      isMobileView,
      montrerPLF,
      primaryButtons,
      secondaryButtons,
    } = this.props;
    return (
      <Grid
        container
        alignItems="center"
        className={styles.container}
        justify="space-between"
        spacing={1}>
        <Grid item>
          <Legende montrerPLF={montrerPLF} />
        </Grid>
        <Grid item>
          <Grid
            container
            alignItems="center"
            spacing={1}>
            <Grid item>
              <Grid
                container
                alignItems="center"
                spacing={1}>
                {
                  secondaryButtons.map((button, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Grid key={index} item>
                      <Button
                        caption={button.caption}
                        icon={button.icon}
                        isMobileView={isMobileView}
                        mobileCaption={button.mobileCaption}
                        mobileIcon={button.mobileIcon}
                        type="secondary"
                        onClick={button.onClick} />
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                alignItems="center"
                spacing={1}>
                {
                  primaryButtons.map((button, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Grid key={index} item>
                      <Button
                        caption={button.caption}
                        icon={button.icon}
                        isMobileView={isMobileView}
                        mobileCaption={button.mobileCaption}
                        mobileIcon={button.mobileIcon}
                        type="primary"
                        onClick={button.onClick} />
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const ConnectedSimulationMenuBar = compose(
  withWidth(),
  connector,
)(SimulationMenuBar);

export { ConnectedSimulationMenuBar as SimulationMenuBar };
