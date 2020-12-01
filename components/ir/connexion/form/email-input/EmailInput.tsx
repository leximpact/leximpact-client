import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { PureComponent } from "react";
import { Field } from "react-final-form";

import { validateEmailInputField } from "../../utils";
import styles from "./EmailInput.module.scss";

interface Props {
  domains: string[];
}

export class EmailInput extends PureComponent<Props> {
  renderSelectField = ({ input }) => {
    const { domains } = this.props;
    const {
      name, onChange, value, ...rest
    } = input;
    return (
      <Select
        required
        classes={{ root: styles.selectRoot }}
        inputProps={rest}
        name={name}
        value={value}
        onChange={onChange}>
        {domains.map(domainLabel => (
          <MenuItem key={domainLabel} className={styles.menuPaper} value={domainLabel}>
            {domainLabel}
          </MenuItem>
        ))}
      </Select>
    );
  };

  renderInputField = ({ input }) => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Input
        {...input}
        required
        classes={{
          input: styles.inputField,
        }}
      />
    </div>
  );

  render() {
    const { domains } = this.props;
    return (
      <FormGroup row classes={{ root: styles.formGroup }}>
        <FormLabel classes={{ root: styles.formLabel }} component="legend">
          <b>Mon adresse e-mail officielle&nbsp;:</b>
        </FormLabel>
        <div className={styles.fieldsContainer}>
          <Field
            required
            name="username"
            render={this.renderInputField}
            validate={validateEmailInputField}
          />
          <Field
            required
            defaultValue={domains[0]}
            name="domain"
            render={this.renderSelectField}
          />
        </div>
      </FormGroup>
    );
  }
}
