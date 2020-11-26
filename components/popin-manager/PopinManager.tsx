import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { get } from "lodash";
import { withRouter } from "next/router";
import { Fragment, PureComponent } from "react";

import { closeCurrentPopin } from "../../redux/actions";
import { LoginPopin, LogoutPopin } from "../ir";
import AjouterCasTypes from "../ir/ajouter-cas-types";
import LoginForm from "../ir/connexion";
import styles from "./PopinManager.module.scss";

interface Props {
  router: any;
}

class PopinManager extends PureComponent<Props> {
  renderConnexion = (popinType) => {
    const showPopin = popinType === "connection";
    return (
      <Dialog
        classes={{ paper: styles.dialogPaper, root: styles.dialog }}
        open={showPopin}
        onClose={closeCurrentPopin}>
        <DialogContent classes={{ root: styles.dialogContent }}>
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  };

  renderAjouterCasTypes = (popinType) => {
    const { router } = this.props;
    const paperClass = `${styles.dialogPaper} ${styles.dialogPaperCasTypes}`;
    const showPopin = popinType === "ajouter-cas-types";
    const pathString = "query.index";
    const routerIndex = get(router, pathString, -1);
    const index = Number(routerIndex);
    return (
      <Dialog
        classes={{ paper: paperClass, root: styles.dialog }}
        open={showPopin}
        onClose={closeCurrentPopin}>
        <DialogContent classes={{ root: styles.dialogContentCasTypes }}>
          <AjouterCasTypes index={index} onClosePopin={closeCurrentPopin} />
        </DialogContent>
      </Dialog>
    );
  };

  renderLoginpopin = (popinType) => {
    const showPopin = popinType === "confirmation-connexion";
    return (
      <Dialog
        classes={{ paper: styles.dialogPaper, root: styles.dialog }}
        open={showPopin}
        onClose={closeCurrentPopin}>
        <DialogContent>
          <LoginPopin />
        </DialogContent>
      </Dialog>
    );
  };

  renderLogoutPopin = (popinType) => {
    const showPopin = popinType === "logout";
    return (
      <Dialog
        classes={{ paper: styles.dialogPaper, root: styles.dialog }}
        open={showPopin}
        onClose={closeCurrentPopin}>
        <DialogContent>
          <LogoutPopin />
        </DialogContent>
      </Dialog>
    );
  };

  render() {
    const { router } = this.props;
    const pathString = "query.popin";
    const popinType = get(router, pathString, false);
    return (
      <Fragment>
        {this.renderConnexion(popinType)}
        {this.renderLoginpopin(popinType)}
        {this.renderAjouterCasTypes(popinType)}
        {this.renderLogoutPopin(popinType)}
      </Fragment>
    );
  }
}

export default withRouter(PopinManager);
