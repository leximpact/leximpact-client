import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { PureComponent } from "react";
import { Field } from "react-final-form";

import styles from "./RolesInput.module.scss";

interface Props {
  defaultValue: string;
  roles: any;
}

export class RolesInput extends PureComponent<Props> {
  renderRadioItem = (key) => {
    const { roles } = this.props;
    return (
      <FormControlLabel
        key={key}
        classes={{ label: styles.radioLabel }}
        control={<Radio classes={{ root: styles.radioItem }} />}
        disabled={roles[key].disabled}
        label={roles[key].label}
        value={key}
      />
    );
  };

  render() {
    const { defaultValue, roles } = this.props;
    return (
      <FormControl
        required
        classes={{ root: styles.formControl }}
        component="div">
        <FormLabel
          required
          classes={{
            asterisk: styles.formLegendAsterisk,
            root: styles.formLegend,
          }}>
          <b>Je suis</b>
        </FormLabel>
        <Field
          name="roles"
          render={({ input }) => (
            <RadioGroup
              {...input}
              aria-label={input.name}
              classes={{ root: styles.radioGroup }}
              defaultValue={defaultValue}
              name={input.name}
              value={input.value}
              onChange={input.onChange}>
              {Object.keys(roles).map(this.renderRadioItem)}
            </RadioGroup>
          )}
          type="radio"
        />
      </FormControl>
    );
  }
}
