import createDecorator from "final-form-calculate";
import { Fragment, PureComponent } from "react";
import { Field, Form as FinalForm } from "react-final-form";

import { roles } from "../config.json";
import ErrorSnackbar from "../error-snackbar";
import { EmailInput } from "../form/email-input";
import { RolesInput } from "../form/roles-input";
import { SubmitButton } from "../submit-button";
import { getDefaultRoleFromConfig, updateDomainsWhenRoleChange } from "../utils";
import styles from "./ConnexionForm.module.scss";

const DEFAULT_ROLES = { ...roles };
const DEFAULT_ROLE_OBJECT = getDefaultRoleFromConfig();

const FORM_DECORATORS = createDecorator({
  // NOTE les decorateurs permettent de changer
  // la valeur d'un champ en fonction d'un autre champ
  // NOTE les décorateurs ne doivent pas
  // etre passé dans le render d'un composant
  field: "roles",
  updates: { domains: updateDomainsWhenRoleChange },
});

interface Props {
  handleFormSubmit: (...args: any[]) => any;
  initialValues?: any;
  isLoading: boolean;
}

export class ConnexionForm extends PureComponent<Props> {
  render() {
    const { handleFormSubmit, isLoading } = this.props;

    let { initialValues } = this.props;
    if (!initialValues) {
      initialValues = {
        // valeurs par défaut du form
        domains: DEFAULT_ROLE_OBJECT.domains,
        role: DEFAULT_ROLE_OBJECT.key,
        username: null,
      };
    }

    return (
      <Fragment>
        <FinalForm
          decorators={[FORM_DECORATORS]}
          initialValues={initialValues}
          render={({
            handleSubmit,
            invalid,
            pristine,
            submitError,
            values,
          }) => {
            const { domains } = values;
            const canSubmitForm = isLoading || pristine || invalid;
            return (
              <form className={styles.form} onSubmit={handleSubmit}>
                <RolesInput
                  defaultValue={initialValues.role}
                  roles={DEFAULT_ROLES}
                />
                <EmailInput domains={domains} />
                <SubmitButton disabled={canSubmitForm} isLoading={isLoading} />
                <Field component="input" name="domains" type="hidden" />
                <ErrorSnackbar message={submitError} />
              </form>
            );
          }}
          onSubmit={handleFormSubmit}
        />
      </Fragment>
    );
  }
}
