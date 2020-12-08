import DeciduousTreeIcon from "@iconify/icons-twemoji/deciduous-tree";
import PalmTreeIcon from "@iconify/icons-twemoji/palm-tree";

// eslint-disable-next-line no-unused-vars
import { CasType } from "../../../redux/reducers/descriptions/ir";
import { DoublePalmTreeIcon } from "../../common";

export const RESIDENCE_ITEMS: Map<CasType["residence"], {
  icon: object;
  label: string;
}> = new Map([
  [
    "metropole", {
      icon: DeciduousTreeIcon,
      label: "Métropole",
    },
  ],
  [
    "GuadMarReu", {
      icon: PalmTreeIcon,
      label: "Guadeloupe, Martinique ou La Réunion",
    },
  ],
  [
    "GuyMay", {
      icon: DoublePalmTreeIcon,
      label: "Mayotte ou Guyane",
    },
  ],
]);
