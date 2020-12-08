import babyIcon from "@iconify/icons-twemoji/baby";
import manCurlyHaired from "@iconify/icons-twemoji/man-curly-haired";
import manWhiteHaired from "@iconify/icons-twemoji/man-white-haired";
import womanCurlyHaired from "@iconify/icons-twemoji/woman-curly-haired";
import womanWhiteHaired from "@iconify/icons-twemoji/woman-white-haired";

// eslint-disable-next-line no-unused-vars
import { CasType } from "../../../../../redux/reducers/descriptions/ir";

const ALLOWED_FOR_CHILDS = ["invalide", "chargePartagee"];
const ALLOWED_FOR_PARENTS = [
  "invalide",
  "parentIsole",
  "plus65ans",
  "veufVeuve",
  "ancienCombattant",
];

export const getIconForParentPerson = (declarant: CasType["declarants"][0]) => {
  const { gender, retraite } = declarant;
  if (gender === "male") {
    return retraite ? manWhiteHaired : manCurlyHaired;
  }
  return retraite ? womanWhiteHaired : womanCurlyHaired;
};

export const getIconForChildPerson = () => babyIcon;

export const getParentIsoleLabel = (key, label, parentsCount, childsCount) => {
  if (key !== "parentIsole") return label;
  return childsCount <= 0 ? "Parent seul" : label;
};

export const shouldShowLabel = (key, parentsCount, childsCount) => {
  if (key === "veufVeuve" && parentsCount >= 2) return false;
  if (key === "parentIsole" && parentsCount >= 2) return false;
  if (key === "chargePartagee" && childsCount <= 0) return false;
  return true;
};

export const shouldDisableVeufVeuve = (key, parentsCount) => {
  if (key !== "veufVeuve") return false;
  return parentsCount > 1;
};

export const shouldDisableParentIsole = (key, parentsCount) => {
  if (key !== "parentIsole") return false;
  return parentsCount > 1;
};

export const shouldShowCheckbox = (isChild, key, parentsCount) => {
  const allowed = isChild ? ALLOWED_FOR_CHILDS : ALLOWED_FOR_PARENTS;
  const existsInAllowed = allowed.indexOf(key) !== -1;
  if (!existsInAllowed) return false;
  if (key === "veufVeuve") {
    const disableVeufVeuve = shouldDisableVeufVeuve(key, parentsCount);
    return !disableVeufVeuve;
  }
  if (key === "parentIsole") {
    const disableParentIsole = shouldDisableParentIsole(key, parentsCount);
    return !disableParentIsole;
  }
  return true;
};
