import BabyIcon from "@iconify/icons-twemoji/baby";
import ManCurlyHairedIcon from "@iconify/icons-twemoji/man-curly-haired";
import ManWhiteHairedIcon from "@iconify/icons-twemoji/man-white-haired";
import WomanCurlyHairedIcon from "@iconify/icons-twemoji/woman-curly-haired";
import WomanWhiteHairedIcon from "@iconify/icons-twemoji/woman-white-haired";
import { Icon } from "@iconify/react";
import Badge from "@material-ui/core/Badge";
import React, { Fragment } from "react";
import { CasType } from "../../../../redux/reducers/descriptions/ir";

import {
  Card, formatNumber, NeutralTooltip,
} from "../../../common";
import { RESIDENCE_ITEMS } from '../../common';
import SimpleCardImpactImpots from "./impact-impots";
import styles from "./SimpleCardComponent.module.scss";

interface Props {
  descCasType: CasType;
  handleRemoveCasType: (index: number) => any;
  handleShowEditCasTypesPopin: (index: number) => any;
  index: number;
}

class SimpleCard extends React.Component<Props> {
  renderLieuDeResidence = () => {
    const { descCasType } = this.props;
    const { residence } = descCasType;
    const { icon, label } = RESIDENCE_ITEMS.get(residence) as { icon: object, label: string };
    return (
      <NeutralTooltip placement="top" title={label}>
        <span>
          <Icon height="32" icon={icon} width="32" />
        </span>
      </NeutralTooltip>
    );
  };

  renderRevenuMensuel = () => {
    const { descCasType } = this.props;
    const { revenuImposable } = descCasType;
    const revenusMensuel = Math.round(revenuImposable);
    return (
      <NeutralTooltip
        placement="top"
        title="Revenus nets tels que délarés par le contribuable, divisés par 12">
        <div>
          <div className={styles.revenusMensuelLegend}>
            Revenus nets à déclarer
          </div>
          <div className={styles.revenusMensuelValue}>
            {formatNumber(revenusMensuel)}
            &nbsp;€/Mois
          </div>
        </div>
      </NeutralTooltip>
    );
  };

  renderPersonsIcons = () => {
    const { descCasType } = this.props;
    const personnesACharge = descCasType.personnesACharge;
    const declarants = descCasType.declarants;
    return (
      <div>
        {declarants.map((declarant, index) => {
          const { gender, invalide, retraite } = declarant;
          const key = `parent::person::icon::${index}`;
          const isMale = gender === 'male';
          
          let icon = isMale ? ManCurlyHairedIcon : WomanCurlyHairedIcon;
          if (retraite && isMale) icon = ManWhiteHairedIcon;
          if (retraite && !isMale) icon = WomanWhiteHairedIcon;
          return (
            <NeutralTooltip
              key={key}
              placement="top"
              title={retraite ? "Plus de 65 ans" : "Moins de 65 ans"}>
              <span>
                {!invalide && (
                  <Icon key={key} height="40" icon={icon} width="40" />
                )}
                {invalide && (
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
        {personnesACharge.map((personneACharge, index) => {
          const key = `child::person::icon::${index}`;
          const { invalide } = personneACharge;
          if (!invalide) {
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
