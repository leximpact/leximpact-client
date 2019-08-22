import { connect } from "react-redux";

import {
  fetchCalculateCompare,
  updateCasTypeOutreMer,
  updateRevenusAnnuelCasType,
} from "../../redux/actions";
import ImpactComponent from "./impact-component";

const mapStateToProps = ({ casTypes, resBrut, totalPop }) => ({
  casTypes,
  resBrut,
  totalPop,
});

const mapDispatchToProps = dispatch => ({
  changeRevenuHandler: (casTypeIndex, inputEvent) => {
    // apres selection du revenu dans la carte du cas type
    // on met a jour le revenu annuel pour ce cas type
    // dans le state de l'application
    const casTypeRevenuMensuel = Number(inputEvent.target.value);
    let action = updateRevenusAnnuelCasType(casTypeIndex, casTypeRevenuMensuel);
    dispatch(action);
    action = fetchCalculateCompare();
    dispatch(action);
  },
  handleOutreMerChange: (casTypeIndex, casTypeOutreMerIndex) => {
    let action = updateCasTypeOutreMer(casTypeIndex, casTypeOutreMerIndex);
    dispatch(action);
    action = fetchCalculateCompare();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImpactComponent);
