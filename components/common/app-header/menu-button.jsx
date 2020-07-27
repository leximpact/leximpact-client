import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";

const styles = {
  button: {
    "&:hover": {
      color: "#FFFFFF",
    },
    backgroundColor: "#FFFFFF",
    color: "#646008",
    fontSize: "16px",
    textTransform: "uppercase",
  },
};

function HeaderMenuButton({ classes }) {
  return (
    <Button
      className={classes.button}
      color="primary"
      size="medium"
      variant="contained">
      <MenuIcon fontSize="small" />
      &nbsp;Info
    </Button>
  );
}

HeaderMenuButton.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(HeaderMenuButton);
