import babyIcon from "@iconify/icons-twemoji/baby";
import manCurlyHaired from "@iconify/icons-twemoji/man-curly-haired";
import womanCurlyHaired from "@iconify/icons-twemoji/woman-curly-haired";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { PureComponent } from "react";
import { Field } from "react-final-form";

import styles from "./cas-types-person.module.scss";
import { MUINumberStepper } from "./mui-extras-components";

class CasTypesPerson extends PureComponent {
  handlerInputChange = input => (nextValue) => {
    const { isChild, onPersonAdd, onPersonRemove } = this.props;

    const previousValue = input.value;
    const valueAreEquals = previousValue === nextValue;
    if (valueAreEquals) return;

    const shouldAddPerson = nextValue > previousValue;
    if (shouldAddPerson) onPersonAdd(isChild);
    else onPersonRemove(isChild);
    input.onChange(nextValue);
  };

  render() {
    const {
      isChild, max, min, name,
    } = this.props;
    let icon = Math.random() < 0.5 ? manCurlyHaired : womanCurlyHaired;
    if (isChild) {
      icon = babyIcon;
    }
    return (
      <div className={styles.container}>
        <Field name={name}>
          {({ input }) => (
            <MUINumberStepper
              max={max}
              min={min}
              name={input.name}
              value={input.value}
              onChange={this.handlerInputChange(input)}
            />
          )}
        </Field>
        <div>
          <Icon height="48" icon={icon} width="48" />
        </div>
      </div>
    );
  }
}

CasTypesPerson.defaultProps = {
  isChild: false,
  max: Infinity,
  min: 0,
};

CasTypesPerson.propTypes = {
  isChild: PropTypes.bool,
  // label: PropTypes.string.isRequired,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  onPersonAdd: PropTypes.func.isRequired,
  onPersonRemove: PropTypes.func.isRequired,
};

export default CasTypesPerson;
