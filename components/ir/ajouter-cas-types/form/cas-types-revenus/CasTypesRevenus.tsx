import NativeSelect from "@material-ui/core/NativeSelect";
import Tooltip from "@material-ui/core/Tooltip";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { Fragment } from "react";
import { Field } from "react-final-form";

import { formatNumber } from "../../../../common";
import generateRevenusMensuel from "../../../../common/utils/maths/generate-revenus-mensuel";
import styles from "./CasTypesRevenus.module.scss";

const REVENUS_MENSUEL = generateRevenusMensuel(500);
const selectOptions = REVENUS_MENSUEL.map((value) => {
  const uniqKey = `revenu_mensuel_${value}`;
  return <option key={uniqKey} value={value * 12}>{`${formatNumber(value)} €/mois`}</option>;
});

const REVENUS_HELP = "Somme des traitements, salaires nets et pensions que le foyer fiscal déclare par an sur sa feuille d'impôt, divisé par le nombre de mois d’une année.";

interface Props {
  name: string;
}

export const CasTypesRevenus = ({ name }: Props) => (
  <label htmlFor={name}>
    <div className={styles.titleWrapper}>
      <Tooltip
        classes={{
          popper: styles.tooltipContainer,
          tooltip: styles.tooltipContent,
        }}
        title={REVENUS_HELP}>
        <HelpOutlineIcon className={styles.tooltipButton} fontSize="small" />
      </Tooltip>
      <span className={styles.title}>
        Revenus net à déclarer par mois :
      </span>
    </div>
    <div className={styles.flexbox}>
      <Field id={name} name={name}>
        {({ input }) => {
          return (
            <Fragment>
              <NativeSelect {...input}>
                {selectOptions}
              </NativeSelect>
              <span className={styles.label}>
                {`Soit ${formatNumber(input.value)} €/an`}
              </span>
            </Fragment>
          );
        }}
      </Field>
    </div>
  </label>
);
