/* eslint-disable sort-keys */
// eslint-disable-next-line no-unused-vars
import { ParametersState } from "../../../types/parameters";

export const BASE_DEFAULT_STATE: ParametersState = {
  dotations: {
    // Article L1613-1 du CGCT
    montants: {
      dgf: 26846874416,
    },
    communes: {
      dsr: {
        // Article L2334-20 du CGCT
        eligibilite: {
          popChefLieuMax: 20000,
          popMax: 10000,
        },
        // Article L2334-21  du CGCT
        bourgCentre: {
          eligibilite: {
            partPopCantonMin: 15,
            exclusion: {
              agglomeration: {
                partPopDepartementMin: 10,
                popMin: 250000,
                popCommuneMin: 100000,
              },
              canton: {
                popChefLieuMin: 10000,
              },
              potentielFinancier: {
                rapportPotentielFinancierMoyen: 2,
              },
            },
          },
          attribution: {
            popLimite: 10000,
            effortFiscalLimite: 1.2,
            coefMultiplicateurRevitalisationRurale: 1.3,
            pourcentageAttributionMin: 90,
            pourcentageAttributionMax: 120,
            // plafonnementPopulation: {
            //   500: 100,
            //   1000: 500,
            //   2250: 1500,
            // },
          },
        },
        // Article L2334-22 du CGCT
        perequation: {
          eligibilite: {
            rapportPotentielFinancier: 2,
          },
          attribution: {
            repartition: {
              ponderationPotentielFinancier: 30,
              ponderationLongueurVoirie: 30,
              ponderationNbreEnfants: 30,
              ponderationPotentielFinancierParHectare: 10,
            },
            pourcentageAttributionMin: 90,
            pourcentageAttributionMax: 120,
          },
        },
        // Article L2334-22-1 du CGCT
        cible: {
          eligibilite: {
            premieresCommunes: 10000,
            indiceSynthetique: {
              ponderationPotentielFinancier: 70,
              ponderationRevenu: 30,
            },
          },
        },
      },
    },
  },
  impot_revenu: {
    bareme: {
      seuils: [10064, 25659, 73369, 157806],
      taux: [11, 30, 41, 45],
    },
    calculNombreParts: {
      bonusParentIsole: {
        auMoinsUnChargePrincipale: 0.5,
        zeroChargePrincipaleUnPartage: 0.25,
        zeroChargeprincipaleDeuxOuPlusPartage: 0.5,
      },
      partsParPACAuDela: 1,
      partsParPACChargePartagee: {
        deuxOuPlusChargePrincipale: { suivants: 0.5 },
        unChargePrincipale: { premier: 0.25, suivants: 0.5 },
        zeroChargePrincipale: { deuxPremiers: 0.25, suivants: 0.5 },
      },
      partsSelonNombrePAC: [
        {
          celibataire: 1, divorce: 1, mariesOuPacses: 2, veuf: 1,
        },
        {
          celibataire: 1.5, divorce: 1.5, mariesOuPacses: 2.5, veuf: 2.5,
        },
        {
          celibataire: 2, divorce: 2, mariesOuPacses: 3, veuf: 3,
        },
        {
          celibataire: 3, divorce: 3, mariesOuPacses: 4, veuf: 4,
        },
        {
          celibataire: 4, divorce: 4, mariesOuPacses: 5, veuf: 5,
        },
        {
          celibataire: 5, divorce: 5, mariesOuPacses: 6, veuf: 6,
        },
        {
          celibataire: 6, divorce: 6, mariesOuPacses: 7, veuf: 7,
        },
      ],
    },
    decote: {
      seuil_celib: 777,
      seuil_couple: 1286,
      taux: 45.25,
    },
    plafond_qf: {
      abat_dom: {
        plaf_GuadMarReu: 2450,
        plaf_GuyMay: 4050,
        taux_GuadMarReu: 30,
        taux_GuyMay: 40,
      },
      celib: 936,
      celib_enf: 3697,
      maries_ou_pacses: 1567,
      reduc_postplafond: 1562,
      reduc_postplafond_veuf: 1745,
    },
  },
};

export const base = (state = BASE_DEFAULT_STATE) => state;
