import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import LoginButton from "./login-button";
import HeaderMenuButton from "./menu-button";

import styles from "./AppHeader.module.scss";

class AppHeader extends PureComponent {
  render() {
    const {
      isUserLogged, showHomeButton, showLoginButton,
      subTitle1, subTitle2, title, useMobileView,
    } = this.props;
    return (
      <AppBar position="relative">
        <Toolbar classes={{ root: styles.toolbarRoot }}>
          {showHomeButton && <HeaderMenuButton isMobile={useMobileView} />}
          {!showHomeButton && <div />}
          {!useMobileView && (
            <Typography classes={{ root: styles.titleRoot }} component="div">
              <div>
                <div className={styles.lighterTitle}>LEXIMPACT&nbsp;</div>
                {title && <div className={styles.bolderTitle}>{title}</div>}
                {subTitle1 && (
                  <div className={styles.subTitle}>
                    {subTitle1}
                    <br />
                    {subTitle2}
                  </div>
                )}
              </div>
            </Typography>
          )}
          {useMobileView && (
            <Typography classes={{ root: styles.titleRoot }} component="div">
              <span>
                <span className={styles.lighterMobileTitle}>
                  LEXIMPACT&nbsp;
                </span>
                {title && <span className={styles.bolderMobileTitle}>{title}</span>}
              </span>
            </Typography>
          )}
          {showLoginButton && <LoginButton isMobile={useMobileView} isUserLogged={isUserLogged} />}
          {!showLoginButton && <div />}
        </Toolbar>
      </AppBar>
    );
  }
}

AppHeader.defaultProps = {
  showHomeButton: true,
  subTitle1: null,
  subTitle2: null,
  title: null,
};

AppHeader.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
  showHomeButton: PropTypes.bool,
  showLoginButton: PropTypes.bool.isRequired,
  subTitle1: PropTypes.string,
  subTitle2: PropTypes.string,
  title: PropTypes.string,
  useMobileView: PropTypes.bool.isRequired,
};

export default AppHeader;
