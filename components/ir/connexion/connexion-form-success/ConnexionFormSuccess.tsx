import openMailboxWithRaisedFlag from "@iconify/icons-twemoji/open-mailbox-with-raised-flag";
import { Icon } from "@iconify/react";
import { withRouter } from "next/router";
import { PureComponent } from "react";

import styles from "./ConnexionFormSuccess.module.scss";

class ConnexionFormSuccess extends PureComponent<any> {
  render() {
    return (
      <div className={styles.text}>
        <Icon inline icon={openMailboxWithRaisedFlag} width="25" />
        <b>
          &nbsp;Nous venons juste de vous envoyer par mail un lien de
          confirmation.
        </b>
        <br />
        Cliquez sur le lien du courriel pour vous connecter.
      </div>
    );
  }
}

const exportedComponent = withRouter(ConnexionFormSuccess);

export { exportedComponent as ConnexionFormSuccess };
