import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { BrandVoucherDetailCard } from "../../components/cards";
// import { Container } from "reactstrap";
import Head from "./head";
import Content from "./content";
import { connect } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import Layout from '../../components/layout'
const VoucherDetails = (props) => {
  const { data } = props.location.state;
  console.log("data => ", data);
  const {
    getNewBar,
    isNewBar,
    getNewPromo,
    getOldPromo,
    newPromosData,
    oldPromosData,
    token,
    voucharDetails,
    getVoucherDetails
  } = props;

  // slug
  const { slug } = props.match.params
  // console.log(newPromosData, oldPromosData, "promos");
  useEffect(() => {
    const NewPromoData = new FormData();
    NewPromoData.append("action", "getVoucherCode");
    NewPromoData.append("id", data.id);
    getNewPromo(NewPromoData);
    const OldPromoData = new FormData();
    OldPromoData.append("action", "oldUserVouchers");
    OldPromoData.append("voucher_id", data.id);
    getOldPromo(OldPromoData);
    const VoucharDetails = new FormData();
    VoucharDetails.append("action", "getVoucherDetails");
    VoucharDetails.append("slug", slug);
    getVoucherDetails(VoucharDetails);
  }, []);
  console.log("vouchar details => ", voucharDetails);
  return (
    <Layout>
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column">
      <Head color="#567DF4" {...data} />
      <Content data={data} token={token} getNewBar={getNewBar} isNewBar={isNewBar} newPromosData={newPromosData} oldPromosData={oldPromosData} />
    </div>
    </Layout>
  );
};

const mapStateToProps = ({
  user: { isNewBar, newPromosData, oldPromosData , token, voucharDetails},
}) => ({
  isNewBar,
  newPromosData,
  oldPromosData,
  token,
  voucharDetails
});

const mapDispatchToProps = {
  getNewBar: userAction.getNewBar,
  getNewPromo: userAction.getNewPromo,
  getOldPromo: userAction.getOldPromo,
  getVoucherDetails: userAction.getVoucherDetails,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(VoucherDetails));
