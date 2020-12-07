import DeciduousTreeIcon from "@iconify/icons-twemoji/deciduous-tree";
import PalmTreeIcon from "@iconify/icons-twemoji/palm-tree";
import { DoublePalmTreeIcon } from '../../common'

import { CasType } from "../../../redux/reducers/descriptions/ir";

export const RESIDENCE_ITEMS: Map<CasType['residence'], {
  icon: object;
  label: string;
}> = new Map([
  ["metropole", {
    icon: DeciduousTreeIcon,
    label: "Métropole",
  }],
  ["GuadMarReu", {
    icon: PalmTreeIcon,
    label: "Guadeloupe, Martinique ou La Réunion",
  }],
  ["GuyMay", {
    icon: DoublePalmTreeIcon,
    label: "Mayotte ou Guyane",
  }],  
]);