import classicalBuilding from "@iconify/icons-twemoji/classical-building";
import { Icon } from "@iconify/react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CachedIcon from "@material-ui/icons/Cached";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FaceIcon from "@material-ui/icons/Face";
import classNames from "classnames";
import { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { fetchSimPop, simulateCasTypes } from "../../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../redux/reducers";
import { Card } from "../../../common";
import BarChart from "./bar-chart";
import styles from "./CarteEtat.module.scss";
import { SimpopTableurInfosDeciles } from "./simpop-tableur-infos-deciles";

function inBillions(value: number): number {
  return Math.round(value / 100000000) / 10;
}

const mapStateToProps = ({ loadingEtat, results }: RootState) => {
  const isLoadingEtat = loadingEtat === "loading";
  const isDisabledEtat = loadingEtat === "disabled";
  const { deciles, frontieresDeciles, total } = results.totalPop;
  return {
    deciles,
    frontieresDeciles,
    isDisabledEtat,
    isLoadingEtat,
    total,
  };
};

const mapDispatchToProps = dispatch => ({
  onClickSimPop: () => {
    dispatch(fetchSimPop());
    dispatch(simulateCasTypes());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class CarteEtat extends PureComponent<PropsFromRedux> {
  render() {
    const {
      deciles,
      frontieresDeciles,
      isDisabledEtat,
      isLoadingEtat,
      onClickSimPop,
      total,
    } = this.props;
    const { apres, avant, plf } = total;

    const montrerPLF = typeof plf === "number";

    const totalAvant = inBillions(avant);
    const totalApres = typeof apres === "number" ? inBillions(apres) : null;
    const totalPLF = typeof plf === "number" ? inBillions(plf) : null;
    return (
      <Card
        content1={(
          <Fragment>
            {isDisabledEtat && (
              <div>
                <div className={`${styles.buttonPosition} ${styles.center}`}>
                  <Button
                    color="secondary"
                    size="medium"
                    variant="outlined"
                    onClick={onClickSimPop}>
                    <AccountBalanceIcon />
                    <FaceIcon className={styles.marginIcon} />
                    &nbsp;Estimer ~60&quot;
                    <CachedIcon className={styles.miniIcon} />
                  </Button>
                </div>
              </div>
            )}
            {!isDisabledEtat && isLoadingEtat && (
              <div className={`${styles.buttonPosition} ${styles.center}`}>
                <CircularProgress color="secondary" />
              </div>
            )}
            {!isDisabledEtat && !isLoadingEtat && (
              <div>
                <div className={styles.chartWrapper}>
                  <div className={styles.mainChart}>
                    <BarChart deciles={deciles} />
                  </div>
                  <div className={styles.simpop}>
                    <div className={classNames({
                      [styles.montantImpots]: true,
                      [styles.noPLF]: !montrerPLF,
                    })}>
                      <Typography
                        className={classNames({
                          [styles.impotEtat]: true,
                          [styles.avant]: true,
                        })}>
                        {totalAvant}
                      </Typography>
                      <Typography
                        className={classNames({
                          [styles.uniteImpotEtat]: true,
                          [styles.avant]: true,
                        })}>
                        Md€*
                      </Typography>
                    </div>
                    {
                      montrerPLF
                        ? (
                          <div className={classNames({
                            [styles.montantImpots]: true,
                            [styles.noPLF]: !montrerPLF,
                          })}>
                            <Typography
                              className={classNames({
                                [styles.impotEtat]: true,
                                [styles.plf]: true,
                              })}>
                              {totalPLF}
                            </Typography>
                            <Typography
                              className={classNames({
                                [styles.uniteImpotEtat]: true,
                                [styles.plf]: true,
                              })}>
                              Md€*
                            </Typography>
                          </div>
                        )
                        : null
                    }
                    {
                      totalApres !== null ? (
                        <div className={classNames({
                          [styles.montantImpots]: true,
                          [styles.noPLF]: !montrerPLF,
                        })}>
                          <Typography
                            className={classNames({
                              [styles.impotEtat]: true,
                              [styles.apres]: true,
                            })}>
                            {totalApres}
                          </Typography>
                          <Typography
                            className={classNames({
                              [styles.uniteImpotEtat]: true,
                              [styles.apres]: true,
                            })}>
                                Md€*
                          </Typography>
                        </div>
                      ) : null
                    }
                  </div>
                </div>
                <div className={styles.sourceInsee}>
                  * Chiffrages indicatifs.
                  <br />
                  Estimation à partir des données de l&apos;Enquête
                  Revenus Fiscaux et Sociaux (ERFS-FPR) de l&apos;Insee.
                </div>
              </div>
            )}
          </Fragment>
        )}
        content2={(isLoadingEtat || isDisabledEtat) ? null
          : (
            <ExpansionPanel className={styles.expansionPanel}>
              <ExpansionPanelSummary
                className={styles.styleExpansionPanel}
                expandIcon={<ExpandMoreIcon />}>
                <Typography className={styles.subtitleCarteEtat}>
              En savoir plus sur les déciles de population
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={styles.styleExpansionPanel}>
                <SimpopTableurInfosDeciles
                  deciles={deciles}
                  frontieresDeciles={frontieresDeciles}
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        }
        icon={<Icon height="40" icon={classicalBuilding} width="40" />}
        subTitle="par décile de population et par an"
        title="Recettes de l&apos;État"
      />
    );
  }
}

const ConnectedComponent = connector(CarteEtat);

export { ConnectedComponent as CarteEtat };
