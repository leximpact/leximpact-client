import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";

import { Parameter } from "../../articles-inputs/parameter";
import { formatNumber } from "../../utils";
import styles2 from "./impact-impots.module.scss";

const styles = () => ({
  container: {
    padding: 15,
    paddingTop: 5,
  },
});

class SimpleCardImpactImpots extends PureComponent {
  render() {
    const { classes, isLoading, resultats } = this.props;

    const DiffAmendPLF = formatNumber(
      resultats.ir.amendement - resultats.ir.plf,
      { sign: true },
    );
    const DiffPlFCodeEx = formatNumber(
      resultats.ir.plf - resultats.ir.base,
      { sign: true },
    );

    const plfTitle = (resultats.ir.plf !== null && resultats.ir.plf !== undefined) ? (
      <Fragment>
        {"Avec le PLF, ce foyer doit "}
        <b>{`${DiffPlFCodeEx}€`}</b>
        {" d'impôts/an qu'avec le code existant"}
      </Fragment>
    ) : null;
    const amendementTitle = (resultats.ir.plf !== null && resultats.ir.plf !== undefined) ? (
      <Fragment>
        {"Avec mon amendement, ce foyer doit "}
        <b>{`${DiffAmendPLF}€`}</b>
        {" d'impôts/an qu'avec le PLF 2020"}
      </Fragment>
    ) : null;

    return (
      <div className={classes.container}>
        <div className={styles2.container}>
          <div>
            <div className={styles2.legende}>Impôt sur le revenu par an</div>
            {
              isLoading
                ? <CircularProgress color="secondary" />
                : (
                  <div className={styles2.result}>
                    <Parameter
                      amendementTitle={amendementTitle}
                      amendementValue={resultats.ir.amendement}
                      baseValue={resultats.ir.base}
                      editable={false}
                      plfTitle={plfTitle}
                      plfValue={resultats.ir.plf} />
                    €
                  </div>
                )
            }
          </div>
          <div>
            <div className={styles2.legende}>Nbre de parts</div>
            <div className={styles2.part}>
              <div>
                {resultats.nbreParts.base}
              </div>
              <div className={styles2.amendement}>
                {resultats.nbreParts.amendement}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SimpleCardImpactImpots.propTypes = {
  classes: PropTypes.shape().isRequired,
  isLoading: PropTypes.bool.isRequired,
  resultats: PropTypes.shape().isRequired,
};

export default withStyles(styles)(SimpleCardImpactImpots);
