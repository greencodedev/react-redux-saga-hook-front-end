import React, { useEffect} from "react";
import NotificationRow from "../../components/notificationRow";
import Sailor from "../../assets/images/icons/sailor.png";
import Ecstasy from "../../assets/images/icons/Ecstasy.png";
import Arong from "../../assets/images/icons/Arong.png";
import Wallnik from "../../assets/images/icons/Wallnik.png";
import Amazon from "../../assets/images/icons/Amazon.png";
import Hnm from "../../assets/images/icons/hnm.png";
import { createGlobalStyle } from "styled-components";
import { connect } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";

function Notifications(props) {
  const { notificationData, getNotifications } = props
  console.log(notificationData, 'notificationData')
  useEffect(() => {
      const data = new FormData()
      data.append( 'action', 'notifications' )
      getNotifications(data)
  }, [])
  return (
    <div className="notifications">
      <GlobalStyle />
      <div className="date">Today</div>
      <div className="notification_column">
        <NotificationRow
          img={Sailor}
          title="Sailor"
          text="We, added New Voucher for our new users using wallnik 10% OFF"
        />
        <NotificationRow
          img={Ecstasy}
          title="Get Reward"
          text="You earned 10 Points by purchase a product from Ecstasy"
        />
        <NotificationRow
          img={Arong}
          title="Arong"
          text="We, have 10% Instant Cashback now. Expires: May 10, 2020. Enjoy!"
        />
        <NotificationRow
          img={Wallnik}
          title="Wallnik"
          text="We, have 10% Instant Cashback now. Expires: May 10, 2020. Enjoy!"
        />
        <NotificationRow
          img={Amazon}
          title="Amazon"
          text="We, have 10% Instant Cashback now. Expires: May 10, 2020. Enjoy!"
        />
        <NotificationRow
          img={Hnm}
          title="Get Reward"
          text="You earned 10 Points by purchase a product from H&M"
        />{" "}
      </div>
    </div>
  );
}

const mapStateToProps = ({ user: { notificationData } }) => ({
  notificationData,
});

const mapDispatchToProps = {
  getNotifications: userAction.getNotifications,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Notifications));


const GlobalStyle = createGlobalStyle`
body #root{
    background: #f2f4f9;
}`;
