
import Divider from "@material-ui/core/Divider";
import { PureComponent } from "react";

import { Card } from "../../../common";
import { CommuneSummarySection } from "./commune-summary-section";
import styles from "./CommuneSummary.module.scss";

export class CommuneSummary extends PureComponent {
  render() {
    return (
      <Card
        content1={(
          <div className={styles.container}>
            <div className={styles.column}>
              <CommuneSummarySection dotation="dsr" />
            </div>
            <Divider flexItem orientation="vertical" />
            <div className={styles.column}>
              <CommuneSummarySection dotation="dsu" />
            </div>
          </div>
        )}
        icon={<img alt="" className={styles.image} src="/icons/picto-communes-eligibles.png" />}
        title="Nombre de communes éligibles"
      />
    );
  }
}
