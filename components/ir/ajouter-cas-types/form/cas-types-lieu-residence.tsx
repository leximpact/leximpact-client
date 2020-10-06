import CactusIcon from "@iconify/icons-twemoji/cactus";
import DeciduousTreeIcon from "@iconify/icons-twemoji/deciduous-tree";
import PalmTreeIcon from "@iconify/icons-twemoji/palm-tree";
import { Icon } from "@iconify/react";
import Chip from "@material-ui/core/Chip";
import { Field } from "react-final-form";

import DoublePalmTreeIcon from "../../../common/icons/double-palm-tree";
import styles from "./cas-types-lieu-residence.module.scss";

const RESIDENCE_ITEMS = [
  {
    clickable: true,
    icon: DeciduousTreeIcon,
    key: "metropole",
    label: "Metropole",
  },
  {
    clickable: true,
    icon: PalmTreeIcon,
    key: "guadeloupe_martinique_reunion",
    label: "Guadeloupe, Martinique, La Réunion",
  },
  {
    clickable: true,
    icon: DoublePalmTreeIcon,
    key: "mayotte_guyane",
    label: "Mayotte, Guyane",
  },
  {
    clickable: false,
    icon: CactusIcon,
    key: "etranger",
    label: "Étranger",
  },
];

function CasTypesLieuResidence({ name }: { name: string }) {
  return (
    <div>
      <span className={styles.title}>Lieu de résidence&nbsp;:</span>
      <div className={styles.flexbox}>
        <Field name={name}>
          {({ input }) => RESIDENCE_ITEMS.map(({
            clickable, icon, key, label,
          }, index) => {
            const isSelected = input.value === index;
            const variant = !isSelected ? "outlined" : "default";
            let className = styles.button;
            let chipProps: { onClick?: () => void } = { onClick: () => input.onChange(index) };
            if (!clickable) {
              // disable du chip
              chipProps = {};
              className = `${className} ${styles.buttonDisabled}`;
            }
            return (
              <Chip
                {...chipProps}
                key={key}
                className={className}
                clickable={clickable}
                icon={<Icon height="20" icon={icon} width="20" />}
                label={label}
                variant={variant}
              />
            );
          })
          }
        </Field>
      </div>
    </div>
  );
}

export default CasTypesLieuResidence;
