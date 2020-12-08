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
  max: number;
  min: number;
  value: number;
  onChange: (value: number) => void;
}

export class CasTypesPerson extends PureComponent<Props> {

  render() {
    const { isChild, max, min, onChange, value } = this.props;

    let icon = Math.random() < 0.5 ? manCurlyHaired : womanCurlyHaired;
    if (isChild) {
      icon = babyIcon;
    }

    return (
      <div className={styles.container}>
        <MUINumberStepper
          max={max}
          min={min}
          name="whatever"
          value={value}
          onChange={onChange}
        />
        <div>
          <Icon height="48" icon={icon} width="48" />
        </div>
      </div>
    );
  }
}
