import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";

import styles from "./texte-presentation-open-leximpact.module.scss";

function TextePresentationOpenLeximpact() {
  return (
    <Paper className={styles.paperItem}>
      <h2>LexImpact IR en accès libre</h2>
      <p>
        La version en accès libre de LexImpact IR permet à&nbsp;toutes et tous
        de simuler les impacts d&apos;une réforme sur des foyers
        fiscaux types. Le&nbsp;service ne vous permet pas de simuler votre
        situation personnelle.
      </p>

      <Divider className={styles.dividerMarge} />

      <p>
        Dans le cadre de l&apos;actuel périmètre, limité à&nbsp;l&apos;Article
        197 du Code général des impôts, concernant spécifiquement l&apos;impôt
        sur le revenu, LexImpact permet de simuler et de comparer :
      </p>
      <ul>
        <li>les impacts du code existant,</li>
        <li>
          les impacts d&apos;un amendement en faisant directement varier les
          paramètres du texte de loi,
        </li>
        <li>les impacts du projet de loi de finance pour l&apos;année N+1,</li>
      </ul>
      <p>sur des foyers fiscaux types.</p>

      <Divider className={styles.dividerMarge} />

      <p>
        Les paramètres modifiables dans l&apos;Article 197 du
        &nbsp;
        <abbr title="Code général des impôts">CGI</abbr>
        &nbsp;sont :
      </p>
      <ul>
        <li>le barème de l&apos;impôt sur le revenu,</li>
        <li>les plafonds du quotient familial,</li>
        <li>la décote,</li>
        <li>la réfaction outre-mers.</li>
      </ul>

      <p>
        La version en accès libre de LexImpact permet également de modifier
        le revenu net à déclarer des foyers fiscaux types prédéfinis sur l&apos;interface.
      </p>

      <Divider className={styles.dividerMarge} />

      <p>
        L&apos;utilisation de LexImpact est libre, facultative et
        gratuite ; toute utilisation du&nbsp;service est subordonnée à
        l&apos;acceptation préalable et au respect intégral des conditions
        générales d&apos;utilisation (CGU) disponibles ci-après&nbsp;:
      </p>

      <div className={styles.espaceVide} />

      <Link href="/conditions-d-utilisation-openleximpact">
        <Button fullWidth color="secondary" size="large" variant="contained">
          CGU LexImpact en accès libre
        </Button>
      </Link>
    </Paper>
  );
}

export default TextePresentationOpenLeximpact;
