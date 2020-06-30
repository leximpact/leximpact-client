import { connect } from "react-redux";

import { simulateCasTypes, simulatePopulation } from "../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../redux/reducers";
import GagnantsPerdantsCard from "./gagnants-perdants-component";

const mapStateToProps = ({ loadingEtat, results }: RootState) => {
  const isLoadingEtat = loadingEtat === "loading";
  const isDisabledEtat = loadingEtat === "disabled";
  const { foyersFiscauxTouches } = results.totalPop;
  return {
    foyersFiscauxTouches,
    isDisabledEtat,
    isLoadingEtat,
  };
};

const mapDispatchToProps = dispatch => ({
  onClickSimPop: () => {
    dispatch(simulatePopulation());
    dispatch(simulateCasTypes());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GagnantsPerdantsCard);
