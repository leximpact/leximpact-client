import styles from "./Legende.module.scss";

export function Legende({ montrerPLF }: { montrerPLF: boolean }) {
  return (
    <div>
      <div className={styles.legend}>
        Légende :
      </div>
      <div>
        <span className={styles.initial}>Droit existant</span>
        {montrerPLF && (
          <span className={styles.plf}>
            {/* <a href="http://www.assemblee-nationale.fr/15/projets/pl2272.asp"> */}
              PLF
            {/* <OpenInNewIcon className={styles.icon} />
            </a> */}
          </span>
        )}
        <span className={styles.reform}>Mon amendement</span>
      </div>
    </div>
  );
}
