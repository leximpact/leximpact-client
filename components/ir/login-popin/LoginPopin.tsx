import ClassicalBuildingIcon from "@iconify/icons-twemoji/classical-building";
import PartyPopperIcon from "@iconify/icons-twemoji/party-popper";
import PeopleHoldingHandsIcon from "@iconify/icons-twemoji/people-holding-hands";
import { Icon } from "@iconify/react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { PureComponent } from "react";

import styles from "./LoginPopin.module.scss";

interface Props {
  handleUpdateConnexionToken: (token: string) => any;
  onClosePopin: () => any;
  token?: string;
}

export class LoginPopin extends PureComponent<Props> {
  componentDidMount() {
    const { handleUpdateConnexionToken, token } = this.props;
    if (!token) return;
    handleUpdateConnexionToken(token);
  }

  render() {
    const { onClosePopin } = this.props;
    return (
      <div>
        <IconButton className={styles.closeButton} onClick={onClosePopin}>
          <CloseIcon fontSize="small" />
        </IconButton>
        <h1 className={styles.title}>
          <Icon inline icon={PartyPopperIcon} width="40" />
          &nbsp;Vous êtes bien connecté à LexImpact IR&nbsp;
        </h1>
        <p className={styles.text}>
          Vous pouvez désormais
          <b>&nbsp;simuler les impacts macros&nbsp;</b>
          d’une réforme
          <br />
          sur la population&nbsp;
          <Icon inline icon={PeopleHoldingHandsIcon} width="25" />
          &nbsp;et les recettes de l’État&nbsp;
          <Icon inline icon={ClassicalBuildingIcon} width="25" />
          <span>.</span>
        </p>
      </div>
    );
  }
}
