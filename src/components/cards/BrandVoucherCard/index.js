import React, { useEffect } from "react";
import styled from "styled-components";
import cx from "classnames";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { fade } from "../../../shared/style/style";
import { scrollToTop } from "../../../util";
import { getVoucherDetails } from "../../../actions/user-action-type";
import { connect } from "react-redux";
import * as userAction from "../../../actions/user-action-type";
import { withRouter } from "react-router-dom";

const BrandVoucherCard = (props) => {
  const history = useHistory();
  const {
    index = 0,
    type,
    amount,
    name,
    expiry_date,
    bg_color,
    textDark = false,
    img,
    id,
    getVoucherDetails,
    voucherData,
    voucherDetailStatus,
    url_slug,
    destination_slug
  } = props;
  const getDetails = () => {
    console.log("destination_slug => ", name.replaceAll(' ', '-'));
    history.push(`/destination/${destination_slug? destination_slug: url_slug}/v/${name.replaceAll(' ', '-')}`, {
      data: {
        type: type,
        amount: amount,
        name: name,
        image: img,
        id: id,
        expiry_date: expiry_date,
      },
    });
    // const data = new FormData()
    //   data.append( 'action', 'getVourcherDetails' )
    //   data.append( 'id', id )
    // getVoucherDetails(data)
  };

  // useEffect(() => {
  //   if (voucherDetailStatus === "success") {
  //     setTimeout(
  //       function () {
  //         history.push("voucher-details", { voucherData});
  //       }.bind(this),
  //       2000
  //     );
  //   }
  // }, [voucherDetailStatus]);
  return (
    <div
      className="BrandVoucherCard h-100 d-flex flex-column"
      onClick={() => {
        scrollToTop();
        getDetails();
        // history.push("/voucher-details");
      }}
    >
      <TopBox>
        <ImageBox style={{ backgroundColor: "#fff" }}>
          <img
            className="brand-logo"
            src={`https://spendwin-dev.xyz/files/${img}`}
            alt={"alt"}
          />
        </ImageBox>
        <p className="name">{name}</p>
        <p className="validTime">
          Valid till: <br />
          {moment(expiry_date).format("MMM-DD")}
        </p>
      </TopBox>
      <Bar style={{ backgroundColor: "#fff" }} />
      <BottomBox className={cx({ "text-white": !textDark })} style={{ backgroundColor: "#fff" }}>
        <p className="discount-per" style={{ color: "black" }}>
          {amount} {type}
        </p>
        <p className="discount" style={{ color: "black" }}>
          Discount
        </p>
      </BottomBox>
    </div>
  );
};

const mapStateToProps = ({ user: { voucherData, voucherDetailStatus } }) => ({
  voucherData,
  voucherDetailStatus,
});

const mapDispatchToProps = {
  getVoucherDetails: userAction.getVoucherDetails,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BrandVoucherCard));

const ImageBox = styled("div")`
  width: 34px;
  height: 34px;
  margin: 0 auto 4px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 40px;
    max-height: 40px;
  }
`;
const TopBox = styled("div")`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 19px 8px;
  text-align: center;
  box-shadow: 0 0 4px 0 #d7d7d7;
`;
const BottomBox = styled("div")`
  border-radius: 12px;
  padding: 18px 8px 12px;
  text-align: center;
  flex-grow: 1;
  box-shadow: 0 0 4px 0 #d7d7d7;
`;
const Bar = styled("div")`
  box-shadow: 0 0px 2px 0 #d7d7d7;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  height: 10px;
  background-color: #fff;
`;
