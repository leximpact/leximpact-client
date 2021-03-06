import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { Fragment } from "react";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../redux/reducers";
import {
  ExpandableText,
  PrimaryExpandablePanel,
  SecondaryExpandablePanel,
  Values,
} from "../../common";
import fillArrayWith from "../../common/utils/array/fillArrayWith";
import { Alinea4a } from "./alinea-4a";
import { Alinea3 } from "./alinea3";
import styles from "./articles.module.scss";
import { Button } from "./buttons";
import { Plafonds, ReglesGenerales, ReglesSpecifiques } from "./quotient-familial";

type Parameters = RootState["parameters"];

interface Props extends Parameters {
  handleAddTranche: () => void;
  handleArticleChange: (value: number, name: string) => void;
  handleRemoveTranche: () => void;
}

export class Articles extends React.Component<Props> {
  gimmeIRPartsOfArticle = (i) => {
    const {
      amendement,
      base,
      handleArticleChange,
    } = this.props;

    let { plf } = this.props;
    plf = plf ?? null;

    const s = amendement.impot_revenu.bareme.seuils;
    const t = amendement.impot_revenu.bareme.taux;
    const bases = base.impot_revenu.bareme.seuils;
    const baset = base.impot_revenu.bareme.taux;
    const plfs = plf && plf.impot_revenu.bareme.seuils;
    const plft = plf && plf.impot_revenu.bareme.taux;

    const nbt = s.length;
    const newTranche = i > 4;
    // Part 1
    if (i === 0) {
      const baseValue = bases[Math.min(i, bases.length - 1)];
      const plfValue = plfs ? plfs[Math.min(i, plfs.length - 1)] : null;
      return (
        <div
          key={i}>
          {
            "1. L'impôt est calculé en appliquant à la fraction de chaque part de revenu qui excède "
          }
          <Values
            editable
            amendementValue={s[i]}
            baseValue={baseValue}
            plfValue={plfValue}
            symbol="€"
            onAmendementChange={value => handleArticleChange(value, `seuil${i}`)}
          />
          {" "}
          le taux de&nbsp;:
        </div>
      );
    }
    // Last part
    if (i === nbt) {
      const baseValuet = baset[Math.min(i, baset.length) - 1];
      const plfValuet = plft ? plft[Math.min(i, plft.length) - 1] : null;
      const baseValue = bases[Math.min(i - 1, bases.length - 1)];
      const plfValue = plfs ? plfs[Math.min(i - 1, plfs.length - 1)] : null;

      return (
        <div
          key={i}
          className={newTranche ? styles.newTranche : undefined}>
          –
          {" "}
          <Values
            editable
            amendementInputSize="small"
            amendementValue={t[i - 1]}
            baseValue={baseValuet}
            plfValue={plfValuet}
            symbol="%"
            onAmendementChange={value => handleArticleChange(value, `taux${i - 1}`)}
          />
          <br />
          pour la fraction supérieure à
          {" "}
          <Values
            amendementValue={s[i - 1]}
            baseValue={baseValue}
            editable={false}
            plfValue={plfValue}
            symbol="€"
          />
          .
        </div>
      );
    }
    // Other parts :
    const baseValuet = baset[Math.min(i, baset.length) - 1];
    const plfValuet = plft ? plft[Math.min(i, plft.length) - 1] : null;
    const baseValue = bases[Math.min(i, bases.length - 1)];
    const plfValue = plfs ? plfs[Math.min(i, plfs.length - 1)] : null;
    const baseValueminus1 = bases[Math.min(i - 1, bases.length - 1)];
    const plfValueminus1 = plfs ? plfs[Math.min(i - 1, plfs.length - 1)] : null;

    return (
      <div
        key={i}
        className={newTranche ? styles.newTranche : undefined}>
        –
        {" "}
        <Values
          editable
          amendementInputSize="small"
          amendementValue={t[i - 1]}
          baseValue={baseValuet}
          plfValue={plfValuet}
          symbol="%"
          onAmendementChange={value => handleArticleChange(value, `taux${i - 1}`)}
        />
        <br />
        pour la fraction supérieure à
        {" "}
        <Values
          amendementValue={s[i - 1]}
          baseValue={baseValueminus1}
          editable={false}
          plfValue={plfValueminus1}
          symbol="€"
        />
        <br />
        et inférieure ou égale à
        {" "}
        <Values
          editable
          amendementValue={s[i]}
          baseValue={baseValue}
          plfValue={plfValue}
          symbol="€"
          onAmendementChange={value => handleArticleChange(value, `seuil${i}`)}
        />
        {" "}
        ;
      </div>
    );
  };

  render() {
    const {
      amendement,
      handleAddTranche,
      handleRemoveTranche,
    } = this.props;
    const count = amendement.impot_revenu.bareme.seuils.length + 1;
    const articleTranches = fillArrayWith(count, this.gimmeIRPartsOfArticle);

    return (
      <Fragment>
        <div style={{ marginRight: "1em" }}>
          <PrimaryExpandablePanel
            expanded
            subTitle="Article 197 du CGI - I.1"
            title="Barème"
          >
            <br />
            I. En ce qui concerne les contribuables
            {" "}
            <ExpandableText>
              visés à l&apos;article 4 B, il est fait application des règles
              suivantes pour le calcul de l&apos;impôt sur le revenu :
            </ExpandableText>
            <br />
            <br />
            {articleTranches}
            <Grid container spacing={0}>
              <Grid item sm={3}>
                <Button caption="Ajouter ou" icons={<AddIcon />} onClick={handleAddTranche} />
              </Grid>
              <Grid item sm={6}>
                <Button caption="Supprimer une tranche" icons={<DeleteIcon />} onClick={handleRemoveTranche} />
              </Grid>
            </Grid>
          </PrimaryExpandablePanel>
          <PrimaryExpandablePanel
            subTitle="Articles 194, 195 et 197 du CGI"
            title="Quotient familial"
          >
            <SecondaryExpandablePanel
              subTitle="Articles 194 - I.§1"
              title="Règles générales"
            >
              <ReglesGenerales />
            </SecondaryExpandablePanel>
            <SecondaryExpandablePanel
              subTitle="Articles 197 - I.2"
              title="Plafonds"
            >
              <Plafonds />
            </SecondaryExpandablePanel>
            <SecondaryExpandablePanel
              subTitle="Articles 194 et 195"
              title="Règles spécifiques"
            >
              <ReglesSpecifiques />
            </SecondaryExpandablePanel>
          </PrimaryExpandablePanel>
          <PrimaryExpandablePanel
            subTitle="Article 197 du CGI - I.3"
            title="Réfaction outre-mer"
          >
            <Alinea3 />
          </PrimaryExpandablePanel>
          <PrimaryExpandablePanel
            subTitle="Article 197 du CGI - I.4a"
            title="Décote"
          >
            <Alinea4a />
          </PrimaryExpandablePanel>
        </div>
      </Fragment>
    );
  }
}
