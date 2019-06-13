import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Chip from "@material-ui/core/Chip"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import withMobileDialog from "@material-ui/core/withMobileDialog"
import { Icon, InlineIcon } from "@iconify/react"
import classicalBuilding from "@iconify/react/twemoji/classical-building"

const styles = theme => ({
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
    card:{
        maxWidth: 500,
    },
})

class RecettesCard extends React.Component {
    constructor(props) {
        super(props)
        this.updateStateRes = this.updateStateRes.bind(this)
    }

    updateStateRes(e) {
        this.props.onClick(e)
    }

    // bruts par an



    render() {
        const { classes,resultat} = this.props
        const delta=this.props.resultat.total.avant - this.props.resultat.total.apres
        return (
            <Card className={this.props.classes.card}>
                <CardContent>
                    <Icon icon={classicalBuilding} width="40" height="40" />
                    <Typography variant="body1">Recettes de l'État</Typography>

                    <div>
                        <Typography inline variant="h3" color="primary" gutterBottom>
                            {Math.round(this.props.resultat.total.avant / 100000000) / 10}
                        </Typography>
                        <Typography
                            inline
                            variant="h5"
                            className={
                                delta > -0.01
                                    ? this.props.classes.pom_verte
                                    : this.props.classes.pom_rouge
                            }
                            gutterBottom
                        >
                            {delta > -0.01 ? "+" : "-"}
                        </Typography>
                        <Typography inline variant="h3" color="secondary" gutterBottom>
                            {Math.round(Math.abs(delta / 100000000)) / 10}
                        </Typography>
                        <Typography inline variant="h5" color="secondary" gutterBottom>
                            Md€
                        </Typography>
                    </div>

                    Aaah, le 9e decile, son avant de {this.props.resultat.deciles[8].avant},
                    son après de {this.props.resultat.deciles[8].apres},
                    mais aussi son poids de {this.props.resultat.deciles[8].poids}

                    <div>
                        <Button variant="contained" color="secondary" onClick={this.updateStateRes}>
                            Lancer la simulation
                        </Button>
                    </div>
                </CardContent>
            </Card>
        )
    }
}

RecettesCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RecettesCard)
