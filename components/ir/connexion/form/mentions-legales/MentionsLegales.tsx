import Link from "next/link";

import styles from "./MentionsLegales.module.scss";

export const MentionsLegales = () => (
  <div className={styles.mentionsLegales}>
    <span>
      * La version en accès restreint de LexImpact IR s’appuie sur des données couvertes
      par des secrets protégés par la loi. Ainsi seules les personnes dûment habilitées peuvent
      y avoir accès. Pour plus d’informations veuillez consulter&nbsp;
    </span>
    <Link href="/presentation-et-cgu">
      nos conditions générales d’utilisation.
    </Link>
  </div>
);
