import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { createRef, PureComponent } from "react";

import styles from "./SecondaryExpandablePanel.module.scss";

interface Props {
  expanded?: boolean;
  subTitle?: string;
  title: string;
}

interface State {
  expanded: boolean;
  id: number;
  toScroll: boolean;
}

export class SecondaryExpandablePanel extends PureComponent<Props, State> {
  static lastId = 0;

  containerRef = createRef<HTMLDivElement>();

  constructor(props) {
    super(props);
    SecondaryExpandablePanel.lastId += 1;
    const { expanded } = this.props;
    this.state = {
      expanded: !!expanded,
      id: SecondaryExpandablePanel.lastId,
      toScroll: false,
    };
    this.onExpandedChange = this.onExpandedChange.bind(this);
  }

  componentDidUpdate() {
    const { toScroll } = this.state;
    if (toScroll && this.containerRef.current) {
      this.containerRef.current.scrollIntoView();
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ toScroll: false });
    }
  }

  onExpandedChange() {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded, toScroll: !expanded });
  }

  render() {
    const { children, subTitle, title } = this.props;
    const { expanded, id } = this.state;
    return (
      <div ref={this.containerRef} className={styles.container}>
        <div
          aria-controls={`secondary-panel${id}-content`}
          aria-disabled="false"
          aria-expanded={expanded}
          className={styles.header}
          id={`secondary-panel${id}-header`}
          role="button"
          tabIndex={0}
          onClick={this.onExpandedChange}
          onKeyDown={e => e.key === "Enter" && this.onExpandedChange()}>
          <div className={styles.text}>
            <span className={styles.title}>{title}</span>
            <span className={styles.subTitle}>
              {" "}
              -
              {" "}
              {subTitle}
            </span>
          </div>
          <div>
            <span aria-disabled="false" aria-hidden="true" className={styles.btn}>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </span>
          </div>
        </div>
        {expanded && (
          <div aria-labelledby={`secondary-panel${id}-header`} className={styles.content} id={`secondary-panel${id}-content`} role="region">
            {children}
          </div>
        )}
      </div>
    );
  }
}
