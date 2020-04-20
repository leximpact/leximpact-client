import classNames from "classnames";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import { ReformTooltip, PlfTooltip } from "../../tooltips";
import NumberInput from "./NumberInput";
import styles from "./Parameter.module.scss";

function withTooltip(Tooltip, title, element) {
  if (title === null || title === undefined) {
    return element;
  }

  return (
    <Tooltip
      placement="bottom-start"
      title={title}>
      {element}
    </Tooltip>
  );
}

function formatNumber(number) {
  // Hack to support negative zeros.
  // Negative zeros should disappear in the future after cleaning up the application.
  if (number === 0) {
    return "0";
  }
  return number.toLocaleString();
}


class Parameter extends PureComponent {
  render() {
    const {
      editable, initialValue, onReformChange, plfTitle,
      plfValue, reformTitle, reformValue, size,
    } = this.props;
    const equal = initialValue === reformValue;

    return (
      <span className={styles.noOverflow}>
        {
          !equal && <span className={styles.initialValue}>{formatNumber(initialValue)}</span>
        }
        {
          plfValue !== null && withTooltip(
            PlfTooltip,
            plfTitle,
            <span className={styles.plfValue}>{formatNumber(plfValue)}</span>,
          )
        }
        {
          withTooltip(ReformTooltip, reformTitle, editable
            ? (
              <NumberInput
                className={classNames({
                  [styles.reformInput]: true,
                  [styles.reformValue]: true,
                  [styles.reformValueModified]: !equal,
                  [styles.smallInput]: size === "small",
                })}
                value={reformValue}
                onChange={onReformChange} />
            )
            : (
              <span className={classNames({
                [styles.reformValue]: true,
                [styles.reformValueModified]: !equal,
              })}>
                {formatNumber(reformValue)}
              </span>
            ))
        }
      </span>
    );
  }
}

Parameter.defaultProps = {
  reformTitle: null,
  editable: false,
  onReformChange: () => { },
  plfTitle: null,
  plfValue: null,
  size: "large",
};

Parameter.propTypes = {
  reformTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  reformValue: PropTypes.number.isRequired,
  editable: PropTypes.bool,
  initialValue: PropTypes.number.isRequired,
  onReformChange: PropTypes.func,
  plfTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  plfValue: PropTypes.number,
  size: PropTypes.oneOf(["small", "large"]),
};

export { Parameter };
