import Button from "@material-ui/core/Button";
import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { updateParameter } from "../../../../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../../../redux/reducers";
import { ItemExpandablePanel, Values } from "../../../../../common";
import styles from "./MajorationMinorationPanel.module.scss";

interface Props {
  type: "majoration" | "minoration";
}

interface State {
  dsr: number;
  dsu: number;
}

const mapStateToProps = ({ parameters }: RootState) => ({
  plfDsr: parameters.plf.dotations.montants.dsr.variation,
  plfDsu: parameters.plf.dotations.montants.dsu.variation,
});

const mapDispatchToProps = dispatch => ({
  addVariations: (dsr: number, dsu: number) => {
    dispatch(updateParameter("dotations.montants.dsr.variation", dsr));
    dispatch(updateParameter("dotations.montants.dsu.variation", dsu));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class MajorationMinorationPanel extends PureComponent<PropsFromRedux & Props, State> {
  constructor(props: PropsFromRedux & Props) {
    super(props);
    this.state = {
      dsr: props.plfDsr,
      dsu: props.plfDsu,
    };
    this.changeDsr = this.changeDsr.bind(this);
    this.changeDsu = this.changeDsu.bind(this);
    this.add = this.add.bind(this);
  }

  changeDsr(dsr: number) {
    this.setState({ dsr });
  }

  changeDsu(dsu: number) {
    this.setState({ dsu });
  }

  add() {
    const { addVariations, type } = this.props;
    const { dsr, dsu } = this.state;
    if (type === "majoration") {
      addVariations(dsr, dsu);
    } else {
      addVariations(-dsr, -dsu);
    }
  }

  render() {
    const { type } = this.props;
    const { dsr, dsu } = this.state;
    return (
      <div>
        <br />
        <ItemExpandablePanel title={`Ajouter une ${type} DSU/DSR en 2021`}>
          <div className={styles.container}>
            <div>
              <div>
                {`${type === "majoration" ? "majorer" : "minorer"}
                la dotation de solidarité urbaine (DSU)`}
              </div>
              <div className={styles.values}>
                de
                {" "}
                <Values
                  editable
                  amendementInputSize="small"
                  amendementValue={dsu}
                  onAmendementChange={this.changeDsu}
                />
                {" "}
                millions d&apos;euros
              </div>
              <div>
                {`${type === "majoration" ? "majorer" : "minorer"}
                la dotation de solidarité rurale (DSR)`}
              </div>
              <div className={styles.values}>
                de
                {" "}
                <Values
                  editable
                  amendementInputSize="small"
                  amendementValue={dsr}
                  onAmendementChange={this.changeDsr}
                />
                {" "}
                millions d&apos;euros
              </div>
              <div className={styles.btn}>
                <Button color="primary" variant="contained" onClick={this.add}>Valider</Button>
              </div>
            </div>
          </div>
        </ItemExpandablePanel>
      </div>
    );
  }
}


const Component = connector(MajorationMinorationPanel);

export { Component as MajorationMinorationPanel };
