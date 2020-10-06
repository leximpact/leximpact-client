import IconButton from "@material-ui/core/IconButton";
import NativeSelect from "@material-ui/core/NativeSelect";
import Tooltip from "@material-ui/core/Tooltip";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Fragment } from "react";
import { Field } from "react-final-form";

import { formatNumber } from "../../../common";
import generateRevenusMensuel from "../../../common/utils/maths/generate-revenus-mensuel";
import styles from "./cas-types-revenus.module.scss";

const REVENUS_MENSUEL = generateRevenusMensuel(500);
const selectOptions = REVENUS_MENSUEL.map((value) => {
  const uniqKey = `revenu_mensuel_${value}`;
  return <option key={uniqKey} value={value}>{`${formatNumber(value)} €/mois`}</option>;
});

const REVENUS_HELP = "Somme des traitements, salaires nets et pensions que le foyer fiscal déclare par an sur sa feuille d'impôt, divisé par le nombre de mois d’une année.";

const CasTypesRevenus = ({ name }: { name: string }) => (
  <label htmlFor={name}>
    <div>
      <Tooltip
        classes={{
          popper: styles.tooltipContainer,
          tooltip: styles.tooltipContent,
        }}
        title={REVENUS_HELP}>
        <IconButton disableRipple className={styles.tooltipButton}>
          <HelpOutlineIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <span className={styles.title}>
        Revenus net à déclarer par mois&nbsp;:
      </span>
    </div>
    <div className={styles.flexbox}>
      <Field id={name} name={name}>
        {({ input }) => {
          const revenuMensuel = input.value;
          const revenuAnnuel = input.value * 12;
          return (
            <Fragment>
              <NativeSelect
                name={input.name}
                value={revenuMensuel}
                onChange={input.onChange}>
                {selectOptions}
              </NativeSelect>
              <span className={styles.label}>
                {`Soit ${formatNumber(revenuAnnuel)} €/an`}
              </span>
            </Fragment>
          );
        }}
      </Field>
    </div>
  </label>
);

export default CasTypesRevenus;
