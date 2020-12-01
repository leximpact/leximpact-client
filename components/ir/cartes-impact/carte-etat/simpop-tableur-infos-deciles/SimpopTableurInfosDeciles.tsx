import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../../redux/reducers";
import { formatNumber } from "../../../../common";
import styles from "./SimpopTableurInfosDeciles.module.scss";

const NOMBRE_DECILES = 10;
let id = 0;

interface Props {
  deciles: RootState["results"]["totalPop"]["deciles"];
  frontieresDeciles: RootState["results"]["totalPop"]["frontieresDeciles"];
}

function createFromDeciles(index: number, decile: Props["deciles"][0], frontiereDecile: Props["frontieresDeciles"][0]) {
  let impactMoyenFoyerPlf: string | undefined;
  if (typeof decile.plf === "number") {
    impactMoyenFoyerPlf = decile.avant
      ? formatNumber(Math.round((decile.plf / decile.avant - 1) * 100))
      : "-";
  }

  let impactMoyenFoyerReforme: string | undefined;
  if (typeof decile.apres === "number") {
    impactMoyenFoyerReforme = decile.avant
      ? formatNumber(Math.round((decile.apres / decile.avant - 1) * 100))
      : "-";
  }

  const impotMoyenFoyer = formatNumber(Math.round(decile.avant / decile.poids));

  let impotMoyenFoyerPlf: string | undefined;
  if (typeof decile.plf === "number") {
    impotMoyenFoyerPlf = formatNumber(Math.round(decile.plf / decile.poids));
  }

  let impotMoyenFoyerReforme: string | undefined;
  if (typeof decile.apres === "number") {
    impotMoyenFoyerReforme = formatNumber(Math.round(decile.apres / decile.poids));
  }

  const recettesEtat = formatNumber(Math.round(decile.avant / 10000000) / 100);
  let recettesEtatPlf: string | undefined;
  if (typeof decile.plf === "number") {
    recettesEtatPlf = formatNumber(Math.round(decile.plf / 10000000) / 100);
  }

  let recettesEtatReforme: string | undefined;
  if (typeof decile.apres === "number") {
    recettesEtatReforme = formatNumber(Math.round(decile.apres / 10000000) / 100);
  }
  const frontiere = index + 1 < NOMBRE_DECILES ? formatNumber(Math.round(frontiereDecile)) : "-";

  id += 1;
  return {
    decile: index + 1,
    frontiereDecile: frontiere,
    id,
    impactMoyenFoyerPlf,
    impactMoyenFoyerReforme,
    impotMoyenFoyer,
    impotMoyenFoyerPlf,
    impotMoyenFoyerReforme,
    recettesEtat,
    recettesEtatPlf,
    recettesEtatReforme,
  };
}

function imageDecile(decileId) {
  const imageId = `imageDecile${decileId}`;
  const imagePath = `/static/images/decile${decileId}.png`;
  return <img key={imageId} alt="" height="24" src={imagePath} width="24" />;
}

export function SimpopTableurInfosDeciles({ deciles, frontieresDeciles }: Props) {
  const rows = deciles.map(
    (currElement, index) => createFromDeciles(index, currElement, frontieresDeciles[index]),
  );
  const NON_APPLICABLE = "—";

  return (
    <Table>
      <TableHead>
        <TableRow classes={{ root: styles.tableHeader }}>
          <TableCell classes={{ root: styles.cellStyle }}>
            <b>Décile</b>
          </TableCell>
          <TableCell classes={{ root: styles.cellStyle }}>
            <b>Revenu&nbsp;fiscal de&nbsp;référence</b>
            <br />
            (limite supérieure)
          </TableCell>
          <TableCell classes={{ root: styles.cellStyle }}>
            <b>Impact moyen sur le foyer</b>
            <br />
            (par rapport au code existant)
          </TableCell>
          <TableCell classes={{ root: styles.cellStyle }}>
            <b>Impôt moyen des foyers</b>
            <br />
            (par an)
          </TableCell>
          <TableCell classes={{ root: styles.cellStyle }}>
            <b>Recettes pour l&apos;État</b>
            <br />
            (en Milliards d&apos;euros)
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell classes={{ root: styles.cellStyle }}>
              {imageDecile(row.decile)}
            </TableCell>
            <TableCell classes={{ root: styles.cellStyle }}>
              &#10877;&nbsp;
              {row.frontiereDecile === "-" ? (
                <span className={styles.infinity}>∞</span>
              ) : (
                row.frontiereDecile
              )}
              €/an
            </TableCell>
            <TableCell classes={{ root: styles.cellStyle }}>
              {
                row.impactMoyenFoyerPlf === undefined
                  ? null
                  : (
                    <span className={styles.plf}>
                      {row.impactMoyenFoyerPlf === "-"
                        ? NON_APPLICABLE
                        : `${row.impactMoyenFoyerPlf}%`}
                    </span>
                  )
              }
              &nbsp;
              {
                row.impactMoyenFoyerReforme === undefined
                  ? null
                  : (
                    <span className={styles.reform}>
                      {row.impactMoyenFoyerReforme === "-"
                        ? NON_APPLICABLE
                        : `${row.impactMoyenFoyerReforme}%`}
                    </span>
                  )
              }
            </TableCell>
            <TableCell classes={{ root: styles.cellStyle }}>
              <span className={styles.base}>
                {row.impotMoyenFoyer}
                €
              </span>
              &nbsp;
              {
                row.impotMoyenFoyerPlf === undefined
                  ? null
                  : (
                    <span className={styles.plf}>
                      {row.impotMoyenFoyerPlf}
                      €
                    </span>
                  )
              }
              &nbsp;
              {
                row.impotMoyenFoyerReforme === undefined
                  ? null
                  : (
                    <span className={styles.reform}>
                      {row.impotMoyenFoyerReforme}
                      €
                    </span>
                  )
              }
            </TableCell>
            <TableCell classes={{ root: styles.cellStyle }}>
              <span className={styles.base}>
                {row.recettesEtat}
                Md€
              </span>
              &nbsp;
              {
                row.recettesEtatPlf === undefined
                  ? null
                  : (
                    <span className={styles.plf}>
                      {row.recettesEtatPlf}
                      Md€
                    </span>
                  )
              }
              &nbsp;
              {
                row.recettesEtatReforme === undefined
                  ? null
                  : (
                    <span className={styles.reform}>
                      {row.recettesEtatReforme}
                      Md€
                    </span>
                  )
              }
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
