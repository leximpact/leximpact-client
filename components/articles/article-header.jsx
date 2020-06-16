import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import RefreshIcon from "@material-ui/icons/Refresh";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import styles from "./article-header.module.scss";

const stylesTheme = () => ({
  menuItemPaper: {
    backgroundColor: "rgba(255, 255, 255, 1) !important",
    paddingBottom: "5px",
    paddingTop: "5px",
  },
  refreshIcon: {
    display: "flex",
    float: "right !important",
    marginLeft: "10px",
  },
  stylePaperTitreMenu: {
    backgroundColor: "rgba(255, 255, 255, 1) !important",
    fontFamily: "Lato",
    padding: "2px",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
});

class ArticleHeader extends PureComponent {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClickPlf = () => {
    const { resetVarArticle } = this.props;
    resetVarArticle();

    this.setState({ anchorEl: null });
  };

  handleClickExistant = () => {
    const { resetVarArticleExistant } = this.props;
    resetVarArticleExistant();

    this.setState({ anchorEl: null });
  };


  render() {
    const { classes, montrerPLF } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={styles.resetParams}>
        <Button
          aria-haspopup="true"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          color="secondary"
          size="small"
          onClick={this.handleClick}>
          Réinitialiser les paramètres
          <RefreshIcon className={styles.ml} color="secondary" />
        </Button>
        <Menu
          anchorEl={anchorEl}
          id="simple-menu"
          open={Boolean(anchorEl)}
          onClose={this.handleClose}>
          <div className={classes.stylePaperTitreMenu}>
            <span>
              Réinitialiser mon amendement
              <br />
              {" "}
                    avec les paramètres du&nbsp;:
            </span>
          </div>
          {
            montrerPLF
              ? (
                <MenuItem
                  className={classes.menuItemPaper}
                  onClick={this.handleClickPlf}>
                  <span>-</span>
                  <span className={styles.plf}>PLF</span>
                </MenuItem>
              )
              : null
          }

          <MenuItem
            className={classes.menuItemPaper}
            onClick={this.handleClickExistant}>
            <span>-</span>
            <span className={styles.initial}>
              code existant
            </span>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}
ArticleHeader.propTypes = {
  classes: PropTypes.shape().isRequired,
  montrerPLF: PropTypes.bool.isRequired,
  resetVarArticle: PropTypes.func.isRequired,
  resetVarArticleExistant: PropTypes.func.isRequired,
};

export default withStyles(stylesTheme, { withTheme: true })(ArticleHeader);
