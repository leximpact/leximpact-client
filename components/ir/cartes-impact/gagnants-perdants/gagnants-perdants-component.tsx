import familyManGirlGirl from "@iconify/icons-twemoji/family-man-girl-girl";
import { Icon } from "@iconify/react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import CachedIcon from "@material-ui/icons/Cached";
import FaceIcon from "@material-ui/icons/Face";
import NotInterestedIcon from "@material-ui/icons/NotInterested";
import React, { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { fetchSimPop, simulateCasTypes } from "../../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../redux/reducers";
import { Card } from "../../../common";
import styles from "./gagnants-perdants-component.module.scss";
import { GagnantsPerdantsContent } from "./GagnantsPerdantsContent";

const mapStateToProps = ({ loadingEtat, results }: RootState) => {
  const isLoadingEtat = loadingEtat === "loading";
  const isDisabledEtat = loadingEtat === "disabled";
  const { foyersFiscauxTouches } = results.totalPop;
  return {
    foyersFiscauxTouches,
    isDisabledEtat,
    isLoadingEtat,
  };
};

const mapDispatchToProps = dispatch => ({
  onClickSimPop: () => {
    dispatch(fetchSimPop());
    dispatch(simulateCasTypes());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class GagnantsPerdantsCard extends PureComponent<PropsFromRedux> {
  render() {
    const {
      foyersFiscauxTouches,
      isDisabledEtat,
      isLoadingEtat,
      onClickSimPop,
    } = this.props;

    const baissePlf = foyersFiscauxTouches.avant_to_plf
      && (foyersFiscauxTouches.avant_to_plf.gagnant || 0);

    const baisseReforme = foyersFiscauxTouches.avant_to_apres
      && (foyersFiscauxTouches.avant_to_apres.gagnant || 0);

    const neutrePlf = foyersFiscauxTouches.avant_to_plf
      && (
        (foyersFiscauxTouches.avant_to_plf.neutre || 0)
        + (foyersFiscauxTouches.avant_to_plf.neutre_zero || 0)
      );
    const neutreReforme = foyersFiscauxTouches.avant_to_apres
      && (
        (foyersFiscauxTouches.avant_to_apres.neutre || 0)
        + (foyersFiscauxTouches.avant_to_apres.neutre_zero || 0)
      );

    const neutreZeroPlf = foyersFiscauxTouches.avant_to_plf
      && (foyersFiscauxTouches.avant_to_plf.neutre_zero || 0);
    const neutreZeroReforme = foyersFiscauxTouches.avant_to_apres
      && (foyersFiscauxTouches.avant_to_apres.neutre_zero || 0);

    const haussePlf = foyersFiscauxTouches.avant_to_plf
      && (
        (foyersFiscauxTouches.avant_to_plf.perdant || 0)
        + (foyersFiscauxTouches.avant_to_plf.perdant_zero || 0)
      );
    const hausseReforme = foyersFiscauxTouches.avant_to_apres
      && (
        (foyersFiscauxTouches.avant_to_apres.perdant || 0)
        + (foyersFiscauxTouches.avant_to_apres.perdant_zero || 0)
      );

    const hausseZeroPlf = foyersFiscauxTouches.avant_to_plf
      && (foyersFiscauxTouches.avant_to_plf.perdant_zero || 0);
    const hausseZeroReforme = foyersFiscauxTouches.avant_to_apres
      && (foyersFiscauxTouches.avant_to_apres.perdant_zero || 0);

    return (
      <Card
        content1={(
          <Fragment>
            {isDisabledEtat && (
              <div>
                <div className={styles.buttonPosition}>
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
              <div className={styles.buttonPosition}>
                <CircularProgress color="secondary" />
              </div>
            )}
            {!isDisabledEtat && !isLoadingEtat && (
              <GagnantsPerdantsContent
                amendement={hausseReforme}
                caption="de foyers nouvellement imposables"
                captionAmendement={hausseZeroReforme}
                captionPlf={hausseZeroPlf}
                icon={(
                  <ArrowUpwardIcon
                    classes={{ root: styles.styleIconPerdant }}
                    fontSize="default"
                  />
                )}
                plf={haussePlf}
                title="ayant une augmentation"
              />
            )}
          </Fragment>
        )}
        content2={(!isDisabledEtat && !isLoadingEtat) ? (
          <GagnantsPerdantsContent
            amendement={baisseReforme}
            icon={(
              <ArrowDownwardIcon
                classes={{ root: styles.styleIconGagnant }}
                fontSize="default"
              />
            )}
            plf={baissePlf}
            title="ayant une baisse"
          />
        ) : null}
        content3={(!isDisabledEtat && !isLoadingEtat) ? (
          <Fragment>
            <GagnantsPerdantsContent
              amendement={neutreReforme}
              caption="de foyers toujours exonérés"
              captionAmendement={neutreZeroReforme}
              captionPlf={neutreZeroPlf}
              icon={(
                <NotInterestedIcon
                  classes={{ root: styles.styleIconNeutre }}
                  fontSize="default"
                />
              )}
              plf={neutrePlf}
              title="non concernés"
            />
            <div className={styles.sourceInsee}>
              * Chiffrages indicatifs.
              <br />
              Données ERFS-FPR (Insee).
            </div>
          </Fragment>
        ) : null}
        icon={<Icon height="40" icon={familyManGirlGirl} width="40" />}
        subTitle="en millions"
        title="Nombre de foyers fiscaux"
      />
    );
  }
}

export default connector(GagnantsPerdantsCard);
