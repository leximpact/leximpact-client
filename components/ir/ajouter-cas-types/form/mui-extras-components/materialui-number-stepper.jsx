import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import styles from "./materialui-number-stepper.module.scss";

class MUINumberStepper extends PureComponent {
  removeStepHandler = () => {
    const { min, onChange, value } = this.props;
    let nextStep = Number(value) - 1;
    if (nextStep <= min) nextStep = min;
    onChange(nextStep);
  };

  addStepHandler = () => {
    const { max, onChange, value } = this.props;
    let nextStep = Number(value) + 1;
    if (nextStep >= max) nextStep = max;
    onChange(nextStep);
  };

  handleInputChange = (evt) => {
    const { value } = evt.target;
    const { max, min, onChange } = this.props;
    let nextStep = Number(value);
    if (nextStep <= min) nextStep = min;
    if (nextStep >= max) nextStep = max;
    onChange(nextStep);
  };

  render() {
    const {
      max, min, name, readOnly, value,
    } = this.props;
    const isMaxValue = value === max;
    const isMinValue = value === min;
    return (
      <div>
        <div>
          <IconButton
            disableRipple
            aria-label="Ajouter"
            className={styles.button}
            disabled={isMaxValue}
            onClick={this.addStepHandler}>
            <KeyboardArrowUpIcon fontSize="small" />
          </IconButton>
        </div>
        <div>
          <input
            className={`mui-number-stepper ${styles.input}`}
            name={name}
            readOnly={readOnly}
            type="number"
            value={value}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <IconButton
            disableRipple
            aria-label="Supprimer"
            className={styles.button}
            disabled={isMinValue}
            onClick={this.removeStepHandler}>
            <KeyboardArrowDownIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    );
  }
}

MUINumberStepper.defaultProps = {
  max: Infinity,
  min: -Infinity,
  readOnly: false,
};

MUINumberStepper.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  value: PropTypes.number.isRequired,
};

export default MUINumberStepper;
