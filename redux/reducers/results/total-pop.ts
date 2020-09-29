/* eslint-disable camelcase */
import { get } from "lodash";

interface State {
  deciles: {
    apres?: number;
    avant: number;
    poids: number;
    plf?: number;
  }[];
  foyersFiscauxTouches: {
    avant_to_plf?: {
      neutre?: number;
      neutre_zero?: number;
      gagnant?: number;
      perdant?: number;
      perdant_zero?: number;
    }
    avant_to_apres?: {
      neutre?: number;
      neutre_zero?: number;
      gagnant?: number;
      perdant?: number;
      perdant_zero?: number;
    }
    plf_to_apres?: {
      neutre?: number;
      neutre_zero?: number;
      gagnant?: number;
      perdant?: number;
      perdant_zero?: number;
    }
  };
  frontieresDeciles: number[];
  total: {
    apres?: number;
    avant: number;
    plf?: number;
  };
}

const DEFAULT_STATE: State = {
  deciles: [
    {
      avant: 0.0,
      plf: 0.0,
      poids: 3833390.8386118417,
    },
    {
      avant: 0.0,
      plf: 0.0,
      poids: 3833612.0083438647,
    },
    {
      avant: 0.0,
      plf: 0.0,
      poids: 3833737.9723674757,
    },
    {
      avant: 123386756.50042535,
      plf: 118770157.36275505,
      poids: 3832751.1310638115,
    },
    {
      avant: 739730870.5154936,
      plf: 731749307.8116965,
      poids: 3833779.58568383,
    },
    {
      avant: 1278437976.3084152,
      plf: 1270336447.503093,
      poids: 3832597.835886985,
    },
    {
      avant: 2142027699.4692807,
      plf: 2125102897.1440628,
      poids: 3834669.458008446,
    },
    {
      avant: 4539893987.457996,
      plf: 4511764834.294169,
      poids: 3831980.976329554,
    },
    {
      avant: 8853910310.312555,
      plf: 8815587098.751413,
      poids: 3833264.7942048423,
    },
    {
      avant: 49222612399.43577,
      plf: 49098079218.32603,
      poids: 3833192.3994993195,
    },
  ],
  foyersFiscauxTouches: {
    // avant_to_apres: {
    //   gagnant: 17934870,
    //   neutre_zero: 20398107,
    // },
    avant_to_plf: {
      gagnant: 17934870,
      neutre_zero: 20398107,
    },
    // plf_to_apres: {
    //   neutre: 17889648,
    //   neutre_zero: 20443329,
    // },
  },
  frontieresDeciles: [
    3559.0888671875,
    9479.3203125,
    13182.486328125,
    16689.259765625,
    20167.779296875,
    24732.041015625,
    30657.201171875,
    38466.77734375,
    53450.5390625,
    6513798.0,
  ],
  total: {
    avant: 66900000000.00001,
    plf: 66671389961.193146,
  },
};


const totalPop = (state: State = DEFAULT_STATE, action): State => {
  switch (action.type) {
  case "onSimPopFetchResult":
    return {
      deciles: get(action, "data.deciles"),
      foyersFiscauxTouches: get(action, "data.foyers_fiscaux_touches"),
      frontieresDeciles: get(action, "data.frontieres_deciles"),
      total: get(action, "data.total"),
    };
  default:
    return state;
  }
};

export default totalPop;
