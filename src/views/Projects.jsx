import React from "react";
import kokopeliCover from "../img/kokopeliCover.jpg";
import Kokopeli from "../projects/Kokopeli.png";
import larvottoCover from "../img/LarvottoCover.jpg";
import Larvotto from "../projects/Larvotto.png";
import { Container, Row, Col } from "reactstrap";

const Projects = () => {
  return (
    <Container>
      <Row>
        <Col md={1} />
        <Col md={4} className="text-center">
          <div className="thumbnail">
            <a href={Kokopeli} target="_blank">
              <img
                src={kokopeliCover}
                alt="Kokopeli"
                style={{ width: "100%" }}
              />
              <div className="caption">
                <p>8 Shum Wan Road</p>
              </div>
            </a>
          </div>
        </Col>
        <Col md={2} />
        <Col md={4} className="text-center">
          <div className="thumbnail">
            <a href={Larvotto} target="_blank">
              <img
                src={larvottoCover}
                alt="Larvotto"
                style={{ width: "100%" }}
              />
              <div className="caption">
                <p>8 Ap Lei Chau Praya Road</p>
              </div>
            </a>
          </div>
        </Col>
        <Col md={1} />
      </Row>
    </Container>
  );
};

export { Projects };
