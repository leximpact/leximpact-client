import GroupIcon from "@material-ui/icons/Group";
import { PureComponent } from "react";

import { SubCard, Values } from "../../../../common";
import styles from "./GagnantsPerdantsContent.module.scss";

interface Props {
  icon: JSX.Element;
  title: string;
  plf?: number;
  amendement?: number;
  caption?: string;
  captionPlf?: number;
  captionAmendement?: number;
}

function inMillions(n: number|undefined): number|undefined {
  if (n === undefined) {
    return undefined;
  }
  return Math.round(n / 100000) / 10;
}

export class GagnantsPerdantsContent extends PureComponent<Props> {
  render() {
    const {
      amendement, caption, captionAmendement, captionPlf, icon, plf, title,
    } = this.props;
    return (
      <SubCard
        icon={icon}
        title={title}
      >
        <div className={styles.containerImpact}>
          <div className={styles.main}>
            <span className={styles.mainValue}>
              <Values amendementValue={inMillions(amendement)} plfValue={inMillions(plf)} />
            </span>
            <span className={styles.mainUnit}> M</span>
            <GroupIcon
              className={styles.mainIcon}
              fontSize="small"
            />
          </div>
        </div>
        {
          caption && (typeof amendement === "number" || typeof plf === "number") && (
            <div className={styles.details}>
              dont
              {" "}
              <span>
                <Values
                  amendementValue={inMillions(captionAmendement)}
                  plfValue={inMillions(captionPlf)} />
              </span>
              <span className={styles.detailsUnit}> M</span>
              {" "}
              {caption}
            </div>
          )
        }
      </SubCard>
    );
  }
}
