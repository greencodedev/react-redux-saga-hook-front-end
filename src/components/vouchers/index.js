import React from "react";
import { Container, Row, Col } from "reactstrap";
import { VoucherCard } from "../cards";
import mockData from "./mockData";
import cx from "classnames";

const Vouchers = () => (
  <section className="py-3">
    <Container>
      <h3 className="s-title d-md-none">Vouchers</h3>
      <Row className="voucher-row flex-nowrap overflow-auto theme-md-scroll pb-2">
        {mockData.map((data, index) => (
          <Col key={index} className={cx({ "pl-0": index === 0 })}>
            <VoucherCard
              className={cx("h-100", { "bg-purple-light": index % 2 !== 0 })}
              key={index}
              {...data}
            />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Vouchers;
