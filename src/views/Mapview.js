import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import mapboxgl from "mapbox-gl";

class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoieW91c3NlZmFpdGFsaSIsImEiOiJjaXJjYnI1NmswMDdraWZubnN3Ymd1dDl2In0.Vo5ZP-QVh0rs1bIk8Dm-gw";
    this.map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [-6, 29], // starting position [lng, lat]
      zoom: 4 // starting zoom
    });
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>Spatial distribution</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  ></div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Map;
