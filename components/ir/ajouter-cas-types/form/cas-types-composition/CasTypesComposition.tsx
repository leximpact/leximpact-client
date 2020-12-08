import { Icon } from "@iconify/react";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { PureComponent } from "react";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import { CasType } from "../../../../../redux/reducers/descriptions/ir";

import styles from "./CasTypesComposition.module.scss";
import {
  getIconForChildPerson,
  getIconForParentPerson,
  getParentIsoleLabel,
  shouldDisableParentIsole,
  shouldShowCheckbox,
  shouldShowLabel,
} from "./utils";

const COMPOSITION_FIELDS_MAP = [
  {
    help:
      "Personne remplissant les conditions d'invalidité selon l'Article 195 du CGI.",
    key: "invalide",
    label: "Invalide",
  },
  {
    help:
      "1- Parent seul : contribuable vivant seul sans enfant à charge, ayant élevé seul par le passé un enfant pendant au moins 5 ans. 2- Parent isolé : contribuable ayant seul un ou plusieurs enfants à charge. Voir l'Article 195 du CGI.",
    key: "parentIsole",
    label: "Parent isolé",
  },
  {
    help:
      "Contribuable âgé de plus de soixante-cinq ans. Voir l'Article 157 bis du CGI.",
    key: "plus65ans",
    label: "+65 ans",
  },
  {
    key: "veufVeuve",
    label: "Veuf / Veuve",
  },
  {
    help:
      "Personne âgée de plus de 74 ans et titulaire de la carte du combattant, ou d’une pension militaire d’invalidité. Cette particularité s'applique également à leurs veufs/veuves de plus de 74 ans. Voir l'Article 195 du CGI.",
    key: "ancienCombattant",
    label: "Ancien combattant",
  },
  {
    help:
      "Enfant dont la charge n’est pas exclusivement ou principalement supportée par le contribuable. Voir l'Article 194 du CGI.",
    key: "chargePartagee",
    label: "Charge partagée",
  },
];

interface Props {
  declarants: CasType['declarants'];
  personnesACharge: CasType['personnesACharge'];
}

export class CasTypesComposition extends PureComponent<Props> {

  renderGenderButton = (showChild: boolean, name: string, index: number) => {
    const { personnesACharge, declarants } = this.props;
    const currentPerson = showChild ? personnesACharge[index] : declarants[index];
    const icon = showChild ? getIconForChildPerson() : getIconForParentPerson(declarants[index]);
    const { invalide } = currentPerson;
    return (
      <Field name={`${name}.gender`}>
        {({ input }) => (
          <Button
            disableRipple
            className={styles.genderButton}
            onClick={() => {
              if (showChild) return;
              const nextGender = declarants[index].gender === 'male' ? 'female' : 'male';
              input.onChange(nextGender);
            }}>
            {invalide && (
              <Badge
                color="primary"
                variant="dot">
                <Icon height="24" icon={icon} width="24" />
              </Badge>
            )}
            <Icon height="24" icon={icon} width="24" />
          </Button>
        )}
      </Field>
    );
  };

  renderCompositionColumn = (type: 'declarant'|'personneACharge') => (name: string, index: number) => {
    const { declarants } = this.props;
    const parentsCount = declarants.length;
    return (
      <div key={name}>
        <div className={styles.icon}>
          {/*  icone du type de personne (enfant/agé/invalide... ) */}
          {this.renderGenderButton(type === 'personneACharge', name, index)}
        </div>
        {COMPOSITION_FIELDS_MAP.map(({ key }) => {
          const fname = `${name}.${key}`;
          const showCheckbox = shouldShowCheckbox(type === 'personneACharge', key, parentsCount);
          const disableCheckbox = shouldDisableParentIsole(key, parentsCount);
          return (
            <div key={key} className={styles.cell}>
              {showCheckbox && (
                <Field name={fname}>
                  {
                    ({ input }) => (
                      <Checkbox
                      { ...input }
                        checked={input.value}
                        classes={{ root: styles.checkbox }}
                        disabled={disableCheckbox}
                      />    
                    )
                  } 
                </Field>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  renderColumnLabels = () => {
    const { personnesACharge, declarants } = this.props;
    const childsCount = personnesACharge.length;
    const parentsCount = declarants.length;
    return (
      <div className={styles.labelsContainer}>
        {COMPOSITION_FIELDS_MAP.map(({ help, key, label }) => {
          const uniqKey = `label::${key}`;
          const showLabel = shouldShowLabel(key, parentsCount, childsCount);
          let className = styles.labels;
          if (!showLabel) className = `${className} ${styles.labelHidden}`;
          const columnLabel = getParentIsoleLabel(
            key,
            label,
            parentsCount,
            childsCount,
          );
          return (
            <div key={uniqKey} className={className}>
              {help && (
                <Tooltip
                  classes={{
                    popper: styles.tooltipContainer,
                    tooltip: styles.tooltipContent,
                  }}
                  title={help}>
                  <IconButton disableRipple className={styles.tooltipButton}>
                    <HelpOutlineIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
              {columnLabel}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <span className={styles.title}>Composition du foyer :</span>
        <div className={styles.flexColumns}>
          {/* LABELS */}
          {this.renderColumnLabels()}
          {/* PARENTS */}
          <div
            className={`${styles.flexColumns} ${styles.checkboxesContainer}`}>
            <div>
              <FieldArray name="declarants">
                {({ fields }) => (
                  <div className={styles.flexColumns}>
                    {fields.map(this.renderCompositionColumn('declarant'))}
                  </div>
                )}
              </FieldArray>
            </div>
            {/* CHILDS */}
            <div>
              <FieldArray name="personnesACharge">
                {({ fields }) => (
                  <div className={styles.flexColumns}>
                    {fields.map(this.renderCompositionColumn('personneACharge'))}
                  </div>
                )}
              </FieldArray>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
