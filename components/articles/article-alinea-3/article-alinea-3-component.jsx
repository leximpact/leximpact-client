import { Typography } from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import LexExpansionPanel from "../expandable-panels/expansion-panel";
import LexExpansionPanelDetails from "../expandable-panels/expansion-panel-details";
import LexExpansionPanelSummary from "../expandable-panels/expansion-panel-summary";

const styleExpansionpanel = {
  padding: "1px",
};

class ArticleAlinea3 extends PureComponent {
  render() {
    const {
      baseOutputInput,
      expandArticlePanelHandler,
      isPanelExpanded,
      style,
    } = this.props;
    return (
      <LexExpansionPanel
        square
        expanded={isPanelExpanded}
        style={style.Typography}
        onChange={expandArticlePanelHandler}>
        <LexExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          style={styleExpansionpanel}>
          <Typography color="inherit" variant="body2">
            3. Le montant de l&apos;impôt résultant de l&apos;application des
            dispositions précédentes est réduit de...
          </Typography>
        </LexExpansionPanelSummary>

        <LexExpansionPanelDetails style={styleExpansionpanel}>
          <Typography color="inherit" variant="body2">
            ...
            {baseOutputInput("plafond_qf.abat_dom.taux_GuadMarReu")}
            %, dans la limite de
            {baseOutputInput("plafond_qf.abat_dom.plaf_GuadMarReu")}
€ pour les
            contribuables domiciliés dans les départements de la Guadeloupe, de
            la Martinique et de la Réunion ; cette réduction est égale à
            {" "}
            {baseOutputInput("plafond_qf.abat_dom.taux_GuyMay")}
            %, dans la limite de
            {baseOutputInput("plafond_qf.abat_dom.plaf_GuyMay")}
            €, pour les contribuables domiciliés dans les départements de la
            Guyane et de Mayotte ;
          </Typography>
        </LexExpansionPanelDetails>
      </LexExpansionPanel>
    );
  }
}

ArticleAlinea3.propTypes = {
  baseOutputInput: PropTypes.func.isRequired,
  expandArticlePanelHandler: PropTypes.func.isRequired,
  isPanelExpanded: PropTypes.bool.isRequired,
  style: PropTypes.shape().isRequired,
};

export default ArticleAlinea3;
