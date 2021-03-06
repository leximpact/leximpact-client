import CloseIcon from "@material-ui/icons/Close";
// eslint-disable-next-line no-unused-vars
import React, { PureComponent, ReactChild } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { hideInformationPanel } from "../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../redux/reducers";
import styles from "./InformationPanel.module.scss";

interface Props {
  children: ReactChild | ReactChild[];
  title: string;
  name: string;
}

const mapStateToProps = ({ display }: RootState, { name }: Props) => ({
  isVisible: display.currentInformationPanels.includes(name),
});

const mapDispatchToProps = (dispatch, { name }: Props) => ({
  onClose: () => dispatch(hideInformationPanel(name)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class InformationPanel extends PureComponent<PropsFromRedux & Props> {
  render() {
    const {
      children,
      isVisible,
      onClose,
      title,
    } = this.props;

    if (!isVisible) {
      return null;
    }

    return (
      <div className={styles.window}>
        <div className={styles.header}>
          <span>{title}</span>
          <CloseIcon className={styles.close} onClick={onClose} />
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    );
  }
}

const Component = connector(InformationPanel);

export { Component as InformationPanel };
