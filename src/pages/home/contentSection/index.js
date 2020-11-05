import React from "react";
import { Container, Row, Col } from "reactstrap";
import { RaffelTickets, ScratchCard } from "../../../components/cards";
import survayImage from "../../../assets/images/survay.jpeg";

const ContentSection = () => (
  <section>
    <Container>
      <Row>
        <Col lg={3} className="mb-3">
          <RaffelTickets />
        </Col>
        <Col lg={6} className="mb-3">
          <h3 className="s-title">Survay</h3>
          <img className="w-100 mt-md-2" src={survayImage} alt="survay" />
        </Col>
        <Col lg={3} className="mb-3">
          <ScratchCard />
        </Col>
      </Row>
    </Container>
  </section>
);

export default ContentSection;
