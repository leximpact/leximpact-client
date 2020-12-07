import { Icon } from "@iconify/react";
import Chip from "@material-ui/core/Chip";
import { Field } from "react-final-form";

import { RESIDENCE_ITEMS } from "../../../common";
import styles from "./CasTypesLieuResidence.module.scss";

interface Props {
  name: string;
}

export function CasTypesLieuResidence({ name }: Props) {
  return (
    <div>
      <span className={styles.title}>Lieu de résidence :</span>
      <div className={styles.flexbox}>
        <Field name={name}>
          {({ input }) => Array.from(RESIDENCE_ITEMS.entries()).map(([ key, { icon, label }]) => {
            const isSelected = input.value === key;
            const variant = !isSelected ? "outlined" : "default";
            const chipProps = { onClick: () => input.onChange(key) };
            return (
              <Chip
                {...chipProps}
                key={key}
                className={styles.button}
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
