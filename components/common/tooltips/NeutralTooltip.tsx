import Tooltip from "@material-ui/core/Tooltip";

import styles from "./NeutralTooltip.module.scss";

export function NeutralTooltip(props) {
  return (
    <Tooltip
      classes={{
        tooltip: styles.tooltip,
        tooltipPlacementBottom: styles.tooltipPlacementBottom,
      }}
      enterDelay={300}
      leaveDelay={200}
      {...props} />
  );
}
