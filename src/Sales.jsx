import React, { useState } from "react";
import Dropdown from "react-dropdown";
import { Row, Col, Container } from "react-bootstrap";
import "react-dropdown/style.css";
import { DisplaySales } from "./DisplaySales";
export const Sales = () => {
  const [Person, setPerson] = useState("Suleman Sha");
  const [Location, setLocation] = useState("Delhi");
  const Nameoptions = ["Ertulgul", "Bamsafe", "Nurgul", "Kurdoglu"];
  const Locationoption = ["Ardhapu", "Mumbai", "Pune"];
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <b>Select a Name</b>;
            <Dropdown
              options={Nameoptions}
              value={Nameoptions[0]}
              placeholder="Select an Name"
              onChange={(e) => setPerson(e.value)}
            />
          </Col>
          <Col>
            <b>Select a Location</b>;
            <Dropdown
              options={Locationoption}
              value={Locationoption[0]}
              placeholder="Select a location"
              onChange={(e) => setLocation(e.value)}
            />
          </Col>
        </Row>
        <b>
          <DisplaySales person={Person} and Location is location={Location} />
        </b>
      </Container>
    </div>
  );
};
