import { connect } from "react-redux";

import { closeCurrentPopin } from "../../../redux/actions";
import { Connexion } from "./Connexion";

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  onClosePopin: () => dispatch(closeCurrentPopin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Connexion);
