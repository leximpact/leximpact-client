import TextField from "@material-ui/core/TextField";
import { Field } from "react-final-form";

import styles from "./cas-types-name.module.scss";

function CasTypesName({ name }: { name: string }) {
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

export default CasTypesName;
