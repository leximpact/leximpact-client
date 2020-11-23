import TextField from "@material-ui/core/TextField";
import { Field } from "react-final-form";

import styles from './CasTypesName.module.scss';

interface Props {
  name: string;
}

export function CasTypesName({ name }: Props) {
  return (
    <label htmlFor={name}>
      <span className={styles.title}>Créer mon cas type</span>
      <Field className={styles.styleBox} name={name}>
        {({ input }) => (
          <TextField
            {...input}
            placeholder="Foyer fiscal type"
          />
        )}
      </Field>
    </label>
  );
}