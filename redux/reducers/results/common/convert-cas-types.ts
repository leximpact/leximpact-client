
// eslint-disable-next-line no-unused-vars
import { SimulateCasTypesSuccessAction } from "../../../actions";
// eslint-disable-next-line no-unused-vars
import { IRState } from "../interfaces";

export function convertCasTypes(serverData: SimulateCasTypesSuccessAction["data"], topic: "apres"|"plf"|"avant"): IRState["casTypes"] {
  return Object.keys(serverData.nbreParts[topic]).map(key => ({
    impotAnnuel: Math.abs(serverData.res_brut[topic][key]),
    parts: serverData.nbreParts[topic][key],
  }));
}
