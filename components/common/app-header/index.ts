import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";
import { compose } from "redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../redux/reducers";
import AppHeader from "./AppHeader";

const mapStateToProps = ({ token }: RootState, { width }) => {
  const useMobileView = width === "xs";
  const isUserLogged = Boolean(token || null);
  return { isUserLogged, useMobileView };
};

const mapDispatchToProps = null;

export default compose(
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(AppHeader);
