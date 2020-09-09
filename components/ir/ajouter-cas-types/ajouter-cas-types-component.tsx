import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import arrayMutators from "final-form-arrays";
import { PureComponent } from "react";
import { Form as FinalForm } from "react-final-form";

import ErrorSnackbar from "./error-snackbar";
import CasTypesComposition from "./form/cas-types-composition";
import CasTypesLieuResidence from "./form/cas-types-lieu-residence";
import CasTypesName from "./form/cas-types-name";
import CasTypesPerson from "./form/cas-types-person";
import CasTypesRevenus from "./form/cas-types-revenus";
import SubmitButton from "./submit-button";

const styles = () => ({
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  container: {},
  divider: {
    marginBottom: 6,
    marginTop: 24,
  },
  personsColumns: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    marginTop: 24,
  },
});

interface Props {
  casTypesInitialValues: any;
  classes: any;
  defaultPersonValue: any;
  onClosePopin: (...args: any[]) => any;
  onFormSubmitHandler: (...args: any[]) => any;
}

class AjouterCasTypesComponent extends PureComponent<Props> {
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
      classes,
      onClosePopin,
      onFormSubmitHandler,
    } = this.props;
    return (
      <div className={classes.container}>
        <IconButton className={classes.closeButton} onClick={onClosePopin}>
          <CloseIcon fontSize="small" />
        </IconButton>
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
              <form className={classes.form} onSubmit={handleSubmit}>
                <div>
                  <CasTypesName name="name" />
                </div>
                <div className={classes.personsColumns}>
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
                <Divider className={classes.divider} />
                <div>
                  <CasTypesComposition name="persons" persons={persons} />
                </div>
                <Divider className={classes.divider} />
                <div>
                  <CasTypesLieuResidence name="lieuResidence" />
                </div>
                <Divider className={classes.divider} />
                <div>
                  <CasTypesRevenus name="revenusNetMensuel" />
                </div>
                <Divider className={classes.divider} />
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

export default withStyles(styles as any)(AjouterCasTypesComponent);
