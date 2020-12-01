import { connect } from "react-redux";

import {
  addTranche,
  removeTranche,
  updateReformeByName,
} from "../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../redux/reducers";
import { Articles } from "./Articles";

const mapStateToProps = ({ parameters }: RootState) => parameters;

const mapDispatchToProps = dispatch => ({
  handleAddTranche: () => {
    dispatch(addTranche());
  },

  handleArticleChange: (value: number, name: string) => {
    dispatch(updateReformeByName(name, value));
  },

  handleRemoveTranche: () => {
    dispatch(removeTranche());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);
