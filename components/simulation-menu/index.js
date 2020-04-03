import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";
import { compose } from "redux";

import { showAddCasTypesPopin } from "../../redux/actions";
import SimulationMenuBarComponent from "./simulation-menubar-component";


const mapStateToProps = ({ token }, { width }) => {
  const isUserLogged = Boolean(token);
  const isMobileView = width === "xs" || width === "sm" || width === "md";
  return {
    isMobileView,
    isUserLogged,
  };
};

const mapDispatchToProps = dispatch => ({
  showAddCasTypesPopin: () => dispatch(showAddCasTypesPopin()),
});

export default compose(
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(SimulationMenuBarComponent);
