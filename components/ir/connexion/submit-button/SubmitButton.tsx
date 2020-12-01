import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import { PureComponent } from "react";

import styles from "./SubmitButton.module.scss";

interface Props {
  disabled: boolean;
  isLoading: boolean;
}

export class SubmitButton extends PureComponent<Props> {
  render() {
    const { disabled, isLoading } = this.props;
    return (
      <div className={styles.container}>
        {!isLoading && (
          <Fab
            classes={{ disabled: styles.fabDisabled, root: styles.fab }}
            color="secondary"
            disabled={disabled}
            type="submit"
            variant="extended">
            <span>Continuer</span>
          </Fab>
        )}
        {isLoading && (
          <CircularProgress
            classes={{ root: styles.circularProgress }}
            color="secondary"
          />
        )}
      </div>
    );
  }
}
