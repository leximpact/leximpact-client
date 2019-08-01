/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    max-nested-callbacks: [2, { "max": 4 }],
    react/jsx-closing-bracket-location: [2, {
        "nonEmpty": false,
        "selfClosing": false
    }],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"]
    }],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }],
    camelcase: 0,
*/
import { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Icon } from "@iconify/react";
import classicalBuilding from "@iconify/icons-twemoji/classical-building";

const styles = () => ({
  // root: {
  // ...theme.mixins.gutters(),
  // paddingBottom: theme.spacing.unit * 2,
  // paddingTop: theme.spacing.unit * 2,
  // margin: `${theme.spacing.unit / 2}em auto`,
  // width: "25em",
  // },
  // card: {
  // minWidth: 275,
  // },

  // titre: {
  // fontSize: 11,
  // },
  // pos: {
  //    marginBottom: 12,
  // },

  pom_rouge: {
    color: "#FF0000",
  },
  pom_verte: {
    color: "#00FF00",
  },
  div: {
    padding: 7,
  },

  // button: {
  //      margin: theme.spacing.unit,
  // },

  iconEtat: {
    fontSize: "50px",
  },
});

class RecettesCard extends PureComponent {
  render() {
    const {
      classes, delta, impots_avant, onClick,
    } = this.props;
    return (
      <Card>
        <CardContent>
          <Icon icon={classicalBuilding} width="40" height="40" />
          <Typography variant="body1">Recettes de l&#39;État</Typography>

          <div>
            <Typography inline variant="h3" color="primary" gutterBottom>
              {Math.round(impots_avant / 100000000) / 10}
            </Typography>
            <Typography
              inline
              variant="h5"
              className={delta > -0.01 ? classes.pom_verte : classes.pom_rouge}
              gutterBottom>
              {delta > -0.01 ? "+" : "-"}
            </Typography>
            <Typography inline variant="h3" color="secondary" gutterBottom>
              {Math.round(Math.abs(delta / 100000000)) / 10}
            </Typography>
            <Typography inline variant="h5" color="secondary" gutterBottom>
              Md€
            </Typography>
          </div>

          <div>
            <Button variant="contained" color="secondary" onClick={onClick}>
              Lancer la simulation
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}

RecettesCard.propTypes = {
  delta: PropTypes.shape().isRequired,
  impots_avant: PropTypes.shape().isRequired,
  classes: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(RecettesCard);
