import { PureComponent } from "react";

import { Card } from "../../../common";
import "./build-map";
import styles from "./CommuneMap.module.scss";

export class CommuneMap extends PureComponent {
  render() {
    return (
      <Card
        content1={(
          <div
            id="mapid"
          />
        )}
        title="Proportion des communes nouvellement éligibles et non-éligibles" />
    );
  }
}
