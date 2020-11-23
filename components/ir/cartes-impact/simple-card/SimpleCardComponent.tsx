import BabyIcon from "@iconify/icons-twemoji/baby";
import CactusIcon from "@iconify/icons-twemoji/cactus";
import DeciduousTreeIcon from "@iconify/icons-twemoji/deciduous-tree";
import ManCurlyHairedIcon from "@iconify/icons-twemoji/man-curly-haired";
import ManWhiteHairedIcon from "@iconify/icons-twemoji/man-white-haired";
import PalmTreeIcon from "@iconify/icons-twemoji/palm-tree";
import WomanCurlyHairedIcon from "@iconify/icons-twemoji/woman-curly-haired";
import WomanWhiteHairedIcon from "@iconify/icons-twemoji/woman-white-haired";
import { Icon } from "@iconify/react";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { get } from "lodash";
import React, { Fragment } from "react";

import { Card, DoublePalmTreeIcon, formatNumber, NeutralTooltip } from "../../../common";
import SimpleCardImpactImpots from "./impact-impots";
import styles from "./SimpleCardComponent.module.scss";

const RESIDENCE_ITEMS = [
  // Doit correspondre a ceux definis
  // dans /components/ajouter-cas-types/form/cas-types-lieu-residence
  {
    icon: DeciduousTreeIcon,
    key: "metropole",
    label: "Métropole",
  },
  {
    icon: PalmTreeIcon,
    key: "guadeloupe_martinique_reunion",
    label: "Guadeloupe, Martinique ou La Réunion",
  },
  {
    icon: DoublePalmTreeIcon,
    key: "mayotte_guyane",
    label: "Mayotte ou Guyane",
  },
  {
    icon: CactusIcon,
    key: "etranger",
    label: "Étranger",
  },
];

interface Props {
  descCasType: any;
  handleRemoveCasType: (index: number) => any;
  handleShowEditCasTypesPopin: (index: number) => any;
  index: number;
}

class SimpleCard extends React.Component<Props> {
  renderLieuDeResidence = () => {
    const { descCasType } = this.props;
    const { lieuResidence: index } = descCasType;
    const { icon, label } = RESIDENCE_ITEMS[index];
    return (
      <NeutralTooltip placement="top" title={label}>
        <span>
          <IconButton disabled classes={{ root: styles.residenceIcon }}>
            <Icon height="32" icon={icon} width="32" />
          </IconButton>
        </span>
      </NeutralTooltip>
    );
  };

  renderRevenuMensuel = () => {
    const { descCasType } = this.props;
    const { revenusNetMensuel } = descCasType;
    const revenusMensuel = Math.round(revenusNetMensuel);
    return (
      <NeutralTooltip
        placement="top"
        title="Revenus nets tels que délarés par le contribuable, divisés par 12">
        <span>
          <Typography classes={{ root: styles.revenusMensuelLegend }}>
            <span>Revenus nets à déclarer</span>
          </Typography>
          <Button disabled classes={{ root: styles.revenusMensuelWrapper }}>
            <span className={styles.revenusMensuelValue}>
              {formatNumber(revenusMensuel)}
              &nbsp;€/Mois
            </span>
          </Button>
        </span>
      </NeutralTooltip>
    );
  };

  renderPersonsIcons = () => {
    const { descCasType } = this.props;
    const childs = get(descCasType, "persons.childs");
    const parents = get(descCasType, "persons.parents");
    return (
      <div>
        {parents.map((obj, index) => {
          const { gender, invalide, plus65ans } = obj;
          const key = `parent::person::icon::${index}`;
          const isMale = Boolean(gender);
          const isInvalide = Boolean(invalide);
          const isRetraite = Boolean(plus65ans);
          let icon = isMale ? ManCurlyHairedIcon : WomanCurlyHairedIcon;
          if (isRetraite && isMale) icon = ManWhiteHairedIcon;
          if (isRetraite && !isMale) icon = WomanWhiteHairedIcon;
          return (
            <NeutralTooltip
              key={key}
              placement="top"
              title={isRetraite ? "Plus de 65 ans" : "Moins de 65 ans"}>
              <span>
                {!isInvalide && (
                  <Icon key={key} height="40" icon={icon} width="40" />
                )}
                {isInvalide && (
                  <Badge
                    key={key}
                    classes={{ badge: styles.badge, root: styles.badgeRoot }}
                    color="primary"
                    variant="dot">
                    <Icon height="40" icon={icon} width="40" />
                  </Badge>
                )}
              </span>
            </NeutralTooltip>
          );
        })}
        {childs.map((obj, index) => {
          const key = `child::person::icon::${index}`;
          const { invalide } = obj;
          const isInvalide = Boolean(invalide);
          if (!isInvalide) {
            return <Icon key={key} height="30" icon={BabyIcon} width="30" />;
          }
          return (
            <Badge
              key={key}
              classes={{ badge: styles.badge, root: styles.badgeRoot }}
              color="primary"
              variant="dot">
              <Icon height="30" icon={BabyIcon} width="30" />
            </Badge>
          );
        })}
      </div>
    );
  };


  render() {
    const {
      descCasType, handleRemoveCasType,
      handleShowEditCasTypesPopin, index,
    } = this.props;
    const { name } = descCasType;
    return (
      <Card
        colored
        content1={(
          <Fragment>
            <div className={styles.iconsContainer}>
              {this.renderPersonsIcons()}
              {this.renderLieuDeResidence()}
            </div>
            <div>{this.renderRevenuMensuel()}</div>
          </Fragment>
        )}
        content2={(
          <SimpleCardImpactImpots index={index} />
        )}
        title={name}
        onClose={handleRemoveCasType(index)}
        onEdit={handleShowEditCasTypesPopin(index)} />
    );
  }
}

export default SimpleCard;
