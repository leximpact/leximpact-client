/* eslint-disable camelcase */
export interface ParametersState {
  dotations: {
    // Article L1613-1 du CGCT
    montants: {
      dgf: number;
    }
    communes: {
      dsr: {
        // Article L2334-20 du CGCT
        eligibilite: {
          popMax: number;
          popChefLieuMax: number;
        }
        // Article L2334-21  du CGCT
        bourgCentre: {
          eligibilite: {
            partPopCantonMin: number;
            exclusion: {
              agglomeration: {
                partPopDepartementMin: number;
                popMin: number;
                popCommuneMin: number;
              }
              canton: {
                popChefLieuMin: number;
              }
              potentielFinancier: {
                rapportPotentielFinancierMoyen: number;
              }
            }
          }
          attribution: {
            popLimite: number;
            effortFiscalLimite: number;
            coefMultiplicateurRevitalisationRurale: number;
            pourcentageAttributionMin: number;
            pourcentageAttributionMax: number;
            // plafonnementPopulation: {
            //   [recensement: number]: number;
            // }
          }
        }
        // Article L2334-22 du CGCT
        perequation: {
          eligibilite: {
            rapportPotentielFinancier: number;
          }
          attribution: {
            repartition: {
              ponderationPotentielFinancier: number;
              ponderationLongueurVoirie: number;
              ponderationNbreEnfants: number;
              ponderationPotentielFinancierParHectare: number;
            }
            pourcentageAttributionMin: number;
            pourcentageAttributionMax: number;
          }
        }
        // Article L2334-22-1 du CGCT
        cible: {
          eligibilite: {
            premieresCommunes: number;
            indiceSynthetique: {
              ponderationPotentielFinancier: number;
              ponderationRevenu: number;
            }
          }
        }
      }
    }
  };
  impot_revenu: {
    bareme: {
      seuils: number[];
      taux: number[];
    };
    decote: {
      seuil_celib: number;
      seuil_couple: number;
      taux: number;
    };
    plafond_qf: {
      abat_dom: {
        plaf_GuadMarReu: number;
        plaf_GuyMay: number;
        taux_GuadMarReu: number;
        taux_GuyMay: number;
      };
      celib: number;
      celib_enf: number;
      maries_ou_pacses: number;
      reduc_postplafond: number;
      reduc_postplafond_veuf: number;
    };
    calculNombreParts: {
      partsSelonNombrePAC: {
        veuf: number;
        mariesOuPacses: number;
        celibataire: number;
        divorce: number
      }[];
      partsParPACAuDela: number;
      partsParPACChargePartagee: {
        zeroChargePrincipale: {
          deuxPremiers: number;
          suivants: number
        };
        unChargePrincipale: {
          premier: number;
          suivants: number
        };
        deuxOuPlusChargePrincipale: {
          suivants: number
        };
      };
      bonusParentIsole: {
        auMoinsUnChargePrincipale: number;
        zeroChargePrincipaleUnPartage: number;
        zeroChargeprincipaleDeuxOuPlusPartage: number;
      };
    }
  };
}
