import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import RefreshIcon from "@material-ui/icons/Refresh";
import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { resetAmendementToBase, resetAmendementToPlf } from "../../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../redux/reducers";
// eslint-disable-next-line no-unused-vars
import { ParametersState } from "../../../../redux/reducers/parameters";
import styles from "./ArticleHeader.module.scss";

type Props = {
  topic: keyof ParametersState;
}

const mapStateToProps = ({ parameters }: RootState) => ({ displayPLF: !!parameters.plf });

const mapDispatchToProps = (dispatch, ownProps: Props) => ({
  resetAmendementToBase: () => dispatch(resetAmendementToBase(ownProps.topic)),
  resetAmendementToPlf: () => dispatch(resetAmendementToPlf(ownProps.topic)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

class ArticleHeader extends PureComponent<ConnectedProps<typeof connector> & Props> {
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
    // eslint-disable-next-line react/destructuring-assignment
    this.props.resetAmendementToPlf();
    this.setState({ anchorEl: null });
  };

  handleClickBase = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.resetAmendementToBase();
    this.setState({ anchorEl: null });
  };


  render() {
    const { displayPLF } = this.props;
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
          <div className={styles.stylePaperTitreMenu}>
            <span>
              Réinitialiser mon amendement
              <br />
              {" "}
                    avec les paramètres du&nbsp;:
            </span>
          </div>
          {
            displayPLF
              ? (
                <MenuItem
                  className={styles.menuItemPaper}
                  onClick={this.handleClickPlf}>
                  <span>-</span>
                  <span className={styles.plf}>PLF</span>
                </MenuItem>
              )
              : null
          }

          <MenuItem
            className={styles.menuItemPaper}
            onClick={this.handleClickBase}>
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

export default connector(ArticleHeader);
