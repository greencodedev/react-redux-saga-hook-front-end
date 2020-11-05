import React, { useEffect } from "react";
import OrderRow from "../../components/orderRow";
import { createGlobalStyle } from "styled-components";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import OrderHistoryIcon from "../../assets/images/icons/order_history.svg";
import Layout from '../../components/layout';
import Header from '../../components/Header';
function OrderHistory(props) {
  const {
    getOrderHistory,
    orderHistoryData,
    raffleStatData,
    getRaffleStats,
  } = props;
  useEffect(() => {
    const data = new FormData();
    data.append("action", "listInvocies");
    getOrderHistory(data);

    const raffleData = new FormData();
    raffleData.append("action", "getRaffleStats");
    getRaffleStats(raffleData);
  }, []);
  return (
    <Layout>
      <Header/>
      <GlobalStyle />
      <div className="order_history">
        <div style={{display: "none"}}>
          <div className="top_banner">
            <div className="banner_column">
              <p className="banner_large_text">{raffleStatData?.overall}</p>
              <span className="banner_small_text">Overall Raffles</span>
            </div>
            <div className="vertical_rule"></div>
            <div className="banner_column">
              <p className="banner_large_text">{raffleStatData?.today}</p>
              <span className="banner_small_text">Today Raffles</span>
            </div>
            <div className="vertical_rule"></div>
            <div className="banner_column">
              <p className="banner_large_text">
                AED {raffleStatData?.total_spend}
              </p>
              <span className="banner_small_text">Total Spent</span>
            </div>
          </div>
          <div className="banner_container">
            <img
              src={OrderHistoryIcon}
              className="banner_image"
              alt="Order History"
            />
          </div>
          <p className="banner_text">
            Upload Invoices to earn more Raffle Tickets
          </p>
        </div>
        <div className="order_container">
          {orderHistoryData?.map((data, index) => (
            <OrderRow
              data={data}
              name="Joe Doe"
              tickets="2"
              address="43 Street, San Francisco, California, United States"
              currency="AED"
              amount="900"
              dot_color="green"
              date="Apr 9, 2020"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
const mapStateToProps = ({ user: { orderHistoryData, raffleStatData } }) => ({
  orderHistoryData,
  raffleStatData,
});

const mapDispatchToProps = {
  getOrderHistory: userAction.getOrderHistory,
  getRaffleStats: userAction.getRaffleStats,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OrderHistory));

const GlobalStyle = createGlobalStyle`
body {
    background:#f2f4f9;
    #root
    {
    background-color: #f2f4f9;
}
}
`;
