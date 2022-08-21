import React from "react";
import { Col, Row } from "react-bootstrap";
import "../App.css";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Home = () => {
  return (
    <Row className="centerDiv">
      <Col xl={4} lg={6} md={12} xs={12} style={{ marginTop: "2rem" }}>
        <LeftSide />
      </Col>
      <Col xl={8} lg={6} md={12} xs={12} style={{ marginTop: "2rem" }}>
        <RightSide />
      </Col>
    </Row>
  );
};

export default Home;
