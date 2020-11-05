import React, { useEffect } from "react";
import leftLineArrow from "../../assets/images/icons/line-arrow-left.svg";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import { Row, Col, Container } from "reactstrap";
import { RaffleTicketCard } from "../../components/cards";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
const Raffles = (props) => {
  const { invoice_id } = props.location.state;
  const { getRaffleByInvoice, raffleDataByInvoice } = props;
  const history = useHistory();
  useEffect(() => {
    const raffleData = new FormData();
    raffleData.append("action", "listRafflesByInvoice");
    raffleData.append("invoice_id", invoice_id);
    getRaffleByInvoice(raffleData);
  }, []);
  console.log(">>>>>>>>>>", raffleDataByInvoice);
  return (
    <Layout>
      <div className="py-4">
        <Container fluid>
          <h2 className="s-title mb-4">
            <Link to="/invoics">
              <img className="mr-20" src={leftLineArrow} alt="back"/>
              Raffles
            </Link>
          </h2>
          <Row className="justify-content-between">
            {
            raffleDataByInvoice.length > 0? 
              raffleDataByInvoice.map((data, index) => (
                <Col key={index} md={6} className="mb-20">
                  <RaffleTicketCard data={data} />
                </Col>
              )):
              <div style={{ textAlign: 'center', width: '100%', marginTop: '100px'  }}>
                <p className="mb-0">Your invoices are being moderated, Kindly please check back again</p>
              </div> 
            }
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ user: { raffleDataByInvoice } }) => ({
  raffleDataByInvoice,
});

const mapDispatchToProps = {
  getRaffleByInvoice: userAction.getRaffleByInvoice,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Raffles));
