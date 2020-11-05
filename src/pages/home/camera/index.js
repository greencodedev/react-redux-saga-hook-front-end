import React from "react";
import { Container, Row, Col } from "reactstrap";
import { CameraUploadCard } from "../../../components/cards";

const Camera = () => (
  <section>
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <CameraUploadCard />
        </Col>
      </Row>
    </Container>
  </section>
);

export default Camera;
