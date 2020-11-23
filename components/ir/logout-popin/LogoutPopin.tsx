import ClassicalBuildingIcon from "@iconify/icons-twemoji/classical-building";
import PartyPopperIcon from "@iconify/icons-twemoji/party-popper";
import PeopleHoldingHandsIcon from "@iconify/icons-twemoji/people-holding-hands";
import { Icon } from "@iconify/react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { PureComponent } from "react";

import styles from './LogoutPopin.module.scss';

interface Props {
  fetchMetadataCasTypesHandler: () => void;
  onClosePopin: () => void;
}

class LogoutPopin extends PureComponent<Props> {
  componentDidMount() {
    const { fetchMetadataCasTypesHandler } = this.props;
    fetchMetadataCasTypesHandler();
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
          Vous êtes déconnecté de LexImpact IR&nbsp;
        </h1>
        <p className={styles.content}>
          Vous devez vous reconnecter afin de pouvoir à nouveau
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

export default LogoutPopin;
