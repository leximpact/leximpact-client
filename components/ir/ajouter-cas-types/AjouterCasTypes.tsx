import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import arrayMutators from "final-form-arrays";
import { PureComponent } from "react";
import { Form as FinalForm } from "react-final-form";

// eslint-disable-next-line no-unused-vars
import { CasType } from "../../../redux/reducers/descriptions/ir";
import { ErrorSnackbar } from "../common";
import styles from "./AjouterCasTypes.module.scss";
import { CasTypesComposition } from "./form/cas-types-composition";
import { CasTypesLieuResidence } from "./form/cas-types-lieu-residence";
import { CasTypesName } from "./form/cas-types-name";
import { CasTypesPerson } from "./form/cas-types-person";
import { CasTypesRevenus } from "./form/cas-types-revenus";
import { SubmitButton } from "./submit-button";

interface Props {
  casType: CasType;
  onClosePopin: () => void;
  onFormSubmitHandler: (casType: CasType) => void;
}

export class AjouterCasTypes extends PureComponent<Props> {
  onDeclarantsChange({ pop, push }: any, previousLength: number, newLength: number): void {
    if (newLength > previousLength) {
      const declarant: CasType["declarants"][0] = {
        ancienCombattant: false,
        gender: Math.random() < 0.49 ? "male" : "female",
        invalide: false,
        parentIsole: false,
        retraite: false,
        veuf: false,
      };
      push("declarants", declarant);
    }

    if (newLength < previousLength) {
      pop("declarants");
    }
  }

  onPersonnesAChargeChange({ pop, push }: any, previousLength: number, newLength: number): void {
    if (newLength > previousLength) {
      const personneACharge: CasType["personnesACharge"][0] = {
        chargePartagee: false,
        invalide: false,
      };
      push("personnesACharge", personneACharge);
    }

    if (newLength < previousLength) {
      pop("personnesACharge");
    }
  }

  render() {
    const {
      casType,
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
          initialValues={casType}
          mutators={{ ...arrayMutators }}
          render={({
            form,
            handleSubmit,
            invalid,
            submitError,
            values,
          }) => {
            const { mutators } = form;
            const { declarants, personnesACharge } = values;
            return (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div>
                  <CasTypesName name="name" />
                </div>
                <div className={styles.personsColumns}>
                  <CasTypesPerson
                    max={2}
                    min={1}
                    value={declarants.length}
                    onChange={value => this.onDeclarantsChange(mutators, declarants.length, value)}
                  />
                  <CasTypesPerson
                    isChild
                    max={9}
                    min={0}
                    value={personnesACharge.length}
                    onChange={(value) => {
                      this.onPersonnesAChargeChange(mutators, personnesACharge.length, value);
                    }}
                  />
                </div>
                <Divider className={styles.divider} />
                <div>
                  <CasTypesComposition
                    declarants={declarants}
                    personnesACharge={personnesACharge} />
                </div>
                <Divider className={styles.divider} />
                <div>
                  <CasTypesLieuResidence name="residence" />
                </div>
                <Divider className={styles.divider} />
                <div>
                  <CasTypesRevenus name="revenuImposable" />
                </div>
                <Divider className={styles.divider} />
                <SubmitButton disabled={invalid} />
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
