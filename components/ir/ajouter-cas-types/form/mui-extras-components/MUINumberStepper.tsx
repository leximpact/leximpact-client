import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { PureComponent } from "react";

import styles from "./MUINumberStepper.module.scss";

interface Props {
  max?: number;
  min?: number;
  name: string;
  onChange: Function;
  readOnly?: boolean;
  value: number;
}

export class MUINumberStepper extends PureComponent<Props> {
  getMin(): number {
    const { min } = this.props;
    return min ?? -Infinity;
  }

  getMax(): number {
    const { max } = this.props;
    return max ?? Infinity;
  }

  removeStepHandler = () => {
    const { onChange, value } = this.props;
    const min = this.getMin();

    let nextStep = Number(value) - 1;
    if (nextStep <= min) nextStep = min;
    onChange(nextStep);
  };

  addStepHandler = () => {
    const { onChange, value } = this.props;
    const max = this.getMax();

    let nextStep = Number(value) + 1;
    if (nextStep >= max) nextStep = max;
    onChange(nextStep);
  };

  handleInputChange = (evt) => {
    const { value } = evt.target;
    const { onChange } = this.props;
    const min = this.getMin();
    const max = this.getMax();

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
            readOnly={!!readOnly}
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
