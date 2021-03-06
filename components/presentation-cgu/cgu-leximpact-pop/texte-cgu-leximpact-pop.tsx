import Divider from "@material-ui/core/Divider";

import styles from "./texte-cgu-leximpact-pop.module.scss";

function TexteCguLeximpactPop() {
  return (
    <section className={styles.sectionText}>
      <h1>Conditions d&apos;utilisation de la version en accès restreint de LexImpact IR</h1>

      <p>
        Pour fournir les impacts agrégés sur le budget de l’État et leurs effets
        sur des déciles de population, LexImpact s’appuie sur une base de
        données, la&nbsp;
        <a
          href="https://www.insee.fr/fr/metadonnees/source/serie/s1231/documentation-methodologique"
          rel="noopener noreferrer"
          target="_blank">
          base ERFS FPR
        </a>
        , dont le service producteur est l&apos;
        <a href="https://insee.fr" rel="noopener noreferrer" target="_blank">
          INSEE
        </a>
        . Ces&#xA0;données sont couvertes par des secrets protégés par la loi,
        et notamment le secret statistique.
      </p>

      <p>
        Dans le cadre de ce partenariat et afin de préserver le secret
        statistique,&nbsp;
        <strong>
          ce service est uniquement ouvert aux personnes habilitées suivantes
        </strong>
        &nbsp;:
      </p>
      <ul>
        <li>les députés et députées de l’Assemblée nationale, </li>
        <li>leurs collaborateurs et collaboratrices parlementaires, </li>
        <li>
          les administrateurs et administratrices de l’Assemblée nationale,
        </li>
        <li>
          un échantillon restreint d&apos;utilisateurs et utilisatrices au Sénat
          pour expérimentation.
        </li>
      </ul>

      <p>
        Les habilitations sont accordées et sous le contrôle exclusif des
        services de l’Assemblée nationale et des député·e·s.
      </p>

      <p>
        <strong>
          Il est absolument nécessaire de préserver la confidentialité des
          données auxquelles le service vous donne accès. Toute violation de
          cette confidentialité vous expose à des sanctions pénales
        </strong>
        &nbsp; comme stipulées dans l’
        <a
          href="https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=4DD6F3DB5C5E37E9A1B6AB6733B4A8D5.tplgfr21s_3?idArticle=LEGIARTI000006417945&cidTexte=LEGITEXT000006070719&categorieLien=id&dateTexte="
          rel="noopener noreferrer"
          target="_blank">
          Article 226-13 du Code pénal
        </a>
        .
      </p>

      <div className={styles.espaceVide} />

      <h2>Vocabulaire</h2>
      <hr />

      <p>« Nous » se réfère à l&apos;éditeur de LexImpact IR</p>
      <p>« Vous » se réfère à un·e usager habilité·e de LexImpact IR</p>

      <div className={styles.espaceVide} />

      <h2>Utilisation</h2>
      <hr />

      <p>
        Si vous effectuez une simulation LexImpact IR, vous acceptez ces
        conditions d&apos;utilisation, comme indiqué dans l&apos;
        <a
          href="https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=4DD6F3DB5C5E37E9A1B6AB6733B4A8D5.tplgfr21s_3?idArticle=LEGIARTI000031367350&cidTexte=LEGITEXT000031366350&categorieLien=id&dateTexte="
          rel="noopener noreferrer"
          target="_blank">
          Article L. 112-9 du Code des relations entre le public et
          l&apos;administration
        </a>
        .
      </p>

      <p>
        L&apos;utilisation de LexImpact IR requiert une connexion internet et
        un navigateur récent, LexImpact IR ne&nbsp;fonctionne pas sur Internet
        Explorer. Vous pouvez installer en autonomie Chrome ou Firefox, sans
        droits d&apos;administration sur votre poste.
      </p>

      <p>
        Nous nous réservons le droit de bloquer, sans information préalable ni
        compensation financière, les usages mettant en péril l&apos;utilisation
        du logiciel par d&apos;autres usagers. Cela nous permet d&apos;anticiper
        d&apos;éventuelles attaques par déni de service.
      </p>

      <div className={styles.espaceVide} />

      <h2>Conditions d&apos;accès au service</h2>
      <hr />

      <p>
        Actuellement, seulement les personnes dûment habilitées ci-dessous sont
        autorisées à accéder au service :
      </p>
      <ul>
        <li>les députés et députées de l&apos;Assemblée nationale, </li>
        <li>leurs collaborateurs et collaboratrices parlementaires, </li>
        <li>
          les administrateurs et administratrices de l&apos;Assemblée nationale,
        </li>
        <li>
          un échantillon restreint d&apos;utilisateurs et utilisatrices au Sénat pour
          expérimentation.
        </li>
      </ul>

      <p>
        <b>
          Si vous faites partie des personnes telles que listées au paragraphe
          précédent
          {" "}
          <br />
          et que vous n&apos;arrivez pas à vous connecter à LexImpact IR :
        </b>
      </p>
      <Divider className={styles.dividerSansMarge} />

      <ol>
        <li>
          Veuillez vérifier que vous avez bien utilisé votre adresse mail
          professionnelle de l&apos;Assemblée nationale ou du Sénat. Les noms de
          domaine autorisés sont présents par défaut dans l&apos;interface.
          {" "}
        </li>

        <li>
          Veuillez vérifier que vous n&apos;avez pas fait une erreur de frappe,
          ou que vous n&apos;avez pas écrit votre adresse mail en entier. Seule
          la partie précédent le @nom-de-domaine vous est en réalité demandée.
        </li>

        <li>
          Si vous utilisez votre adresse mail professionnelle pour la première
          fois, il se peut qu&apos;elle n&apos;ait pas été activée&nbsp;;
          veuillez directement contacter le Service des Systèmes
          d&apos;Information de votre institution.
        </li>

        <li>
          En dernier recours, n&apos;hésitez pas à nous envoyer une demande par
          le biais du formulaire de&nbsp;contact.
        </li>
      </ol>

      <p>
        <b>
          Si vous ne faites pas partie des personnes habilitées, que vous
          participez professionnellement
          {" "}
          <br />
          {" "}
à l&apos;élaboration de la loi
          et que vous souhaitez accéder au service :
        </b>
      </p>
      <Divider className={styles.dividerSansMarge} />

      <ul>
        <li>
          L&apos;accord de l&apos;INSEE est indispensable pour étendre
          l&apos;accès de la version en accès restreint de LexImpact IR à tout nouvel organisme.
          {" "}
        </li>

        <li>
          Merci de bien vouloir nous transmettre une demande par le biais de
          notre formulaire de&nbsp;contact en indiquant dans l&apos;objet
          «&nbsp;demande d’accès LexImpact IR&nbsp;».
        </li>
      </ul>

      <p>
        L&apos;envoi de cette demande ne vaut en aucun cas garantie d&apos;une
        acceptation d&apos;habilitation.
      </p>

      <div className={styles.espaceVide} />

      <h2>Vos données</h2>
      <hr />

      <p>
        Dans le cadre du partenariat avec l&apos;INSEE et afin de préserver le
        secret statistique, la liste des personnes ayant accès à l&apos;outil de
        simulation est stockée, tenue à&nbsp;jour en permanence et transmise
        régulièrement à&nbsp;l&apos;INSEE. Pour accéder au service, LexImpact
        POP vous demande votre adresse mail. Afin d&apos;éviter les usages
        abusifs, LexImpact IR conserve également des données sur le nombre de
        simulations sur la population effectuées par usager. Ces informations ne seront en aucun
        cas utilisées pour d&apos;autres fins ou revendues à un tiers.
      </p>

      <p>
        Nous mettons également à disposition un formulaire de contact dans le
        cas où vous auriez une demande ou bien un retour d’expérience à nous
        partager. Dans ce cadre, nous nous engageons à ne conserver que les
        données anonymisées de nos échanges. Ces informations nous permettront
        d&apos;améliorer le service. Toutes les données directement
        identifiantes (nom, adresse, …) seront supprimées dans un délai d’un an.
      </p>

      <p>
        Nous nous engageons à ne jamais exploiter les informations que vous nous
        transmettrez dans un but commercial ou publicitaire. De manière
        générale, LexImpact IR n&apos;accepte aucune forme de publicité.
      </p>

      <p>
        Dans le but d&apos;évaluer la performance du service et son utilité,
        nous collectons également des données anonymes d&apos;audience,
        indépendamment des simulations effectuées.
      </p>

      <div className={styles.espaceVide} />

      <h2>Cookies</h2>
      <hr />

      <p>
        Nous utilisons des cookies persistants afin d&apos;améliorer
        l&apos;expérience utilisateur. Ils permettent notamment la sauvegarde de
        vos cas types. Ces cookies sont conservés sur votre ordinateur même
        après fermeture de votre navigateur et réutilisés lors des prochaines
        visites sur nos sites.
      </p>
      <div className={styles.espaceVide} />

      <h2>Absence de garantie de service</h2>
      <hr />

      <p>
        Nous mettons LexImpact IR à disposition sans garantie sur sa
        disponibilité, avec obligation de moyens et non de résultats. Cela
        signifie que d&apos;éventuelles indisponibilités n&apos;ouvriront pas
        droit à compensation financière.
      </p>

      <div className={styles.espaceVide} />

      <h2>Absence de garantie de résultat</h2>
      <hr />

      <p>
        {" "}
        Les résultats calculés par ce simulateur ont une valeur informative et
        ne présentent en aucun cas une&nbsp;garantie pour l&apos;usager.
      </p>

      <p>
        {" "}
        La simulation d&apos;impact sur un foyer fiscal type dépend à la fois de
        l’interface LexImpact IR mais également des mises à jour régulières
        d&apos;OpenFisca. Dès qu&apos;une loi est modifiée, les équipes
        contributrices et bénévoles d’OpenFisca se chargent de faire évoluer le
        code informatique pour qu&apos;il fonctionne selon la nouvelle
        réglementation en vigueur. Nous ne pouvons garantir le délai de cette
        mise à jour.
      </p>

      <p>
        {" "}
        LexImpact IR n&apos;est pas un simulateur d&apos;impôt sur le revenu
        individuel, c&apos;est un outil de chiffrage conçu pour évaluer les
        impacts d&apos;une réforme. Les résultats calculés par ce simulateur ont
        une valeur informative et ne représentent en aucun cas une décision
        d&apos;ouverture de droits. Pour une simulation de votre impôt sur
        le&nbsp;revenu personnel,&nbsp;
        <a href="https://www3.impots.gouv.fr/simulateur/calcul_impot/2019/index.htm">
          le service de la DGFIP
        </a>
        {" "}
        est disponible.
      </p>

      <p>
        {" "}
        Par ailleurs, concernant les impacts agrégés sur le budget de
        l&apos;État et leurs effets sur des déciles de&nbsp;population,
        LexImpact IR ne propose pas une analyse des effets comportementaux.
        Cela signifie que LexImpact IR se tient stricto sensu aux effets
        théoriques de l&apos;application de la loi, sans prendre en&nbsp;compte
        les éventuels changements de comportements des contribuables (par
        exemple, le départ de&nbsp;français à l&apos;étranger ou le retour de
        non résidents fiscaux).
      </p>

      <p>
        En raison des limites inhérentes à l&apos;échantillon employé et aux
        méthodes utilisées pour extraire de cette base de données les
        informations nécessaires au calcul des effets agrégés des modifications
        de la loi, Leximpact IR ne saurait garantir l&apos;exactitude des
        prévisions d&apos;effets sur la population affichées dans l&apos;interface,
        qui sont seulement données à titre indicatif.
        Les résultats obtenus sont à considérer comme un ordre de grandeur.
      </p>

      <div className={styles.espaceVide} />

      <h2>Évolutions</h2>
      <hr />

      <p>
        Nous pouvons faire évoluer LexImpact IR sans information préalable.
        Nous ajoutons régulièrement des variables, raffinons l&apos;interface et
        modifions des formulations sur la base de vos retours et des évolutions
        règlementaires.
      </p>

      <p>
        Nous pouvons suspendre l&apos;accès à LexImpact IR sans information
        préalable, notamment pour des raisons de maintenance. Nous mettons
        l&apos;application à jour plusieurs fois par mois.
        L&apos;indisponibilité ne dépasse généralement pas une dizaine de
        secondes.
      </p>

      <p>
        Nous pouvons aussi amender ces conditions d&apos;utilisation sans
        préavis. Les utilisateurs sont tenus de&nbsp;consulter régulièrement les
        CGU à jour.
      </p>
    </section>
  );
}

export default TexteCguLeximpactPop;
