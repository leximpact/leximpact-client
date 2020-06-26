import { connect } from "react-redux";

import ImpactComponent from "./impact-component";
import { RootState } from "../../types";

const mapStateToProps = ({
  casTypes,
  display,
  token,
  results,
}: RootState) => {
  const isUserLogged = Boolean(token);
  return {
    casTypes,
    isInformationPanelVisible: display.isInformationPanelVisible,
    isUserLogged,
    totalPop: results.totalPop,
  };
};

export default connect(mapStateToProps)(ImpactComponent);
