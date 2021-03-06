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
      casType: descriptions.ir.casTypes[index],
    };
  }
  return {
    casType: {
      declarants: [
        {
          ancienCombattant: false,
          gender: Math.random() < 0.49 ? "male" : "female",
          invalide: false,
          parentIsole: false,
          retraite: false,
          veuf: false,
        },
      ],
      name: "Foyer fiscal type",
      personnesACharge: [],
      residence: "metropole",
      revenuImposable: 1200 * 12,
    },
  };
};

const mapDispatchToProps = (dispatch, { index }) => ({
  onFormSubmitHandler: (casType: CasType) => {
    // The select component converts numbers into strings.
    if (typeof casType.revenuImposable === "string") {
      // eslint-disable-next-line no-param-reassign
      casType.revenuImposable = Number(casType.revenuImposable);
    }

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
