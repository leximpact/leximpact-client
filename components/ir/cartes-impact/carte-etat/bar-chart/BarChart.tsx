// Adapted from https://github.com/eipex2/nivo-cra/tree/master/src/
import { ResponsiveBar } from "@nivo/bar";
import { Fragment, PureComponent } from "react";

import styles from "./BarChart.module.scss";

interface Props {
  deciles: {
    apres?: number;
    avant: number;
    plf?: number;
    poids: number;
  }[];
}

export class BarChart extends PureComponent<Props> {
  reformatResultat = () => {
    const keycols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const { deciles } = this.props;
    const reduceValues = (acc, item, index) => {
      const value = Math.round(item / 10000000) / 100;
      return { ...acc, [keycols[index]]: value };
    };

    const result: any[] = [];

    const accResAvant = { color: "#ded500", id: "  " };
    const resavant = deciles
      .map(element => element.avant)
      .reduce(reduceValues, accResAvant);
    result.push(resavant);

    const showPLF = !deciles.find(element => typeof element.plf !== "number");
    if (showPLF) {
      const accResPLF = { color: "#ff6b6b", id: " " };
      const resplf = deciles
        .map(element => element.plf)
        .reduce(reduceValues, accResPLF);
      result.push(resplf);
    }

    const showAmendement = !deciles.find(element => typeof element.apres !== "number");
    if (showAmendement) {
      const accResApres = { color: "#00a3ff", id: "" };
      const resapres = deciles
        .map(element => element.apres)
        .reduce(reduceValues, accResApres);
      result.push(resapres);
    }

    return result.reverse();
  };

  render() {
    const { deciles } = this.props;
    const Image = ({ bars }) => {
      const size = 24;
      const images = bars.map(({
        height, key, width, x, y,
      }) => {
        const imageSize = width > 15 ? size : 0;
        const imagePosX = x + width / 2 - size / 2;
        const imagePosY = y + height / 2 - size / 2;
        const decileImageKey = key.substring(0, key.indexOf("."));
        const xlinkHref = `/static/images/decile${decileImageKey}.png`;
        return (
          <image
            key={key}
            height={imageSize}
            width={imageSize}
            x={imagePosX}
            xlinkHref={xlinkHref}
            y={imagePosY}
          />
        );
      });
      return <g>{images}</g>;
    };

    const keycols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const data = this.reformatResultat();
    return (
      <div className={styles.chart}>
        <ResponsiveBar
          animate
          enableGridX
          axisBottom={{
            legend: "Volume des recettes de l'IR en Md€",
            legendOffset: 41,
            legendPosition: "middle",
            tickPadding: 7,
            tickRotation: 0,
            tickSize: 5,
          }}
          axisRight={{ tickSize: 0 }}
          borderRadius={4}
          colorBy="index"
          colors={["#E0E0E0", "#E0E0E0", "#E0E0E0"]}
          data={data}
          defs={[]}
          enableGridY={false}
          fill={[]}
          innerPadding={3}
          keys={keycols}
          labelFormat={v => `${v}Md€`}
          labelSkipHeight={1000}
          labelSkipWidth={1000}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          layers={[
            "grid",
            "axes",
            "bars",
            Image,
            "markers",
            "legends",
          ] as any}
          layout="horizontal"
          legends={[]}
          margin={{
            bottom: 30,
            left: 6,
            right: 10,
            top: 20,
          }}
          motionDamping={15}
          motionStiffness={90}
          padding={0.05}
          theme={{
            axis: {
              ticks: {
                text: {
                  fill: "#B1B1B1",
                  fontFamily: "Lato",
                  fontSize: "0.7em",
                },
              },
            },
            tooltip: {
              container: {
                background: "#565656",
                color: "#ffffff",
                fontFamily: "Lato",
              },
            },
          }}
          tooltip={content => (
            <Fragment>
              {"Total"}
              {" "}
              <img
                alt="Deciles de la population"
                height="30"
                src={`/static/images/decile${content.id}.png`}
                width="30"
              />
              {`décile : ${Math.round(content.value * 10) / 10}Md€`}
              <br />
              {`${Math.round(
                (content.value * 1000000000) / deciles[content.id as number - 1].poids,
              )}€ par foyer fiscal`}
            </Fragment>
          )}
        />
      </div>
    );
  }
}
