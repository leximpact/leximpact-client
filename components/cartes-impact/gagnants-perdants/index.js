import { connect } from "react-redux";

import { fetchCalculateCompare, fetchSimPop } from "../../../redux/actions";
import GagnantsPerdantsCard from "./gagnants-perdants-component";

const mapStateToProps = ({ loadingEtat, totalPop }) => {
  const isLoadingEtat = loadingEtat === "loading";
  const isDisabledEtat = loadingEtat === "disabled";
  const { foyersFiscauxTouches } = totalPop;
  return {
    foyersFiscauxTouches,
    isDisabledEtat,
    isLoadingEtat,
  };
};

const mapDispatchToProps = dispatch => ({
  onClickSimPop: () => {
    dispatch(fetchSimPop());
    dispatch(fetchCalculateCompare());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GagnantsPerdantsCard);
