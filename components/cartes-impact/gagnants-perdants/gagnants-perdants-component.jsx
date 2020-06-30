import familyManGirlGirl from "@iconify/icons-twemoji/family-man-girl-girl";
import { Icon } from "@iconify/react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import CachedIcon from "@material-ui/icons/Cached";
import CloseIcon from "@material-ui/icons/Close";
import FaceIcon from "@material-ui/icons/Face";
import GroupIcon from "@material-ui/icons/Group";
import TrendingFLatIcon from "@material-ui/icons/TrendingFlat";
import { get } from "lodash";
import PropTypes from "prop-types";
import React, { Fragment, PureComponent } from "react";

import styles2 from "./gagnants-perdants-component.module.scss";

const styles = () => ({
  buttonPosition: {
    marginBottom: "114px",
    marginTop: "41px",
  },
  cardContainer: {
    minWidth: 50,
    paddingBottom: 0,
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: 0,
    },
    padding: 0,
    width: "moz-available",
  },
  cardEditDeleteButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    margin: 0,
    marginLeft: 0,
    padding: 0,
  },
  cardHeader: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingBottom: 5,
    textAlign: "left",
  },
  cardHeaderButtons: {
    maxWidth: 15,
    minWidth: 15,
    width: 15,
  },
  containerImpact: {
    alignContent: "flex-start",
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: "0px",
  },
  divTitre: {
    display: "inline-block",
    paddingLeft: "3px",
  },
  impactContainer: {
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
  },
  sourceInsee: {
    color: "#B1B1B1",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "regular",
    lineHeight: "15px",
    marginBottom: "15px",
    marginLeft: "15px",
    marginRight: "15px",
    textAlign: "right",
  },
  styleIconGagnant: {
    color: "#13CC03",
    verticalAlign: "bottom",
  },
  styleIconNeutre: {
    color: "#B1B1B1",
    verticalAlign: "bottom",
  },
  styleIconPerdant: {
    color: "#FFAC33",
    verticalAlign: "bottom",
  },
  subtitleCard: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "0.875em",
    marginLeft: "10px",
    textJustify: "left",
  },
  titleCard: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "1.125em",
    fontWeight: "bold",
    marginLeft: "10px",
    textJustify: "none",
  },
});

class GagnantsPerdantsCard extends PureComponent {
  render() {
    const {
      classes,
      foyersFiscauxTouches,
      isDisabledEtat,
      isLoadingEtat,
      onClickSimPop,
    } = this.props;

    const montrerPLF = !!foyersFiscauxTouches.avant_to_plf;

    let baissePlf = null;
    if (montrerPLF) {
      baissePlf = Math.round(
        get(foyersFiscauxTouches, "avant_to_plf.gagnant", 0) / 100000,
      ) / 10;
    }
    const baisseReforme = Math.round(
      get(foyersFiscauxTouches, "avant_to_apres.gagnant", 0) / 100000,
    ) / 10;

    let neutrePlf = null;
    if (montrerPLF) {
      neutrePlf = Math.round(
        (get(foyersFiscauxTouches, "avant_to_plf.neutre", 0)
            + get(foyersFiscauxTouches, "avant_to_plf.neutre_zero", 0))
            / 100000,
      ) / 10;
    }
    const neutreReforme = Math.round(
      (get(foyersFiscauxTouches, "avant_to_apres.neutre", 0)
          + get(foyersFiscauxTouches, "avant_to_apres.neutre_zero", 0))
          / 100000,
    ) / 10;

    let neutreZeroPlf = null;
    if (montrerPLF) {
      neutreZeroPlf = Math.round(
        get(foyersFiscauxTouches, "avant_to_plf.neutre_zero", 0) / 100000,
      ) / 10;
    }
    const neutreZeroReforme = Math.round(
      get(foyersFiscauxTouches, "avant_to_apres.neutre_zero", 0) / 100000,
    ) / 10;

    let haussePlf = null;
    if (montrerPLF) {
      haussePlf = Math.round(
        (get(foyersFiscauxTouches, "avant_to_plf.perdant", 0)
            + get(foyersFiscauxTouches, "avant_to_plf.perdant_zero", 0))
            / 100000,
      ) / 10;
    }
    const hausseReforme = Math.round(
      (get(foyersFiscauxTouches, "avant_to_apres.perdant", 0)
          + get(foyersFiscauxTouches, "avant_to_apres.perdant_zero", 0))
          / 100000,
    ) / 10;

    let hausseZeroPlf = null;
    if (montrerPLF) {
      hausseZeroPlf = Math.round(
        get(foyersFiscauxTouches, "avant_to_plf.perdant_zero", 0) / 100000,
      ) / 10;
    }
    const hausseZeroReforme = Math.round(
      get(foyersFiscauxTouches, "avant_to_apres.perdant_zero", 0) / 100000,
    ) / 10;

    return (
      <Card className={classes.cardContainer}>
        <CardContent className={classes.cardContent}>
          <div className={classes.cardHeader}>
            <div className={classes.divTitre}>
              <Icon height="40" icon={familyManGirlGirl} width="40" />
            </div>
            <div className={classes.divTitre}>
              <Typography className={classes.titleCard}>
                Nombre de foyers fiscaux
              </Typography>
              <Typography className={classes.subtitleCard}>
                en millions par rapport au droit existant*
              </Typography>
            </div>

            <div className={classes.cardHeaderButtons}>
              <IconButton
                disableRipple
                aria-label="Delete"
                classes={{ root: classes.cardEditDeleteButton }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
          {isDisabledEtat && (
            <div>
              <center className={classes.buttonPosition}>
                <Button
                  color="secondary"
                  size="medium"
                  variant="outlined"
                  onClick={onClickSimPop}>
                  <AccountBalanceIcon />
                  <FaceIcon className={classes.marginIcon} />
                  &nbsp;Estimer ~60&quot;
                  <CachedIcon className={classes.miniIcon} />
                </Button>
              </center>
            </div>
          )}
          {!isDisabledEtat && isLoadingEtat && (
            <center className={classes.buttonPosition}>
              <CircularProgress color="secondary" />
            </center>
          )}
          {!isDisabledEtat && !isLoadingEtat && (
            <>
              <div className={classes.impactContainer}>
                <div>
                  <ArrowUpwardIcon
                    classes={{ root: classes.styleIconPerdant }}
                    fontSize="default"
                  />
                  <span className={styles2.titleCard}>
                    ayant une augmentation de l&apos;IR
                  </span>

                  <div className={classes.containerImpact}>
                    {
                      montrerPLF
                        ? (
                          <div className={styles2.plf}>
                            <span className={styles2.plfValue}>{haussePlf}</span>
                            <span className={styles2.plfUnit}> M</span>
                            <GroupIcon
                              className={styles2.plfIcon}
                              fontSize="small"
                            />
                          </div>
                        )
                        : null
                    }
                    <div className={styles2.reform}>
                      <span className={styles2.amendementValue}>{hausseReforme}</span>
                      <span className={styles2.reformUnit}> M</span>
                      <GroupIcon
                        className={styles2.reformIcon}
                        fontSize="small"
                      />
                    </div>
                  </div>
                  <div className={styles2.details}>
                    dont
                    {" "}
                    {
                      montrerPLF
                        ? (
                          <Fragment>
                            <span className={styles2.detailsPlfValue}>{hausseZeroPlf}</span>
                            <span className={styles2.detailsPlfUnit}> M </span>
                          </Fragment>
                        )
                        : null
                    }
                    <span className={styles2.detailsReformValue}>{hausseZeroReforme}</span>
                    <span className={styles2.detailsReformUnit}> M</span>
                    &nbsp;de foyers entrant dans l&apos;IR
                  </div>
                </div>
              </div>
              <Divider />

              <div className={classes.impactContainer}>
                <div>
                  <ArrowDownwardIcon
                    classes={{ root: classes.styleIconGagnant }}
                    fontSize="default"
                  />
                  <span className={styles2.titleCard}>
                    ayant une baisse de l&apos;IR
                  </span>

                  <div className={classes.containerImpact}>
                    {
                      montrerPLF
                        ? (
                          <div className={styles2.plf}>
                            <span className={styles2.plfValue}>{baissePlf}</span>
                            <span className={styles2.plfUnit}> M</span>
                            <GroupIcon
                              className={styles2.plfIcon}
                              fontSize="small"
                            />
                          </div>
                        )
                        : null
                    }
                    <div className={styles2.reform}>
                      <span className={styles2.amendementValue}>{baisseReforme}</span>
                      <span className={styles2.reformUnit}> M</span>
                      <GroupIcon
                        className={styles2.reformIcon}
                        fontSize="small"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Divider />

              <div className={classes.impactContainer}>
                <div>
                  <TrendingFLatIcon
                    classes={{ root: classes.styleIconNeutre }}
                    fontSize="default"
                  />
                  <span className={styles2.titleCard}>
                    non concernés
                  </span>

                  <div className={classes.containerImpact}>
                    {
                      montrerPLF
                        ? (
                          <div className={styles2.plf}>
                            <span className={styles2.plfValue}>{neutrePlf}</span>
                            <span className={styles2.plfUnit}> M</span>
                            <GroupIcon
                              className={styles2.plfIcon}
                              fontSize="small"
                            />
                          </div>
                        )
                        : null
                    }
                    <div className={styles2.reform}>
                      <span className={styles2.amendementValue}>{neutreReforme}</span>
                      <span className={styles2.reformUnit}> M</span>
                      <GroupIcon
                        className={styles2.reformIcon}
                        fontSize="small"
                      />
                    </div>
                  </div>
                  <div className={styles2.details}>
                    dont
                    {" "}
                    {
                      montrerPLF
                        ? (
                          <Fragment>
                            <span className={styles2.detailsPlfValue}>{neutreZeroPlf}</span>
                            <span className={styles2.detailsPlfUnit}> M </span>
                          </Fragment>
                        )
                        : null
                    }
                    <span className={styles2.detailsReformValue}>{neutreZeroReforme}</span>
                    <span className={styles2.detailsReformUnit}> M</span>
                    &nbsp;de foyers toujours exonérés d&apos;IR
                  </div>
                </div>
              </div>

              <Typography className={classes.sourceInsee}>
                    * Chiffrages indicatifs.
                <br />
                {" "}
                    Données ERFS-FPR (Insee).
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    );
  }
}
GagnantsPerdantsCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  foyersFiscauxTouches: PropTypes.shape().isRequired,
  isDisabledEtat: PropTypes.bool.isRequired,
  isLoadingEtat: PropTypes.bool.isRequired,
  onClickSimPop: PropTypes.func.isRequired,
};

export default withStyles(styles)(GagnantsPerdantsCard);
