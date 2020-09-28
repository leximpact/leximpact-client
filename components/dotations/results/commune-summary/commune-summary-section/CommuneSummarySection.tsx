import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../../redux/reducers";
// eslint-disable-next-line no-unused-vars
import { DotationsState } from "../../../../../redux/reducers/results";
import {
  ResultValues, SubCard,
} from "../../../../common";
import styles from "./CommuneSummarySection.module.scss";
import { EligibiliteSpot } from "./eligibilite-spot";

interface Props {
  dotation: keyof DotationsState["communes"]
}

const mapStateToProps = ({ results }: RootState, { dotation }: Props) => ({
  amendement: {
    nouvellementEligibles: results.baseToAmendement
      .dotations.state?.communes[dotation].nouvellementEligibles,
    plusEligibles: results.baseToAmendement.dotations.state?.communes[dotation].plusEligibles,
    toujoursEligibles: results.baseToAmendement.dotations
      .state?.communes[dotation].toujoursEligibles,
  },
  isFetching: results.amendement.dotations.isFetching
    || results.base.dotations.isFetching
    || results.plf.dotations.isFetching,
  plf: {
    nouvellementEligibles: results.baseToPlf.dotations
      .state?.communes[dotation].nouvellementEligibles,
    plusEligibles: results.baseToPlf.dotations.state?.communes[dotation].plusEligibles,
    toujoursEligibles: results.baseToPlf.dotations.state?.communes[dotation].toujoursEligibles,
  },
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>


function renderSubCardContent(plf: number|undefined, amendement: number|undefined): JSX.Element {
  return (
    <div className={styles.subCardContent}>
      {
        typeof plf === "number" && plf !== 0
          ? (
            <div className={styles.plf}>
              {plf}
            </div>
          )
          : null
      }
      {
        typeof amendement === "number" && amendement !== 0 && amendement !== plf
          ? (
            <div className={styles.amendement}>
              {amendement}
            </div>
          ) : null
      }
    </div>
  );
}

class CommuneSummarySection extends PureComponent<PropsFromRedux & Props> {
  render() {
    const {
      amendement, dotation, isFetching, plf,
    } = this.props;
    return (
      <div>
        {dotation === "dsr" && (
          <div className={styles.title}>
            <LocalFloristIcon />
            {" "}
          DSR
          </div>
        )}
        {dotation === "dsu" && (
          <div className={styles.title}>
            <LocationCityIcon />
            {" "}
          DSU
          </div>
        )}
        {isFetching ? <CircularProgress /> : (
          <div className={styles.total}>
            <ResultValues
              path={`dotations.state.communes.${dotation}.eligibles`}
            />
          </div>
        )}
        {/* Do not display the content if both fields are undefined OR equal zero. */}
        {(plf.nouvellementEligibles || amendement.nouvellementEligibles) ? (
          <Fragment>
            <Divider />
            <div className={styles.subCard}>
              <SubCard
                icon={<EligibiliteSpot eligible small />}
                subTitle="par rapport au droit existant"
                title="Nouvellement éligibles"
              >
                {renderSubCardContent(plf.nouvellementEligibles, amendement.nouvellementEligibles)}
              </SubCard>
            </div>
          </Fragment>
        ) : null}
        {/* Do not display the content if both fields are undefined OR equal zero. */}
        {(plf.plusEligibles || amendement.plusEligibles) ? (
          <Fragment>
            <Divider />
            <div className={styles.subCard}>
              <SubCard
                icon={<EligibiliteSpot small eligible={false} />}
                subTitle="par rapport au droit existant"
                title="Nouvellement non-éligibles"
              >
                {renderSubCardContent(plf.plusEligibles, amendement.plusEligibles)}
              </SubCard>
            </div>
          </Fragment>
        ) : null}
      </div>
    );
  }
}


const Connected = connector(CommuneSummarySection);

export { Connected as CommuneSummarySection };
