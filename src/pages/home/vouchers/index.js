import React from "react";
import { Container, Row, Col } from "reactstrap";
import mockData from "./mockData";
import { BrandVoucherCard } from "../../../components/cards";

const Cards = (props) => {
  const { voucherData } = props.data;
  return (
    <Row>
      {voucherData?.slice(0, 4).map((data, index) => (
        <Col key={index} index={index} xs={6} sm={4} lg={3} className="mb-3">
          <BrandVoucherCard {...data} />
        </Col>
      ))}
    </Row>
  );
};

const Vouchers = (props) => {
  const { data } = props;
  return (
    <section className="pt-40">
      <Container>
        <div className="d-flex">
          <div className="flex-grow-1 mb-20">
            <h2 className="s-title mb-0">Offers near by</h2>
          </div>
          <div>
            <a href="#" className="see-all-btn">
              See All
            </a>
          </div>
        </div>
        <Cards data={data} />
      </Container>
    </section>
  );
};

export default Vouchers;
