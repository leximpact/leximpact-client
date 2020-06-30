import { connect } from "react-redux";

import { removeCasType, showEditCasTypesPopin, simulateCasTypes } from "../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../redux/reducers";
import SimpleCard from "./simple-card-component";

const mapStateToProps = ({ casTypes, results }: RootState, { index }) => {
  const { isFetching, items } = results.casTypes;
  const { name } = casTypes[index];
  const descCasType = casTypes[index];
  const resultats = items[index];
  return {
    descCasType,
    isLoading: isFetching,
    name,
    resultats,
  };
};

const mapDispatchToProps = dispatch => ({
  handleRemoveCasType: index => () => {
    dispatch(removeCasType(index));
    dispatch(simulateCasTypes());
  },
  handleShowEditCasTypesPopin: index => () => dispatch(showEditCasTypesPopin(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleCard);
