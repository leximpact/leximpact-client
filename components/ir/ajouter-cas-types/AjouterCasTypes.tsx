import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import arrayMutators from "final-form-arrays";
import { PureComponent } from "react";
import { Form as FinalForm } from "react-final-form";

import styles from "./AjouterCasTypes.module.scss";
import { ErrorSnackbar } from "./ErrorSnackbar";
import { CasTypesComposition } from "./form/cas-types-composition";
import { CasTypesLieuResidence } from "./form/cas-types-lieu-residence";
import { CasTypesName } from "./form/cas-types-name";
import { CasTypesPerson } from "./form/cas-types-person";
import { CasTypesRevenus } from "./form/cas-types-revenus";
import { SubmitButton } from "./submit-button";

interface Props {
  casTypesInitialValues: any;
  defaultPersonValue: any;
  onClosePopin: () => void;
  onFormSubmitHandler: () => void;
}

export class AjouterCasTypes extends PureComponent<Props> {
  handlePersonAdd = ({ push }: any) => (isChild) => {
    const { defaultPersonValue } = this.props;
    const childValue = isChild ? 1 : 0;
    const nextValue = { ...defaultPersonValue, isChild: childValue };
    const arrayKey = (isChild && "childs") || "parents";
    push(`persons.${arrayKey}`, nextValue);
  };

  handlePersonRemove = ({ pop }: any) => (isChild) => {
    const arrayKey = (isChild && "childs") || "parents";
    pop(`persons.${arrayKey}`);
  };

  render() {
    const {
      casTypesInitialValues,
      onClosePopin,
      onFormSubmitHandler,
    } = this.props;
    return (
      <div>
        <div className={styles.closeButton}>
          <IconButton onClick={onClosePopin}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
        <FinalForm
          initialValues={casTypesInitialValues}
          mutators={{ ...arrayMutators }}
          render={({
            form,
            handleSubmit,
            invalid,
            pristine,
            submitError,
            values,
          }) => {
            const { mutators } = form;
            const { persons } = values;
            const canSubmitForm = pristine || invalid;
            return (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div>
                  <CasTypesName name="name" />
                </div>
                <div className={styles.personsColumns}>
                  <CasTypesPerson
                    max={2}
                    min={1}
                    name="nbCouple"
                    onPersonAdd={this.handlePersonAdd(mutators)}
                    onPersonRemove={this.handlePersonRemove(mutators)}
                  />
                  <CasTypesPerson
                    isChild
                    max={9}
                    min={0}
                    name="nbEnfants"
                    onPersonAdd={this.handlePersonAdd(mutators)}
                    onPersonRemove={this.handlePersonRemove(mutators)}
                  />
                </div>
                <Divider className={styles.divider} />
                <div>
                  <CasTypesComposition name="persons" persons={persons} />
                </div>
                <Divider className={styles.divider} />
                <div>
                  <CasTypesLieuResidence name="lieuResidence" />
                </div>
                <Divider className={styles.divider} />
                <div>
                  <CasTypesRevenus name="revenusNetMensuel" />
                </div>
                <Divider className={styles.divider} />
                <SubmitButton disabled={canSubmitForm} />
                <ErrorSnackbar message={submitError} />
              </form>
            );
          }}
          onSubmit={onFormSubmitHandler}
        />
      </div>
    );
  }
}
