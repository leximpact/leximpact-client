import manCurlyHaired from "@iconify/icons-twemoji/man-curly-haired";
import womanCurlyHaired from "@iconify/icons-twemoji/woman-curly-haired";
import { Icon } from "@iconify/react";
import Router from "next/router";
import { PureComponent } from "react";

import styles from "./HomeNavigation.module.scss";

export class HomeNavigation extends PureComponent {
  render() {
    return (
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
        <div>
          <Icon height="30" icon={womanCurlyHaired} width="30" />
          &nbsp;
          <a onClick={() => Router.push("/recrutement")}>
            Rejoindre l&apos;équipe LexImpact
          </a>
          &nbsp;
          <Icon height="30" icon={manCurlyHaired} width="30" />
        </div>
      </div>
    );
  }
}
