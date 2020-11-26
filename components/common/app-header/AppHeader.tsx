import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { PureComponent } from "react";

import styles from "./AppHeader.module.scss";
import LoginButton from "./login-button";
import HeaderMenuButton from "./menu-button";

interface Props {
  isUserLogged: boolean;
  showHomeButton?: boolean;
  showLoginButton: boolean;
  subTitle1?: string;
  subTitle2?: string;
  title?: string;
  useMobileView: boolean;
}

class AppHeader extends PureComponent<Props> {
  render() {
    const {
      isUserLogged, showLoginButton,
      subTitle1, subTitle2, title, useMobileView,
    } = this.props;

    let { showHomeButton } = this.props;
    showHomeButton = showHomeButton ?? true;

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

export default AppHeader;
