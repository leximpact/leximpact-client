import manCurlyHaired from "@iconify/icons-twemoji/man-curly-haired";
import womanCurlyHaired from "@iconify/icons-twemoji/woman-curly-haired";
import { Icon } from "@iconify/react";
import Router from "next/router";
import { PureComponent } from "react";

import recrutementStyles from "../../../../pages/recrutement.module.scss";
import styles from "./HomeNavigation.module.scss";

export class HomeNavigation extends PureComponent {
  render() {
    return (
      <div>
        <div className={styles.navigation}>
          <h1>
            Estimer les impacts
            <br />
            d&apos;une modification de la loi :
          </h1>
          <button type="button" onClick={() => Router.push("/ir")}>
            <img alt="" src="/icons/picto-impot-sur-le-revenu.png" />
            sur l&apos;impôt sur le revenu
          </button>
          <button type="button" onClick={() => Router.push("/dotations")}>
            <img alt="" src="/icons/picto-dotations-communes.png" />
            sur les dotations aux communes
          </button>
          <div>
            <a href="https://doodle.com/mm/equipeleximpact/permanence">
              Prendre un rendez-vous avec LexImpact
            </a>
          </div>
        </div>
        <button
          className={recrutementStyles.buttonRecrutement}
          type="button"
          onClick={() => Router.push("/recrutement")}>
          <Icon height="30" icon={womanCurlyHaired} width="30" />
          &nbsp;
          LexImpact recrute. Rejoignez-nous !
          <Icon height="30" icon={manCurlyHaired} width="30" />
        </button>
      </div>
    );
  }
}
