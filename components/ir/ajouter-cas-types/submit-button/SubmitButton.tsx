import Fab from "@material-ui/core/Fab";
import { PureComponent } from "react";

import styles from "./SubmitButton.module.scss";

interface Props {
  disabled: boolean;
}

export class SubmitButton extends PureComponent<Props> {
  render() {
    const { disabled } = this.props;
    return (
      <div className={styles.container}>
        <Fab
          classes={{ disabled: styles.fabDisabled, root: styles.fab }}
          color="secondary"
          disabled={disabled}
          type="submit"
          variant="extended">
          <span>Continuer</span>
        </Fab>
      </div>
    );
  }
}
