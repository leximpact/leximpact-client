import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import classNames from "classnames";
import { PureComponent } from "react";

import styles from "./Card.module.scss";

interface Props {
  colored?: boolean;
  icon?: JSX.Element;
  title: string;
  subTitle?: string;
  onClose?: () => void;
  onEdit?: () => void;
  content1?: JSX.Element;
  content2?: JSX.Element | null;
  content3?: JSX.Element | null;
}

export class Card extends PureComponent<Props> {
  render() {
    const {
      children, colored, content1, content2, content3, icon, onClose, onEdit, subTitle, title,
    } = this.props;
    return (
      <div className={styles.card}>
        <div className={classNames({
          [styles.header]: true,
          [styles.colored]: !!colored,
        })}>
          {icon && <div className={styles.icon}>{icon}</div>}
          <div className={styles.titles}>
            <div className={styles.title}>
              {title}
            </div>
            {subTitle && (
              <div className={styles.subTitle}>
                {subTitle}
              </div>
            )}
          </div>
          <div className={styles.buttons}>
            {onEdit && <EditIcon fontSize="small" onClick={onEdit} />}
            {onClose && <CloseIcon fontSize="small" onClick={onClose} />}
          </div>
        </div>
        <div className={classNames({
          [styles.content1]: true,
          [styles.colored]: !!colored,
        })}>
          {content1 || children}
        </div>
        {content2 && <Divider />}
        {content2 && (
          <div className={styles.content2}>
            {content2}
          </div>
        )}
        {content3 && <Divider />}
        {content3 && (
          <div className={styles.content2}>
            {content3}
          </div>
        )}
      </div>
    );
  }
}
