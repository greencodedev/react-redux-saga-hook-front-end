import React, { Fragment } from "react";
import Layout from "../components/layout";
import {
  Home,
  Login,
  SignUp,
  VoucherDetails,
  Invoice,
  Upload,
  Raffles,
  PackageDetail,
  Packages,
  BookingDetails,
  Settings,
  Notifications,
  Changepassword,
  Orderhistory,
  Editprofile,
} from "../pages";
import ViewAll from "../pages/home/destinations/viewAll";
import { Switch, Route, BrowserRouter as Router, useLocation } from "react-router-dom";
import NearbyVouchers from "../pages/home/destinations/nearby-vouchers";

const Routes = () => {
  const location = useLocation();
  const { pathname } = location;

  const MainLayout = pathname.includes("login") | pathname.includes("sign-up") ? Fragment : Layout;
  return (
    <>
      {/* <MainLayout> */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-up" component={SignUp} />
      {/* <Route exact path="/voucher-details" component={VoucherDetails} /> */}
      <Route exact path="/destination/:slug/v/:slug" component={VoucherDetails} />
      {/* <Route exact path="/invoics" component={Invoice} /> */}
      <Route exact path="/upload" component={Upload} />
      <Route exact path="/raffles" component={Raffles} />
      <Route exact path="/destination/:slug/p/:slug" component={PackageDetail} />
      {/* <Route exact path="/package-details" component={PackageDetail} /> */}
      <Route exact path="/view-all-destination" component={ViewAll} />
      <Route exact path="/destination/:slug" component={Packages} />
      {/* <Route exact path="/destination-packages" component={Packages} /> */}
      <Route exact path="/booking-details" component={BookingDetails} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/vouchers" component={NearbyVouchers} />
      <Route exact path="/notifications" component={Notifications} />
      <Route exact path="/change-password" component={Changepassword} />
      {/* <Route exact path="/invoics" component={Orderhistory} /> */}
      <Route exact path="/order/:number" component={Orderhistory} />
      <Route exact path="/edit-profile" component={Editprofile} />

      {/* </MainLayout> */}
    </>
  );
};

export default () => (
  <Router>
    <Switch>
      <Routes />
    </Switch>
  </Router>
);
