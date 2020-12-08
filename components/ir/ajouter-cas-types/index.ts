import { connect } from "react-redux";

import {
  addCasType,
  closeCurrentPopin,
  simulateCasTypes,
  updateCasType,
} from "../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../redux/reducers";
// eslint-disable-next-line no-unused-vars
import { CasType } from "../../../redux/reducers/descriptions/ir";
import { AjouterCasTypes } from "./AjouterCasTypes";

const mapStateToProps = ({ descriptions }: RootState, { index }): { casType: CasType } => {
  if (index >= 0) {
    return {
      casType: descriptions.ir.casTypes[index]
    };
  }
  return {
    casType: {
      residence: 'metropole',
      name: "Foyer fiscal type",
      personnesACharge: [],
      declarants: [
        {
          ancienCombattant: false,
          gender: Math.random() < 0.49 ? 'male' : 'female',
          invalide: false,
          parentIsole: false,
          retraite: false,
          veuf: false
        }
      ],
      revenuImposable: 1200,
    }
  }
};

const mapDispatchToProps = (dispatch, { index }) => ({
  onFormSubmitHandler: (casType: CasType) => {
    if (index >= 0) {
      dispatch(updateCasType(index, casType));
    } else {
      dispatch(addCasType(casType));
    }
    dispatch(closeCurrentPopin());
    dispatch(simulateCasTypes());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AjouterCasTypes);
