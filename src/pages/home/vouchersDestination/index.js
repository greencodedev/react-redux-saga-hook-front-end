import React from "react";
import { Container, Row, Col } from "reactstrap";
import mockData from "./mockData";
import { BrandVoucherCard } from "../../../components/cards";

const Cards = (props) => {
  const { voucherData, data } = props;
  console.log("voucherData =>", data);
  return (
    <Row className="justify-content-center">
      {voucherData?.data?.length > 0 ? (
        voucherData?.data?.map((data, index) => (
          <Col key={index} index={index} xs={6} sm={4} lg={3} className="mb-3">
            <BrandVoucherCard {...data} />
          </Col>
        ))
      ) : (
        <Col className="mb-3">
          <p>No Vouchers Available</p>
        </Col>
      )}
    </Row>
  );
};

const VouchersDestination = (props) => {
  const { data, voucherData } = props;
  return (
    <section className="pt-20">
      <Container>
        <div className="d-flex">
          <div className="flex-grow-1 mb-20">
            <h2 className="s-title mb-0">Offers you may like</h2>
          </div>
          {/* <div>
            <a href="#" className="see-all-btn">
              See All
            </a>
          </div> */}
        </div>
        <Cards data={data} voucherData={voucherData} />
      </Container>
    </section>
  );
};

export default VouchersDestination;
