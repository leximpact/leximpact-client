import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import { PureComponent } from "react";

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  fab: {
    color: "#FFFFFF",
    fontSize: 16,
    letterSpacing: "0.15px",
    marginTop: 24,
    width: 370,
    [theme.breakpoints.down("xs")]: {
      marginTop: 20,
      maxWidth: 180,
    },
  },
  fabDisabled: {
    backgroundColor: "rgba(225, 225, 225, 1) !important",
  },
});

interface Props {
  classes: any;
  disabled: boolean;
}

class SubmitButton extends PureComponent<Props> {
  render() {
    const { classes, disabled } = this.props;
    return (
      <div className={classes.container}>
        <Fab
          classes={{ disabled: classes.fabDisabled, root: classes.fab }}
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

export default withStyles(styles as any)(SubmitButton);
