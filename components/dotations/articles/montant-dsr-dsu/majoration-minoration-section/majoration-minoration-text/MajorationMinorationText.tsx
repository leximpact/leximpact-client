import DeleteIcon from "@material-ui/icons/Delete";
import classNames from "classnames";
import { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { updateParameter } from "../../../../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../../../redux/reducers";
import { formatNumber } from "../../../../../common";
import { Button } from "../../../../../ir/articles/buttons";
import styles from "./MajorationMinorationText.module.scss";

const mapStateToProps = ({ parameters }: RootState) => ({
  amendement: parameters.amendement.dotations.montants.dsrAndDsu.variation,
  plf: parameters.plf.dotations.montants.dsrAndDsu.variation,
});

const mapDispatchToProps = dispatch => ({
  removeVariation: () => dispatch(
    updateParameter("dotations.montants.dsrAndDsu.variation", 0),
  ),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


class MajorationMinorationText extends PureComponent<PropsFromRedux> {
  render() {
    const { amendement, plf, removeVariation } = this.props;
    return (
      <div>
        {
          (plf !== 0 || amendement !== 0) && (
            <span className={classNames({
              [styles.plfValue]: plf !== 0,
              [styles.amendementValue]: plf === 0,
              [styles.replacedWithAmendement]: amendement === 0,
            })}>
              <br />
              <span className={styles.bold}>
                En 2021,
              </span>
              {" "}
              les montants mis en répartition au titre de la dotation
              de solidarité urbaine et de cohésion sociale et de la dotation
              de solidarité rurale
              {" "}
            </span>
          )
        }
        {
          plf !== 0 && (
            <span className={classNames({
              [styles.plfValue]: true,
              [styles.replacedWithAmendement]: amendement !== plf,
              [styles.bold]: true,
            })}>
              {plf > 0 ? "augmentent au moins" : "baissent"}
              {" "}
              de
              {" "}
              {formatNumber(Math.sign(plf) * plf)}
              {" "}
              million
              {Math.abs(plf) > 1 ? "s" : ""}
              {" "}
              d&apos;euros
            </span>
          )
        }
        {
          amendement !== 0 && plf !== amendement && (
            <span className={classNames({
              [styles.amendementValue]: true,
              [styles.bold]: true,
            })}>
              {" "}
              {amendement > 0 ? "augmentent au moins" : "baissent"}
              {" "}
              de
              {" "}
              {formatNumber(Math.sign(amendement) * amendement)}
              {" "}
              million
              {Math.abs(amendement) > 1 ? "s" : ""}
              {" "}
              d&apos;euros
            </span>
          )
        }
        {
          (plf !== 0 || amendement !== 0) && (
            <span className={classNames({
              [styles.plfValue]: plf !== 0,
              [styles.amendementValue]: plf === 0,
              [styles.replacedWithAmendement]: amendement === 0,
            })}>
              {" "}
              chacun par rapport aux montants mis en répartition en 2020.
            </span>
          )
        }
        {
          amendement !== 0 && (
            <Fragment>
              <br />
              <br />
              <Button
                caption="Retirer ou modifier cette majoration/minoration"
                icons={<DeleteIcon />}
                onClick={removeVariation}
              />
            </Fragment>
          )
        }
      </div>
    );
  }
}

const Component = connector(MajorationMinorationText);

export { Component as MajorationMinorationText };