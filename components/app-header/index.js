import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";
import { compose } from "redux";

import AppHeaderComponent from "./app-header-component";

const mapStateToProps = (state, { width }) => {
  const useMobileView = width === "xs";
  const isUserConnected = Boolean(state.token || null);
  return { isUserConnected, useMobileView };
};

const mapDispatchToProps = null;

export default compose(
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(AppHeaderComponent);
