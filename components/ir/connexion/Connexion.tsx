import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import VPNKeyIcon from "@material-ui/icons/VpnKey";
import { FORM_ERROR } from "final-form";
import { PureComponent } from "react";

import request from "../../common/utils/request";
import ConnexionForm from "./connexion-form";
import { ConnexionFormSuccess } from "./connexion-form-success";
import styles from "./Connexion.module.scss";
import { MentionsLegales } from "./form/mentions-legales";
import { parseFormValuesUserEmail } from "./utils";

interface Props {
  onClosePopin: () => any;
}

interface State {
  hasBeenSubmitWithSuccess: boolean;
  isLoading: boolean;
}

export class Connexion extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = { hasBeenSubmitWithSuccess: false, isLoading: false };
  }

  handleFormSubmitFail = (message) => {
    this.setState({ isLoading: false });
    return { [FORM_ERROR]: message };
  };

  handleFormSubmitSuccess = (payload) => {
    this.setState({ hasBeenSubmitWithSuccess: payload, isLoading: false });
    return {};
  };

  handleFormSubmit = (formValues) => {
    this.setState({ isLoading: true });
    const email = parseFormValuesUserEmail(formValues);
    return request
      .post("/auth/login", { email })
      .then(this.handleFormSubmitSuccess)
      .catch(this.handleFormSubmitFail);
  };

  renderConnexionSuccess = () => {
    const { hasBeenSubmitWithSuccess } = this.state;
    if (!hasBeenSubmitWithSuccess) return null;
    return <ConnexionFormSuccess message={hasBeenSubmitWithSuccess} />;
  };

  renderConnexionForm = () => {
    const { hasBeenSubmitWithSuccess, isLoading } = this.state;
    if (hasBeenSubmitWithSuccess) return null;
    return (
      <ConnexionForm
        handleFormSubmit={this.handleFormSubmit}
        isLoading={isLoading}
      />
    );
  };

  render() {
    const { onClosePopin } = this.props;
    return (
      <div>
        <IconButton
          classes={{ root: styles.closeButton }}
          onClick={onClosePopin}>
          <CloseIcon fontSize="small" />
        </IconButton>
        <div className={styles.avatarContainer}>
          <Avatar classes={{ root: styles.avatar }}>
            <VPNKeyIcon classes={{ root: styles.avatarIcon }} />
          </Avatar>
        </div>
        <Typography classes={{ root: styles.title }}>
          <span className={styles.spanLeximpactLigther}>CONNEXION</span>
        </Typography>
        {this.renderConnexionForm()}
        {this.renderConnexionSuccess()}
        <MentionsLegales />
      </div>
    );
  }
}
