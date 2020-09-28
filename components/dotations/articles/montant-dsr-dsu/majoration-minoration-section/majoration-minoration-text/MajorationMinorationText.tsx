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
  amendement: {
    dsr: parameters.amendement.dotations.montants.dsr.variation,
    dsu: parameters.amendement.dotations.montants.dsu.variation,
  },
  plf: {
    dsr: parameters.plf.dotations.montants.dsr.variation,
    dsu: parameters.plf.dotations.montants.dsu.variation,
  },
});

const mapDispatchToProps = dispatch => ({
  removeVariation: () => {
    dispatch(updateParameter("dotations.montants.dsr.variation", 0));
    dispatch(updateParameter("dotations.montants.dsu.variation", 0));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


class MajorationMinorationText extends PureComponent<PropsFromRedux> {
  getMontantsText(dsr: number, dsu: number): string {
    // eslint-disable-next-line prefer-template
    return (this.isMajoration(dsr, dsu) ? "augmentent au moins" : "baissent")
      + (dsr !== dsu ? ", respectivement, de " : " de ")
      + this.inMillions(dsu)
      + (dsr !== dsu ? ` et de ${this.inMillions(dsr)}` : "")
      + " d'euros"
      + (dsr === dsu ? " chacun" : "");
  }

  isMajoration(dsr: number, dsu: number): boolean {
    return dsr > 0 || dsu > 0;
  }

  inMillions(n: number): string {
    return `${formatNumber(Math.sign(n) * n)} million${Math.abs(n) > 1 ? "s" : ""}`;
  }


  variationsHaveNotTheSameSign({ dsr, dsu }: { dsr: number, dsu: number }): boolean {
    return (dsr > 0 && dsu < 0) || (dsu > 0 && dsr < 0);
  }

  render() {
    const { amendement, plf, removeVariation } = this.props;
    const plfHasVariations = plf.dsr !== 0 || plf.dsu !== 0;
    const amendementHasVariations = amendement.dsr !== 0 || amendement.dsu !== 0;
    const plfAndAmendementAreDifferent = (plf.dsr !== amendement.dsr)
      || (plf.dsu !== amendement.dsu);

    return (
      <div>
        {
          (this.variationsHaveNotTheSameSign(amendement) || this.variationsHaveNotTheSameSign(plf))
            && (
              <strong>
                Une erreur est survenue. Merci de rafraîchir la page
                et de contacter leximpact@an.fr.
              </strong>
            )
        }
        {
          (plfHasVariations || amendementHasVariations) && (
            <span className={classNames({
              [styles.plfValue]: plfHasVariations,
              [styles.amendementValue]: !plfHasVariations,
              [styles.replacedWithAmendement]: !amendementHasVariations,
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
          plfHasVariations && (
            <span className={classNames({
              [styles.plfValue]: true,
              [styles.replacedWithAmendement]: plfAndAmendementAreDifferent,
              [styles.bold]: true,
            })}>
              {this.getMontantsText(plf.dsr, plf.dsu)}
            </span>
          )
        }
        {
          amendementHasVariations && plfAndAmendementAreDifferent && (
            <span className={classNames({
              [styles.amendementValue]: true,
              [styles.bold]: true,
            })}>
              {" "}
              {this.getMontantsText(amendement.dsr, amendement.dsu)}
            </span>
          )
        }
        {
          (plfHasVariations || amendementHasVariations) && (
            <span className={classNames({
              [styles.plfValue]: plfHasVariations,
              [styles.amendementValue]: !plfHasVariations,
              [styles.replacedWithAmendement]: !amendementHasVariations,
            })}>
              {" "}
              par rapport aux montants mis en répartition en 2020.
            </span>
          )
        }
        {
          plfHasVariations && this.isMajoration(plf.dsr, plf.dsu) && (
            <span className={classNames({
              [styles.plfValue]: true,
              [styles.replacedWithAmendement]: !this.isMajoration(amendement.dsr, amendement.dsu),
            })}>
              {" "}
              Cette augmentation est financée par les minorations prévues
              à l&apos;article L. 2334-7-1.
            </span>
          )
        }
        {
          amendementHasVariations
            && !this.isMajoration(plf.dsr, plf.dsu)
            && this.isMajoration(amendement.dsr, amendement.dsu)
            && (
              <span className={classNames({
                [styles.amendementValue]: true,
              })}>
                {" "}
                Cette augmentation est financée par les minorations prévues
                à l&apos;article L. 2334-7-1.
              </span>
            )
        }
        {
          amendementHasVariations && (
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
