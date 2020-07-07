export interface DotationsState {
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
}
