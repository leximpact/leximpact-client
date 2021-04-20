import styles from "./texte-mentions-legales.module.scss";

function MyComponent() {
  return (
    <section className={styles.sectionText}>
      <h1>Mentions légales</h1>

      <h2>Éditeur</h2>
      <hr />

      <p>
        Equipe Leximpact de L&apos;Assemblée nationale
      </p>
      <p>126, rue de l&apos;Université - 75355 Paris 07 SP.</p>

      <div className={styles.espaceVide} />

      <h2>Site Internet</h2>
      <hr />

      <p>
        Directeur de la publication : Secrétaire général de l&apos;Assemblée nationale.
      </p>

      <p>Michel Moreau</p>

      <div className={styles.espaceVide} />

      <h2>Hébergeur</h2>
      <hr />

      <p>Hébergé par Scaleway SAS</p>

      <p>
        BP 438
        <br />
        75366 Paris cedex 08
        <br />
        France
      </p>

      <div className={styles.espaceVide} />

      <h2>Crédits</h2>
      <hr />

      <p>
        Les emojis utilisés proviennent de la librairie&nbsp;
        <a
          href="https://twemoji.twitter.com/"
          rel="noopener noreferrer"
          target="_blank">
          Twemoji
        </a>
        , sous licence&nbsp;
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          rel="noopener noreferrer"
          target="_blank">
          CC-BY 4.0
        </a>
        .
      </p>
    </section>
  );
}

export default MyComponent;
