import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import SimpleCard from "./simple-card";
// import CarteEtat from "./carte-etat";

class ImpactComponent extends PureComponent {
  handleClick = () => {
    // const { onSimPopClick } = this.props;
    // onSimPopClick(e);
    // click sim popuplation
  };

  render() {
    // include should be false to remove the graph of recettes
    // const includepopulation = false;
    const {
      casTypes,
      changeRevenuHandler,
      handleOutreMerChange,
      resBrut,
      // totalPop,
    } = this.props;
    return (
      <Grid container spacing={24}>
        {casTypes.map((casType, i) => {
          const itemKey = `react::simple-card-key-index::${i}`;
          return (
            <Grid key={itemKey} item lg={4} md={6} sm={12} xl={3} xs={6}>
              <SimpleCard
                descCasType={casType}
                impotsApres={resBrut.apres[i]}
                impotsAvant={resBrut.avant[i]}
                index={i}
                onChange={changeRevenuHandler}
                onOutreMerChange={handleOutreMerChange}
              />
            </Grid>
          );
        })}
        {/* <Grid item key="stateBudget" xs={12} sm={12} md={12} lg={12} xl={12}>
          {includepopulation ? (
            <CarteEtat resultat={totalPop} onClick={this.handleClick} />
          ) : (
            <div />
          )}
        </Grid> */}
      </Grid>
    );
  }
}

ImpactComponent.propTypes = {
  casTypes: PropTypes.arrayOf(
    PropTypes.shape({
      nombre_declarants: PropTypes.number,
      nombre_declarants_retraites: PropTypes.number,
      nombre_personnes_a_charge: PropTypes.number,
      outre_mer: PropTypes.number,
      revenu: PropTypes.number,
    }),
  ).isRequired,
  changeRevenuHandler: PropTypes.func.isRequired,
  // onSimPopClick: PropTypes.func.isRequired,
  handleOutreMerChange: PropTypes.func.isRequired,
  resBrut: PropTypes.shape({
    apres: PropTypes.shape(),
    avant: PropTypes.shape(),
    wprm: PropTypes.shape(),
  }).isRequired,
  totalPop: PropTypes.shape({
    deciles: PropTypes.arrayOf(PropTypes.shape()),
    total: PropTypes.shape(),
  }).isRequired,
};

export default ImpactComponent;