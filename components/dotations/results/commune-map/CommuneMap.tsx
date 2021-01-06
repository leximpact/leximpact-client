import { PureComponent } from "react";
import { Map, GeoJSON } from "react-leaflet";

import { Card } from "../../../common";
import { JS_todo } from "./geoData2020";
//+ style in : leaflet@1.7.1/dist/leaflet.css


export class CommuneMap extends PureComponent {
  state = {
    contours: JS_todo,
    latitude: 46.5,
    longitude: -1.8,
    zoom: 6,
  }

  filter(feature) {
    return feature.properties.type === "commune";
  }

  render() {
    return (
      <Card
        content1={(
          <Map
            center={[this.state.latitude, this.state.longitude]}
            zoom={this.state.zoom}
            style={{width: '100%'}}>

              <GeoJSON
                key='my-geojson'
                data={this.state.contours}
                filter={this.filter}
                style={{
                    color: "#ffffff", 
                    fillOpacity: 0, 
                    interactive: false, 
                    opacity: 1, 
                    weight: 1.5,
                  }}
              />

          </Map>
        )}
        title="Proportion des communes nouvellement éligibles et non-éligibles" />
    );
  }
}
