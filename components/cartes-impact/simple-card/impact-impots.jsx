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

    const DiffAmendPLF = (-resultats.apres + resultats.avant > 0 ? "+" : "-")
      + formatNumber(Math.round(Math.abs(-resultats.apres + resultats.plf)));
    const DiffPlFCodeEx = (-resultats.plf + resultats.avant > 0 ? "+" : "-")
      + formatNumber(Math.round(Math.abs(-resultats.plf + resultats.avant)));

    const plfTitle = (
      <Fragment>
        {"Avec le PLF, ce foyer doit "}
        <b>{`${DiffPlFCodeEx}€`}</b>
        {" d'impôts/an qu'avec le code existant"}
      </Fragment>
    );
    const amendementTitle = resultats.plf !== null ? (
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
