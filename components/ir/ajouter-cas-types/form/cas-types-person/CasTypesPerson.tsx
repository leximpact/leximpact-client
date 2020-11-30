import babyIcon from "@iconify/icons-twemoji/baby";
import manCurlyHaired from "@iconify/icons-twemoji/man-curly-haired";
import womanCurlyHaired from "@iconify/icons-twemoji/woman-curly-haired";
import { Icon } from "@iconify/react";
import { PureComponent } from "react";
import { Field } from "react-final-form";

import { MUINumberStepper } from "../mui-extras-components";
import styles from "./CasTypesPerson.module.scss";

interface Props {
  isChild?: boolean;
  max?: number;
  min?: number;
  name: string;
  onPersonAdd: (isChild: boolean) => void;
  onPersonRemove: (isChild: boolean) => void;
}

export class CasTypesPerson extends PureComponent<Props> {
  handlerInputChange = input => (nextValue) => {
    const { isChild, onPersonAdd, onPersonRemove } = this.props;

    const previousValue = input.value;
    const valueAreEquals = previousValue === nextValue;
    if (valueAreEquals) return;

    const shouldAddPerson = nextValue > previousValue;
    if (shouldAddPerson) onPersonAdd(!!isChild);
    else onPersonRemove(!!isChild);
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
              max={max ?? Infinity}
              min={min ?? 0}
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
